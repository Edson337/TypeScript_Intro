function addNumbers(a:number, b:number) {
    return a + b;
}

const restNumbers = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply(fistNumber:number, secondNumber?:number, base:number = 2):number {
    return fistNumber * base;
}

// const result:number = addNumbers(1, 2);
// const rest:string = restNumbers(1, 2);
// const multiplyResult:number = multiply(5);
// console.log({result, rest, multiplyResult});

interface Character {
    name:string;
    hp:number;
    showHp: () => void;
}

const healCharacter = (character:Character, amount:number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`HP: ${this.hp}`);
    }
}

healCharacter(strider, 20);

strider.showHp();