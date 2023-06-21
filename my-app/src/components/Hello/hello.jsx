import React from 'react';
import './hello.css'
import FotodePerfil from '../imagem/foto_perfil.jpg'
import { Octokit } from 'octokit'
import axios from 'axios'

export default function Hello() {
    const ocktokit = new Octokit()
    const token = 'C@u3j0s3'
    const username = 'CaueJoseOliveiraFalcao'

    async function getReposityCont(){
        try {
            const { data : user} = await ocktokit.users.getByUsername({
                username : username
            })
        }

        const repositoryCont = user.public_repos
        console.log(`O usuário ${username} possui ${repositoryCount} repositórios.`);
    }

    return (
      <main>
        <section class="learn" id="learn">
            <h3>Oi eu sou <span class="destaque">Cauê Falcão</span>👋</h3>
            <h1>Estágiario em Front-End</h1>
            <p>Crio sites com código limpo e responsável</p>
            <img class="img-logo-perfil" src={FotodePerfil} alt="minha_foto"/>
        </section>
        <section class="info" id="sobre">
            <section class="div-info">
                <section class="img-info">
                    
                </section>
                <section class="numeros-info">
                    <h3>1</h3>
                    <p>Ano de Estudo na Área</p>
                </section>
                <section></section>
            </section>
            <section class="div-info">
                <section class="img-info">
                    
                </section>
                <section class="numeros-info">
                    <h3>49</h3>
                    <p>Repositorios de Estudo e Pratica</p>
                </section>
                <section></section>
            </section>
        </section>
      </main>
    );
  }