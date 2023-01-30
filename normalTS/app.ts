class myClass {
    // name: string
    employees: string[] = []

    constructor(public name:string){
        // this.name = n
    }

    describe(){
        // console.log('Department'+ name) 
        // 這邊的 name 是 window 裡面的 name ，如果要使用 myClass 裡面的 name，必須要加上 this

        console.log('Department' + '' + this.name) 
    }

    addEmplyee(emloyee: string) {
        this.employees.push(emloyee)
    }

    printEmployeeInformation(){
        console.log(this.employees)
    }
}

const test = new myClass('123')

test.addEmplyee('david')
test.addEmplyee('bill')

test.employees[2] = 'amy'

test.printEmployeeInformation()

test.describe()