"use client";

import { useState } from "react";
import Link from "next/link"

export default function CookingEventPage() {
    const [expandedSection, setExpandedSection] = useState(null);
    const [showGroups, setShowGroups] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6 relative text-white text-lg font-semibold">
                    <Link href="/" className="hover:text-[#E2A96D] transition-all">Home</Link>


                    <a href="/about" className="hover:text-[#E2A96D] transition-all">About</a>

                    {/* Groups Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowGroups(!showGroups)}
                            className="hover:text-[#E2A96D] transition-all"
                        >
                            Groups ▾
                        </button>
                        {showGroups && (
                            <div className="absolute top-8 left-0 bg-black text-white rounded shadow-lg py-2 z-50 w-40">
                                <a href="/museum" className="block px-4 py-2 hover:bg-[#333]">Museum</a>
                                <a href="/brewing" className="block px-4 py-2 hover:bg-[#333]">Brewing</a>
                                <a href="/trace_residue" className="block px-4 py-2 hover:bg-[#333]">Trace Residue</a>
                                <a href="/journalism" className="block px-4 py-2 hover:bg-[#333]">Journalism</a>
                            </div>
                        )}
                    </div>

                    {/* Events Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowEvents(!showEvents)}
                            className="hover:text-[#E2A96D] transition-all"
                        >
                            Events ▾
                        </button>
                        {showEvents && (
                            <div className="absolute top-8 left-0 bg-black text-white rounded shadow-lg py-2 z-50 w-40">
                                <a href="/brewing_event" className="block px-4 py-2 hover:bg-[#333]">Brewing Event</a>
                                <a href="/cooking_event" className="block px-4 py-2 hover:bg-[#333]">Cooking Event</a>
                            </div>
                        )}
                    </div>

                    <a href="/gallery" className="hover:text-[#E2A96D] transition-all">Gallery</a>
                </nav>
            </header>

            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold drop-shadow-md">Trace Residue</h1>
                <h2 className="text-3xl font-extrabold drop-shadow-md">--------</h2>
                <p className="text-lg text-orange-600 mt-2">----.</p>
                <p className="text-md text-grey-300 font-semibold mt-1">---</p>
                <p className="text-md text-grey-300 font-semibold mt-1">---- </p>
            </div>

            {/* Event Picture  */}
            <div className="mt-8 flex justify-center">
                <img src="/beer.jpeg" alt="picture" className="" />
            </div>
        </div>

    );
}