// app/services/page.tsx
'use client'

import React from 'react'
import Footer from '../components/footer/Footer'

export default function ServicesPage() {
    return (
        <>
            <main className="bg-white">
                <section className="relative py-24 overflow-hidden isolate sm:py-32">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl" />
                    <div className="max-w-4xl px-6 mx-auto text-center lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Our Services
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We offer comprehensive travel services including:
                        </p>
                        <ul className="mt-8 space-y-4 text-left">
                            <li className="text-gray-700">✔ Guided tours across Afghanistan</li>
                            <li className="text-gray-700">✔ Hotel and transportation bookings</li>
                            <li className="text-gray-700">✔ Cultural immersion experiences</li>
                            <li className="text-gray-700">✔ Custom travel itineraries</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}