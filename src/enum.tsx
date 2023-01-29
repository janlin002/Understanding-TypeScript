import React from 'react'

const Enum = () => {
    enum Progress {
        NotStarted,
        InProgress,
        IsCompleted
    }

    const a = Progress.IsCompleted

    console.log(a)


    enum requestStatusCodes {
        error,
        success,
    }
  console.log(requestStatusCodes.error, 'error')
  return (
    <div>Enum</div>
  )
}

export default Enum