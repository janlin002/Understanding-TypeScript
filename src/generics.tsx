import React from 'react'

const Generics = () => {
    console.log('123')

    function loggingIdentity<T>(arg: T): T {
        console.log(arg);
        return arg;
    }

    loggingIdentity(['1', '2'])

    interface Lengthwise{
        length: number
    }

    function loggingIdentity2<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);
        return arg;
    }

    loggingIdentity2(['1', '2'])

    interface mySelfInterface {
      name: string,
      age: number,
    }

    function mySelfGenerics<T extends mySelfInterface>(person: T){
      console.log(person.name, person.age)
    }
    mySelfGenerics({
      name: 'jan',
      age: 24,
      sex: 'male'
    })


    type Person = {
      firsName: string;
      lastName: string;
    };
    
    type PersonKey = keyof Person | string;

    const myTest: PersonKey = '123'

    console.log(myTest)

    const user = {
      firstName: 'PJ',
      lastName: 'Chen',
      age: 35,
      isAdmin: true,
    };
    
    const product = {
      name: 'iPad mini',
      price: 14900,
      manufacturer: 'Apple',
      madeIn: 'China',
    };
    
    function getObjValue<T>(obj: T, key: keyof T) {
      return obj[key];
    }
    
    const isAdmin = getObjValue(user, 'isAdmin'); // true
    const manufacturer = getObjValue(product, 'manufacturer'); // 'Apple'

    interface mergeLength {
      length: number
    }
  
  function mergeObj<T extends mergeLength>(element: T){
    if(element.length === 0){
      return true
    }else if(element.length > 0){
      return false
    }
    return null
  }

  mergeObj(['123', '234'])

  function keyOfTest<T, U extends keyof T>(element: T, item: U){
    const target = element[item]

    return target
  }

  keyOfTest({name: 'JAN'}, 'name')



  return (
    <div>Generics</div>
  )
}

export default Generics