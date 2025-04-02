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
                    { title: "Step 1: Gathering Ingredients", image: "/barley.JPG", description: "The first step was sourcing ancient grains like barley and emmer and gathering the needed lab equipment such as iodine, thermometer, beaker, hot plate, and other tools." },
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
                   While attending one of the brewing group's meetings I had the chance to gain a deeper understanding
                   of the brewing process and all of the science that goes into it. While working with --- and --- two ---, the 
                   brewing group members had a chance to not only learn about the process of the past but also to learn about the science 
                   of brewing of the present. 
                   Traditionally, the process starts with grains like barley and emmer (an early form of wheat) being malted. The malting causes
                   germination which activates the enzymes that we need to convert starches to fermentable sugars. Using the pot created by --- and designed base off
                   of ancient pot remains, the pot was used to create a filter that allowed water at a temperature of 150 degrees F to percolat through the malt. 
                   Using a temperature of 150 ensured that we can keep both alpha and beta amylases working efficiently 
                </p>
            </div>

        </div>
    );
}
