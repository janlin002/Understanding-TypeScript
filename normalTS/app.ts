class Car4 {
    // constructor() {
    //     console.log('Creating a new car');
    // }
    abc: number = 1
}

class Porsche extends Car4 {
    constructor() {
        super();
        console.log('Creating Porsche');
    }
}

let c = new Porsche();

// class Login {
//     protected password: string = '123456';
    
//   }
  
//   // CarII 繼承了 Car
//   class User extends Login {
//     userLogin() :void{
//       console.log(this.password)
//     }
//   }
  
//   User.userLogin()