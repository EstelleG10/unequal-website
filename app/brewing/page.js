"use client";
import { useState } from "react";

export default function BrewingPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl text-white font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6">
                    <a href="/" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Home</a>
                    <a href="/brewing" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing</a>
                    <a href="/museum" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Museum</a>
                    <a href="/gallery" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Gallery</a>
                    <a href="/trace-residue" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Trace Residue</a>
                    <a href="/journalism" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing Event</a>
                    <a href="/cooking_event" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Cooking Event</a>
                </nav>
            </header>

            {/* Title & Group Overview */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold drop-shadow-md">The Brewing Group:</h1>
                <p className="text-lg text-orange-600 mt-2">Recreating Ancient Brewing Techniques.</p>
            </div>

            {/* Main image */}
            <div className="mt-8 flex justify-center">
                <img src="/great.JPG" alt="Event Poster" className="w-300 h-100 max-w-3xl rounded-lg shadow-lg" />
            </div>

            {/* Event Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Project Overview</h2>
                <p className="mt-4 text-lg">
                    The brewing group embarked on an ambitious journey to recreate ancient recipes from various civilizations. The goal was to revive forgotten techniques and explore the flavors that our ancestors experienced through their brewing practices.
                </p>
            </div>

            {/* Brewing Steps */}
            <div className="mt-10 space-y-6">
                {[
                    { title: "Step 1: Gathering Ingredients", image: "/barley.JPG", description: "The first step was sourcing ancient grains like barley, spelt, and wheat, alongside herbs and fruits for flavoring." },
                    { title: "Step 2: Preparing the Tools", image: "/ceram.JPG", description: "We prepared traditional brewing tools such as ceramic fermenters and wooden spoons, mimicking ancient methods." },
                    { title: "Step 3: Brewing Process", image: "/pour.JPG", description: "We followed ancient brewing techniques such as using wild yeasts for fermentation and fermenting in natural vessels." },
                    { title: "Step 4: Fermentation", image: "/BEERSS.JPG", description: "The brewing process involved natural fermentation in open air, allowing the ingredients to ferment and mature." },
                    { title: "Step 5: Tasting & Reflection", image: "/placeholder5.jpg", description: "Finally, we tasted the brews and compared them to modern beers, reflecting on the complexity and flavor differences." }
                ].map((step, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-orange-600">{step.title}</h3>
                        <div className="mt-4 flex gap-4">
                            <img src={step.image} alt={step.title} className="w-40 h-40 rounded-lg object-cover" />
                            <p className="text-lg text-gray-300">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Event Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Science Behind Brewing</h2>
                <p className="mt-4 text-lg">
                   Beta amalasye and alpha amalasye.
                </p>
            </div>

        </div>
    );
}
