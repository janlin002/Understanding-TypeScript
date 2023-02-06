var GET_SET = /** @class */ (function () {
    function GET_SET() {
        this.mySecret = "secret passcode";
    }
    Object.defineProperty(GET_SET.prototype, "getMySecret", {
        // 定義getter存取子 讀取 屬性值
        get: function () {
            return this.mySecret;
        },
        // 定義setter存取子 修改 屬性值
        set: function (name) {
            if (name && name === this.mySecret) {
                console.log('IN');
            }
            else {
                console.error('error');
            }
        },
        enumerable: false,
        configurable: true
    });
    return GET_SET;
}());
var JanBoyOp = new GET_SET();
// JanBoyOp.getMySecret = 'hi'
// if (JanBoyOp.getMySecret) {
//     alert(JanBoyOp.getMySecret); //Una Lin
// }
// Accessors are only available when targeting ECMAScript 5 and higher.
