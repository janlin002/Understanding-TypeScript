var myClass = /** @class */ (function () {
    function myClass(n) {
        this.employees = [];
        this.name = n;
    }
    myClass.prototype.describe = function () {
        // console.log('Department'+ name) 
        // 這邊的 name 是 window 裡面的 name ，如果要使用 myClass 裡面的 name，必須要加上 this
        console.log('Department' + '' + this.name);
    };
    myClass.prototype.addEmplyee = function (emloyee) {
        this.employees.push(emloyee);
    };
    myClass.prototype.printEmployeeInformation = function () {
        console.log(this.employees);
    };
    return myClass;
}());
var test = new myClass('123');
test.addEmplyee('david');
test.addEmplyee('bill');
test.employees[2] = 'amy';
test.printEmployeeInformation();
test.describe();
