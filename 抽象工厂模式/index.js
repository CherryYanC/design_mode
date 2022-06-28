// 米饭 面条 饺子
class ProductionFlow {
	constructor() {
		if(new.target === ProductionFlow) {
			throw new Error('抽象类不能被实例')
		}
	}

	production() {
		console.info('商品信息被重写')
	}

	materials() {
		console.info('材料被改写')
	}
}

class Rice extends ProductionFlow {
	production() {
		console.info(`材料${this.materials()}: 农家米饭`)
	}

	materials() {
		return '大米、小黄米'
	}
}

class Noodles extends ProductionFlow {
	production() {
		console.info(`材料${this.materials()}: 面条`)
	}
	materials() {
		return '面粉'
	}
}

class Dumplings extends ProductionFlow {
	production() {
		console.info(`材料${this.materials()}: 饺子`)
	}

	materials() {
		return '韭菜、鸡蛋'
	}
}

// class CreateFactory {
// 	constructor() {
// 		this.rice = Rice
// 		this.Noodles = Noodles
// 		this.Dumplings = Dumplings
// 	}
// }
function getAbstractProductionFactory(foodType) {
	const factoryObj = {
		rice: Rice,
		noodles: Noodles,
		dumplings: Dumplings,
	}
	if (factoryObj[foodType]) {
		return factoryObj[foodType]
	}

	throw new Error(`工厂暂时不支持生产这个${foodType}类型的食品`)
}

const riceCls = getAbstractProductionFactory('rice')
const noodlesCls = getAbstractProductionFactory('noodles')
const dumplingsCls = getAbstractProductionFactory('dumplings')

const actualRice = new riceCls()
const actualNoodle = new noodlesCls()
const actualDumplings = new dumplingsCls()

actualRice.production()
actualNoodle.production()
actualDumplings.production()