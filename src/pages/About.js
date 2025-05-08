// app/about/page.tsx
'use client'

import React from 'react'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import TeamSection from './util/team/TeamSection'
import ClientsSection from './util/client/ClientsSection'
import WhyChooseUs from './util/why us/WhyChooseUs'
import ContactAndCTA from './util/getintouch/ContactAndCTA'

export default function AboutPage() {
    return (
        <>
            <main className="bg-white">
                <section className="relative py-24 overflow-hidden isolate sm:py-32">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 blur-3xl" />
                    <div className="max-w-4xl px-6 mx-auto text-center lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            About Us
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            At Jalili, we're passionate about helping travelers explore the beauty of Afghanistan.
                            Our travel agency is dedicated to offering tailored solutions that connect people with
                            unforgettable experiences, promoting cultural exploration, and fostering lasting memories.
                        </p>

                        <div className="flex justify-center mt-10 gap-x-6">
                            <Link
                                to="/contact"
                                className="px-4 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/services"
                                className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200"
                            >
                                Our Services →
                            </Link>
                        </div>
                    </div>
                </section>

                <TeamSection />




                <ClientsSection />
                <WhyChooseUs />
                <ContactAndCTA />
            </main>
            <Footer />
        </>
    )
}