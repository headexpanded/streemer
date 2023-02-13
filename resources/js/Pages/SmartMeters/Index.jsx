import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddSmartMeter from "@/Components/AddSmartMeter";
import SmartMeter from "@/Components/SmartMeter";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Index({ auth, smartmeters }) {
    const [showAddNew, setShowAddNew] = useState(false);

    return (
        <AuthenticatedLayout
            auth={auth}
            /* header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Smart Meters
                </h2>
            } */
        >
            <Head title="Smart Meters" />
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="space-y-2">
                        {!showAddNew ? (
                            <PrimaryButton
                                className="mt-4"
                                onClick={() => setShowAddNew(true)}
                            >
                                Add New Smart Meter
                            </PrimaryButton>
                        ) : (
                            <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <AddSmartMeter
                                    className="max-w-xl"
                                    close={() => setShowAddNew(false)}
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        {smartmeters.map((smartmeter) => (
                            <SmartMeter
                                key={smartmeter.id}
                                smartmeter={smartmeter}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
