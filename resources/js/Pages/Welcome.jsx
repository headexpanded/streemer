import { Link, Head } from "@inertiajs/react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gradient-to-r from-indigo-300 to-sky-200 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("smartmeters.index")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            My Smart Meters
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <section>
                    <div className="hero">
                        <div className="heroText" translate="no">
                            <h1>Streemer</h1>
                        </div>
                        <div className="heroSubText">
                            <h3>Say goodbye to huge energy bills</h3>
                        </div>
                        <div className="introText">
                            <span className="introTextSpan1">
                                connect your smart meter
                            </span>
                            <span className="introTextSpan2">
                                set your payment limit
                            </span>
                            <span className="introTextSpan3">
                                streeeeeeem your energy cost
                            </span>
                        </div>
                        <Link className="heroButton" href={route("register")}>
                            GET STARTED
                        </Link>
                        <Link
                            href={route("login")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Log in
                        </Link>
                    </div>

                    <div className="promoWrapper">
                        <div className="promo promo-1">
                            <p>
                                Streemer supports 90% of Europe’s energy
                                providers.
                            </p>
                            <a className="promoLink" href="#">
                                FIND YOURS
                            </a>
                        </div>
                    </div>
                    <div className="promoWrapper">
                        <div className="promo promo-2">
                            <p>Connect Your First Smart Meter - Free!</p>
                            <a className="promoLink" href="">
                                CONNECT
                            </a>
                        </div>
                    </div>
                    <div className="promoWrapper">
                        <div className="promo promo-3">
                            <p>PwC Saved 20% With Streemer</p>
                            <a className="promoLink" href="#">
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                    <div className="cardWrapper">
                        <figure className="testimonial">
                            <blockquote>
                                We use Streemer to improve our cash flow - our
                                treasury management is much better than before.
                                Highly recommended.
                            </blockquote>
                            <figcaption>Lucien B, XYZ Corp.</figcaption>
                        </figure>
                        <figure className="testimonial">
                            <blockquote>
                                Our factory uses a lot of energy. We alter our
                                daily limit on Streemer depending on our
                                production schedule - it helps a lot.
                            </blockquote>
                            <figcaption>Carlo, Grand Usine S.A.</figcaption>
                        </figure>

                        <figure className="testimonial">
                            <blockquote>
                                I set up Streemer at home. Now I don’t worry
                                about paying my electricity bill every two
                                months - most of it is already paid!
                            </blockquote>
                            <figcaption>Brigitte L, Paris</figcaption>
                        </figure>
                    </div>
                    <div className="benefits">
                        <p>Take control of your energy costs!</p>
                        <p>No more huge lump sum payments.</p>
                        <p>Set how much to pay each day.</p>
                        <p>
                            Then streeeeeeem your bills by small, regular
                            amounts.
                        </p>
                        <p>Sign up today: your first smart meter is free!</p>

                        <p>
                            <a className="heroButton" href="">
                                GET STARTED
                            </a>
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
