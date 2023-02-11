import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateSupplierForm({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            supplier: user.supplier,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"), { preserveScroll: true });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Energy Supplier
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Select your energy supplier from the drop-down list.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="Supplier" value="Supplier:" />

                    <SelectInput
                        id="supplier"
                        className="mt-1 block w-full"
                        value={data.supplier}
                        handleChange={(e) =>
                            setData("supplier", e.target.value)
                        }
                        required
                    />

                    <InputError className="mt-2" message={errors.supplier} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="inline-flex items-center px-4 py-2 text-white uppercase text-xs bg-green-600 p-2 rounded-md font-semibold">
                            Saved
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
