"use client";
import { useState } from "react";

export default function BrewingPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/brewing", label: "Brewing" },
                        { href: "/museum", label: "Museum" },
                        { href: "/gallery", label: "Gallery" },
                        { href: "/trace-residue", label: "Trace Residue" },
                        { href: "/journalism", label: "Brewing Event" },
                        { href: "/cooking_event", label: "Cooking Event" },
                    ].map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </header>

            {/* Title & Group Overview */}
            <div className="text-center mt-6">
                <h1 className="text-7xl font-extrabold drop-shadow-md">The Brewing Group</h1>
                <p className="text-lg text-orange-600 mt-2">
                    Recreating Ancient Brewing Techniques.
                </p>
                <p className="text-lg text-white-600 mt-2">
                    Words by Estelle Gerber
                </p>
            </div>

            {/* Main image */}
            <div className="mt-8 flex justify-center">
                <img
                    src="/great.JPG"
                    alt="Event Poster"
                    className="w-300 h-100 max-w-3xl rounded-lg shadow-lg"
                />
            </div>

            {/* Project Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Project Overview</h2>
                <p className="mt-4 text-lg">
                    The brewing group embarked on an ambitious journey to recreate ancient recipes from various civilizations. The goal was to revive forgotten techniques and explore the flavors that our ancestors experienced through their brewing practices.
                </p>
            </div>

            {/* Brewing Steps */}
            <div className="mt-10 space-y-6">
                {[
                    {
                        title: "Step 1: Gathering Ingredients",
                        image: "/barley.JPG",
                        description: "We first sourced ancient grains like barley and emmer as well as gathered the needed lab equipment such as iodine, thermometer, beakers, hot plates, and other tools.",
                    },
                    {
                        title: "Step 2: Preparing the Tools",
                        image: "/ceram.JPG",
                        description: "We prepared traditional brewing tools such as ceramic fermenters and wooden spoons, mimicking ancient methods.",
                    },
                    {
                        title: "Step 3: Brewing Process",
                        image: "/pour.JPG",
                        description: "We followed ancient brewing techniques such as using wild yeasts for fermentation and fermenting in natural vessels.",
                    },
                    {
                        title: "Step 4: Fermentation",
                        image: "/BEERSS.JPG",
                        description: "The brewing process involved natural fermentation in open air, allowing the ingredients to ferment and mature.",
                    },
                    {
                        title: "Step 5: Tasting & Reflection",
                        image: "/BEV.jpg",
                        description: "Finally, we tasted the brews and compared them to modern beers, reflecting on the complexity and flavor differences.",
                    },
                ].map((step, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-orange-600">{step.title}</h3>
                        <div className="mt-4 flex gap-4">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-50 h-60 rounded-lg object-cover"
                            />
                            <p className="text-lg text-gray-300">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Science Behind Brewing */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Science Behind Brewing</h2>
                <p className="mt-4 text-lg">
                    While attending one of the brewing group's meetings, I had the chance to gain a deeper understanding of the brewing process and the science behind it.
                    Working with --- and --- (two ---), the brewing group members explored not only ancient processes but also modern scientific principles.
                    Traditionally, brewing starts with grains like barley and emmer (an early form of wheat) being malted. Malting initiates germination, which activates enzymes needed to convert starches to fermentable sugars.
                    Using the pot created by --- and designed based on ancient pottery remains, we constructed a filter system that allowed water at 150°F to percolate through the malt.
                    This temperature was crucial to keep both alpha and beta amylases active and efficient.
                </p>
            </div>
        </div>
    );
}
