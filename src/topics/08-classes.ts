export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No hay dirección'
    ) {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string, 
//         public age: number, 
//         public realName: string
//     ) {
//         super(realName, 'No hay dirección');
//     }
// }

export class Hero {
    // public person: Person;

    constructor(
        public alterEgo: string, 
        public age: number, 
        public realName: string,
        public person: Person
    ) {
        // this.person = new Person(realName);
    }
}

const tony = new Person('Tony', 'Stark', 'Malibu, California');
const ironman = new Hero('Iron Man', 45, 'Tony Stark', tony);
console.log(ironman);