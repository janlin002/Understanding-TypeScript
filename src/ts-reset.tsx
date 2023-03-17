import React from 'react'

const TsReset = () => {
    const arr = [1, 2, 3, undefined]

    const result = arr.filter(Boolean)

    console.log(result, 'result')
  return (
    <div>TsReset</div>
  )
}

export default TsReset