

var audio = document.getElementById('audio');

/*Ici on met en place la music de fond*/

audio.innerHTML= "<audio autoplay volume ><source src='../../Son/couloir.mp3'></audio>";

/****************************************/

/*Ici on déclare nos différentes variables que nous allons aovir besoin pour faire les animations*/

var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');

var dialogue = document.getElementById('dialogue');

var akira     = document.getElementById('akira');
var raionhato = document.getElementById('raionhato');
var joichiro = document.getElementById('joichiro');

var allPersos = [akira, raionhato, joichiro];

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

function parle(qui, texte) {
	var html = '<b>' + qui + '</b>: ' + texte;
	dialogue.innerHTML = html;
}

function hideDial(element){
    element.style.display= 'none';
}

/***************************************************************/ 

/*Ici on déclare les étapes en reprenant les fonctions */

function etape1(){
    showPerso(akira);
    showPerso(raionhato);
    parle('Akira', "<i>Entame une marche plutôt légère</i> Je te remercie infiniment d'avoir accepté de venir avec moi, mais nous devons nous dépêchés, car le temps presse et les ennemis ne tarderont surement pas à faire surface");
}

function etape2(){
    parle('Raionhato', "<i>Reste sérieux tout en marchant aux côtés de Akira</i> -je vois...- explique moi la situation dans ce cas, puisque cela te préoccupe tant");
}

function etape3(){
    parle('Akira', "Très bien, te souviens-tu de cette créature qui est apparus il y 10ans ? Elle a rasé des villes-à elle toute seule, elle a tués d'innombrables humains sans pitié semant chaos et destruction sur son passage <i>ses yeux se mirent à briller</i>");
}

function etape4(){
    parle('Raionhato', "<i>Croise les bras puis réfléchis en marchant et s'arrête soudainement sous les paroles de Akira et vient avoir un flash comme un retour dans le passé une scène qui s'était produite refait surface dans sa tête</i> -n...ne me dis pas que...- <i>crie alors soudainement</i> BAHAMUT!!! <i>la regarde ayant vus que ses yeux brillaient mais ne dis rien</i>");
}

function etape5(){
    parle('Akira', "<i>Se ressaisit puis s'arrête à son tour et regarde Raion</i> Oui tout à fait, des rumeurs disent qu'il est sur le point de se réveiller à nouveau ceci étant la cause d'une source qui nous est inconnu jusqu'à maintenant <i>soupire</i> tu comprends maintenant pourquoi toi.... <i>regarde de nouveau le jeune homme attentivement</i>");
}

function etape6(){
    parle('???', "Yo Raion! <i>marche dans la direction des deux personnes, une fois arriver à leurs hauteur s'arrête</i>");
}

function etape7(){
    hidePerso(akira);
    showPerso(joichiro);
}

function etape8(){
    parle('Raionhato', "<i>Croise les bras tout en regardant le jeune homme</i> -oh non s'est pas vrai manquer plus que lui....- qu'y a-t-il?");
}

function etape9(){
    parle('???', "<i>Ignore Akira puis regarde Raion à son tour d'un air hautin</i> Alors, comme ça on s'en vas en mission et on ne me demande pas de venir? ça te dirait que je viens avec vous? Allez sa rappellera le bon vieux temps hein? <i>souris d'un air narquois</i>");
}

function etape10(){
    hideDial(dialogue);
}

/**********************************************************************/

/*Ici on met en place les choix avec les boutons et les paroles*/ 

/*On commence par déclarer nos variables du html*/

var raion1 = document.getElementById('raion1');
var joichiro1 = document.getElementById('joichiro1');
var akira1 = document.getElementById('akira1');
var raion2 = document.getElementById('raion2');
var akira2 = document.getElementById('akira2');
var raion3 = document.getElementById('raion3');
var akira3 = document.getElementById('akira3');

/************************************************************/

/*Ici on déclare nos bouton avec l'evenement qui va se créer*/

bouton1.addEventListener('click' , Choix1);
bouton2.addEventListener('click' , Choix2);

/*****************************************************/

/*ensuite on met le temps au moment ou on veut qu'll's apparaissent*/

setTimeout(function(){
    document.getElementById('raion1').style.display= 'block';
},91000);

/*************************************************************/

/*Ici on déclare le dialogue par appport au 1e choix et la fin de la scène 1*/

function Choix1() {

    setTimeout(function(){
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('joichiro1').style.display= 'block';
        hidePerso(joichiro);
    },10000);

    if (bouton1) {

        setTimeout(function(){
            document.getElementById('joichiro1').style.display= 'none';
        },20000);
        
        setTimeout(function(){
            showPerso(akira);
            document.getElementById('akira1').style.display= 'block';
        },22000);
        
        setTimeout(function(){
            document.getElementById('akira1').style.display= 'none';
            document.getElementById('raion2').style.display= 'block';
        },35000);
        
        setTimeout(function(){
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('akira2').style.display= 'block';
        },47000);
        
        setTimeout(function(){
            document.getElementById('akira2').style.display= 'none';
            document.getElementById('raion3').style.display= 'block';
        },75000);
        
        setTimeout(function(){
            document.getElementById('raion3').style.display= 'none';
            document.getElementById('akira3').style.display= 'block';
        },88000);

        raion1.innerHTML = "<b>Raionhato</b>: Très bien tu peux venir, mais à une condition...que tu ne fais pas comme ci c'était toi qui dirigeait cette mission, sinon crois-moi que je ne me gênerais pas à-en faire un rapport au Directeur";
        joichiro1.innerHTML = "<b>???</b>: Ouai ouai d'accord c'est bon j'ai compris, mais tâchez de pas trainer dans mes pieds, bon allez je pars en avant, j'ai autre chose à faire que de trainer avec vous <i>fais demi-tour et part</i>";
        akira1.innerHTML = "<b>Akira</b>: C'est qui celui là?! pfff non mais quel bouffon pour qui il se prend! je crois qu'il n'a pas appris le respect et qu'il mériterait que quelqu'un lui donne une bonne leçon! il n'a pas intérêt à me chauffer crois-moi je n'hésiterais pas à lui rentrer dedans!";
        raion2.innerHTML = "<b>Raionhato</b>: Oh lui c'est Joichiro, c'est quelqu'un qui n'est pas forcément appréciable <i>la regarde et affiche un sourire en coin entendant ces paroles puis redevient sérieux</i> dis-moi...qui t'a envoyé exactemment? Comment as-tu fait pour me trouver?";
        akira2.innerHTML = "<b>Akira</b>: Et bien je viens d'une autre Université j'ai été appelé par mon Directeur qui est en contact avec celui de ton Université et il t'a choisis toi pour cette mission, car tu es celui qui a toutes les qualités pour mener à bien cela, ils ne peuvent pas se permettre de confier cela à n'importe qui tu comprend, maintenant nous devons trouver des personnes de confiances j'ai déjà quelqu'un que je connais, alors j'ai récolté des informations à ton sujet et arriver ici j'ai demandé ou tu étais, tu es bien connu ici, bon on devrait commencer par allées la voir ça n'est pas très loin d'ici";
        raion3.innerHTML = "<b>Raionhato</b>: Je vois, oui je comprends -surtout pas à Joichiro...d'ailleurs je me demande comment a-t-il fais pour être mis au courant si rapidement?...- d'accord, j'ai également plusieurs personnes de confiances à qui on pourrait demander de nous prêter mains fortes et, qui je pense ne refuseront pas, allons-y, une fois sortis je te suis <i>marche en direction de la sortie du hall</i>";
        akira3.innerHTML = "<b>Akira</b>: Oui, d'accord <i>suit Raion puis passe devant afin de se diriger vers la prochaine destination</i>";
        setTimeout(function() {
            document.location = "../../pages/part2/choix1-1.html";
          },95000);
    }
}
/****************************************************************************/

/*Ici on déclare le dialogue par appport au 2e choix et la fin de la scène 1*/

function Choix2() {

    setTimeout(function(){
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('joichiro1').style.display= 'block';
        hidePerso(joichiro);
    },10000);

    if (bouton2) {

        setTimeout(function(){
            document.getElementById('joichiro1').style.display= 'none';
        },15000);
        
        setTimeout(function(){
            showPerso(akira);
            document.getElementById('akira1').style.display= 'block';
        },20000);
        
        setTimeout(function(){
            document.getElementById('akira1').style.display= 'none';
            document.getElementById('raion2').style.display= 'block';
        },28000);
        
        setTimeout(function(){
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('akira2').style.display= 'block';
        },33000);
        
        setTimeout(function(){
            document.getElementById('akira2').style.display= 'none';
            document.getElementById('raion3').style.display= 'block';
        },51000);
        
        setTimeout(function(){
            document.getElementById('raion3').style.display= 'none';
            document.getElementById('akira3').style.display= 'block';
        },60000);
        
        raion1.innerHTML = "<b>Raionhato</b>: Non, tout simplement parce que je n'ai pas confiance en toi";
        joichiro1.innerHTML = '<b>???</b>: Très bien je vois, tu le regretteras crois-moi <i>affiche un regard noir puis part</i>';
        akira1.innerHTML = "<b>Akira</b>:C'était qui celui-là?! il croit me faire peur, je vais lui montrer ce que c'est de se prendre pour un gros malin";
        raion2.innerHTML = "<b>Raionhato</b>: Personne... <i>soupire</i> -Je vais le regretter hein...- de la part de qui viens-tu?";
        akira2.innerHTML = "<b>Akira></b>: Je viens de la part du Directeur de mon Université qui a contacté le Directeur de ton Université et ils m'ont demandé tous les deux de venir te cherché ici pour cette mission délicate du fait que tu as les qualités requises, si tu le veux bien nous devons aller chercher un ami à moi qui pourra aussi nous aider, c'est la ville pas loin";
        raion3.innerHTML = "<b>Raionhato</b>: D'accord, ça me va allons-y alors ne perdons pas de temps dans ce cas <i>marche en direction de la sortie afin de se rendre à destination</i>";
        akira3.innerHTML = "<b>Akira</b>: Oui! <i>suis Raion puis passe devant afin de le guider</i>"
        setTimeout(function() {
            document.location = "../../pages/part2/choix1-2.html";
          },65000);
    }
}

/*************************************************************/

/*Ici on me temps ou on veut que les étapes se déroulents*/

hideAllPersos();

setTimeout(etape1, 0);
setTimeout(etape2, 10000);
setTimeout(etape3, 20000);
setTimeout(etape4, 30000);
setTimeout(etape5, 50000);
setTimeout(etape6, 65000);
setTimeout(etape7, 68000);
setTimeout(etape8, 72000);
setTimeout(etape9, 78000);
setTimeout(etape10, 90000);

/*********************************************************/

/*********************************************************************************************************/