import React from 'react';

function Footer() {
    var ano = new Date().getFullYear();

    return <section  id="footer">
        <div>
            <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://github.com/Gubrasil"><i className="fab fa-github fa-2x"></i></a></li>
                <li className="list-inline-item"><a href="mailto:gubrasil@gmail.com.br" target="_blank"><i className="fa fa-envelope fa-2x"></i></a></li>
            </ul>
        </div>
        <p>Desenvolvido por Gustavo Brasil - {ano}</p>

    </section>;
}

export default Footer;

