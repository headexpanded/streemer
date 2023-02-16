import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import InputLabel from "./InputLabel";
import InputError from "@/Components/InputError";
import TextInput from "./TextInput";
import PrimaryButton from "@/Components/PrimaryButton";

export default function AddSmartMeter({ className, close }) {
    const { data, setData, post, processing, reset, errors, recentlySuccessful } = useForm({
        smartmeter: "",
        name: "",
        supplier_id: "",
        supplier_rate: "",
    });

    const [notification, setNotification] = useState("");

    const _setNotification = (message) => {
        setNotification(message);
        setTimeout(() => {
            setNotification("");
        }, 2000);
    };

    const submit = (e) => {
        e.preventDefault();
        post(
            route("smartmeters.store"),
            { preserveScroll: true },
            { onSuccess: () => reset() }
            // {recentlySuccessful }
        );
        _setNotification("Smart meter sucessfully created");
        setTimeout(() => close(), 2000);
    };

    // get data for select element in form
    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/suppliers");
            const data = await response.json();
            setSuppliers(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className={className}>
                <header>
                    <h2 className="text-lg font-medium text-gray-900">
                        Add New Smart Meter
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Enter your smart meter's ID, give it a nick-name, and
                        select your energy supplier
                    </p>
                </header>
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div>
                        <InputLabel
                            for="smartmeterID"
                            value="Smart meter ID (required)"
                        />
                        <TextInput
                            id="smartmeterID"
                            name="smartmeterID"
                            value={data.smartmeter}
                            // required
                            className="mt-1 block w-full"
                            handleChange={(e) =>
                                setData("smartmeter", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.smartmeter}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <InputLabel
                            for="name"
                            value="Name your smart meter (e.g. 'Home')"
                        />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            // required
                            className="mt-1 block w-full"
                            handleChange={(e) =>
                                setData("name", e.target.value)
                            }
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            for="supplier"
                            value="Select your energy supplier"
                        />
                        <select
                            id="supplier"
                            name="supplier"
                            className="block w-full border-gray-300 p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            onChange={(e) =>
                                setData("supplier_id", e.target.value)
                            }
                        >
                            <option disabled selected value>
                                -- select a supplier --
                            </option>
                            {suppliers.map((supplier) => {
                                return (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}
                                    >
                                        {supplier.name}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError message={errors.message} className="mt-2" />
                    </div>
                    <PrimaryButton className="mt-4" processing={processing}>
                        Submit
                    </PrimaryButton>
                    {notification && (
                        <div className="inline-flex items-center mx-4 p-2 bg-green-600 text-white text-xs uppercase font-semibold rounded-md">
                            {notification}
                        </div>
                    )}
                    <button
                        className="mx-4"
                        onClick={() => {
                            setNotification("");
                            close();
                        }}
                    >
                        Cancel
                    </button>
                </form>
            </section>
        </>
    );
}
