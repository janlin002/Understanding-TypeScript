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


    
  return (
    <div>Function</div>
  )
}

export default Function