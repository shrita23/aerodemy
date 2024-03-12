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
                                        “The ICPP Full Course is a game-changer,
                                        providing a holistic approach to
                                        success. Engaging English speaking
                                        classes boosted my confidence, while
                                        ADAPT Test Preparation and mock tests
                                        ensured I was well-prepared. Group
                                        Discussion Preparation offered practical
                                        insights, and Interview Practice,
                                        spanning 10 hours, was a crown jewel,
                                        simulating real-life scenarios and
                                        leaving me interview-ready. This course
                                        is a comprehensive, transformative
                                        experience that I highly recommend for
                                        anyone aiming to excel
                                        in their pursuits.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="/arpitkapoor.jpg"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">
                                            Arpit Kapoor
                                        </div>
                                        <div className="mt-1 text-gray-500">
                                            ICPP Course
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
