import { Link, Head } from "@inertiajs/react";
import Promo from "@/Components/Promo";
import PromoLink from "@/Components/PromoLink";

export default function Welcome(props) {
    return (
        <>
            <Head>
                <title>Streemer</title>
                <meta
                    name="description"
                    content="Streemer helps you manage your energy cashflows"
                />
                <script src="streemer_modal.js"></script>
            </Head>
            <main className="bg-gradient-to-r from-indigo-300 to-sky-200">
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
                                <h1 className="heroText">Streemer</h1>
                            </div>
                            <div className="heroSubText">
                                <h2>Say goodbye to huge energy bills</h2>
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
                            <Link
                                className="heroButton"
                                href={route("register")}
                            >
                                GET STARTED
                            </Link>
                            Already have an account?
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>
                        </div>
                        <section className="promoSection">
                            {/* Promo components */}
                            <div className="promoWrapper">
                                <Promo
                                    promoText="Supports 90% of Europe’s energy
                                        providers"
                                    className="promo promo-1"
                                    id="promo-1"
                                    href={route("register")}
                                    linkText="FIND YOURS"
                                    PromoLink={PromoLink}
                                />
                            </div>
                            <div className="promoWrapper">
                                <Promo
                                    promoText="Connect Your First Smart Meter - Free!"
                                    className="promo promo-2"
                                    id="promo-2"
                                    href={route("register")}
                                    linkText="CONNECT"
                                    PromoLink={PromoLink}
                                />
                            </div>
                            <div className="promoWrapper">
                                <Promo
                                    promoText="Save 20% With Streemer"
                                    className="promo promo-3"
                                    id="promo-3"
                                    href={route("register")}
                                    linkText="LEARN MORE"
                                    PromoLink={PromoLink}
                                />
                            </div>
                        </section>
                        <div className="cardWrapper">
                            <figure className="testimonial">
                                <blockquote>
                                    We use Streemer to improve our cash flow -
                                    our treasury management is much better than
                                    before. Highly recommended.
                                </blockquote>
                                <figcaption>Lucien B, XYZ Corp.</figcaption>
                            </figure>
                            <figure className="testimonial">
                                <blockquote>
                                    Our factory uses a lot of energy. We alter
                                    our daily limit on Streemer depending on our
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
                            <p>Take control of your energy costs</p>
                            <p>No more huge lump sum payments</p>
                            <p>Set your payment limit</p>
                            <p>
                                Then streeeeeeem your bills by small, regular
                                amounts
                            </p>
                            <p>
                                Sign up today: your first smart meter is free!
                            </p>
                            <p>
                                <a className="heroButton" href="">
                                    GET STARTED
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="footer">
                <span className="openModal" id="aboutModal">
                    About
                </span>
                <span className="openModal" id="contactModal">
                    Contact
                </span>
                <span className="openModal" id="tandcModal">
                    Terms & Conditions
                </span>
            </footer>
            <dialog
                className="footerModal animated fadeInDown"
                id="footerModal"
            >
                <h1>Nothing to see here.</h1>
                <p>
                    This isn't a real business. It was an idea I had for an
                    end-of-bootcamp class project.
                </p>
                <p>
                    This is my version, using Laravel, Inertia, React, pure css,
                    and a very loud colour palette.
                </p>
                {/* <Link href="https://github.com/headexpanded/streemer">
                    GitHub Repo
                </Link> */}
                <button id="closeModal">Close</button>
            </dialog>
        </>
    );
}
