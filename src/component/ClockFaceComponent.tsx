import {useMemo, useState} from "react";
import {ClockFace} from "../class/Clock.tsx";

interface ClockFaceComponentProps {
    clockFace: ClockFace
}

export function ClockFaceComponent (props: ClockFaceComponentProps) {
    const [clockFace, setClockFace] = useState(props.clockFace)
    const [value, setValue] = useState(props.clockFace.value);
    useMemo(() => {
        props.clockFace.value = value;
    }, [value])

    function handleChange(e) {
        let inputValue = parseInt(e.target.value);
        if (inputValue === 1 || inputValue === 2) {
            setValue(inputValue)
        }
    }

    return (
        <div className={'clock-face-' + clockFace.type}>
            <h3>{clockFace.type}</h3>
            <input className={'input-' + clockFace.type} type="number" min="1" max="2" value={value} onChange={handleChange}/>
        </div>
    )
}