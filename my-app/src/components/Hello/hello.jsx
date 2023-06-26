import React from 'react';
import './hello.css'
import FotodePerfil from '../imagem/foto_perfil.jpg'
import { Octokit } from 'octokit'
import { TailSpin } from 'react-loader-spinner'
import { useEffect , useState } from 'react';

export default function Hello() {
   
    let [load,setload] = useState(false)
   
   const getCount = async () =>{
    const octokit = new Octokit({
        auth :'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'
       })
    setload(true)
    try {
        const response = await octokit.request("GET /user/repos", {
            per_page : 99,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            },
            
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
    setload(false)
   }
    return (
      <main>
        <section class="learn" id="learn">
            <h3>Oi eu sou <span class="destaque">Cauê Falcão</span>👋</h3>
            <h1>Dev Front-End</h1>
            <p>Crio sites com código limpo e responsável</p>
            <img class="img-logo-perfil" src={FotodePerfil} alt="minha_foto"/>
        </section>
        {load === true ? <TailSpin
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}/> : '' }
        
        <section class="info" id="sobre">
            <section class="div-info">
                <section class="img-info">
                    
                </section>
                <section class="numeros-info">
                    <h3>1</h3>
                    <button onClick={getCount}></button>
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