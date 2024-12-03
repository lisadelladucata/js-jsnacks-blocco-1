//  1. L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

let number1 = prompt ("inserisci un numero")
let number2 = prompt ("inserisci un numero")

if (number1 > number2){
    console.log(` Il numero maggiore è: ${number1}` )
}
else if (number2 > number1){
    console.log(` Il numero maggiore è: ${number2}` )
}
else{
    console.log(` I numeri sono uguali` )
}