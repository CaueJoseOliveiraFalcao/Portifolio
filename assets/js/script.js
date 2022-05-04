const hamburguer = document.querySelector('.hambuerguer')
const mobile_nav = document.querySelector('.mobile-nav')



function Abrir_Menu_Mobile() {
    mobile_nav.style.marginTop = '0'
}
function Fechar_Menu_Mobile() {
    mobile_nav.style.marginTop = '-100vh'
}


const InjetarTexo = document.querySelector('#injetar_texto').innerHTML =
   'Olá Meu nome é Cauê Atualmente sou estagiario em Front-End construindo paginas em Html Css e Javascript, tambem Administração de sites com o Wordpress,pretendo em especializar no React e Talvez em Node.js tambem tenho interesses na area mobile mais ainda não comecei os estudos nela '