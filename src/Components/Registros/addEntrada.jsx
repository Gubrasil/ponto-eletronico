import React, { useState } from 'react';
import firebase from '../../Config/firebase';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Redirect } from 'react-router-dom';
import { registerLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';
import './addEntrada.css';


registerLocale('pt', pt);

function AddEntrada() {

  const nomeEmpresa = "Mentoria Conquiste Sua Vaga"
  const nomeFuncionario = "Aluno da Mentoria Conquiste Sua Vaga"
  const db = firebase.firestore();
  const inicioIntervalohorahoraEntrada = "";
  const fimIntervalo = "";
  const horaSaida = "";
  const horasTrabalhadas = "";
  const [startDate, setStartDate] = useState(new Date());
  const [sucesso, setSucesso] = useState('N');
  // const entrada = "N";


  // function selectedDate(date) {
  //   console.log(date.toLocaleDateString());
  //   console.log(date.toLocaleTimeString());
  // new Date().toLocaleTimeString()
  //   setStartDate(date);
  //   const parsedDate  = parseISO(date);
  //   const past = isAfter(parsedDate, new Date()); // true
  //   console.log(past);
  // }


  function verificaEntrada() {
    firebase.firestore().collection('pontoEletronico').get().then(async function (resultado) {
      await resultado.docs.forEach(function (doc) {
        console.log(doc.data().Funcionario);
        console.log(doc.data().Data);
      })

    })
  }


  function registraEntrada() {
    verificaEntrada();
    db.collection('pontoEletronico').add({
      Empresa: nomeEmpresa,
      Funcionario: nomeFuncionario,
      Data: startDate.toLocaleDateString(),
      Hora_entrada: startDate.toLocaleTimeString(),
      Inicio_intervalo: inicioIntervalohorahoraEntrada,
      Fim_intervalo: fimIntervalo,
      Hora_saida: horaSaida,
      Horas_trabalhadas: horasTrabalhadas
    }).then(async () => {
      setSucesso('S');
      console.log(setStartDate);
      // await CriaLogin();
    }).catch((erro) => {
      // setMensagem(erro);
      setSucesso('N');
    })
  }

  return (<section>
    <div className="input-container">
      <div className="row">
        <div>
          <label>Data</label>
          <DatePicker locale="pt" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
      </div>
      <div className="text-center">
        <button id="button-add" onClick={registraEntrada} className="btn btn-primary" type="button">Entrada</button>
        {sucesso === 'S' ? <Redirect to='/' /> : null}
        {/* <button onClick={registraSaida} className="btn btn-primary" type="button">Saida</button> */}
      </div>
    </div>
  </section>
  )
}

export default AddEntrada;