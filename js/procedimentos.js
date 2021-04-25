// Mudar header de acordo com o scroll

window.addEventListener('scroll', function() {
    let cabeçalho = document.querySelector('header');
    let scrollPosicao = window.scrollY > 0;
    cabeçalho.classList.toggle('cabecalho-scroll', scrollPosicao);
})

// O botão de cancelar aparecer somente com o foco no input

const cancelarBotão = document.querySelector('.cancelar-texto');

function exibirBotãoCancelar() {
    cancelarBotão.classList.add("mostrar-cancelar");
    cancelarBotão.classList.remove("não-mostrar-cancelar");
}

/* Animação da barra de pesquisa */

const searchBtn = document.querySelector('.botao-pesquisar');
const searchBox = document.querySelector('#caixa-de-pesquisa');
let pesquisarBotão = false;

searchBtn.onclick = () => {
    if(pesquisarBotão ==  false) {
        searchBox.classList.add("active");

        pesquisarBotão = true;
    }
    else {
        searchBox.classList.remove("active");

        cancelarBotão.classList.add("não-mostrar-cancelar");
        cancelarBotão.classList.remove("mostrar-cancelar");

        pesquisarBotão = false;
    }
    
}

// Animação da seta do usuário

document.querySelector('.usuario-conta').onmouseover = function() { SobrePerfil(); };
document.querySelector('.usuario-conta').onmouseout = function() { ForaPerfil(); };

const seta = document.querySelector('.seta');

function SobrePerfil() {
    seta.classList.add("girar");
}

function ForaPerfil() {
    seta.classList.remove("girar");
}

// Mostrar navegação (Responsividade de 1145px)
var navegar = false;
var menu = false;

document.querySelector('.navegar-menu').onmouseout = function() { mudarValorNavegacaoFalse(); };
document.querySelector('.navegar-menu').onmouseover = function() { mudarValorNavegacaoTrue(); };
document.querySelector('.menu-opcoes').onmouseover = function() { mudarValorMenuTrue() };
document.querySelector('.menu-opcoes').onmouseout = function() { mudarValorMenuFalse() }

const navegacao = document.querySelector('.menu-opcoes');

function verificarSeSaiu() {
    if(navegar == false && menu == false) {
       navegacao.classList.remove('mostrar');
    }
    else {
        navegacao.classList.add('mostrar');
    }
}

function mudarValorNavegacaoFalse() {
    navegar = false;

    if(menu == false) {
        navegacao.classList.add('mostrar');

        if(menu == false) {
            navegacao.classList.remove('mostrar');
        }
    }

    verificarSeSaiu();
}

function mudarValorNavegacaoTrue() {
    navegar = true;

    navegacao.classList.add('mostrar');
    verificarSeSaiu();
}

function mudarValorMenuTrue() {
    menu = true;

    navegacao.classList.add('mostrar');
    verificarSeSaiu();
}

function mudarValorMenuFalse() {
    menu = false;

    verificarSeSaiu();
}

// Mostrar barra de navegação lateral

const cabecalho = document.querySelector('header');
const barraBotao = document.querySelector('.barra');
const navMostrar = document.querySelector('.menu-opcoes');
var barraClique = false;

barraBotao.onclick = () => { 
    if(barraClique == false) {
        navMostrar.classList.add('mostrar-lateral');
        cabecalho.classList.add('barra-lateral-ativada');

        barraClique = true;
    }
    else {
        navMostrar.classList.remove('mostrar-lateral');
        cabecalho.classList.remove('barra-lateral-ativada');

        barraClique = false;
    }
}

// Exibição da barra de pesquisa 

const setaBarraDePesquisa = document.querySelector('#pesquisar-seta');
const secaoUsuario = document.querySelector('.secao-usuario');
const pesquisarBotaoMostrar = document.querySelector('.search-icon')
var pesquisaClique = false; 

pesquisarBotaoMostrar.onclick = () => {
    if(pesquisaClique == false) {
        secaoUsuario.classList.add('mostrar-barra-de-pesquisa');
        searchBox.classList.add('active');
        cabecalho.classList.add('barra-lateral-ativada');

        pesquisaClique = true;
    }
    else {
        secaoUsuario.classList.remove('mostrar-barra-de-pesquisa');
        cabecalho.classList.remove('barra-lateral-ativada');
        pesquisaClique = false;
    }
}

window.addEventListener('resize', function(){
	AlterouTamanhoDaJanela();
});

function AlterouTamanhoDaJanela() {
    var tamanhoDaJanela = window.innerWidth;

    if(tamanhoDaJanela > 820) {
        setaBarraDePesquisa.setAttribute("id", "pesquisar-seta");
        setaBarraDePesquisa.classList.remove('exibir-seta');
    } else if(pesquisaClique == true) {
        setaBarraDePesquisa.removeAttribute("id", "pesquisar-seta");
        setaBarraDePesquisa.classList.add('exibir-seta');
    }
}


// ---- Parte da lógica do Modal ---------- 

function mudarCorPlay(imagem, estilo, condicao) {
    if(condicao == true) {
        imagem.src = "./img/Elementos/play-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
    }
    else {
        imagem.src = "./img/Elementos/play-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// Abrir e fechar modal

function iniciaModal(modalID) {
    var modal = document.getElementById(modalID);

    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'sair') {
            modal.classList.remove('mostrar');
        }
    })
}