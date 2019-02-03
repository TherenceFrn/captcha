	var nombreImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

	var compte = 0;

	var compteImages = 0;

    var captchaValid = false;


function captchaGen(){
	var elem = document.getElementById("gen-captcha");
	elem.remove();
	/*document.write('<table><thead><tr><th colspan="3">Captcha</th></tr></thead><tbody><tr><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td></tr><tr><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td></tr><tr><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td><td><img src="image-1.jpg"></td></tr><tr><td><a>Changer d\'image</a></td><td><a>Valider</a></td></tr></tbody></table>');*/
	document.getElementById("captchaTable").classList.add('shown');
	document.getElementById("captchaTable").classList.remove('hidden');

	i = 1;
	while(i != 10){

	/*	tdname = "tableTd" + i;
		console.log(tdname);
		imgname = "image-" + i;
		console.log(imgname);
		document.getElementById(tdname).innerHTML = '<img src="' + imgname + '.jpg">';
		i++;*/
		var tablL = nombreImages.length;
		var j = Math.floor((Math.random() * tablL) + 1);
		console.log(j);
		j = parseInt(j);
		var removerN = nombreImages.splice(j, 1);
		var tdname = "tableTd" + i;
		console.log(tdname);
		var imgname = "image-" + j;
		console.log(imgname);
		if(j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 9){
		document.getElementById(tdname).innerHTML = '<img style="cursor:pointer;" onClick="addCompte();" src="' + imgname + '.jpg">';
		compteImages++;
		}else{
		document.getElementById(tdname).innerHTML = '<img style="cursor:pointer;" src="' + imgname + '.jpg">';
		}
		i++;
	}
};

/*FONCTION QUI CHANGE L'IMAGE LORSQUE QU'UNE DU CAPTCHA A ETE SELCTIONNE*/

function tdclicked(number){

		tdname = "tableTd" + number;

		document.getElementById(tdname).innerHTML = '<img style="cursor:not-allowed;" src="valide.png">';
}


/*FONCTION QUI REINITALISE LES IMAGES POUR EN METTRE DES NOUVELLES*/

function rein() {
    alert('Changement des images');
    i = 1;
    nombreImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
    compte = 0;
	compteImages = 0;
	while(i != 10){
		var tablL = nombreImages.length;
		var j = Math.floor((Math.random() * tablL) + 1);
		console.log(j);
		j = parseInt(j);
		var removerN = nombreImages.splice(j, 1);
		var tdname = "tableTd" + i;
		console.log(tdname);
		var imgname = "image-" + j;
		console.log(imgname);
		if(j == 1 || j == 2 || j == 3 || j == 4 || j == 5 || j == 6 || j == 7 || j == 8 || j == 9){
		document.getElementById(tdname).innerHTML = '<img onClick="addCompte();" src="' + imgname + '.jpg">';
		compteImages++;
		}else{
		document.getElementById(tdname).innerHTML = '<img src="' + imgname + '.jpg">';
		}
		i++;
	}
};

function addCompte(){

	compte++;
}
/*on a une variable qui compte jusqu'a 9 
ensuite on a un array avec des valeurs de 1 a +infini
et a chaque passaqge de la boucle de 1 a 9 on prends une valeur de l'array au hasard en la supprimant pour qu'elle ne reaparaisse pas*/
var validCaptchaB = document.getElementById('validCaptcha');
validCaptchaB.onclick = function() {
    alert('Vous venez de valider');
    if(compte == compteImages){

        document.location.href="acceuil.html"; 

        captchaValid = true;

    }else if(compte != compteImages){


    	alert('Vous n\' avez pas trouvé les bonnes images');
    	alert('Réinitialisation du Captcha');
    	rein();
    }else{


    }
    
}
