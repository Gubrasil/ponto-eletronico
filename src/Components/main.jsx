import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom';
import ListarPonto from './ListarPonto/listarPonto';
import AddEntrada from './Registros/addEntrada';


import firebase from '../Config/firebase';
import 'firebase/firestore';

// import SweetAlert from 'react-bootstrap-sweetalert';

function Main() {

  const [ponto, setPonto] = useState([]);
  const [busca, setBusca] = useState('');
  const [texto, setTexto] = useState('');
  const [Funcionario, setFuncionario] = useState('');


  //   const [confirmacao, setConfirmacao] = useState(false);
  //   const [confirmacaoId, setConfirmacaoId] = useState('');


  useEffect(function () {
    let listaPonto = [];

    firebase.firestore().collection('pontoEletronico').get().then(async function (resultado) {
      await resultado.docs.forEach(function (doc) {
        if (doc.data().Funcionario.indexOf(busca) >= 0) {
          listaPonto.push({
            id: doc.id,
            Empresa: doc.data().Empresa,
            Funcionario: doc.data().Funcionario,
            Data: doc.data().Data,
            Hora_entrada: doc.data().Hora_entrada,
            Inicio_intervalo: doc.data().Inicio_intervalo,
            Fim_intervalo: doc.data().Fim_intervalo,
            Hora_saida: doc.data().Hora_saida
          });
        }
      })

      setPonto(listaPonto);
    })
  }, [busca]);

  return <div>
    <div className="container-fluid titulo">
      <h1>Ponto de Funcionário</h1>
      <div className="row">
        
        <div className="col-8">
         
        </div>
        <div className="col-4">
          <label htmlFor="exampleInputEmail1" className="form-label">Digite seu nome</label>
          <input onChange={(e) => setFuncionario(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="row">
        <div className="col-4" >
          <div className="input-group mb-3">
            <input onChange={(e) => setTexto(e.target.value)} type="text" className="form-control" placeholder="Pesquisar por nome" aria-describedby="button-addon2" />
            <button onClick={(e) => setBusca(texto)} className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i> Pesquisar</button>
          </div>
        </div>
        <AddEntrada />


      </div>
      <ListarPonto arrayPonto={ponto} />

    </div>
  </div>
}

export default Main;