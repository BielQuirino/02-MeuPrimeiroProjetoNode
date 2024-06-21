const player1 = {
    NAME:"Goku Base",
    KI:"4",
    ULTIMATE:"7",
    STRENGTH:"4",
}
const player2 = {
    NAME:"Goku SSJ",
    KI:"6",
    ULTIMATE:"5",
    STRENGTH:"6",
}
const player3 = {
    NAME:"Goku Blue",
    KI:"10",
    ULTIMATE:"6",
    STRENGTH:"10",
}
const player4 = {
    NAME:"Goku Black",
    KI:"7",
    ULTIMATE:"3",
    STRENGTH:"8",
}

async function rollDice(){
   return Math.floor(Math.random() *6) +1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result 
    
    switch (true) {
        case random < 0.33:
            result = "Batalha de KI";
            break;  
        case random < 0.66:
            result = "Batalha de Força";
            break;
        default :
            result = "Duelo de Especiais";
    }

    return result
}

async function playBattleEngine(character1,character2){
    for(let round =1; round <=5; round++){
        console.log(`Batalha ${round}`);

    let block = await getRandomBlock();
    console.log(`Duelo: ${block}`);
    }
}

(async function main(){
    console.log(`Batalha entre ${player1.NAME} e ${player2.NAME} começando`);

    await playBattleEngine(player1,player2);
})();

