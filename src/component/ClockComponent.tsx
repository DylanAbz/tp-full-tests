import {useState} from "react";
import {ClockFace, ClockFaceType, JupiterClock} from "../class/Clock.tsx";
import {ClockFaceComponent} from "./ClockFaceComponent.tsx";
import {calculateHours, getHourFromResult} from "../calculator/HourCalculator.tsx";

export function ClockComponent () {
    const [moonFace, setMoonFace] = useState(new ClockFace(1, ClockFaceType.moon));
    const [sunFace, setSunFace] = useState(new ClockFace(1, ClockFaceType.sun));
    const [earthFace, setEarthFace] = useState(new ClockFace(1, ClockFaceType.earth));
    const [hourValue, setHourValue] = useState(0);
    const [hourLabel, setHourLabel] = useState("");

    const handleValidate = () => {
        const clock = new JupiterClock([moonFace, sunFace, earthFace]);
        const hourVal = calculateHours(clock);
        const hourLab = getHourFromResult(hourVal);
        setHourValue(hourVal);
        setHourLabel(hourLab);
    }

    return (
        <div className="clock-container">
            <div className="faces-container">
                <ClockFaceComponent clockFace={moonFace}/>
                <ClockFaceComponent clockFace={sunFace}/>
                <ClockFaceComponent clockFace={earthFace}/>
            </div>
            <div className="action-container">
                <button className="validateBtn" onClick={handleValidate} style={{marginTop: '1rem'}}>
                    Valider
                </button>
                <p>Heure : {hourLabel}, Valeur : {hourValue}</p>
            </div>
        </div>
    )
}