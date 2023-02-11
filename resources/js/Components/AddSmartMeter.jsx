import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AddSmartMeter() {
    const { data, setData, post, processing, reset, errors } = useForm({
        smartmeter: "",
        sm_name: "",
    });

    const [notification, _setNotification] = useState("");

    const submit = (e) => {
        e.preventDefault();
        post(route("smartmeters.store"), { onSuccess: () => reset() });
        setNotification("Smart meter sucessfully created");
    };

    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification("");
        }, 3000);
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="space-y-2">
                    <input
                        value={data.smartmeter}
                        placeholder="Enter smart meter ID (required)"
                        className="block w-full border-gray-300 p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={(e) => setData("smartmeter", e.target.value)}
                    />
                    <InputError message={errors.message} className="mt-2" />

                    <input
                        value={data.sm_name}
                        placeholder="Give your smart meter a name (eg Garage)"
                        className="block w-full border-gray-300 p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={(e) => setData("sm_name", e.target.value)}
                    />
                </div>
                <InputError message={errors.message} className="mt-2" />

                <PrimaryButton className="mt-4" processing={processing}>
                    Submit
                </PrimaryButton>
                {notification && (
                    <div className="inline-flex items-center mx-4 p-2 bg-green-600 text-white text-xs uppercase font-semibold rounded-md">
                        {notification}
                    </div>
                )}
            </form>
        </>
    );
}
