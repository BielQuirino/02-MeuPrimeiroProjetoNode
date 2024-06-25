const player1 = {
    NAME: "Goku Base",
    KI: 4,
    ULTIMATE: 7,
    STRENGTH: 4,
    POINTS: 0
}
const player2 = {
    NAME: "Goku SSJ",
    KI: 6,
    ULTIMATE: 5,
    STRENGTH: 6,
    POINTS: 0
}
const player3 = {
    NAME: "Goku Blue",
    KI: 10,
    ULTIMATE: 6,
    STRENGTH: 10,
    POINTS: 0
}
const player4 = {
    NAME: "Goku Black",
    KI: 7,
    ULTIMATE: 3,
    STRENGTH: 8,
    POINTS: 0
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = "BATALHA DE KI";
            break;
        case random < 0.66:
            result = "BATALHA DE FORÇA";
            break;
        default:
            result = "DUELO DE ESPECIAIS";
    }

    return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playBattleEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`Batalha ${round}`);

        let block = await getRandomBlock();
        console.log(`Duelo: ${block}`);

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalSkillTest1 = 0;
        let totalSkillTest2 = 0;

        if (block === "BATALHA DE KI") {
            totalSkillTest1 = diceResult1 + character1.KI;
            totalSkillTest2 = diceResult2 + character2.KI;
            await logRollResult(character1.NAME, "KI", diceResult1, character1.KI);
            await logRollResult(character2.NAME, "KI", diceResult2, character2.KI);

            if (totalSkillTest1 > totalSkillTest2) {
                console.log(`${character1.NAME} marcou 1 ponto`);
                character1.POINTS++;
            } else if (totalSkillTest2 > totalSkillTest1) {
                console.log(`${character2.NAME} marcou 1 ponto`);
                character2.POINTS++;
            }
        } else if (block === "BATALHA DE FORÇA") {
            totalSkillTest1 = diceResult1 + character1.STRENGTH;
            totalSkillTest2 = diceResult2 + character2.STRENGTH;
            await logRollResult(character1.NAME, "STRENGTH", diceResult1, character1.STRENGTH);
            await logRollResult(character2.NAME, "STRENGTH", diceResult2, character2.STRENGTH);

            if (totalSkillTest1 > totalSkillTest2) {
                console.log(`${character1.NAME} marcou 1 ponto`);
                character1.POINTS++;
            } else if (totalSkillTest2 > totalSkillTest1) {
                console.log(`${character2.NAME} marcou 1 ponto`);
                character2.POINTS++;
            }
        } else if (block === "DUELO DE ESPECIAIS") {
            let ultimateResult1 = diceResult1 + character1.ULTIMATE;
            let ultimateResult2 = diceResult2 + character2.ULTIMATE;
            await logRollResult(character1.NAME, "ULTIMATE", diceResult1, character1.ULTIMATE);
            await logRollResult(character2.NAME, "ULTIMATE", diceResult2, character2.ULTIMATE);

            console.log(`${character1.NAME} confrontou especial com ${character2.NAME}`);

            if (ultimateResult1 > ultimateResult2 && character2.POINTS > 0) {
                character2.POINTS--;
            }
            if (ultimateResult2 > ultimateResult1 && character1.POINTS > 0) {
                character1.POINTS--;
            }

            console.log(ultimateResult1 === ultimateResult2 ? "Empate" : "");
        }

        console.log("------------------------------------------------------------");
    }

    console.log(`Batalha finalizada! ${character1.NAME}: ${character1.POINTS} pontos, ${character2.NAME}: ${character2.POINTS} pontos`);
    if (character1.POINTS > character2.POINTS) {
        console.log(`${character1.NAME} é o vencedor!`);
    } else if (character2.POINTS > character1.POINTS) {
        console.log(`${character2.NAME} é o vencedor!`);
    } else {
        console.log("A batalha terminou em empate!");
    }
}

(async function main() {
    console.log(`Batalha entre ${player1.NAME} e ${player2.NAME} começando`);
    await playBattleEngine(player1, player2);
})();

