// 模拟一个弹窗
class Modal {
    static instance = null
    constructor(state) {
        this.state = state
    }

    show() {
        if(this.state = 'show') {
            console.log('Modal show')
            return
        }
        this.state = 'show'
    }

    hide() {
        if(this.state = 'hide') {
            console.log('Modal hide')
            return
        }
        this.state = 'hide'
    }

    static getInstance(state) {
        if(!this.instance) {
            this.instance = new Modal(state)
        }

        return this.instance
    }
}

const p1 = Modal.getInstance('hide')
const p2 = Modal.getInstance('show')

console.log(p1 === p2)
