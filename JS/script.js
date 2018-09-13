var audio = document.getElementById('audio');

/*Ici on modifie le son de fond de la classe*/

audio.innerHTML= "<audio autoplay volume ><source src='Son/salle.mp3'></audio>";

/*******************************************/

/*Ici on modifie l'entrée du Light Novel*/

confirm("Bienvenue à toi tu vas maintenant découvrir l'histoire d'un heros");

if (confirm("souhaite tu continuer?")) { 
    alert("Bien allons-y alors");
    }

/******************************************************/

/*Ici on modifie le prologue */

var chaine = "Dans un monde de paix ou les Etudiants qui ne sont pas tant ordinaires que cela mènent une vie paisible, une chose qui ne c'était pas produite depuis des lustres va ce produire à nouveau...<br> Ensemble ils devront s'unir et rester solide afin de mener à bien leurs objectifs"; 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;

for (i=0; i<nb_car; i++) {
	texte[i] = txt+tableau[i];
	var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
	document.getElementById("histoire").innerHTML = texte[actual_texte];
	actual_texte++;
	if(actual_texte >= texte.length)
		actual_texte = nb_msg;
}

if(document.getElementById)
	setInterval("changeMessage()",40)

/**************************************************/

/*Ixi on déclare nos variables*/

var narratif = document.getElementById('narratif');
var dialogue = document.getElementById('dialogue');
var histoire = document.getElementById('histoire');
var prologue = document.getElementById('prologue');
var Choix = document.getElementById('Choix');

var akira     = document.getElementById('akira');
var raionhato = document.getElementById('raionhato');

var allPersos = [akira, raionhato];

/**********************************************/

/*Ici les fonction Utiles*/

function hideHistory(element) {
	element.style.display= 'none';
}

function hidePrologue(element) {
	element.style.display= 'none';
}

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

function narr(texte) {
	var html =texte;
	narratif.innerHTML = html;
}

function parle(qui, texte) {
	var html = '<b>' + qui + '</b>: ' + texte;
	dialogue.innerHTML = html;
}

/**********************************************/

/*Ici on déclare les scènes étapes par étapes*/

function nar() {
	hideHistory(histoire);
	narr("[La sonnerie de l'Université retentit, les élèves s'en vont, puis on peut entendre une personne qui coure dans les couloirs celle-ci bousculait parfois des personnes tout en criant jusqu'à...]");
}

function pro() {
	hidePrologue(prologue);
}

function etape1(){
	parle('Akira', "Hey!!! <i>essoufflé pousse les portes afin d'entrer dans la salle de classe, respirer rapidement</i> Je souhaiterais voir un dénommé Raionhato !!");
}

function etape2(){
	showPerso(akira);
}

function etape3() {
	parle('Raionhato', "<i>Entends son prénom, se retourne et marche en direction de la fille puis s'arrête face à elle</i> Oui c'est bien moi, que me veux tu? et qui est tu?");
}

function etape4(){
	showPerso(raionhato);
}

function etape5() {
	parle('Akira', "Je m'appelle Akira et j'ai été envoyée afin de venir te chercher, car tu as déjà sauvé le monde une fois et beaucoup de choses ce passe depuis ces derniers mois il n'y a pas de temps à perdre, nous avons vraiment besoin de toi je t'en prie...");
}

function etape6() {
	parle('Raionhato', '<i>Se met alors à réfléchir</i>');
}

/***************************************************/

/*Ici on vient mettre en place notre choix*/

setTimeout(function(){
	document.getElementById('Choix').style.display= 'block';
},63000);

function Choice() {
	i = document.Choix.Liste.selectedIndex;
	if (i == 0) return;
	url = document.Choix.Liste.options[i].value;
	parent.location.href = url;
}

/************************************************/

/*Ici on déclare le moment a laquel on veut que la scene apparaisse*/

hideAllPersos();

setTimeout(nar, 18000);
setTimeout(pro, 25000);
setTimeout(etape1, 25000);
setTimeout(etape2, 27000);
setTimeout(etape3, 34000);
setTimeout(etape4, 38000);
setTimeout(etape5, 48000);
setTimeout(etape6, 63000);

/*******************************************************/