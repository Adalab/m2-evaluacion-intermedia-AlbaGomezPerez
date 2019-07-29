'use strict'; 

const inputFill = document.querySelector('.input'); 
const button = document.querySelector('.check'); 
const textResult = document.querySelector('.message'); 
const numCont = document.querySelector('.cont'); 
const randomNum = random(100);


// function checking()


function random(max){
	return Math.floor(Math.random() * max);
  }
  console.log(randomNum); 
  

// inputFill =('click', checking); 