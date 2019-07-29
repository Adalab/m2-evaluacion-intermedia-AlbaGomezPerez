'use strict'; 

const inputFill = document.querySelector('.input'); 
const button = document.querySelector('.check'); 
const textResult = document.querySelector('.message'); 
const numCont = document.querySelector('.cont'); 
const randomNum = random(100);
let cont = 0; 


// función número random
function random(max){
	return Math.floor(Math.random() * max);
}
console.log(randomNum); 


function checking(){
	// al contador le decimos que sume uno cada vez que hacemos click
	cont = cont + 1; 
	numCont.innerHTML=cont; 
	
	// hacemos una variable (va a cambiar) sobre el número que introducde el usuario
	let numberUser = inputFill.value; 

	// numero más alto
	if(numberUser > randomNum){
		textResult.innerHTML = 'Lo siento, tu número es demasiado alto'; 
	}else{
		// numero mas bajo
		if(numberUser < randomNum){
			textResult.innerHTML = 'Lo siento, tu número es demasiado bajo'; 
		}else{
			// número acertado
			textResult.innerHTML = 'Has ganado, campeona';
		}
	}
}


// evento (click)
button.addEventListener('click', checking); 