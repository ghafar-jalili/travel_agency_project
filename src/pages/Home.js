import React from 'react'
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'
import ValueProp from './util/value/ValueProp'
import Features from './util/feature/Feature'
import Contact from './Contact'
import ContactAndCTA from './util/getintouch/ContactAndCTA'

function Home() {
    return (
        <>
            <Hero />
            <ValueProp />
            <Features />
            < ContactAndCTA />
            <Footer />
        </>

    )
}

export default Home