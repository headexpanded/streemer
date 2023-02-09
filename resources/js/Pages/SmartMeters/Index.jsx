import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AddSmartMeter from "@/Components/AddSmartMeter";
import SmartMeter from "@/Components/SmartMeter";

export default function Index({ auth, smartmeters }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Smart Meters" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <AddSmartMeter auth={auth} />
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {smartmeters.map((smartmeter) => (
                        <SmartMeter
                            key={smartmeter.id}
                            smartmeter={smartmeter}
                        />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
