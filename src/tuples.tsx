import React from 'react'

const Tuples = () => {
  type PersonType = {
    name: string,
    age: number,
    favNumber: [string, number]
  }
  const person: PersonType = {
    name: 'jan',
    age: 19,
    favNumber: ['2', 7]
  }

  person.favNumber.push('12')

  console.log(person, 'person')

  return (
    <div>Tuples</div>
  )
}

export default Tuples