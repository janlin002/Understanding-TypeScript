import React from 'react'

const Function = () => {
    const count = (a:number, b: number, cb:(n1: number)=> void) =>{
        const result = a + b
        cb(result)
    }
    
    count(1, 2, (num: number)=>{
        console.log(num)
    })


    function sendRequest(data: string, cb: (response: any) => void) {
        // ... sending a request with "data"
        return cb({data: 'Hi there!'});
      }
       
    sendRequest('Send this!', (response) => { 
        console.log(response);
        return true;
    })

    type a = {
      name: string,
      age: number
    }

    type b = {
      height: number,
      weight: number
    }

    function UnionTypes(people: a & b){
      console.log(people)
    }

    UnionTypes({
      name: 'jan',
      age: 20,
      height: 180,
      weight: 100
    })

    /**
     * | => 符合一個即可
     * & => 兩個都要符合
     */

    type SingleNamePerson = {
      name: string;
    };

    type FullNamePerson = {
      name: string;
      surname: string;
    };

    // function getPerson(name: string): SingleNamePerson
    // function getPerson(name: string, surname: string): FullNamePerson
    // Error: Function implementation is missing or not immediately following the declaration.ts(2391)
    // 如果要解決上面的問題，需要把 function overload 改成 type alias
    // https://bobbyhadz.com/blog/typescript-function-implementation-is-missing
    
  return (
    <div>Function</div>
  )
}

export default Function