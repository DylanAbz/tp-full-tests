export enum ClockFaceType {
    moon = 'Moon',
    sun = 'Sun',
    earth = 'Earth'
}

export class ClockFace {
    value: number
    type: ClockFaceType

    constructor(value: number, type: ClockFaceType) {
        if (value < 1 || value > 2) {
            throw new Error("ClockFace value needs to be 1 or 2")
        }
        this.value = value;
        this.type = type;
    }
}

export class JupiterClock {
    faces: ClockFace[]

    constructor(faces: ClockFace[]) {
        if (faces.length !== 3) {
            throw new Error("Clock only has 3 faces")
        }
        for (const types of Object.values(ClockFaceType)) {
            if (faces.filter(value => value.type == types).length !==1) {
                throw new Error("Clock has one face of each type")
            }
        }
        this.faces = faces;
    }

    public getSunFace() {
        return this.faces.filter(value => value.type === ClockFaceType.sun)[0]
    }
    public getMoonFace() {
        return this.faces.filter(value => value.type === ClockFaceType.moon)[0]
    }
    public getEarthFace() {
        return this.faces.filter(value => value.type === ClockFaceType.earth)[0]
    }
}