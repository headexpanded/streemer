import React from "react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AddSmartMeter({ auth }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        smartmeter: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("smartmeters.store"), { onSuccess: () => reset() });
    };

    return (
        <>
            <form onSubmit={submit}>
                <input
                    value={data.smartmeter}
                    placeholder="Add a smart meter"
                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    onChange={(e) => setData("smartmeter", e.target.value)}
                />
                <InputError message={errors.message} className="mt-2" />
                <PrimaryButton className="mt-4" processing={processing}>
                    Submit
                </PrimaryButton>
            </form>
        </>
    );
}
