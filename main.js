'use strict'; 

const inputFill = document.querySelector('.input'); 
const button = document.querySelector('.check'); 
const textResult = document.querySelector('.message'); 
const numCount = document.querySelector('.cont'); 
let randomNum = random(100);
let count = 0; 
const resetButton = document.querySelector('.reset'); 
 


// función número random
function random(max){
	const randomNumberGenerated = Math.floor(Math.random() * max);
	console.log(randomNumberGenerated); 
	return randomNumberGenerated;
}


function checking(){
	// al contador le decimos que sume uno cada vez que hacemos click
	count = count + 1; 
	numCount.innerHTML= count; 
	
	// hacemos una variable (va a cambiar) sobre el número que introducde el usuario
	let numberUser = parseInt(inputFill.value); 
	if(numberUser > 100){
		textResult.innerHTML = 'Tienes que elegir un número menor de 101';
	}else{
		if(numberUser < 0){
			textResult.innerHTML = 'Tienes que elegir un número mayor de 0';
		}else{
		// numero más alto
			if(numberUser > randomNum){
				textResult.innerHTML = 'Lo siento, tu número es demasiado alto'; 
			}else{
				// numero mas bajo
				if(numberUser < randomNum){
					textResult.innerHTML = 'Lo siento, tu número es demasiado bajo'; 
				}else if(numberUser === randomNum) {
				
					
					// número acertado
					textResult.innerHTML = 'Has ganado, campeona';
				}
			}
		}
	}
}

function reset(){
	inputFill.value = '';
	numCount.innerHTML = '0'; 
	count = 0;  
	textResult.innerHTML = 'Escribe un número y dale a <span class="cursive">Comprueba</span>'
	randomNum = random(100);
}




// evento (click)
button.addEventListener('click', checking); 

// evento (click reset)
resetButton.addEventListener('click', reset); 

// evento y dentro su función flecha (press enter)
inputFill.addEventListener('keyup', event => {
	if (event.keyCode === 13){
		checking(); 	
	}
}); 



 
// input vacio 
// key??? 13


