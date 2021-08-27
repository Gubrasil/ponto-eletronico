import React from 'react';
import firebase from '../config/firebase';


function AddEntrada() {

    const nomeEmpresa = "Mentoria Conquiste Sua Vaga"
    const nomeFuncionario = "Aluno da Mentoria Conquiste Sua Vaga"
    const db = firebase.firestore();
    const HoraEntrada = " ";
    const inicioIntervalohorahoraEntrada = "";
    const telefone = "";
    const horaSaida = "";
    const horasTrabalhadas = "";

      
    const data = new Date().toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  
    function registraEntrada() {
            db.collection('pontoEletronico').add({
                Empresa: nomeEmpresa,
                Funcionario: nomeFuncionario,
                data: data,
                Hora_entrada: HoraEntrada,
                Inicio_intervalo: inicioIntervalohorahoraEntrada,
                Fim_intervalo: telefone,
                Hora_saida: horaSaida,
                Horas_trabalhadas: horasTrabalhadas
            }).then(async() => {
                // setSucesso('S');
                // await CriaLogin();
            }).catch((erro) => {
                // setMensagem(erro);
                // setSucesso('N');
            })
        }  
  
    function registraSaida() {
      
    }
    
    return (<section>
      <div>
        <h1> {data} </h1>
      </div>
      <div className="text-center">
        <button onClick={registraEntrada} className="btn btn-primary" type="button">Entrada</button>
        <button onClick={registraSaida} className="btn btn-primary" type="button">Saida</button>
      </div>
    </section>
    )
  }
  
  export default AddEntrada;