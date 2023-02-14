import { useState, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";


export default function CostCounter() {
    const [startCostCounter, setStartCostCounter] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartCostCounter(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 3196);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let runningCost = 0;
    if (startCostCounter != null && now != null) {
        runningCost = (now - startCostCounter) / 10000;
    }

    return (
        <>
            <p className="mt-4 text-lg text-gray-900">
                Cost since last payment (in cents): {runningCost.toFixed(4)}
            </p>
            <PrimaryButton onClick={handleStart} className="mt-4">
                Start
            </PrimaryButton>
            <DangerButton onClick={handleStop} className="ml-3">
                Pause
            </DangerButton>
        </>
    );
}