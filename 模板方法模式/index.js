/** 案例 */
class Beverage {
    // 烧水
    boilWater() {
        console.log('把水煮沸')
    }

    // 冲泡
    brew() {
        throw new Error('子类必须重写brew方法')
    }

    // 放入杯中
    putInCup() {
        throw new Error('子类必须重写putInCup方法')
    }

    // 加料
    addCondiments() {
        throw new Error('子类必须重写addCondiments方法')
    }

    // 父类的模板
    init() {
        this.boilWater()
        this.brew()
        this.putInCup()
        this.addCondiments()
    }
}

// 制作柠檬茶
class Tea extends Beverage {
    constructor() {
        super()
    }

    brew() {
        console.log('冲泡茶叶')
    }

    putInCup() {
        console.log('倒入茶杯🍵')
    }
    
    addCondiments() {
        console.log('加入柠檬片')
    }
}

// 咖啡拉花
class Coffe extends Beverage {
    constructor() {
        super()
    }

    brew() {
        console.log('冲泡咖啡')
    }

    putInCup() {
        console.log('倒入杯中')
    }

    addCondiments() {
        console.log('加入牛奶和糖')
    }
}

const tea = new Tea()
const coffee = new Coffe()

tea.init()
coffee.init()