import React from 'react'

const Interface = () => {
    interface People {
        name: string
        age: number
    
        doSomthing(somthing: string) :void
    }

    interface Pet extends People {
        petName: string
        petAge: number
    }

    type SquareConfig = {
        color?: string;
        width?: number;
      }

    const mee: SquareConfig = {
        width: 123
    }

    console.log(mee, 'mee')

    // type People = {
    //     name: string
    //     age: number
    
    //     doSomthing(somthing: string) :void
    // }
    
    const amyLu: Pet = {
        name: 'amy',
        age: 46,
        doSomthing(somthing: string){
            console.log(somthing)
        },

        petName: 'tuotuo',
        petAge: 10
    }
    
    amyLu.doSomthing('看書')
    console.log(amyLu.petName)
  return (
    <div>interface</div>
  )
}

export default Interface

// class 中要使用 interface 必須要使用 implements(類似extends)
// ?: 代表不一定會用到(非必填)
// JavsScript 中沒有 interface 這個觀念，只適用於 typeScript 開發階段

// type 不能 extends
