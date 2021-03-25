"use strict";
const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    let num = +input.value;
    if(num >= 18 && num < 69){
        console.log('Welcome');
    }
    else if(num > 69){
        console.log('WTF?')

    }
    else{
        console.log("Fuck you");
    }
    switch (num){
        case 15: 
            console.log('loh');
            break;
        case 16:
            console.log('krasava');
            break;
        default:
            console.log('ebat');
    }
}
