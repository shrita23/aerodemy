export default function Testimonial() {
    return (
        <section>
            <div className="mx-auto max-w-7xl py-10 pt-24">
                <div className="relative isolate overflow-hidden px-6 py-6 text-center shadow-2xl sm:rounded-3xl sm:px-16  black-bg-25">
                    <div className="mx-auto grid max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="flex flex-col p-10">
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-white">
                                    <p>
                                        “Studying for the DGCA Technical General
                                        course with aerodemy provided me with a
                                        comprehensive understanding of crucial
                                        aviation aspects. The well-structured
                                        curriculum covered aerodynamics,
                                        aircraft systems, engines, airframes,
                                        instruments, flight controls, weight and
                                        balance, regulations, emergency
                                        procedures, and principles of flight.
                                        This course not only equipped me with
                                        theoretical knowledge but also
                                        emphasized practical applications,
                                        ensuring a well-rounded preparation. The
                                        detailed outline and emphasis on
                                        real-world scenarios make it an
                                        invaluable resource for anyone pursuing
                                        a career in aviation. Highly recommended
                                        for aspiring aviation professionals.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="/ananyathapa.jpg"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">
                                            Ananya Thapa
                                        </div>
                                        <div className="mt-1 text-gray-500">
                                            Technical General
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
