// O botão de cancelar aparecer somente com o foco no input

const cancelarBotão = document.querySelector('.cancelar-texto');

function exibirBotãoCancelar() {
    cancelarBotão.classList.add("mostrar-cancelar");
    cancelarBotão.classList.remove("não-mostrar-cancelar");
}

/* Animação da barra de pesquisa */

const searchBtn = document.querySelector('.botao-pesquisar');
const searchBox = document.querySelector('.pesquisa-caixa');
let pesquisarBotão = false;

searchBtn.onclick = () => {
    if(pesquisarBotão ==  false) {
        searchBox.classList.add("active");

        pesquisarBotão = true;
    }
    else {
        searchBox.classList.remove("active");

        pesquisarBotão = false;
    }
    
}

// Animação da seta do usuário

document.querySelector('.usuario-conta').onmouseover = function() { SobrePerfil() };
document.querySelector('.usuario-conta').onmouseout = function() { ForaPerfil() };

const seta = document.querySelector('.seta');

function SobrePerfil() {
    seta.classList.add("girar");
}

function ForaPerfil() {
    seta.classList.remove("girar");
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

// Assistir mais tarde 

function mudarCorMaisTarde(imagem, estilo, condicao, clique) {
    if(clique == false) {
        if(condicao == true) {
            imagem.src = "./img/Elementos/relogio-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
        }
        else {
            imagem.src = "./img/Elementos/relogio-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        } 
    }
   else {
        if(condicao == true) {
            imagem.src = "./img/Elementos/relogio-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        }
       else {
            imagem.src = "./img/Elementos/relogio-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
       }
   }
}

function clicouMaisTarde(imagem, estilo, clique) {
    if(clique == false){
        imagem.src = "./img/Elementos/relogio-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueMaisTarde == true) {
        imagem.src = "./img/Elementos/relogio-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// Favoritos 

function mudarCorFavoritos(imagem, estilo, condicao, clique) {
    if(clique == false) {
        if(condicao == true) {
            imagem.src = "./img/Elementos/mais-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
        }
        else {
            imagem.src = "./img/Elementos/mais-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        } 
    }
   else {
        if(condicao == true) {
            imagem.src = "./img/Elementos/mais-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        }
       else {
            imagem.src = "./img/Elementos/mais-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
       }
   }
}

function clicouFavoritos(imagem, estilo, clique) {
    if(clique == false){
        imagem.src = "./img/Elementos/mais-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueFavoritos== true) {
        imagem.src = "./img/Elementos/mais-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// like

function mudarCorLike(imagem, estilo, condicao, clique) {
    if(clique == false) {
        if(condicao == true) {
            imagem.src = "./img/Elementos/like-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
        }
        else {
            imagem.src = "./img/Elementos/like-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        } 
    }
   else {
        if(condicao == true) {
            imagem.src = "./img/Elementos/like-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        }
       else {
            imagem.src = "./img/Elementos/like-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
       }
   }
}

function clicouLike(imagem, estilo, clique) {
    if(clique == false){
        imagem.src = "./img/Elementos/like-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(clique == true) {
        imagem.src = "./img/Elementos/like-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// dislike 

function mudarCorDislike(imagem, estilo, condicao, clique) {
    if(clique == false) {
        if(condicao == true) {
            imagem.src = "./img/Elementos/dislike-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
        }
        else {
            imagem.src = "./img/Elementos/dislike-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        } 
    }
   else {
        if(condicao == true) {
            imagem.src = "./img/Elementos/dislike-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        }
       else {
            imagem.src = "./img/Elementos/dislike-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
       }
   }
}

function clicouDislike(imagem, estilo, clique) {
    if(clique == false) {
        imagem.src = "./img/Elementos/dislike-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(clique == true) {
        imagem.src = "./img/Elementos/dislike-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// Elemento sair do modal

function sobreOSair(imagem, estilo, condicao) {
    if(condicao == false)  {
        imagem.src = "./img/Elementos/sair-vermelho.png";
        document.getElementById(estilo).style.borderColor = "#E50914";
    }
    else {
        imagem.src = "./img/Elementos/sair-branco.png";
        document.getElementById(estilo).style.borderColor = "#ffffff";
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