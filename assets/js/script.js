const hamburguer = document.querySelector('.hambuerguer')
const mobile_nav = document.querySelector('.mobile-nav')



function Abrir_Menu_Mobile() {
    mobile_nav.style.marginTop = '0'
}
function Fechar_Menu_Mobile() {
    mobile_nav.style.marginTop = '-110vh'
}


const InjetarTexo = document.querySelector('#injetar_texto').innerHTML =
   'Olá Meu nome é Cauê Atualmente sou estagiario em Front-End construindo paginas em Html Css e Javascript, tambem Administração de sites com o Wordpress,pretendo em especializar no React e Talvez em Node.js tambem tenho interesses na area mobile mais ainda não comecei os estudos nela '

const cards = [
    {img : 'assets/img/vscode-icons_file-type-html.png'},
    {img : 'assets/img/vscode-icons_file-type-css.png'},
    {img : 'assets/img/logos_javascript.png'},
    {img : 'assets/img/logos_bootstrap.png'},
    {img : 'assets/img/WordPress-logotype-wmark.png'}

]
for (i = 0; i < cards.length; i++){
    const container = document.querySelector('.container-inject').innerHTML += 
    `<img class='img-card' src='${cards[i].img}'>`
}