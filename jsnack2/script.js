// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const party = ["pippo" , "franco" , "pluto", "martina" , "giuseppe" ]

let announcement = prompt("Qual è il tuo nome?")
let isNameThere = false
for ( i = 0 ; i <= party.length; i++){
    if (party[i] === announcement){
        isNameThere= true
    }
}

if (isNameThere){
    alert(`Puoi entrare`)
} else{
    alert(`Non puoi entrare`)
}