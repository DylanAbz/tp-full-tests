import {JupiterClock} from "../class/Clock.tsx";

export function calculateHours(clock: JupiterClock) {
    let result = 0;
    if (clock.getSunFace().value === 2) {
        if (clock.getEarthFace().value === 2) {
            return 6
        }
        result += clock.getEarthFace().value * 2
    }
    result += clock.getMoonFace().value
    result += clock.getSunFace().value
    if (clock.getMoonFace().value === 1) {
        result -= 2
    }
    if (clock.getSunFace().value === 2) {
        result += 2;
    }
    if (clock.getMoonFace().value === 2) {
        result =  Math.floor(result/2)
    }
    return result;
}

export function getHourFromResult(result: number) {
    return "mortin"
}