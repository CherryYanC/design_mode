// Function.prototype.bind = function() {
//     let self = this
//     let context = [].shift.call(arguments)
//     let args = [].slice.call(arguments)
//     console.log('context', context)
//     console.log('args', args)
//     return function () {
//         return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
//     }
// }

// let obj = {
//     name: 'world'
// }

// let func = function (a,b,c,d) {
//     console.log(this.name)
//     console.log([a,b,c,d])
// }.bind(obj, 1, 2)

// func(3,4)


// /**
//  * ---------------------------------------
//  * 命令模式
//  */

// const Tv = {
//     open: function () {
//         console.log('打开电视机')
//     },
//     close: function () {
//         console.log('关闭电视机')
//     }
// }

// class TvCommand {
//     constructor(Tv) {
//         this.Tv = Tv

//     }
//     execute() {
//         this.Tv.open()
//     }
//     undo() {
//         this.Tv.close()
//     }
// }

// const manager = new TvCommand(Tv)

// manager.execute()
// manager.undo()


// class 继承
class Sup {
    name = 'super'

    sayName() {
        return this.name
    }
}

class Sub1 extends Sup {
    constructor() {
        super()
    }

    changeName() {
        console.log('changeName---sub1')
        this.name = 'sub1'
    }
}

class Sub2 extends Sup {
    constructor() {
        super()
    }

    changeName() {
        console.log('changeName---sub2')
        this.name = 'sub2'
    }
}

const sub1 = new Sub1()
const sub2 = new Sub2()

console.log('sub1--', sub1.sayName())
console.log('sub2--', sub2.sayName())
sub1.changeName()
console.log('----before----')
console.log('sub1--', sub1.sayName())
console.log('sub2--', sub2.sayName())