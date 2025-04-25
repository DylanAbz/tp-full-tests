export enum ClockFaceType {
    Moon,
    Sun,
    Earth
}

export class ClockFace {
    value: number
    type: ClockFaceType

    constructor(value: number, type: ClockFaceType) {
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
}