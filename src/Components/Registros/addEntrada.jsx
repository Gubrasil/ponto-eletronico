import React, { useState } from 'react';
import {Redirect}  from 'react-router-dom';

import firebase from '../../Config/firebase';


function AddEntrada() {

    const nomeEmpresa = "Mentoria Conquiste Sua Vaga"
    const nomeFuncionario = "Aluno da Mentoria Conquiste Sua Vaga"
    const db = firebase.firestore();
    const inicioIntervalohorahoraEntrada = "";
    const fimIntervalo = "";
    const horaSaida = "";
    const horasTrabalhadas = "";      
    const data = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
    })

    const HoraEntrada = new Date().toLocaleDateString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const [sucesso, setSucesso] = useState('N');
  
    function registraEntrada() {
            db.collection('pontoEletronico').add({
                Empresa: nomeEmpresa,
                Funcionario: nomeFuncionario,
                data: data,
                Hora_entrada: HoraEntrada,
                Inicio_intervalo: inicioIntervalohorahoraEntrada,
                Fim_intervalo: fimIntervalo,
                Hora_saida: horaSaida,
                Horas_trabalhadas: horasTrabalhadas
            }).then(async() => {
                 setSucesso('S');
                // await CriaLogin();
            }).catch((erro) => {
                // setMensagem(erro);
                 setSucesso('N');
            })
        }  
  
    function registraSaida() {
      
    }
    
    return (<section>
      <div className="text-center">
        <button onClick={registraEntrada} className="btn btn-primary" type="button">Entrada</button>
        {sucesso === 'S' ? <Redirect to='/' /> : null}
        {/* <button onClick={registraSaida} className="btn btn-primary" type="button">Saida</button> */}
      </div>
    </section>
    )
  }
  
  export default AddEntrada;