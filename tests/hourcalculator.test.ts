import {describe, test, expect} from 'vitest';
import {ClockFace, ClockFaceType, JupiterClock} from "../src/class/Clock";
import {calculateHours} from "../src/calculator/HourCalculator";


describe("Test de la création de JupiterClock", () => {

})

describe('Test de la fonction calculateHours', () => {
    describe('Effet cadran Lune sur le total', () => {
        test('Diviser total par 2 (Lune 2 Soleil 1 Terre 1)', () => {
            const clock = new JupiterClock([
                new ClockFace(2, ClockFaceType.moon),
                new ClockFace(1, ClockFaceType.sun),
                new ClockFace(1, ClockFaceType.earth)
            ])
            let number = calculateHours(clock);
            console.log(number)
            expect(number).toBe(Math.floor((2+1) / 2))
        })
    })
    describe('Effet cadran Soleil sur cadran Terre', () => {
        test('Annuler cadran Terre (Lune 1 Soleil 1 Terre 1)', () => {
            const clock = new JupiterClock([
                new ClockFace(1, ClockFaceType.moon),
                new ClockFace(1, ClockFaceType.sun),
                new ClockFace(1, ClockFaceType.earth)
            ])
            console.log(calculateHours(clock))
            expect(calculateHours(clock)).toBe((1+1) - 2)
        })
        test('Doubler cadran Terre (Lune 1 Soleil 2 Terre 1)', () => {
            const clock = new JupiterClock([
                new ClockFace(1, ClockFaceType.moon),
                new ClockFace(2, ClockFaceType.sun),
                new ClockFace(1, ClockFaceType.earth)
            ])
            console.log(calculateHours(clock))
            expect(calculateHours(clock)).toBe(1 + 2 + (1 * 2) - 2 + 2)
        })
    })
    describe('Effet cadran Terre sur total', () => {
        test('Cadran Terre bloque le résultat si valeur à 2', () => {
            const clock = new JupiterClock([
                new ClockFace(1, ClockFaceType.moon),
                new ClockFace(2, ClockFaceType.sun),
                new ClockFace(2, ClockFaceType.earth)
            ])
            expect(calculateHours(clock)).toBe(6)
        });
    })
})