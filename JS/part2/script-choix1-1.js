var audio = document.getElementById('audio');

/*Ici on modifie le son de fond de la classe*/

audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville.mp3'></audio>";

/*******************************************/

/*Ici on déclare nos différentes variables que nous allons aovir besoin pour faire les animations*/

var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');
var bouton3 = document.getElementById('bouton3');
var bouton4 = document.getElementById('bouton4');
var bouton5 = document.getElementById('bouton5');
var bouton6 = document.getElementById('bouton6');

var dialogue = document.getElementById('dialogue');

var narratif = document.getElementById('narratif');
var prologue = document.getElementById('prologue');

var akira     = document.getElementById('akira');
var raionhato = document.getElementById('raionhato');
var ayto     = document.getElementById('ayto');
var ennemie    = document.getElementById('ennemie');

var allPersos = [akira, raionhato, ayto, ennemie];

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

function showPrologue(element){
    element.style.display= '';
}

function narr(texte) {
	var html =texte;
	narratif.innerHTML = html;
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

function etape1(){
    hidePrologue(prologue);
    showPerso(akira);
    showPerso(raionhato);
    parle('Akira', "Nous y voilà! sa maison est un peu plus par là suis-moi ! <i>part en avant en se mettant à courir</i>");
}

function etape2(){
    hidePerso(akira);
    parle('Raionhato', "Hey! Attend-moi ! <i>cours aussi en suivant Akira</i>");
}

function etape3(){
    hidePerso(raionhato);
    showPrologue(prologue);
    narr("[Du bruit ce fait entendre comme ci deux personnes se battaient et viennent à sortir de la maison]");
    parle('???', "Aller tu vas me suivre gentiment maintenant!");
}

function etape4(){
    hidePrologue(prologue);
    parle('???', "Hors de question je préfère encore mourir!");
}

function etape5(){
    showPerso(akira);
    parle('Akira', "<i>Se cache en regardant ce qu'il se passe</i> Raion!! cache toi!");
}

function etape6(){
    showPerso(raionhato);
    parle('Raionhato', "<i>Continu de courir et s'arrête tout près</i> Hey toi!? Qu'est-ce que tu fais!?");
}

function etape7(){
    hidePerso(akira);
    showPerso(ennemie);
    parle('???', "Oh tiens tiens du monde en plus à massacrer sa tombe bien j'avais besoin d'échauffement, je vais m'occuper de toi avant et après je m'occupe de l'autre ahahah, aller amène toi");
}

function etape8(){
    hideDial(dialogue);
}

/**********************************************************************/

/*Ici on met en place les choix avec les boutons et les paroles*/ 

/*On commence par déclarer nos variables du html*/

var raion1 = document.getElementById('raion1');
var ennemie1 = document.getElementById('ennemie1');
var raion2 = document.getElementById('raion2');
var ennemie2 = document.getElementById('ennemie2');
var ennemie3 = document.getElementById('ennemie3');
var akira1 = document.getElementById('akira1');
var ayto1 = document.getElementById('ayto1');
var raion3 = document.getElementById('raion3');
var ayto2 = document.getElementById('ayto2');
var akira2 = document.getElementById('akira2');

/************************************************************/

/*Ici on déclare nos bouton avec l'evenement qui va se créer*/

bouton1.addEventListener('click' , Choix1);
bouton2.addEventListener('click' , Choix2);

/*****************************************************/

/*ensuite on met le temps au moment ou on veut qu'll's apparaissent*/

setTimeout(function(){
    document.getElementById('raion1').style.display= 'block';
},49000);

/*************************************************************/

/*Ici on déclare le dialogue par appport au 1e choix et la fin de la scène*/

function Choix1() {

    setTimeout(function() {
        shakePerso(ennemie);
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('ennemie1').style.display= 'block';
    },22000);

    if (bouton1) {
        audio.innerHTML = "<audio autoplay volume ><source src='../../Son/Combat.mp3'></audio>";
        raion1.innerHTML = "<b>Raionhato</b>: <i>Souris en coin</i> hm.. je ne comptais pas m'enfuir face à toi <i>vient placer sa jambe droit en arrière et sa jambe gauche en avant afin de venir se propulser en avant se mettant à courir tout en venant dans son élan serré son poing de sa main gauche vers le bas afin de le feinter avec cette dernière puis viens serrer son poing gauche et le lever dans la seconde qui suit afin d'infliger un uppercut à son ennemi</i>";
        ennemie1.innerHTML = "<b>???</b>: Je n'en attendais pas moins <i>regarde Raion arrive qui courrait assez vite, tente d'esquiver, mais étant feinté par ce dernier se prend tout de même l'uppercut et vole en arrière afin de se trouver au sol puis se relève aussitôt</i> Bien jouer je ne m'attendais pas à cela, mais il m'en faut plus pour m'impressionner <i>s'élance à son tour venant dans son élan levés son bras droit tout en serrant son poing afin de l'envoyer dans le visage de Raion</i>";
    }
    
    /****************************************************************************/

    /*Ici on déclare les deux autres choix par appport au 1e choix de cette scene*/

    /*Ici on déclare nos bouton avec l'evenement qui va se créer*/

    bouton3.addEventListener('click' , Choix3);
    bouton4.addEventListener('click' , Choix4);

    /*****************************************************/

    setTimeout(function() {
        document.getElementById('ennemie1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
    },44000);

    function Choix3() {

        setTimeout(function() {
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('ennemie2').style.display= 'block';
            shakePerso(ennemie);
        },22000);

        setTimeout(function() {
            audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville.mp3'></audio>";
            document.getElementById('ennemie2').style.display= 'none';
        },28000);

        setTimeout(function() {
            hidePerso(ennemie);
        },30000);
    
        setTimeout(function() {
            showPerso(akira);
            document.getElementById('akira1').style.display= 'block';
        },32000);
    
        setTimeout(function() {
            document.getElementById('akira1').style.display= 'none';
            document.getElementById('ayto').style.display= 'block';
            document.getElementById('ayto1').style.display= 'block';
        },36000);
    
        setTimeout(function() {
            document.getElementById('ayto1').style.display= 'none';
            document.getElementById('raion3').style.display= 'block';
        },41000);

        setTimeout(function() {
            document.getElementById('raion3').style.display= 'none';
            document.getElementById('ayto2').style.display= 'block';
        },47000);

        setTimeout(function() {
            document.getElementById('ayto2').style.display= 'none';
            document.getElementById('akira2').style.display= 'block';
        },52000);

    if (bouton3) {
        raion2.innerHTML = "<b>Raionhato</b>: <i>Fais alors un saut en arrière en se propulsant à l'aide de ses jambes afin d'esquiver ce dernier, puis dans ce même mouvement en profite pour s'aider de l'appui de ses jambes afin de se propulser à nouveau vers l'ennemi tout en venant de sa main droit dégainer sa Gunblade et s'arrêter à côté de ce dernier de la sorte à ce que la lame de celle-ci touche le bord de la gorge tout en le coupant légèrement, suffisamment pour le faire saigner et dis d'une voix froide, vas-t'en où je te tue</i>";
        ennemie2.innerHTML = "<b>???</b>: <i>Etant surpris par la rapidité de celui-ci, ses grands yeux écarquillés avale alors sa salive et dis d'une voix basse</i> d...d'accord, j.. je m'en vais <i>pars en courant</i>";
        akira1.innerHTML = "<b>Akira</b>: Raion!!! <i>sort et se met à courir</i> tu n'as rien!? Et toi Ayto!?";
        ayto1.innerHTML = "<b>Ayto</b>: Non ça va <i>a quelques coups et quelques égratignures</i> qu'est-ce que vous faites ici?"
        raion3.innerHTML = "<b>Raionhato</b>: <i>Lui explique alors la situation</i> je propose maintenant que l'on aille chercher quelqu'un que je connait qu'en dites-vous?";
        ayto2.innerHTML= "<b>Ayto</b>: Oui allons-y je viens avec vous, après tout vous êtes venus pour sa? Non?";
        akira2.innerHTML= "<b>Akira</b>: Oui on est venu pour ça, allons-y";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },58000);
        }   
    }

    function Choix4() {

        setTimeout(function() {
            shakePerso(raionhato);
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('ennemie2').style.display= 'block';
        },16000);

        setTimeout(function() {
            audio.innerHTML= "<audio autoplay volume ><source src='../../Son/Ville.mp3'></audio>";
            document.getElementById('ennemie2').style.display= 'none';
        },24000);

        setTimeout(function() {
            hidePerso(ennemie);
        },29000);
    
        setTimeout(function() {
            showPerso(akira);
            document.getElementById('akira1').style.display= 'block';
        },34000);
    
        setTimeout(function() {
            document.getElementById('akira1').style.display= 'none';
            document.getElementById('ayto').style.display= 'block';
            document.getElementById('ayto1').style.display= 'block';
        },40000);
    
        setTimeout(function() {
            document.getElementById('ayto1').style.display= 'none';
            document.getElementById('raion3').style.display= 'block';
        },46000);

        setTimeout(function() {
            document.getElementById('raion3').style.display= 'none';
            document.getElementById('ayto2').style.display= 'block';
        },51000);

        setTimeout(function() {
            document.getElementById('ayto2').style.display= 'none';
            document.getElementById('akira2').style.display= 'block';
        },55000);

    if (bouton4) {
        raion2.innerHTML = "<b>Raionhato</b>: <i>N'étant pas assez attentif, se prend le coup de poing du jeune homme de pleins fouets puis redresse la tête et regarde le jeune homme</i> c'est tout ce que tu as? Tu ferais mieux de partir... <i>à ce moment la regarde le jeune homme d'un regard noir</i> tu ferais mieux de t'en aller avant que tu regrettes ce que tu viens de faire";
        ennemie2.innerHTML = "<b>???</b>: -I... il n'a même pas bouger?! c...comment est-ce possible?!- on se reverra... <i>regarde alors ce dernier avant de partir</i>";
        akira1.innerHTML = "<b>Akira</b>: Raion!!! <i>sort et se met à courir</i> tu n'as rien!? Et toi Ayto!?";
        ayto1.innerHTML = "<b>Ayto</b>: Non ça va <i>a quelques coups et saigne un peux</i> qu'est-ce que vous faites ici?";
        raion3.innerHTML = "<b>Raionhato</b>: <i>Lui explique alors la situation</i> je propose maintenant que l'on aille chercher quelqu'un que je connait qu'en dites-vous?";
        ayto2.innerHTML= "<b>Ayto</b>: Oui allons-y je viens avec vous, après tout vous êtes venus pour sa? Non?";
        akira2.innerHTML= "<b>Akira</b>: Oui on est venu pour ça, allons-y";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },60000);
        }
    }

}

/****************************************************************************/

/*Ici on déclare le dialogue par appport au 2e choix et la fin de la scène*/

function Choix2() {

    setTimeout(function() {
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('ennemie1').style.display= 'block';
        audio.innerHTML = "<audio autoplay volume ><source src='../../Son/Combat.mp3'></audio>";
    },5000);

    if (bouton2) {
        raion1.innerHTML = "<b>Raionhato</b>: Tu n'en vaux pas la peine <i>regarde tout de même les faits et gestes du jeune homme en face de lui";
        ennemie1.innerHTML = "<b>???</b>: Tu te dégonfle? <i>pousse un rire de sadique</i> tu me facilite la tâche dit donc <i>place sa main gauche derrière son dos afin de saisir des couteaux de lancer puis en une fraction de secondes les envois dans la direction de raion qui se trouvait en face de lui</i>";
    }

    /****************************************************************************/

    /*Ici on déclare nos bouton avec l'evenement qui va se créer*/

    bouton3.addEventListener('click' , Choix3);
    bouton4.addEventListener('click' , Choix4);

    /*****************************************************/
    
    setTimeout(function() {
        document.getElementById('ennemie1').style.display= 'none';
        document.getElementById('raion2').style.display= 'block';
    },20000);

    function Choix3() {
        
        setTimeout(function() {
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('ennemie2').style.display= 'block';
        },12000);
    
        setTimeout(function() {
            document.getElementById('ennemie2').style.display= 'none';
            document.getElementById('ayto').style.display= 'block';
            document.getElementById('ayto1').style.display= 'block';
        },23000);
    
        setTimeout(function() {
            document.getElementById('ayto1').style.display= 'none';
            document.getElementById('ennemie3').style.display= 'block';
            shakePerso(ayto);
        },34000);
    
        setTimeout(function() {
            audio.innerHTML = "<audio autoplay volume ><source src='../../Son/fin.mp3'></audio>";
            document.getElementById('ennemie').style.display= 'none';
            document.getElementById('ennemie3').style.display= 'none';
        },45000);
    
        setTimeout(function() {
            document.getElementById('akira1').style.display= 'block';
            showPerso(akira);
        },48000);
        

    if (bouton3) {
        raion2.innerHTML = "<b>Raionhato</b>: <i>Voyant les projectiles aller dans sa direction vient s'abaisser en une fraction de seconde afin d'esquiver les couteaux qui lui étaient destinés et dans ce même élan se met a couvert derrière le mur d'une des maisons qui se trouvait à proximité</i>";
        ennemie2.innerHTML = "<b>???</b>: Et maintenant tu te cache? <i>rigole</i> ahahahah! Quoi? Tu as peur? Bien si tu ne te montres pas ton amie mourra qu'en dis-tu? <i>place sa main gauche derrière son dos afin de dégainer une arme de poing et viens la pointer sur le jeune homme</i>";
        ayto1.innerHTML = "<b>???</b> <i>Viens en une fraction de seconde s'abaisser tout en prenant appuie sur sa jambe gauche et de sa jambe droit à l'aide de son tibia frappé dans les jambes de son adversaire</i>";
        ennemie3.innerHTML = "<b>???</b>: <i>Voyant ce dernier faire il fait un saut en arrière et lui tire dessus au niveau du ventre</i> pauvre idiot! tu pensais vraiment m'avoir comme ca? j'ai fait ce que j'avais à faire <i>pars en courant</i>";
        akira1.innerHTML = "<b>Akira</b>: <i>Entendant le coup de feux se met à courir vers le jeune homme et le voyant au sol elle s'abaisse les larmes aux yeux en criant</i> Ayyytoooo!!n...non tu n'as pas le droit de mourir tiens bon reste avec-nous!";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },70000);
        }   
    }

    function Choix4() {

    if (bouton4) {

        setTimeout(function() {
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('ennemie2').style.display= 'block';
        },8000);
    
        setTimeout(function() {
            document.getElementById('ennemie2').style.display= 'none';
            document.getElementById('ayto').style.display= 'block';
            document.getElementById('ayto1').style.display= 'block';
            shakePerso(raionhato);
        },12000);
    
        setTimeout(function() {
            document.getElementById('ayto1').style.display= 'none';
            document.getElementById('ennemie3').style.display= 'block';
            shakePerso(ayto);
        },23000);
    
        setTimeout(function() {
            audio.innerHTML = "<audio autoplay volume ><source src='../../Son/fin.mp3'></audio>";
            document.getElementById('ennemie').style.display= 'none';
            document.getElementById('ennemie3').style.display= 'none';
        },30000);
    
        setTimeout(function() {
            document.getElementById('akira1').style.display= 'block';
            showPerso(akira);
        },34000);

        raion2.innerHTML = "<b>Raionhato</b>: <i>Reste alors figer venant avoir un flash le plongeant dans ses pensées en voyant les couteaux arriver, ne bouge plus</i>";
        ennemie2.innerHTML = "<b>???</b>: <i>Souris d'un air sadique</i> -ça en est fini pour toi!-";
        ayto1.innerHTML = "<b>???</b>: Allonge toi!!! <i>se met à courir et dans son élan saute afin d'atterrir sur le jeune homme et se met soudainement à crier</i> Aaaaaaah!";
        ennemie3.innerHTML = "<b>???</b>: <i>Voyant les deux hommes à terre il se mit à rire assez fort avant de partir</i> Ahahahah!";
        akira1.innerHTML = "<b>Akira</b>: <i>Entendant crier, sort de sa cachette puis voyant les deux jeunes hommes à terre, se met à crier étant en pleures</i> Ayyytoooo!! Raiiiooon!! vous n'avez pas le droit de m'abandonner!! restez avec-moi!!! AAAAAAAAH!!";
        setTimeout(function() {
            document.location = "../../tbc.html";
          },48000);
        }
    }

}

/****************************************************************************/

/*Ici on me temps ou on veut que les étapes se déroulents*/

hideAllPersos();

setTimeout(etape1, 0);
setTimeout(etape2, 6000);
setTimeout(etape3, 12000);
setTimeout(etape4, 19000);
setTimeout(etape5, 23000);
setTimeout(etape6, 30000);
setTimeout(etape7, 36000);
setTimeout(etape8, 45000);

/*********************************************************/

/*********************************************************************************************************/