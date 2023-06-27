import React, { useState } from 'react';
import './index.css';
import logo from './Screenshot_1.png';
import './script.js';

export default function Header() {
  const [menuState, setMenuState] = useState('-1000px');

  const HandleMobileMenuDown = () => {
    setMenuState('0');
  };
  const HandleMobileMenuUp = () => {
    setMenuState('-1000px');
  };
  const marginTop = `${menuState}`;

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
        <section class="hamburguer" onClick={HandleMobileMenuDown} >
          <div class="line-ham"></div>
          <div class="line-ham"></div>
          <div class="line-ham"></div>
        </section>
        <button class="button-cnt"><a class="cnt-button" href="https://api.whatsapp.com/send?phone=5592993659949&text=Ol%C3%A1">Contato</a></button>
      </section>
      <section class="mobile-nav" style={{marginTop: `${marginTop}`}}>
        <button class="buttom-mobile" onClick={HandleMobileMenuUp} >X</button>
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
  );
}