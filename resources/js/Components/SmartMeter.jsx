import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import InputError from "./InputError";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useForm, usePage } from "@inertiajs/react";
import CostCounter from "./CostCounter";

dayjs.extend(relativeTime);

export default function SmartMeter({ smartmeter }) {
    const { auth } = usePage().props;

    const [editing, setEditing] = useState(false);

    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        smartmeter: smartmeter.smartmeter,
        name: smartmeter.name,
        supplier_id: smartmeter.supplier_id,
        supplier: smartmeter.supplier.name,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("smartmeters.update", smartmeter.id), {
            onSuccess: () => setEditing(false),
        });
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
        <div className=" flex">
            <div className="flex-1 p-6 shadow-sm rounded-lg bg-white mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-lg font-medium text-gray-900">
                            {smartmeter.name}
                        </span>
                        {/* <small className="ml-2 text-sm text-gray-600">
                            {dayjs(smartmeter.created_at).fromNow()}
                        </small>
                        {smartmeter.created_at !== smartmeter.updated_at && (
                            <small className="text-sm text-gray-600">
                                {" "}
                                &middot; edited
                            </small>
                        )} */}
                    </div>

                    {smartmeter.user.id === auth.user.id && (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Dropdown.Link
                                    as="button"
                                    href={route(
                                        "smartmeters.destroy",
                                        smartmeter.id
                                    )}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>
                {editing ? (
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel
                                for="smartmeterID"
                                value="Smart meter ID"
                            />

                            <TextInput
                                value={data.smartmeter}
                                name="smartmeterID"
                                handleChange={(e) =>
                                    setData("smartmeter", e.target.value)
                                }
                                className="mt-1 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            {errors.smartmeter && (
                                <InputError
                                    message={errors.smartmeter}
                                    className="mt-2"
                                />
                            )}
                        </div>
                        <div>
                            <InputLabel for="name" value="Smart meter name" />
                            <TextInput
                                value={data.name}
                                name="name"
                                handleChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="mt-1 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                            />
                            {errors.name && (
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            )}
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
                        </div>
                        <InputError message={errors.message} class="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button
                                className="mt-4"
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <div>
                        <p className="mt-4 text-lg text-gray-900">
                            ID: {smartmeter.smartmeter}
                        </p>
                        <p className="mt-4 text-lg text-gray-900">
                            Supplier: {smartmeter.supplier.name}
                        </p>

                        <CostCounter supplier_id={smartmeter.supplier_id} />
                    </div>
                )}
            </div>
        </div>
    );
}
