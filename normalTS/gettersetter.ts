class GET_SET {
    private mySecret: string = "secret passcode";

    // 定義getter存取子 讀取 屬性值
    get getMySecret(): string {
        return this.mySecret
    }

    // 定義setter存取子 修改 屬性值
    set getMySecret(name: string){
        if(name && name === this.mySecret){
            console.log('IN')
        }else {
            console.error('error')
        }
    }
}

let JanBoyOp = new GET_SET()

// JanBoyOp.getMySecret = 'hi'
// if (JanBoyOp.getMySecret) {
//     alert(JanBoyOp.getMySecret); //Una Lin
// }


// Accessors are only available when targeting ECMAScript 5 and higher.

class superMan{
    mathHW: string;

    constructor(){
        this.mathHW = '數學作業'
    }

    copyMathHw(){
        return this.mathHW
    }
}

const Janlin002 = new superMan()
Janlin002.copyMathHw()
