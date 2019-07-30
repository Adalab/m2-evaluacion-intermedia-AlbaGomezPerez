'use strict'; 

const inputFill = document.querySelector('.input'); 
const button = document.querySelector('.check'); 
const textResult = document.querySelector('.message'); 
const numCont = document.querySelector('.cont'); 
let randomNum = random(100);
let cont = 0; 
const resetButton = document.querySelector('.reset'); 


// función número random
function random(max){
	const randomNumberGenerated = Math.floor(Math.random() * max);
	console.log(randomNumberGenerated); 
	return randomNumberGenerated;
}


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
		// numero mas bajo
		if(numberUser < randomNum){
			textResult.innerHTML = 'Lo siento, tu número es demasiado bajo'; 
		}else{
			// número mayor de 100
		// 	if(numberUser > 100){
		// 	textResult.innerHTML = 'Recuerda, tienes que elegir un número menor de 100';
		// }else{
		
			// número acertado
			textResult.innerHTML = 'Has ganado, campeona';
			}
	}
}

function reset(){
	inputFill.value = '';
	numCont.innerHTML = '0'; 
	cont = 0;  
	textResult.innerHTML = 'Escribe un número y dale a <span class="cursive">Comprueba</span>'
	randomNum = random(100);
}

// evento (click)
button.addEventListener('click', checking); 

// evento (click reset)
resetButton.addEventListener('click', reset); 

// numero mayor de 100 
// numero menor de 0 
// parseInt 
// input vacio 
// boton reset 
// key???
