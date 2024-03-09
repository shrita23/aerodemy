import Link from "next/link";

export default function GetInTouch() {
    return (
        <div className="relative py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-[#bf9b30]">
                                Get in touch
                            </h2>
                            <p className="mt-4 leading-7 text-white">
                                With our team
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <Link
                                href="#"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Email
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:collaborate@example.com"
                                            >
                                                collaborate@example.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Instagram</dt>
                                        <dd>+1 (555) 905-2345</dd>
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="#"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Whatsapp
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:press@example.com"
                                            >
                                                press@example.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">Telegram</dt>
                                        <dd>+1 (555) 905-3456</dd>
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="#"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Join our team
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:careers@example.com"
                                            >
                                                careers@example.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (555) 905-4567</dd>
                                    </div>
                                </dl>
                            </Link>

                            <Link
                                href="#"
                                className="rounded-2xl bg-black/25 p-10"
                            >
                                <h3 className="text-base font-semibold leading-7 text-[#bf9b30]">
                                    Say hello
                                </h3>
                                <dl className="mt-3 space-y-1 text-sm leading-6 text-white">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a
                                                className="font-semibold text-indigo-600"
                                                href="mailto:hello@example.com"
                                            >
                                                hello@example.com
                                            </a>
                                        </dd>
                                    </div>
                                    <div className="mt-1">
                                        <dt className="sr-only">
                                            Phone number
                                        </dt>
                                        <dd>+1 (555) 905-5678</dd>
                                    </div>
                                </dl>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
