class RiceBowl {
  product() {
		console.log('盖浇饭')
	}
}

class Noodles {
	product() {
		console.log('面条')
	}
}

class Dumplings {
	product() {
		console.log('饺子')
	}
}

class Factory {
	constructor() {
		this.riceBowl = RiceBowl
		this.noodles = Noodles
		this.dumplings = Dumplings
	}

	_getProduction(type) {
		try {
			const production = new this[type]
			return production.product()
		} catch(error) {
			console.error('目前无法生产或没有此类食品')
		}
	}
}

const factory = new Factory()

const riceBowl = factory._getProduction('riceBowl')
const dumpling = factory._getProduction('dumplings')
const noodles = factory._getProduction('noodles')