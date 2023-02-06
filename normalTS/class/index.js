var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(color) {
        this.secret = '';
        this.color = color;
        this.descroption = '我是車子';
        this.brakes = '商業機密的煞車方式';
    }
    Car.prototype.getDescription = function () {
        return this.descroption;
    };
    Car.prototype.getBossSecret = function () {
        return this.secret;
    };
    Car.prototype.triggerBrakes = function () {
        if (this.brakes === '商業機密的煞車方式') {
            return '用了商業機密的煞車方式';
        }
        return '沒有機密方式，沒有煞車';
    };
    return Car;
}());
var car1 = new Car('紅色'); // new 產生 Instance (實例)
// const car2 = new Car();
// 兩者皆 print 出 "我是車子"
console.log(car1.getDescription());
// console.log(car2.getDescription());
// console.log(car1.getBossSecret()) // Property 'getBossSecret' is private and only accessible within class 'Car'.
// private 實例 無法使用
// 繼承 inheritance
// CarII -> 子類別, Car -> 父類別
// 透過 super 就能穿越父子間的羈絆
// super 可以讓 子類別 取得 父類別 的方法
// 在子類別中執行的 super 等同於父類別的 constructor
var CarII = /** @class */ (function (_super) {
    __extends(CarII, _super);
    function CarII() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarII.prototype.getDescription = function () {
        return "".concat(_super.prototype.getDescription.call(this), " \u7B2C\u4E8C\u4EE3\u5F37\u5316\u7248");
    };
    CarII.prototype.triggerBrakes = function () {
        return "".concat(_super.prototype.triggerBrakes.call(this), " \u7684\u7121\u6575\u6539\u826F\u7248");
    };
    return CarII;
}(Car));
var greenCar = new CarII("綠色");
console.log(greenCar.getDescription());
console.log(greenCar.triggerBrakes());
// Static
// 透過 Static 宣告的 Method 能直接在 Class 上呼叫，而不是 Instance 
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    /* 其餘省略 */
    Car2.getComment = function () {
        return '這是初代版車子';
    };
    return Car2;
}());
var Car2II = /** @class */ (function (_super) {
    __extends(Car2II, _super);
    function Car2II() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* 其餘省略 */
    Car2II.getComment = function () {
        return '這是第二代車子';
    };
    return Car2II;
}(Car));
console.log(Car2.getComment()); // 這是初代版車子
console.log(Car2II.getComment()); // 這是第二代車子
// Protected 保護
// Protected 和 Private 很類似，差別在 Private 是私有的屬性，因此除了本身的 類別 class外，其他人調用就會錯
// Protected 允許 子類別 去做調用
// https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-class-%E7%94%A8%E6%B3%95-20ade3ce26b8
