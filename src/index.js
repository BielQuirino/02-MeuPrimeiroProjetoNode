const player1 = {
    NAME:"Goku Base",
    KI:"4",
    LIFE:"100",
    STRENGTH:"4",
}
const player2 = {
    NAME:"Goku SSJ",
    KI:"6",
    LIFE:"200",
    STRENGTH:"6",
}
const player3 = {
    NAME:"Goku Blue",
    KI:"10",
    LIFE:"300",
    STRENGTH:"10",
}
const player4 = {
    NAME:"Goku Black",
    KI:"7",
    LIFE:"250",
    STRENGTH:"8",
}

async function rollDice(){
   return Math.floor(Math.random() *6) +1;
}


