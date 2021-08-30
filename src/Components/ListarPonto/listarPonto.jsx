import React from 'react';
// import {Link} from 'react-router-dom';
// import './listacliente.css';

function ListarPonto(props){
    
    return <table className="table table-hover table-bordered">
            <thead>
            <tr className="table-secondary">
                <th scope="col">Funcionário</th>
                <th scope="col">Data</th>
                <th scope="col">Hora Entrada</th>
                <th scope="col">Inicio intervalo</th>
                <th scope="col">Fim intervalo</th>
                <th scope="col">Hora Saída</th>
                {/* <th scope="col" className="col-acao"></th> */}
            </tr>
            </thead>
            <tbody>

            {
                props.arrayPonto.map((ponto) => {
                    return <tr key={ponto.id}>
                    <th scope="row">{ponto.Funcionario}</th>
                    <td>{ponto.Data}</td>
                    <td>{ponto.Hora_entrada}</td>
                    <td>{ponto.Inicio_intervalo}</td>
                    <td>{ponto.Fim_intervalo}</td>
                    <td>{ponto.Hora_saida}</td>
                    {/* <td>
                        <Link to={'/app/editarcliente/' + cliente.id}><i className="fas fa-edit icone-acao"></i></Link>
                        <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className="far fa-trash-alt icone-acao red"></i></Link>
                    </td> */}
                </tr>
                })
            }
                       
            
            </tbody>
        </table>
}

export default ListarPonto;