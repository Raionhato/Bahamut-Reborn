var audio = document.getElementById('audio');

/*Ici on modifie le son de fond de la classe*/

audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville2.mp3'></audio>";

/*******************************************/

/*Ici on déclare nos différentes variables que nous allons aovir besoin pour faire les animations*/

var dialogue = document.getElementById('dialogue');

var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');

var raionhato = document.getElementById('raionhato');
var martinet = document.getElementById('martinet');
var azazel = document.getElementById('azazel');

var allPersos = [raionhato, martinet, azazel];

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
    parle('Raionhato', "<i>S'arrête et regarde les alentours puis se met à marcher en direction d'une des rues de la ville</i>");
}

function etape2() {
    showPerso(martinet);
    parle('???', "<i>Sort d'une maison avec un couteau ensanglanté à la main droite et s'arrête avant d'apercevoir Raion, puis le regarde affichant un sourire sadique</i>");
}

function etape3() {
    parle('Raionhato', "Reste où tu est! <i>s'arrête assez loin de l'homme et vient dégainer sa Gunblade de la main droite</i>");
}

function etape4() {
    parle('???', "<i>Ris sadiquement</i> crois-tu vraiment que je vais m'enfuir? Pauvre humain abjecte <i>s'élance soudainement se mettant à courir dans la direction de Raion en tenant son couteau à la main droite et tenant un autre objet de la main gauche</i>");
}

function etape5() {
    hideDial(dialogue);
}

/**********************************************************************/

/*Ici on met en place les choix avec les boutons et les paroles*/ 

/*On commence par déclarer nos variables du html*/

var raion1 = document.getElementById('raion1');
var martinet1 = document.getElementById('martinet1');
var raion2 = document.getElementById('raion2');
var azazel1 = document.getElementById('azazel1');
var martinet2 = document.getElementById('martinet2');
var raion3 = document.getElementById('raion3');
var azazel2 = document.getElementById('azazel2');
var martinet3 = document.getElementById('martinet3');
var raion4 = document.getElementById('raion4');
var martinet4 = document.getElementById('martinet4');
var azazel3 = document.getElementById('azazel3');
var raion5 = document.getElementById('raion5');

/************************************************************/

/*Ici on déclare nos bouton avec l'evenement qui va se créer*/

bouton1.addEventListener('click', Choix1);
bouton2.addEventListener('click', Choix2);

/*****************************************************/

/*ensuite on met le temps au moment ou on veut qu'll's apparaissent*/

setTimeout(function(){
    document.getElementById('raion1').style.display= 'block';
},36000);

/*************************************************************/

/*Ici on déclare le dialogue par appport au 1e choix et la fin de la scène*/

function Choix1() {

    setTimeout(function() {
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/combat2.mp3'></audio>";
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('martinet1').style.display= 'block';
        shakePerso(martinet);
    },12000);

    setTimeout(function() {
        document.getElementById('martinet1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
        shakePerso(raionhato);
    },30000);

    setTimeout(function() {
        document.getElementById('raion2').style.display= 'none';
        document.getElementById('azazel1').style.display= 'block';
        showPerso(azazel);
    },40000);

    setTimeout(function() {
        document.getElementById('azazel1').style.display= 'none';
        document.getElementById('martinet2').style.display= 'block';
    },50000);

    setTimeout(function() {
        document.getElementById('martinet2').style.display= 'none';
        document.getElementById('raion3').style.display= 'block';
    },58000);

    setTimeout(function() {
        document.getElementById('raion3').style.display= 'none';
        document.getElementById('azazel2').style.display= 'block';
    },78000);

    setTimeout(function() {
        document.getElementById('azazel2').style.display= 'none';
        document.getElementById('martinet3').style.display= 'block';
    },83000);

    setTimeout(function() {
        document.getElementById('martinet3').style.display= 'none';
        document.getElementById('raion4').style.display= 'block';
    },94000);

    setTimeout(function() {
        document.getElementById('raion4').style.display= 'none';
        document.getElementById('martinet4').style.display= 'block';
        shakePerso(martinet);
    },112000);

    setTimeout(function() {
        document.getElementById('martinet4').style.display= 'none';
        document.getElementById('azazel3').style.display= 'block';
        hidePerso(azazel);
        hidePerso(martinet);
        audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville2.mp3'></audio>";
    },122000);

    setTimeout(function() {
        document.getElementById('azazel3').style.display= 'none';
        document.getElementById('raion5').style.display= 'block';
    },128000);

    if (bouton1) {
        raion1.innerHTML = "<b>Raionhato</b>: <i>Se met également à courir dans la direction de l'ennemie se décalant sur la gauche et dans son élan vient lever sa Gunblade à la dernière seconde afin de venir trancher ce dernier sur le côté droit juste au niveau de la hanche</i>";
        martinet1.innerHTML = "<b>???</b>: <i>Se fait surprendre par Raion et tente de parer le coup, mais son couteau vient se casser par la force de ce dernier et se fait toucher de pleins fouets, mais au même moment lâche l'objet qui était dans sa main gauche qui était en fait une fiole de fumigène et en profite pour se pousser sur la gauche</i> ahahah pauvre idiot!";
        raion2.innerHTML = "<b>Raionhato</b>: -Bon sang!- <i>aussitôt se met a courir afin de sortir de la fumée et se met sur ces gardes afin d'attendre que la fumée se dissipe</i> -où est-il passé?!-";
        azazel1.innerHTML = "<b>???</b>: <i>Voyant la fumée au loin en volant, part à toute vitesse afin de se rendre sur place et apercevant Raion descend en flèche afin de lui foncer dessus</i>";
        martinet2.innerHTML = "<b>???</b>: <i>Voyant son allié arrivé en profite pour courir dans la fumée afin de foncer sur Raion tout en levant son poing gauche</i>";
        raion3.innerHTML = "<b>Raionhato</b>: <i>Ayant l'ouïe fine entends alors quelque chose arriver et voyant l'ombre prend alors un appuie sur ses jambes afin de faire une roulade sur la gauche pour esquiver celui-ci et aussitôt vois également une ombre dans la fumée reste en position accroupie tout en venant placer sa Gunblade en travers afin de parer une quelconque attaque</i>";
        azazel2.innerHTML = "<b>???</b>: -Comment a-t-il fais pour le savoir!?- <i>voyant Raion esquiver se pose un peu plus loin</i> je dois avouer que tu es douée mais... <i>lève soudainement son bras gauche afin d'invoquer des dizaines de serpents, qui eux flottaient dans les airs venant foncer dans la direction de Raion</i>";
        martinet3.innerHTML = "<b>???</b>: Tu n'as aucune chance! <i>il se met à rire tout en venant sortir de la fumée son poing levé, venant tapé dans la Gunblade de Raion puis aussitôt tente d'enchainer sur un coup de pied venant levé la jambe gauche</i>";
        raion4.innerHTML = "<b>Raionhato</b>: <i>Voyant les serpents avancer droit sur lui, étant accroupie se sert de cette position pour effectuer une roulade sur la droite et couper en quelques mouvements les serpents et aussitôt se relève tout en venant dans son élan, prendre appuie sur sa jambe gauche et déplie sa jambe droit afin de l'envoyer dans les côtes de celui-ci</i>";
        martinet4.innerHTML = "<b>???</b>: <i>Au moment où il abaisse son pied gauche, se prend de pleins fouets le coup de pied de Raion venant faire un vol planer afin de tomber au sol puis se relève</i> Azazel! Partons!";
        azazel3.innerHTML = "<b>???</b>: <i>Sous les ordres de celui-ci se met aussitôt à voler venant attraper ce dernier au vol afin de s'enfuir</i>";
        raion5.innerHTML = "<b>Raionhato</b>: <i>Se met à courir puis les voyant s'envoler s'arrête</i> Bon... je n'ai plus qu'à partir d'ici -et de retrouver cette fille, mais avant je devrais peut-être aller le voir...- <i>décide alors de se mettre en route</i>";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },140000);
    }
}

/****************************************************************************/

/*Ici on déclare le dialogue par appport au 2e choix et la fin de la scène*/

function Choix2() {

    setTimeout(function() {
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('martinet1').style.display= 'block';
        shakePerso(martinet);
    },5000);

    setTimeout(function() {
        document.getElementById('martinet1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
        shakePerso(raionhato);
    },20000);

    setTimeout(function() {
        document.getElementById('raion2').style.display= 'none';
        document.getElementById('azazel1').style.display= 'block';
    },32000);

    setTimeout(function() {
        document.getElementById('azazel1').style.display= 'none';
        document.getElementById('martinet2').style.display= 'block';
    },40000);

    setTimeout(function() {
        document.getElementById('martinet2').style.display= 'none';
        document.getElementById('raion3').style.display= 'block';
    },52000);

    setTimeout(function() {
        document.getElementById('raion3').style.display= 'none';
        document.getElementById('azazel2').style.display= 'block';
    },67000);

    setTimeout(function() {
        document.getElementById('azazel2').style.display= 'none';
        document.getElementById('martinet3').style.display= 'block';
    },82000);

    setTimeout(function() {
        document.getElementById('martinet3').style.display= 'none';
        document.getElementById('raion4').style.display= 'block';
    },93000);

    setTimeout(function() {
        document.getElementById('raion4').style.display= 'none';
        document.getElementById('martinet4').style.display= 'block';
    },105000);

    setTimeout(function() {
        document.getElementById('martinet4').style.display= 'none';
        document.getElementById('azazel3').style.display= 'block';
    },112000);

    setTimeout(function() {
        document.getElementById('azazel3').style.display= 'none';
        document.getElementById('raion5').style.display= 'block';
    },128000);

    if (bouton2) {
        raion1.innerHTML = "<b>Raionhato</b>: <i>Se met en position de défense afin de parrer et d'esquiver une quelconque attaque</i>";
        martinet1.innerHTML = "<b>???</b>: <i>Balance alors son objet dans la direction de Raion en visant sa Gunblade afin de le distraire qui était en fait une fiole, qui en explosant lâche un gaz fumigène et profitant de cela il vient trancher celui-ci avec son couteau</i>";
        raion2.innerHTML = "<b>Raionhato</b>: <i>Etant surpris par la fiole se fait alors toucher par le couteau de celui-ci et se retrouve dans la fumée cours afin d'en sortir puis ce remet en position</i> -il m'a bien eu, mais je dois rester concentrer!-";
        azazel1.innerHTML = "<b>???</b>: <i>Voyant la fumée au loin en volant, part à toute vitesse afin de se rendre sur place et apercevant Raion descend en flèche afin de lui foncer dessus</i>";
        martinet2.innerHTML = "<b>???</b>: <i>Ris alors sadiquement</i> ahah! tu es bien trop naïf! -où est-il passé?- <i>rentre alors de nouveau dans la fumée en courant et tenant toujours son couteau à la main il lève ce dernier en sautant afin d'atteindre Raion</i>";
        raion3.innerHTML = "<b>Raionhato</b>: <i>Ayant l'ouïe fine entend alors quelque chose arriver et voyant l'ombre prend alors un appuie sur ces jambes afin de faire une roulade sur la gauche pour esquiver celui et aussitôt vois également une ombre dans la fumée reste en position accroupie tout en venant placer sa Gunblade en travers afin de parrer une quelconque attaque</i>";
        azazel2.innerHTML = "<b>???</b>: -Comment a-t-il fais pour le savoir!?- <i>voyant Raion esquiver se pose un peu plus loin</i> je dois avouer que tu es douée mais... <i>lève soudainement son bras gauche afin d'invoquer des dizaines de serpents, qui eux flottaient dans les airs venant foncer dans la direction de Raion</i>";
        martinet3.innerHTML = "<b>???</b>: <i>Une fois sortis de la fumée, est surpris par la position de Raion et la lame de son couteau vient tapé sur la Gunblade et vient se briser, fait alors un bond en arrière et jette son couteau au sol</i>";
        raion4.innerHTML = "<b>Raionhato</b>: <i>Voyant les serpents avancer droit sur lui, étant accroupie se sert de cette position pour effectuer une roulade sur la gauche et couper en quelques mouvements les serpents et aussitôt se relève afin de se remettre à courir vers ses ennemies</i>";
        martinet4.innerHTML = "<b>???</b>: <i>Est surpris par les mouvements de Raion et reste sur place venant sortir une autre fiole de sa poche et la jette dans la direction de celui-ci</i>";
        azazel3.innerHTML = "<b>???</b>: <i>Profitant de cette diversion s'envole et récupère dans la foulée son allié afin de s'enfuir</i>";
        raion5.innerHTML = "<b>Raionhato</b>: <i>Voyant la fiole voler dans sa direction vient effectuer une roulade afin d'éviter celle-ci et s'arrêter accroupis puis se relève</i> -Bon sang! Bien jouer...- <i>rengaine sa Gunblade avant de se remettre à marcher</i> -je vais me dépêcher d'aller le retrouver...-";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },140000);
    }
}

/****************************************************************************/

/*Ici on me temps ou on veut que les étapes se déroulents*/

hideAllPersos();

setTimeout(etape1, 0);
setTimeout(etape2, 5000);
setTimeout(etape3, 14000);
setTimeout(etape4, 19000);
setTimeout(etape5, 34000);

/*********************************************************/

/*********************************************************************************************************/