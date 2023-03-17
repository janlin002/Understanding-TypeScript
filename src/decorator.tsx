function Logger(constructor: Function){
    console.log('Logger...')
    console.log(constructor)
}

@Logger
class Person {
    name = 'Max'

    constructor(){
        console.log('Creating person object...')
    }
}

const pers2 = new Person

function Logger2(logString: string){
    return (constructor: Function) =>{
        console.log(constructor)
        console.log(logString)
    }
}

@Logger2('LOGGER')
class Person2 {
    name = 'Max'

    constructor(){
        console.log('Creating person object...')
    }
}

const pers = new Person2

// 多個 Decorator 會由下往上執行
