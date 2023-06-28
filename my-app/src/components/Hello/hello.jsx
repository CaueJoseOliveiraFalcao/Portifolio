import React from 'react';
import './hello.css'
import FotodePerfil from '../../imagem/foto_perfil.jpg'
import { Octokit } from 'octokit'
import { TailSpin } from 'react-loader-spinner'
import { useEffect , useState } from 'react';

export default function Hello() {
   
    let [load,setload] = useState(false)
    const [repositoryNumber , setRepository] = useState(0)
   
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
        setRepository(response.data.length)
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
    setload(false)
   }
   useEffect(() => {
    getCount()
   }, [])
    return (
      <main>
        <section class="learn" id="learn">
            <h3>Oi eu sou <span class="destaque">Cauê Falcão</span>👋</h3>
            <h1>Dev Front-End</h1>
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
                <section class="numeros-info ponteir">
                <a href="https://github.com/CaueJoseOliveiraFalcao" target='_blank' className='GithubLinkContainer'>
                    {load === true ? <TailSpin
                        type="TailSpin"
                        color="yellow"
                        height={80}
                        width={80}/> : <h3>{repositoryNumber}</h3> }
                        <div className='container_egg'>
                            <p className='egg'>Atualizado Dinamicamente pela api do Github!</p>
                        </div>
                        <p>Repositorios de Projetos e Estudos</p>
                </a>
                </section>
                <section></section>
            </section>
        </section>
      </main>
    );
  }