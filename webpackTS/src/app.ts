import 'reflect-metadata'
import _ from 'lodash'
import { plainToClass } from 'class-transformer';
// import {
//     IsEmail,
// } from 'class-validator'

import { Product } from './product.modal'

// declare let GLOBAL:string // 使用全域的資料

// console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }), '123')

// console.log(GLOBAL)

const JAN = new Product('jan', 24)

JAN.getUserInfo()


const userJson = [
    {name: 'JAN', age: 24},
    {name: 'Bill', age: 24}
]

const family = plainToClass(Product, userJson)

for ( let item of family){
    // @IsEmail()
    console.log(item)
    console.log(item.getUserInfo())
}