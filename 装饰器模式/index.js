class Aircraft {
    ordinary() {
        console.log('普通子弹')
    }
}

class AircraftDecorator {
    constructor(aircraft) {
        this.aircraft = aircraft
    }

    laser() {
        console.log('发射激光')
    }

    guidedMissile() {
        console.log('发射导弹')
    }

    ordinary() {
        this.aircraft.ordinary()
    }
}

const aircraft = new AircraftDecorator(new Aircraft())

aircraft.ordinary()
aircraft.laser()
aircraft.guidedMissile()
