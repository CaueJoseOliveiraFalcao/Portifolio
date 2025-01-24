const hamburguer = document.querySelector('.hambuerguer')
const mobile_nav = document.querySelector('.mobile-nav')



function Abrir_Menu_Mobile() {
    mobile_nav.style.marginTop = '0'
}
function Fechar_Menu_Mobile() {
    mobile_nav.style.marginTop = '-110vh'
}


const InjetarTexo = document.querySelector('#injetar_texto').innerHTML =
   'Sou um desenvolvedor com experiência prática e foco em criar soluções eficientes para a web. Meu aprendizado veio principalmente de projetos reais, onde pude aprimorar minhas habilidades e enfrentar desafios do mundo da tecnologia. Tenho conhecimento em desenvolvimento backend e frontend, além de experiência com infraestrutura de servidores e cloud computing. Busco sempre expandir meu conhecimento e aplicar as melhores práticas para garantir desempenho, segurança e escalabilidade nos projetos em que trabalho.'

const cards = [
    {img : 'assets/img/laravel.png'},
    {img : 'assets/img/linux.png'},
    {img : 'assets/img/mysql.png'},
    {img : 'assets/img/next.jpeg'},

]
for (i = 0; i < cards.length; i++){
    const container = document.querySelector('.container-inject').innerHTML += 
    `<img class='img-card' src='${cards[i].img}'>`
}

