var audio = document.getElementById('audio');

/*Ici on modifie le son de fond de la classe*/

audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville2.mp3'></audio>";

/*******************************************/

/*Ici on déclare nos différentes variables que nous allons aovir besoin pour faire les animations*/

var dialogue = document.getElementById('dialogue');

var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');

var raionhato = document.getElementById('raionhato');
var lightkye = document.getElementById('lightkye');
var martinet = document.getElementById('martinet');
var azazel = document.getElementById('azazel');

var allPersos = [raionhato, lightkye, martinet, azazel];

/***********************************************************************************/

/*Ici on met les différentes fonctions utiles*/ 

function showPerso(element) {
	element.style.display= '';
}

function hidePerso(element) {
	element.style.display= 'none';
}

function hideAllPersos() {
    for (var i = 0; i < allPersos.length; i++) {
        var perso = allPersos[i];
        hidePerso(perso);
    }
}

function hidePrologue(element) {
	element.style.display= 'none';
}

function parle(qui, texte) {
	var html = '<b>' + qui + '</b>: ' + texte;
	dialogue.innerHTML = html;
}

function hideDial(element){
    element.style.display= 'none';
}

function shakePerso(perso) {
    perso.className += ' choc';
    setTimeout(function() { perso.className.replace('choc', ''); }, 500);
}

/***************************************************************/

/*Ici on déclare les étapes en reprenant les fonctions */

function etape1() {
    showPerso(raionhato);
    showPerso(lightkye);
    parle('Lightkye', "Bon nous y voilà, allons trouver ces fameux démons, ils ne doivent pas être loin <i>marche doucement dans les rues en regardant partout</i>");
}

function etape2() {
    parle('Raionhato', "Oui <i>suis le jeune homme en regardant aussi aux alentours</i>");
}

function etape3() {
    showPerso(martinet);
    parle('???', "Sort alors d'une maison avec son couteau ensanglantée à la main puis voyant les deux jeunes hommes les regards d'un air sadique puis il prend une posture plutôt étrange au moment où Lightkye le regarde");
}

function etape4() {
    parle('Lightkye', "Raion!! Par ici <i>montre du doigt l'inconnu avant de courir dans sa direction</i>");
}

function etape5() {
    parle('Raionhato', "<i>Entend la voix de Lightkye puis se met à courir dans sa direction puis arriver à sa hauteur dégaine sa Gunblade</i> Reste où tu es toi! Qu'est ce qu'un démon comme toi viens faire dans les parages!?");
}

function etape6() {
    parle('???', "Moi?! Je viens euh comment dire régler quelques affaires pour mener à bien un projet et vous allez bientôt être en première loge pour voir ce joli spectacle ahahahah <i>rigole sadiquement en venant lécher son couteau</i>");
}

function etape7() {
    parle('Raionhato', "Quel projet!? -est-ce en rapport avec Bahamut?!- je ne te laisserais pas faire, toi comme tes accolites!!");
}

function etape8() {
    parle('???', "<i>Ne répond pas puis soudainement il se met à courir dans la direction des jeunes hommes, son couteau à la main droite et la place en arrière</i>");
}

function etape9() {
    hideDial(dialogue);
}

/**********************************************************************/

/*Ici on met en place les choix avec les boutons et les paroles*/ 

/*On commence par déclarer nos variables du html*/

var raion1 = document.getElementById('raion1');
var martinet1 = document.getElementById('martinet1');
var light1 = document.getElementById('light1');
var raion2 = document.getElementById('raion2');
var azazel1 = document.getElementById('azazel1');
var light2 = document.getElementById('light2');
var martinet2 = document.getElementById('martinet2');
var raion3 = document.getElementById('raion3');
var azazel2 = document.getElementById('azazel2');
var raion4 = document.getElementById('raion4');
var light3 = document.getElementById('light3');
var raion5 = document.getElementById('raion5');
var light4 = document.getElementById('light4');

/************************************************************/

/*Ici on déclare nos bouton avec l'evenement qui va se créer*/

bouton1.addEventListener('click', Choix1);
bouton2.addEventListener('click', Choix2);

/*****************************************************/

/*ensuite on met le temps au moment ou on veut qu'll's apparaissent*/

setTimeout(function(){
    document.getElementById('raion1').style.display= 'block';
},62000);

/*************************************************************/

/*Ici on déclare le dialogue par appport au 1e choix et la fin de la scène*/

function Choix1() {

    setTimeout(function() {
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/combat2.mp3'></audio>";
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('martinet1').style.display= 'block';
        shakePerso(martinet);
    },14000);

    setTimeout(function() {
        document.getElementById('martinet1').style.display= 'none';
        document.getElementById('light1').style.display= 'block';
    },29000);

    setTimeout(function() {
        document.getElementById('light1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
    },37000);

    setTimeout(function() {
        hidePerso(lightkye);
        showPerso(azazel);
        document.getElementById('raion2').style.display= 'none';
        document.getElementById('azazel1').style.display= 'block';
    },52000);

    setTimeout(function() {
        document.getElementById('azazel1').style.display= 'none';
        document.getElementById('light2').style.display= 'block';
        shakePerso(lightkye);
    },70000);

    setTimeout(function() {
        document.getElementById('light2').style.display= 'none';
        document.getElementById('martinet2').style.display= 'block';
        hidePerso(martinet);
    },78000);

    setTimeout(function() {
        document.getElementById('martinet2').style.display= 'none';
        document.getElementById('raion3').style.display= 'block';
    },84000);

    setTimeout(function() {
        showPerso(lightkye);
        document.getElementById('raion3').style.display= 'none';
        document.getElementById('azazel2').style.display= 'block';
    },92000);

    setTimeout(function() {
        document.getElementById('azazel2').style.display= 'none';
        document.getElementById('raion4').style.display= 'block';
        hidePerso(azazel);
    },98000);

    setTimeout(function() {
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville2.mp3'></audio>";
        document.getElementById('raion4').style.display= 'none';
        document.getElementById('light3').style.display= 'block';
    },108000);

    setTimeout(function() {
        document.getElementById('light3').style.display= 'none';
        document.getElementById('raion5').style.display= 'block';
    },113000);

    setTimeout(function() {
        document.getElementById('raion5').style.display= 'none';
        document.getElementById('light4').style.display= 'block';
    },124000);

    if (bouton1) {
        raion1.innerHTML = "<b>Raionhato</b>: <i>Lorsque celui-ci se met à courir, se met également à courir en plaçant sa Gunblade en arrière arriver à sa hauteur la place sur le côté tout en venant la lever afin de désarmer son ennemie et par la même occasion le trancher légèrement sur le côté droit";
        martinet1.innerHTML = "<b>???</b>: <i>Souris en voyant le jeune homme faire se laisse désarmer et se pousse sur le côté puis son sang se met à couler</i> tu m'as l'air plus doué que tu m'en avais l'air mais... <i>soudainement lève la main gauche afin d'y jeter une potion qui contenait un liquide bizarre</i>";
        light1.innerHTML = "<b>Lightkye</b>: Raion! attention!! <i>sur ces mots dégaine son fusil canon long et viens tirer dans la potion avant que celle-ci nous atteigne</i> je reste en soutien fonce!";
        raion2.innerHTML = "<b>Raionhato</b>: <i>Voyant la fiole exploser et dispersant une fumée étrange fais un bond en arrière et profite de cela pour se mettre à courir dans la direction de son ennemie qui celui-ci ne voyant rien afin de tenter de le trancher transversalement sur le côté gauche</i>";
        azazel1.innerHTML = "<b>???</b>: <i>Arrive alors en descendant du ciel il vient foncer sur Light afin de le plaquer au sol et invoque dans son vol des serpents de couleurs noires dans la direction de Raion au sol puis se pose délicatement tout en battant des ailes, son visage à l'abri des regards, vêtue de noir</i> Martinet! à quoi tu joues!? Pas le temps de se distraire avec ces insectes!";
        light2.innerHTML = "<b>Lightkye</b>: <i>Se fait alors surprendre par l'ennemie n'ayant pas le temps de réagir se fait attraper et se retrouve plaquer au sol</i> aaah! enfoire!";
        martinet2.innerHTML = "<b>Martinet</b>: <i>Ne s'attendant pas à cela, se fait alors surprendre, mais voyant son allié arrivé il se met à courir dans sa direction</i>";
        raion3.innerHTML = "<b>Raionhato</b>: </i>Voyant les serpents arriver, abandonne l'idée de blesser son ennemie et fais une roulade sur le côté gauche afin d'éviter les serpents puis voyant son ennemie s'enfuir se met à courir après</i>";
        azazel2.innerHTML = "<b>???</b>: -Bon sang il l'a evité!- <i>voyant Martinet en mauvaise posture s'envole et l'attrape au vol afin de s'enfuir</i>";
        raion4.innerHTML = "<b>Raionhato</b>:<i>Les voyant s'envoler s'arrête puis rengaine sa Gunblade</i> Bon sang! <i>se retourne et cours vers Light</i> Light! ça va?";
        light3.innerHTML = "<b>Lightkye</b>: <i>Se relève alors et ramasse son fusil et le range</i> oui ça va t'en fais pas j'ai vu pire";
        raion5.innerHTML = "<b>Raionhato</b>: Partons d'ici -je dois à tout prix retrouver cette fille... il faut que je tire les choses aux clairs...- je t'expliquerais sur le chemin nous devons nous rendre quelque part <i>se met aussitôt à marcher en avant</i>";
        light4.innerHTML = "<b>Light</b>: Très bien <i>suis alors Raion</i>";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },130000);
    }

}

/****************************************************************************/

/*Ici on déclare le dialogue par appport au 2e choix et la fin de la scène*/

function Choix2() {

    setTimeout(function() {
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/combat2.mp3'></audio>";
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('martinet1').style.display= 'block';
    },8000);

    setTimeout(function() {
        document.getElementById('martinet1').style.display= 'none';
        document.getElementById('light1').style.display= 'block';
    },16000);

    setTimeout(function() {
        document.getElementById('light1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
    },24000);

    setTimeout(function() {
        hidePerso(raionhato);
        showPerso(azazel);
        document.getElementById('raion2').style.display= 'none';
        document.getElementById('azazel1').style.display= 'block';
    },34000);

    setTimeout(function() {
        document.getElementById('azazel1').style.display= 'none';
        document.getElementById('light2').style.display= 'block';
        shakePerso(lightkye);
    },54000);

    setTimeout(function() {
        document.getElementById('light2').style.display= 'none';
        document.getElementById('martinet2').style.display= 'block';
        hidePerso(martinet);
    },67000);

    setTimeout(function() {
        document.getElementById('martinet2').style.display= 'none';
        document.getElementById('raion3').style.display= 'block';
    },74000);

    setTimeout(function() {
        showPerso(raionhato);
        document.getElementById('raion3').style.display= 'none';
        document.getElementById('azazel2').style.display= 'block';
    },80000);

    setTimeout(function() {
        document.getElementById('azazel2').style.display= 'none';
        document.getElementById('raion4').style.display= 'block';
        hidePerso(azazel);
    },88000);

    setTimeout(function() {
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville2.mp3'></audio>";
        document.getElementById('raion4').style.display= 'none';
        document.getElementById('light3').style.display= 'block';
    },97000);

    setTimeout(function() {
        document.getElementById('light3').style.display= 'none';
        document.getElementById('raion5').style.display= 'block';
    },107000);

    setTimeout(function() {
        document.getElementById('raion5').style.display= 'none';
        document.getElementById('light4').style.display= 'block';
    },120000);

    if (bouton2) {
        raion1.innerHTML = "<b>Raionhato</b>: <i>Le laisse alors s'approcher puis viens au préalable placer sa jambe droit en arrière afin de se pousser en arrière et d'éviter l'attaque de celui-ci</i>";
        martinet1.innerHTML = "<b>???</b>: <i>Dans sa course vient lancer son couteau dans la direction du jeune homme puis continu sa course dans la direction de l'autre jeune homme</i>";
        light1.innerHTML = "<b>Lightkye</b>: <i>Se prépare alors en venant se positionner de façon à avoir un appuie solide sur ses jambes et préparant ses poings tout en regardant l'homme qui se dirigeait dans sa direction</i>";
        raion2.innerHTML = "<b>Raionhato</b>: <i>Voyant le projectile arriver vient parer ce dernier à l'aide de sa Gunblade en venant la place au niveau de son torse puis dans ce même élan s'élance également dans la direction de l'ennemi</i>";
        azazel1.innerHTML = "<b>???</b>: <i>Voyant ce qu'il se passe, descend du ciel tout en fonçant en pointe, dans son élan il invoque des serpents de couleurs noires qui se mettent à foncer en direction de Raion et de son côté vient se poser un peu plus loin en passant au-dessus de Light de très près, son visage à l'abri du regard et est vêtue de noir</i> Martinet! Qu'est-ce que tu fabriques!? On n'a pas que ça à faire partons!";
        light2.innerHTML = "<b>Lightkye</b>: <i>Par réflexe s'abaisse et à l'aide de cela prend appuie sur ses jambes afin de faire une roulade sur la droite et d'esquiver ces ennemies puis dégaine alors son fusil canon long afin de le pointer sur Martinet</i>";
        martinet2.innerHTML = "<b>Martinet</b>: <i>Se faisant surprendre par l'esquive de Light puis s'arrête soudainement voyant ce dernier lui pointer son fusil</i>";
        raion3.innerHTML = "<b>Raionhato</b>: <i>Voyant que Light maitrise la situation se met a courir dans la direction du second ennemi tout en gardant sa Gunblade dégainé</i>";
        azazel2.innerHTML = "<b>???</b>: <i>Voyant Raion s'approcher et sont allié en danger, s'envole soudainement et vient attraper Martinet au vol afin de s'échapper</i>";
        raion4.innerHTML = "<b>Raionhato</b>: <i>S'arrête soudainement voyant celui-ci s'envoler puis se retourne afin de les regarder</i> Bon sang! <i>rengaine sa Gunblade et marche en direction de Light</i>";
        light3.innerHTML = "<b>Lightkye</b>: <i>Se retourne en une fraction de seconde et dans son mouvement vient tirer afin de tenter de toucher ces ennemies puis rengaine son fusil</i> j'ignore si je les ai touchés <i>regarde Raion</i> bande de lâches";
        raion5.innerHTML = "<b>Raionhato</b>: Ce n'est rien si tu ne les as pas touchés, partons d'ici -je dois à tout prix retrouver cette fille... il faut que je tire les choses aux clairs...- je t'expliquerais sur le chemin nous devons nous rendre quelque part <i>se met aussitôt à marcher en avant</i>";
        light4.innerHTML = "<b>Light</b>: Très bien <i>suis alors Raion</i>";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },126000);
    }
}

/****************************************************************************/

/*Ici on me temps ou on veut que les étapes se déroulents*/

hideAllPersos();

setTimeout(etape1, 0);
setTimeout(etape2, 6000);
setTimeout(etape3, 10000);
setTimeout(etape4, 21000);
setTimeout(etape5, 26000);
setTimeout(etape6, 36000);
setTimeout(etape7, 48000);
setTimeout(etape8, 53000);
setTimeout(etape9, 60000);

/*********************************************************/

/*********************************************************************************************************/