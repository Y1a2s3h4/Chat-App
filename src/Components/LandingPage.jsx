import React from 'react'
import Tabs from './Tabs/Tabs'
export default function LandingPage() {
    return (
        <div className="container">
            <h1 className="text-center py-7 text-white font-medium text-2xl sm:text-4xl md:text-5xl font-display">
                Chat App
            </h1>
            <Tabs />
        </div>
    )
}
