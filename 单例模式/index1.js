/**
 * @description 代理实现单里模式
 */

let ProxySingletonCreateDiv = (function() {
    let instance = null

    return function (html) {
        if (!instance) {
            instance = new CreateDiv(html)
        }
        return instance
    }
})()

class CreateDiv {
    constructor(html) {
        this.html = html
    }

    init() {
        let div = document.createElement('div')

        div.interHTML = this.html

        document.body.appendChild(div)
    }
}

let div1 = new ProxySingletonCreateDiv('div1')
let div2 = new ProxySingletonCreateDiv('div2')

console.log('div1 === div2', div1 === div2)


function fn() {
    let a = 0

    return function () {
        console.log ('a', a)
        a++ 
    }
}
