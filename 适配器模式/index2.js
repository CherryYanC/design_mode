// AOP --> 面向切面编程

Function.prototype.before = function (func) {
    let self = this
    return function () {
        // 先执行before,修正this
        func.call(this, arguments)
        // 然后执行原函数
        return self.call(this, arguments)

    }
}

Function.prototype.after = function (afterFn) {
    const self = this
    return function () {
        const ret = self.call(this, arguments)
        afterFn.call(this, arguments)
        console.log('ret', ret)
        return ret
    }
}

let func = function () {
    console.log(2)
}
 
func = func.before(function() {
    console.log(1)
}).after(function () {
    console.log(3)
})

func()