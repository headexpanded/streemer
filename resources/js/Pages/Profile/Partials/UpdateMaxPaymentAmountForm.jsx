import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import NumberInput from "@/Components/NumberInput";
import { useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function UpdateMaxPaymentAmountForm({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            max_payment_amount: user.max_payment_amount,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"), { preserveScroll: true });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Payment Limit
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Set the maximum amount you wish to pay in any single payment
                    transaction.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel
                        for="maxPaymentAmount"
                        value="Max Payment Amount ( USD, EUR, GBP )"
                    />

                    <NumberInput
                        id="maxPaymentAmount"
                        type="number"
                        className="mt-1 block w-full"
                        value={data.max_payment_amount}
                        handleChange={(e) =>
                            setData("max_payment_amount", e.target.value)
                        }
                        required
                        min="10"
                        step="10"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.max_payment_amount}
                    />
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
