import React from 'react';
import './EuStyles.css'


export default function Eu() {
    const texto = `Olá, meu nome é Cauê. Atualmente, sou
    estagiário em Front-End, construindo páginas em HTML,
    CSS e Javascript. Também administro sites com o
    Wordpress. Pretendo me especializar em React e,
    talvez, em Node.js. Também tenho interesse na
    área mobile, mas ainda não comecei os estudos nessa área.`
    return (
      <div>
            <section class="sobre-min" id="sobre-min">
            <section class="fix">
                <h1 class="titulo-padrao">Quem Sou Eu?</h1>
            </section>
            <section class="sobre-min-div">
                <p id="injetar_texto">{texto}</p>
                <button class="button-cnt bnt-sobre">Contato</button>
            </section>
            </section>
      </div>
    );
  }