/* ---------- ORPHAN BLACK ------------*/

var assistirMaisTardeOrphanBlack = false;
var favoritarOrphanBlack = false;
var dislikarOrphanBlack = false;
var likarOrphanBlack = false;

var likarLocalOrphanBlack;
var dislikarLocalOrphanBlack;

function OrphanBlack(qualbotao, foiclicado, imagem, emcimadobotao) {
    switch (qualbotao) {
        case 'OrpBlack-Play':
            if(foiclicado == false) {
                mudarCorPlay(imagem, qualbotao, emcimadobotao);
            }
            else {
                window.location.href = "https://youtu.be/do_BCA-vR9E";
            }
        break;

        case 'OrpBlack-AssMais': 
            if(foiclicado == false) {
                mudarCorMaisTarde(imagem, qualbotao, emcimadobotao, assistirMaisTardeOrphanBlack);
            }
            else {
                if(assistirMaisTardeOrphanBlack == false) {
                    assistirMaisTardeOrphanBlack = true;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeOrphanBlack);
                }
                else {
                    assistirMaisTardeOrphanBlack = false;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeOrphanBlack);
                }
            }
        break;

        case 'OrpBlack-Favoritar': 
            if(foiclicado == false) {
                mudarCorFavoritos(imagem, qualbotao, emcimadobotao, favoritarOrphanBlack);
            }
            else {
                if(favoritarOrphanBlack == false) {
                    favoritarOrphanBlack = true;

                    clicouMaisTarde(imagem, qualbotao, favoritarOrphanBlack);
                }
                else {
                    favoritarOrphanBlack = false;

                    clicouFavoritos(imagem, qualbotao, favoritarOrphanBlack);
                }
            }
        break;

        case 'likar-OrpBlack': 
        likarLocalOrphanBlack = imagem;

        if(foiclicado == false) {
            mudarCorLike(imagem, qualbotao, emcimadobotao, likarOrphanBlack);
        }
        else {
            if(likarOrphanBlack == false) {
                likarOrphanBlack = true;

                clicouLike(imagem, qualbotao, likarOrphanBlack);

                if(dislikarOrphanBlack== true) {
                    dislikarOrphanBlack = false;

                    dislikarLocalOrphanBlack.src = "./img/Elementos/dislike-branco.png";
                    document.getElementById('dislikar-OrpBlack').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                likarOrphanBlack = false;

                clicouLike(imagem, qualbotao, likarOrphanBlack);
            }
        }
    break;

    case 'dislikar-OrpBlack':
        dislikarLocalOrphanBlack = imagem;

        if(foiclicado == false) {
            mudarCorDislike(imagem, qualbotao, emcimadobotao, dislikarOrphanBlack);
        }
        else {
            if(dislikarOrphanBlack == false) {
                dislikarOrphanBlack = true;

                clicouDislike(imagem, qualbotao, dislikarOrphanBlack);
                
                if(likarOrphanBlack == true) {
                    likarOrphanBlack = false;

                    likarLocalOrphanBlack.src = "./img/Elementos/like-branco.png";
                    document.getElementById('likar-OrpBlack').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                dislikarLocalOrphanBlack = false;

                clicouDislike(imagem, qualbotao, dislikarOrphanBlack)
            }
        }
    break;
    }
}


/* ------------ EUPHORIA ------------  */

var assistirMaisTardeEuphoria = false;
var favoritarEuphoria = false;
var dislikarEuphoria = false;
var likarEuphoria = false;

var likarLocalEuphoria;
var dislikarLocalEuphoria;

function Euphoria(qualbotao, foiclicado, imagem, emcimadobotao) {
    switch (qualbotao) {
        case 'Euphoria-AssAgr':
            if(foiclicado == false) {
                mudarCorPlay(imagem, qualbotao, emcimadobotao);
            }
            else {
                window.location.href = "https://youtu.be/6XGnv7Zgbeg";
            }
        break;

        case 'Euphoria-AssMais': 
            if(foiclicado == false) {
                mudarCorMaisTarde(imagem, qualbotao, emcimadobotao, assistirMaisTardeEuphoria);
            }
            else {
                if(assistirMaisTardeEuphoria == false) {
                    assistirMaisTardeEuphoria = true;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeEuphoria);
                }
                else {
                    assistirMaisTardeEuphoria = false;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeEuphoria);
                }
            }
        break;

        case 'Euphoria-Favoritar': 
            if(foiclicado == false) {
                mudarCorFavoritos(imagem, qualbotao, emcimadobotao, favoritarEuphoria);
            }
            else {
                if(favoritarEuphoria == false) {
                    favoritarEuphoria = true;

                    clicouMaisTarde(imagem, qualbotao, favoritarEuphoria);
                }
                else {
                    favoritarEuphoria = false;

                    clicouFavoritos(imagem, qualbotao, favoritarEuphoria);
                }
            }
        break;

        case 'likar-Euphoria': 
        likarLocalEuphoria = imagem;

        if(foiclicado == false) {
            mudarCorLike(imagem, qualbotao, emcimadobotao, likarEuphoria);
        }
        else {
            if(likarEuphoria == false) {
                likarEuphoria = true;

                clicouLike(imagem, qualbotao, likarEuphoria);

                if(dislikarEuphoria== true) {
                    dislikarEuphoria = false;

                    dislikarLocalEuphoria.src = "./img/Elementos/dislike-branco.png";
                    document.getElementById('dislikar-Euphoria').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                likarEuphoria = false;

                clicouLike(imagem, qualbotao, likarEuphoria);
            }
        }
    break;

    case 'dislikar-Euphoria':
        dislikarLocalEuphoria = imagem;

        if(foiclicado == false) {
            mudarCorDislike(imagem, qualbotao, emcimadobotao, dislikarEuphoria);
        }
        else {
            if(dislikarEuphoria == false) {
                dislikarEuphoria = true;

                clicouDislike(imagem, qualbotao, dislikarEuphoria);
                
                if(likarEuphoria == true) {
                    likarEuphoria = false;

                    likarLocalEuphoria.src = "./img/Elementos/like-branco.png";
                    document.getElementById('likar-Euphoria').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                dislikarEuphoria = false;

                clicouDislike(imagem, qualbotao, dislikarEuphoria)
            }
        }
    break;
    }
}

// --------------- O Gambito Da Rainha --------------------

var assistirMaisTardeGambito = false;
var favoritarGambito = false;
var dislikarGambito = false;
var likarGambito = false;

var dislikarLocalGambito;
var likarLocalGambito;

function GambitoDaRainha(qualbotao, foiclicado, imagem, emcimadobotao) {
    switch (qualbotao) {
        case 'Gambito-Play':
            if(foiclicado == false) {
                mudarCorPlay(imagem, qualbotao, emcimadobotao);
            }
            else {
                window.location.href = "https://youtu.be/cnqV3wsZlpo";
            }
        break;

        case 'Gambito-AssMais': 
            if(foiclicado == false) {
                mudarCorMaisTarde(imagem, qualbotao, emcimadobotao, assistirMaisTardeGambito);
            }
            else {
                if(assistirMaisTardeGambito == false) {
                    assistirMaisTardeGambito = true;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeGambito);
                }
                else {
                    assistirMaisTardeGambito = false;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardeGambito);
                }
            }
        break;

        case 'Gambito-favoritar': 
            if(foiclicado == false) {
                mudarCorFavoritos(imagem, qualbotao, emcimadobotao, favoritarGambito);
            }
            else {
                if(favoritarGambito == false) {
                    favoritarGambito= true;

                    clicouMaisTarde(imagem, qualbotao, favoritarGambito);
                }
                else {
                    favoritarGambito = false;

                    clicouFavoritos(imagem, qualbotao, favoritarGambito);
                }
            }
        break;

        case 'Gambito-likar': 
            likarLocalGambito = imagem;

            if(foiclicado == false) {
                mudarCorLike(imagem, qualbotao, emcimadobotao, likarGambito);
            }
            else {
                if(likarGambito == false) {
                    likarGambito = true;

                    clicouLike(imagem, qualbotao, likarGambito);

                    if(dislikarGambito == true) {
                        dislikarGambito = false;

                        dislikarLocalGambito.src = "./img/Elementos/dislike-branco.png";
                        document.getElementById('Gambito-dislikar').style.backgroundColor = "#3d3d3d";
                    }
                }
                else {
                    likarGambito = false;

                    clicouLike(imagem, qualbotao, likarGambito);
                }
            }
        break;

        case 'Gambito-dislikar':
            dislikarLocalGambito = imagem;

            if(foiclicado == false) {
                mudarCorDislike(imagem, qualbotao, emcimadobotao, dislikarGambito);
            }
            else {
                if(dislikarGambito == false) {
                    dislikarGambito = true;

                    clicouDislike(imagem, qualbotao, dislikarGambito);
                    
                    if(likarGambito == true) {
                        likarGambito = false;

                        likarLocalGambito.src = "./img/Elementos/like-branco.png";
                        document.getElementById('Gambito-likar').style.backgroundColor = "#3d3d3d";
                    }
                }
                else {
                    dislikarGambito = false;

                    clicouDislike(imagem, qualbotao, dislikarGambito)
                }
            }
        break;
    }
}

/* ------------------------ POSE ------------------------ */

var assistirMaisTardePose= false;
var favoritarPose = false;
var dislikarPose = false;
var likarPose = false;

var likarLocalPose;
var dislikarLocalPose;

function Pose(qualbotao, foiclicado, imagem, emcimadobotao) {
    switch (qualbotao) {
        case 'Pose-Play':
            if(foiclicado == false) {
                mudarCorPlay(imagem, qualbotao, emcimadobotao);
            }
            else {
                window.location.href = "https://youtu.be/_t4YuPXdLZw";
            }
        break;

        case 'Pose-AssMais': 
            if(foiclicado == false) {
                mudarCorMaisTarde(imagem, qualbotao, emcimadobotao, assistirMaisTardePose);
            }
            else {
                if(assistirMaisTardePose == false) {
                    assistirMaisTardePose = true;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardePose);
                }
                else {
                    assistirMaisTardePose = false;

                    clicouMaisTarde(imagem, qualbotao, assistirMaisTardePose);
                }
            }
        break;

        case 'Pose-Favoritar': 
            if(foiclicado == false) {
                mudarCorFavoritos(imagem, qualbotao, emcimadobotao, favoritarPose);
            }
            else {
                if(favoritarPose == false) {
                    favoritarPose = true;

                    clicouMaisTarde(imagem, qualbotao, favoritarPose);
                }
                else {
                    favoritarPose = false;

                    clicouFavoritos(imagem, qualbotao, favoritarPose);
                }
            }
        break;

        case 'likar-Pose': 
        likarLocalPose = imagem;

        if(foiclicado == false) {
            mudarCorLike(imagem, qualbotao, emcimadobotao, likarPose);
        }
        else {
            if(likarPose == false) {
                likarPose = true;

                clicouLike(imagem, qualbotao, likarPose);

                if(dislikarPose== true) {
                    dislikarPose = false;

                    dislikarLocalPose.src = "./img/Elementos/dislike-branco.png";
                    document.getElementById('dislikar-Pose').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                likarPose = false;

                clicouLike(imagem, qualbotao, likarPose);
            }
        }
    break;

    case 'dislikar-Pose':
        dislikarLocalPose = imagem;

        if(foiclicado == false) {
            mudarCorDislike(imagem, qualbotao, emcimadobotao, dislikarPose);
        }
        else {
            if(dislikarPose == false) {
                dislikarPose = true;

                clicouDislike(imagem, qualbotao, dislikarPose);
                
                if(likarPose == true) {
                    likarPose = false;

                    likarLocalPose.src = "./img/Elementos/like-branco.png";
                    document.getElementById('likar-Pose').style.backgroundColor = "#3d3d3d";
                }
            }
            else {
                dislikarLocalPose = false;

                clicouDislike(imagem, qualbotao, dislikarPose)
            }
        }
    break;
    }
}