import React from 'react'

const Object = () => {
    const person: {name: string, age: number} = {
        name: 'jan',
        age: 24
    }

    console.log(person.age)

    // Nested object
    const product: {
        id: string;
        price: number;
        tags: string[]; // Array<string>
        details: {
            title: string;
            description: string;
        },
        // title: string|number[]
    } = {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
          title: 'Red Carpet',
          description: 'A great carpet - almost brand-new!'
        },
        // title: ['123', 4]
    }
      
  return (
    <div>Object</div>
  )
}

export default Object