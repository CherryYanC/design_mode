// 对话模拟---中间翻译作为适配器
class Bob {
    english() {
        return 'I can speak English only'
    }
}

class Xiaoming {
    chinese() {
        return '我只会说汉语'
    }
}

class Adapter {
    constructor(person) {
        this.person = person
    }

    translate() {
        if(this.person.english) {
            console.log(`${this.person.english()}: 我只会说英语`)
            return 
        }
        if(this.person.chinese){
            console.log(`${this.person.chinese()}: I can speak English only`)
            return 
        }

        throw new Error('这个语言我不会')
    }
}

class Communication {
    communicate(person) {
        console.log(person.translate())
    }
}

const bob = new Bob()
const xiaoming = new Xiaoming()
const communicate = new Communication()

const adapter1 = new Adapter(bob)
const adapter2 = new Adapter(xiaoming)


communicate.communicate(adapter1)
communicate.communicate(adapter2)

