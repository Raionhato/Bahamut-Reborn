
var audio = document.getElementById('audio');

/*Ici on met en place la music de fond*/

audio.innerHTML= "<audio autoplay volume ><source src='../../Son/parc.mp3'></audio>";

/****************************************/

/*Ici on déclare nos différentes variables que nous allons aovir besoin pour faire les animations*/

var dialogue = document.getElementById('dialogue');

var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');

var akira     = document.getElementById('akira');
var raionhato = document.getElementById('raionhato');
var lightkye  = document.getElementById('lightkye');
var directeur = document.getElementById('directeur');

var allPersos = [akira, raionhato, lightkye, directeur];

/***********************************************************************************/

/*Ici on met les différentes fonctions utiles*/ 

function showPerso(element) {
    element.style.display = '';
}

function hidePerso(element) {
    element.style.display = 'none';
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

function hideDial(element){
    element.style.display= 'none';
}

/***************************************************************/ 

/*Ici on déclare les étapes en reprenant les fonctions */

function etape0() {
    showPerso(raionhato);
    showPerso(akira);
    parle('Raionhato', "<i>Sors de la salle de cours afin de se rendre à l'extérieur et se diriger vers la serre de combat</i>");
}

function etape1() {
    showPerso(raionhato, akira);
    parle('Akira', "Hey! Attend! *est aux bords des larmes pas seulement à cause de la tristesse, mais aussi à cause de la colère* tout repose sur toi!! et toi tu nous laisses tomber ?! Très bien on ce débrouilleras sans toi! Moi qui me disais que tu avais l'air quelqu'un de bien on dirait que je me suis trompé sur toi! tu n'es rien qu'un idiot!!! <i>part en courant</i>");
}

function etape2() {
    hidePerso(akira);
    parle('Raionhato', "<i>Soupire puis viens croiser les bras et baisser la tête légèrement sur la gauche</i> -j'ai mes propres raisons de ne pas accepter... je n'ai pas envie que d'autres personnes meurent par ma faute...même si...-");
}

function etape3() {
    parle('???', "Raion! <i>marche dans sa direction puis s'arrête une fois à sa hauteur</i> c'était qui cette fille?");
}

function etape4() {
    showPerso(lightkye);
}

function etape5() {
    parle('Raionhato', "<i>Sors de sa pensée entendant son prénom, relève la tête</i> Salut Light! Ah cette fille? Personne d'important t'inquiète pas");
}

function etape6() {
    parle('Lightkye', "<i>Le regarde d'un air qui ne le croyait pas</i> mouai et comment explique tu le fait que tu parler avec elle il y a quelques secondes? Et qu'elle avait les larmes aux yeux? Pauvre petite, elle qui était si mignonne, tu n'es pas très doué pour parler aux femmes, à chaque fois que je vois une fille avec toi elle finit en larmes, je ne comprends vraiment pas <i>se met à sourire en venant taper le bout de ses doigts sur son chapeau</i> enfin bon");
}

function etape7() {
    parle('Raionhato', "<i>Pose sa main droite sur sa tête et la secoue doucement</i> -c'est pas ce que tu crois idiot...- sa n'à rien à voir..., elle m'à juste demander quelque chose et j'ai refuser tout simplement <i>croise les bras à nouveau et baisse la tête légèrement vers la gauche</i> -d'ailleurs ce qu'elle m'a dit étais-ce vrai?...je devrais peut-être retourner la voir...mais comment? et ou?-");
}

function etape8() {
    parle('???', "Aaaah Raion te voilà enfin je te cherchais <i>il avance dans sa direction tout en parlant assez fort</i> moi qui pensais que tu aurais été à la serre de combat comme à ton habitude j'ai à te parler");
}

function etape9() {
    showPerso(directeur);
}

function etape10() {
    parle('Lightkye', "Je vois je vois, ah je vois qu'on a besoin de toi, je ne serais pas loin si tu me cherches <i>fais demi-tour et fais signe de la main en partant</i>");
}

function etape11() {
    hidePerso(lightkye);
}

function etape12() {
    parle('Raionhato', "<i>Regarde alors le directeur venant se positionner en garde-à-vous</i> oui? -j'y étais partis mais...-");
}

function etape13() {
    parle('Directeur', "Il y a du nouveau! une jeune fille devrais venir te voir d'ici peu, elle t'expliquera mieux la situation que moi, en attendant j'ai une mission à te confier, un groupe de démons a été repéré à Hanta, je souhaiterais que tu y vas pour régler cette situation");
}

function etape14() {
    parle('Raionhato', "Et bien disons que je l'ai déjà rencontré et j'ai refusé de lui venir en aide -elle disait vrai alors...- oui vous pouvez compter sur-moi ! -des démons!??? Est-ce en rapport avec ce qu'elle avait à me dire?...-");
}

function etape15() {
    parle('Directeur', "Dans ce cas tu devras la retrouver, car c'est un élément important dans cette mission ! bien ravie de l'entendre je te laisse le choix, sois tu y vas seul où tu y vas avec Lightkye, qu'en dis-tu?");
}

function etape16(){
    hideDial(dialogue);
}

/**********************************************************************/

/*On commence par déclarer nos variables du html*/

var raion1 = document.getElementById('raion1');
var directeur1 = document.getElementById('directeur1');
var raion2 = document.getElementById('raion2');
var light1 = document.getElementById('light1');
var raion3 = document.getElementById('raion3');

/************************************************************/

/*Ici on déclare nos bouton avec l'evenement qui va se créer*/

bouton1.addEventListener('click' , Choix1);
bouton2.addEventListener('click' , Choix2);

/*****************************************************/

/*ensuite on met le temps au moment ou on veut qu'll's apparaissent*/

setTimeout(function(){
    document.getElementById('raion1').style.display= 'block';
},141000);

/*************************************************************/

/*Ici on déclare le dialogue par appport au 1e choix et la fin de la scène 2*/

function Choix1() {

    setTimeout(function(){
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('directeur1').style.display= 'block';
    },5000);
    
    if (bouton1) {
        
        setTimeout(function(){
            document.getElementById('directeur').style.display= 'none';
            document.getElementById('directeur1').style.display= 'none';
        },10000);
        
        setTimeout(function(){
            document.getElementById('raion2').style.display= 'block';
            document.getElementById('lightkye').style.display= 'block';
        },20000);
        
        setTimeout(function(){
            document.getElementById('raion2').style.display= 'none';
            document.getElementById('light1').style.display= 'block';
        },30000);
        
        setTimeout(function(){
            document.getElementById('light1').style.display= 'none';
            document.getElementById('raion3').style.display= 'block';
        },360000);

        raion1.innerHTML = "<b>Raionhato</b>: Il va venir avec moi s'il est d'accord";
        directeur1.innerHTML = "<b>Directeur</b>: Je suis ravi d'entendre cela, a présent je te laisse disposer <i>fais demi-tour et s'en vas</i>";
        raion2.innerHTML = "<b>Raionhato</b>: <i>Avance alors vers Light puis s'arrête à côté de lui</i> Light, j'ai une mission je dois me rendre à Hanta afin d'intercepté un groupe de malfaiteurs qui ont surement un plan, si tu es d'accord tu peux venir avec moi";
        light1.innerHTML = "<b>Light</b>: <i>Etant allonger dans l'herbe se relève</i> oui bien sûr ! dans tous les cas je n'avais rien de mieux à faire, allons régler le compte à ces malfrats <i>avance en avant</i>";
        raion3.innerHTML = "<b>Raionhato</b>: Allons-y alors, <i>suis Light entamant une démarche plutôt rapide afin de se rendre à destination</i>";
        setTimeout(function() {
            document.location = "../../pages/part2/choix2-1.html";
          },38000);
    }
}

/*************************************************************/

/*Ici on déclare le dialogue par appport au 2e choix et la fin de la scène 2*/

function Choix2() {

    setTimeout(function(){
        document.getElementById('raion1').style.display= 'none';
        document.getElementById('directeur1').style.display= 'block';
    },5000);

    if (bouton2) {

        setTimeout(function(){
            document.getElementById('directeur').style.display= 'none';
            document.getElementById('directeur1').style.display= 'none';
        },11000);
        
        setTimeout(function(){
            document.getElementById('raion2').style.display= 'block';
        },16000);

        raion1.innerHTML = "<b>Raionhato</b>: Je préfère y aller seul";
        directeur1.innerHTML = "<b>Directeur</b>: Je comprends, tu es toujours aussi solitaire, fais comme bon te semble, tu peux disposer <i>fais demi-tour puis s'en vas</i>";
        raion2.innerHTML = "<b>Raionhato</b>: <i>Se dirige alors vers la sortie de l'Université afin de se rendre dans la ville</i>";
        setTimeout(function() {
            document.location = "../../pages/part2/choix2-2.html";
          },18000);
    }
}

/*************************************************************/

/*Ici on me temps ou on veut que les étapes se déroulents*/

hideAllPersos();

setTimeout(etape0, 0);
setTimeout(etape1, 5000);
setTimeout(etape2, 22000);
setTimeout(etape3, 33000);
setTimeout(etape4, 34000);
setTimeout(etape5, 40000);
setTimeout(etape6, 48000);
setTimeout(etape7, 69000);
setTimeout(etape8, 86000);
setTimeout(etape9, 88000);
setTimeout(etape10, 94000);
setTimeout(etape11, 96000);
setTimeout(etape12, 99000);
setTimeout(etape13, 108000);
setTimeout(etape14, 120000);
setTimeout(etape15, 130000);
setTimeout(etape16, 140000);

/*********************************************************/

/*********************************************************************************************************/