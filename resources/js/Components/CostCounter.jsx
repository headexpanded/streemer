import { useState, useRef, useEffect } from "react";
import PrimaryButton from "./PrimaryButton";
import DangerButton from "./DangerButton";

export default function CostCounter({ supplier_id }) {
    const [costCounter, setCostCounter] = useState(null);
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
        }, 5000);
        setShowPauseButton(true);
        setShowStartButton(false);
    }

    const _handleStart = () => {
        setCostCounter(0);
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCostCounter(costCounter + supplierRate);
        }, 4000);
        console.log(costCounter);
        setShowPauseButton(true);
        setShowStartButton(false);
    };

    function handlePause() {
        clearInterval(intervalRef.current);
        setShowPauseButton(false);
        setShowStartButton(true);
    }

    // let runningCost = 0;
    /* if (startCostCounter != null && now != null) {
        runningCost = (now - startCostCounter) / 10000;
    } */

    const [supplierRate, setSupplierRate] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/suppliers/" + supplier_id);
            const data = await response.json();
            setSupplierRate(data.supplier_rate);
        };
        fetchData();
    }, []);

    return (
        <>
            <p className="mt-4 text-lg text-gray-900">
                Supplier Rate (cents/kWh): {supplierRate}
            </p>
            <p className="mt-4 text-lg text-gray-900">
                Cost since last payment (in cents): {costCounter}
            </p>

            {showStartButton && (
                <PrimaryButton onClick={_handleStart} className="mt-4">
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
