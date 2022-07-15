import React, { Component } from 'react';
import './index.css'
import logo from './Screenshot_1.png';
import './script.js'
export default class Header extends Component {
    constructor(){
        super();
        this.hamburguer = document.querySelector('.hambuerguer')
        this.mobile_nav = document.querySelector('.mobile-nav')
    }
    


    Abrir_Menu_Mobile() {
        this.mobile_nav.style.marginTop = '0'
    }
    Fechar_Menu_Mobile() {
        this.mobile_nav.style.marginTop = '-110vh'
    }


    render() {

        return (
            <section>
                <section className='fix-display'>
                    <img src={logo} class="img-logo" alt="logo" />
                    <nav class="nav-desktop">
                        <ul>
                            <li><a class="remove-links" href="#learn" >Home</a></li>
                        </ul>
                        <ul>
                            <li><a class="remove-links" href="#sobre">Sobre</a></li>
                        </ul>
                        <ul>
                            <li><a class="remove-links" href="#habilidades">Skills</a></li>
                        </ul>
                        <ul>
                            <li><a class="remove-links" href="#projetos">Projetos</a></li>
                        </ul>
                    </nav>
                    <section class="hamburguer" onClick={this.Abrir_Menu_Mobile.bind(this)}>
                        <div class="line-ham"></div>
                        <div class="line-ham"></div>
                        <div class="line-ham"></div>
                    </section>
                    <button class="button-cnt"><a class="remove-links" href="https://api.whatsapp.com/send?phone=5592993659949&text=Ol%C3%A1">Contato</a></button>
                </section>
                <section class="mobile-nav">
                    <button class="buttom-mobile" onClick={this.Fechar_Menu_Mobile.bind(this)}>X</button>
                    <ul>
                        <li>Home</li>
                    </ul>
                    <ul>
                        <li>Sobre</li>
                    </ul>
                    <ul>
                        <li>Skills</li>
                    </ul>
                    <ul>
                        <li>Contato</li>
                    </ul>
                    <button class="button-cnt">Contato</button>
                </section>
            </section>
        )
    }
}