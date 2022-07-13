// 缓存代理
let mult = function (...rest) {
    console.log('计算阶乘')
    let a = 1
    for(let i = 0, len = rest.length; i < len; i++) {
        a *= rest[i]
    }

    return a
}

let plus = function (...rest) {
    console.log('计算累加')
    let a = 0
    for(let i = 0, len = rest.length; i < len; i++) {
        a += rest[i]
    }

    return a
}

// 主要代理
const proxyMutl = (function () {
    let cache = {}

    return function () {
        let args = Array.prototype.join.call(arguments, ',')

        if (args in cache) return cache[args]
        
        return cache[args] = mult.apply(this, arguments)
    }
})()

console.log('proxyMutl(1, 2, 3, 4)', proxyMutl(1, 2, 3, 4))
console.log('proxyMutl(1, 2, 3, 4)', proxyMutl(1, 2, 3, 4))


console.log('proxyMutl(1, 2, 3, 5)', proxyMutl(1, 2, 3, 5))


// 高阶函数实现缓存代理---js常见的使用方法

const ProxyMethod = function (fn) {
    let cache = {}
    return function () {
        let args = Array.prototype.join.call(arguments, ',')

        if (args in cache) return cache[args]
        
        return cache[args] = fn.apply(this, arguments)
    }
}

let proxyPlus = ProxyMethod(plus)
let proxyMult1 = ProxyMethod(mult)

console.log('plus', proxyPlus(1, 2, 3, 4))
console.log('plus1', proxyPlus(1, 2, 3, 4))
console.log('mult', proxyMult1(1, 2, 3, 4))
console.log('mult1', proxyMult1(1, 2, 3, 4))
