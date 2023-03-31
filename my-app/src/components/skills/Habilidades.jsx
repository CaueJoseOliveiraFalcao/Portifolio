import React, { useState } from 'react';
import './Habili.css'
import html from '../imagem/vscode-icons_file-type-html.png'
import css from '../imagem/vscode-icons_file-type-css.png'
import js from '../imagem/logos_javascript.png'
import boot from '../imagem/logos_bootstrap.png'
import Word from '../imagem/WordPress-logotype-wmark.png'
import jquery from '../imagem/jquery-logo.png'


export default function Habilidades() {
    const cards = [
        {img : html},
        {img : css},
        {img : js},
        {img : boot},
        {img : Word},
        {img : jquery}
    ]
    
    
    return (
      <div>
        <section class="habilidades" id="habilidades">
            <section class="fix">
                <h1 class="titulo-padrao">Minhas Habilidades</h1>
            </section>
            <section class="row mt-5">
                <section class="col-md-6 habilidades-info">
                    <h1>Quais são as minhas habilidades?</h1>
                    <p>Eu aprendi minhas habilidades em sua maioria com muita prática
                        e projetos reais, também cursos e formações completos pela W3school
                        e a formação em Front end de 130hrs da Alura👋                        
                    </p>
                </section>
                <section class="col-md-6 d-flex justify-content-md-center">
                    <section class="container-inject">
                        {cards.map(card => (
                            <img class='img-card' src={card.img}/>
                        ))}
                    </section>
                </section>
            </section>
        </section>
      </div>
    );
  }