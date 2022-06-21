// 私有属性与私有方法，特权方法，对象共有属性和对象共有方法，构造器
var Book = function (id, name, price) {
    // 私有属性
    var num = 1;
    // 私有方法
    function checkId() {

    };
    // 特权方法
    this.getName = function () {

    };
    this.getPrice = function () {

    };
    this.setName = function () {

    };
    this.setPrice = function () {

    };
    // 对象共有属性
    this.id = id;
    // 对象共有方法
    this.copy = function () {

    };
    // 构造器
    this.setName(name);
    this.setPrice(price);
}
// 类静态共有属性（对象不能访问）
Book.ischinese = true;
// 类静态共有方阿福（对象不能访问）
Book.resetTime = function () {
    console.log('new Time')
};
Book.prototype = {
    // 共有属性
    isJsBook: false,
    // 共有方法
    display: function (){}
}

var b = new Book(11,'Javascript设计模式',50);
console.log(b.num)
console.log(b.isJsBook)
console.log(b.id)
console.log(b.ischinese)

console.log(Book.ischinese)
Book.resetTime()














