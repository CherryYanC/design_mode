
/**
 * @description 发布订阅模式
 */

class Publish {
    constructor() {
        /** 订阅者 */
        this.observer = {}
        this.key = ''
    }

    /** 添加订阅者 */
    addObserver(observer) {
        let key = observer.project
        if (!this.observer[key]) {
            this.observer[key] = []
        }
        this.observer[key].push(observer)
        console.log(this.observer)
    }

    /** 移除订阅者 */
    removeObserverHandle(observer) {
        let cur_observers = this.observer[observer.project]

        cur_observers.forEach((item, index) => {
            if (item === observer) {
                cur_observers.splice(index, 1)
            }
        })
    }

    setObserver(subject) {
        this.key = subject
        this.notification()
    }

    notification() {
        this.observer[this.key].forEach(item => {
            item.update()
        })
    }
}

class Observer {
    constructor(project, name) {
        this.project = project
        this.name = name
    }

    update() {
        console.info(`尊敬的${this.name}, 您预约的项目：${this.project}马上开始了`)
    }
}

const publisher = new Publish()
const xiaoming = new Observer('滑雪','xiaoming')
const A = new Observer('大跳台', 'A')
const B = new Observer('大跳台', 'B')
const C = new Observer('大跳台', 'C')

publisher.addObserver(A)
publisher.addObserver(B)
publisher.addObserver(C)
publisher.addObserver(xiaoming)
publisher.removeObserverHandle(B)

publisher.setObserver('大跳台')
publisher.setObserver('滑雪')

