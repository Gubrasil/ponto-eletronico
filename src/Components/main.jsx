import React from 'react';
import '../Pages/home.css'

function Main() {

   const data = new Date().toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

    //   function (grava data/hora entrada)

    //   funcition (grava hora/saida)

    return (<section>
        <div>
        <h1> {data} </h1>
        </div>
        </section>
        )
}

export default Main;