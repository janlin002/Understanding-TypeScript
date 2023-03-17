export class Product {
    name: string
    age: number

    constructor(a: string, b: number){
        this.name = a
        this.age = b
    }

    getUserInfo(){
        console.log(`${this.name} is  ${this.age} year old`)
    }
}