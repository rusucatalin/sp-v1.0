import { useState, useRef, useEffect } from 'react'
import {
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    ArrowPathIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]

// const callsToAction = [
//     { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//     { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [productMenuOpen, setProductMenuOpen] = useState(false)
    const productMenuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (productMenuRef.current && !productMenuRef.current.contains(event.target)) {
                setProductMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <div className="relative" ref={productMenuRef}>
                        <button
                            onClick={() => setProductMenuOpen(!productMenuOpen)}
                            className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-black-900"
                        >
                            Product
                            <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        </button>

                        {productMenuOpen && (
                            <div className="absolute top-full left-0 z-100 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black-900/50">
                                <div className="p-4">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon className="h-6 w-6 text-black-600 group-hover:text-indigo-600" aria-hidden="true" />
                                            </div>
                                            <div className="flex-auto">
                                                <a href={item.href} className="block font-semibold text-black-900">
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-black-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/*<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">*/}
                                {/*    {callsToAction.map((item) => (*/}
                                {/*        <a*/}
                                {/*            key={item.name}*/}
                                {/*            href={item.href}*/}
                                {/*            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"*/}
                                {/*        >*/}
                                {/*            <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />*/}
                                {/*            {item.name}*/}
                                {/*        </a>*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                            </div>
                        )}
                    </div>

                    <a href="#" className="text-sm font-semibold leading-6 text-black-900">
                        About Us
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-black-900">
                        Termens and conditions
                    </a>
                    {/*<a href="#" className="text-sm font-semibold leading-6 text-gray-900">*/}
                    {/*    Company*/}
                    {/*</a>*/}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-black-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>


            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 z-10 bg-black-900/80"></div>


                    <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-black-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-black-500/10">
                                <div className="space-y-2 py-6">

                                    <div className="-mx-3">
                                        <button
                                            type="button"
                                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-black-900 hover:bg-gray-50"
                                            onClick={() => setProductMenuOpen(!productMenuOpen)}
                                        >
                                            Product
                                            <ChevronDownIcon
                                                className={`h-5 w-5 flex-none ${productMenuOpen ? 'rotate-180' : ''}`}
                                                aria-hidden="true"
                                            />
                                        </button>

                                        {productMenuOpen && (
                                            <div className="mt-2 space-y-2">
                                                {products.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black-900 hover:bg-gray-50"
                                    >
                                        Termens and conditions
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black-900 hover:bg-gray-50"
                                    >
                                        About Us
                                    </a>

                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            <div className={`transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}>

            </div>
        </header>
    )
}