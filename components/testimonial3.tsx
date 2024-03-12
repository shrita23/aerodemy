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
                                        “The classes provided a focused,
                                        professional and structured approach to
                                        learning that helped me understand the
                                        subject. The course content was
                                        well-organized and they offered valuable
                                        resources and materials to practice. The
                                        instructor was knowledgeable and
                                        engaging, making complex concepts easy
                                        to grasp. Throughout the course, I was
                                        provided personalized attention and
                                        support from the instructor, who was
                                        readily available to answer questions,
                                        be it day or night. By the end of the
                                        course, I felt more confident in my
                                        abilities and had acquired the skills to
                                        glide through the exam. Highly
                                        recommended for anyone looking to deepen
                                        their understanding of aviation in a
                                        supportive and enriching environment.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="/roshanraj.jpg"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">
                                            Roshan Raj
                                        </div>
                                        <div className="mt-1 text-gray-500">
                                            Air Navigation
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
