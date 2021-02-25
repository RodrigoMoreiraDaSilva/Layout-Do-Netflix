function sininhoMouseEmCima(imagem) {
    imagem.src = "./img/Elementos/sininho-cinza.png";
}

function sininhoMouseFora(imagem) {
    imagem.src = "./img/Elementos/sininho-branco.png";
}

function lupaEmCima(imagem) {
    imagem.src = "./img/Elementos/busca-cinza.png";
}

function lupaFora(imagem) {
    imagem.src = "./img/Elementos/busca-branca.png";
}

function presenteEmCima(imagem){
    imagem.src = "./img/Elementos/presente-cinza.png";
}

function presenteFora(imagem) {
    imagem.src = "./img/Elementos/presente-branco.png";
}

function setaMouseEmCima(imagem) {
    imagem.src = "./img/Elementos/seta-cinza.png"
}

function setaMouseFora(imagem) {
    imagem.src = "./img/Elementos/seta-branco.png"
}

// ---- Parte da lógica do Modal ---------- 

var clique = false;

function mudarCorBotão(imagem, estilo, condicao) {

    if(clique == false) {
        if(condicao == true) {
            imagem.src = "./img/Elementos/play-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
        }
        else {
            imagem.src = "./img/Elementos/play-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        } 
    }
   else {
        if(condicao == true) {
            imagem.src = "./img/Elementos/play-branco.png";
            document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
        }
       else {
            imagem.src = "./img/Elementos/play-preto.png";
            document.getElementById(estilo).style.backgroundColor = "#FFFFFF";
       }
   }
}

function clicou(imagem, estilo) {
    if(clique == false){
        clique = true;
        imagem.src = "./img/Elementos/play-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(clique == true) {
        clique = false;
        imagem.src = "./img/Elementos/play-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// Assistir mais tarde 

var cliqueMaisTarde = false;

function mudarCorMaisTarde(imagem, estilo, condicao) {
    if(cliqueMaisTarde == false) {
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

function clicouMaisTarde(imagem, estilo) {
    if(cliqueMaisTarde == false){
        cliqueMaisTarde = true;
        imagem.src = "./img/Elementos/relogio-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueMaisTarde == true) {
        cliqueMaisTarde = false;
        imagem.src = "./img/Elementos/relogio-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// Favoritos 

var cliqueFavoritos = false;

function mudarCorFavoritos(imagem, estilo, condicao) {
    if(cliqueFavoritos == false) {
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

function clicouFavoritos(imagem, estilo) {
    if(cliqueFavoritos == false){
        cliqueFavoritos = true;
        imagem.src = "./img/Elementos/mais-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueFavoritos== true) {
        cliqueFavoritos = false;
        imagem.src = "./img/Elementos/mais-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// like

var cliqueLike = false;

function mudarCorLike(imagem, estilo, condicao) {
    if(cliqueLike == false) {
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

function clicouLike(imagem, estilo) {
    if(cliqueLike == false){
        cliqueLike = true;
        imagem.src = "./img/Elementos/like-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueLike== true) {
        cliqueLike = false;
        imagem.src = "./img/Elementos/like-branco.png";
        document.getElementById(estilo).style.backgroundColor = "#3d3d3d";
    }
}

// dislike 

var cliqueDislike = false;

function mudarCorDislike(imagem, estilo, condicao) {
    if(cliqueDislike == false) {
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

function clicouDislike(imagem, estilo) {
    if(cliqueDislike == false) {
        cliqueDislike= true;
        imagem.src = "./img/Elementos/dislike-preto.png";
        document.getElementById(estilo).style.backgroundColor = "#FFFFFF";;
    }
    else if(cliqueDislike == true) {
        cliqueDislike = false;
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