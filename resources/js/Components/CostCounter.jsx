import { useState, useRef } from "react";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";

export default function CostCounter({ supplier_rate }) {
    const [startCostCounter, setStartCostCounter] = useState(null);
    const [now, setNow] = useState(null);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const [showStartButton, setShowStartButton] = useState(true);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartCostCounter(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 3196);
        setShowPauseButton(true);
        setShowStartButton(false);
    }

    function handlePause() {
        clearInterval(intervalRef.current);
        setShowPauseButton(false);
        setShowStartButton(true);
    }

    let runningCost = 0;
    if (startCostCounter != null && now != null) {
        runningCost = (now - startCostCounter) / 10000;
    }

    return (
        <>
            <p className="mt-4 text-lg text-gray-900">
                Supplier Rate (cents/kWh): {supplier_rate}
            </p>
            <p className="mt-4 text-lg text-gray-900">
                Cost since last payment (in cents): {runningCost.toFixed(4)}
            </p>

            {showStartButton && (
                <PrimaryButton onClick={handleStart} className="mt-4">
                    Start
                </PrimaryButton>
            )}
            {showPauseButton && (
                <DangerButton onClick={handlePause} className="mt-4">
                    Pause
                </DangerButton>
            )}
        </>
    );
}
