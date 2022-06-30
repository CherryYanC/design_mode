Function.prototype.bind = function() {
    let self = this
    let context = [].shift.call(arguments)
    let args = [].slice.call(arguments)
    console.log('context', context)
    console.log('args', args)
    return function () {
        return self.apply(context, [].concat.call(args, [].slice.call(arguments)))
    }
}

let obj = {
    name: 'world'
}

let func = function (a,b,c,d) {
    console.log(this.name)
    console.log([a,b,c,d])
}.bind(obj, 1, 2)

func(3,4)
