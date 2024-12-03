//  1. L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

// let number1 = parseInt(prompt ("inserisci un numero")) 

// while (isNaN (number1)){
//     number1 = parseInt(prompt ("inserisci un numero")) 
// }

// let number2 = parseInt(prompt ("inserisci un numero")) 

// while (isNaN (number2)){
//     number2 = parseInt(prompt ("inserisci un numero")) 
// }

let number1;
do{
    number1 = parseFloat(prompt ("inserisci un numero"))
} while (isNaN (number1))

let number2;
do{
    number2 = parseFloat(prompt ("inserisci un numero"))
} while (isNaN (number2))

if (number1 > number2){
    console.log(` Il numero maggiore è: ${number1}` )
}
else if (number2 > number1){
    console.log(` Il numero maggiore è: ${number2}` )
}
else{
    console.log(` I numeri sono uguali` )
}