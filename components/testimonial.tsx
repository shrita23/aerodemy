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
                                        “Amet amet eget scelerisque tellus sit
                                        neque faucibus non eleifend. Integer eu
                                        praesent at a. Ornare arcu gravida
                                        natoque erat et cursus tortor consequat
                                        at. Vulputate gravida sociis enim nullam
                                        ultricies habitant malesuada lorem ac.
                                        Tincidunt urna dui pellentesque
                                        sagittis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center justify-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-white">
                                            Judith Black
                                        </div>
                                        <div className="mt-1 text-gray-500">
                                            CEO of Tuple
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
