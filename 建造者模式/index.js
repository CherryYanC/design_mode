class Clothing {
	constructor() {
		this.clotherType = ''
		this.price = 0
	}
}

class UnderWear extends Clothing {
	constructor() {
		super()
		this.clotherType = 'underwear'
		this.price = 50
	}
}

class Tshirt extends Clothing {
	constructor() {
		super()
		this.clotherType = 'T-shirt'
		this.price = 30
	}
}

class DownCoat extends Clothing {
	constructor() {
		super()
		this.clotherType = 'down coat'
		this.price = 20
	}
}

// 产品factory
class Product {
	constructor() {
		this.clothing = []
	}

	addClothting(clothing) {
		this.clothing.push(clothing)
	}

	countPrice() {
		return this.clothing.reduce((p, n) => n.price + p, 0)
	}
}

// 具有添加商品权限的工厂管理员
class FactoryManager {
	createUnderWear() {
		throw new Error('子类必须重新createUnderWear')
	}
	createTshirt() {
		throw new Error('子类必须重新createTshirt')
	}
	createDownCoat() {
		throw new Error('子类必须重新createDownCoat')
	}
}

class Worker extends FactoryManager {
	constructor() {
		super()
		this.product = new Product
	}
	createUnderWear(num) {
		for(let i = 0; i < num; i++) {
			this.product.addClothting(new UnderWear())
		}
	}
	createTshirt(num) {
		for(let i = 0; i < num; i++) {
			this.product.addClothting(new Tshirt())
		}
	}
	createDownCoat(num) {
		for(let i = 0; i < num; i++) {
			this.product.addClothting(new DownCoat())
		}
	}
}

class Saleman {
	constructor() {
		this.worker = null
	}

	setWork(worker) {
		this.worker = worker
	}

	reverse(clothings) {
		clothings.forEach(item => {
			if (item.type === 'underwear') {
				this.worker.createUnderWear(item.num)
			} else if (item.type === 't-shirt') {
				this.worker.createTshirt(item.num)
			} else if (item.type === 'downcoat') {
				this.worker.createDownCoat(item.num)
			} else {
				throw new Error('公司暂不生产或不存在该类型的商品')
			}
		})

		const product = this.worker.product
		return product.countPrice()
	}
}

const saleman = new Saleman()
const worker = new Worker()

saleman.setWork(worker)

const clothings = [
	{ type: 'underwear', num: 4, },
	{ type: 't-shirt', num: 5, },
	{ type: 'downcoat', num: 3, },
]

console.log(`本次订单所需金额：${saleman.reverse(clothings)}`)
