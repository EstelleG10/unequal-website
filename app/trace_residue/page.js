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
                    <a href="/tabula_gratulatoria" className="hover:text-[#E2A96D] transition-all">Tabula Gratulatoria</a>
                </nav>
            </header>

            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold drop-shadow-md">Trace Residue</h1>
            </div>

            {/* Event Picture */}
            <div className="mt-8 max-w-4xl mx-auto flex justify-center">
                <img src="/trsquad.jpeg" alt="picture" className="" />
            </div>

            {/* Trace Residue Description */}
            <div className="mt-10 max-w-4xl mx-auto text-lg space-y-6 leading-relaxed">
                <p>As I walked into an unassuming laboratory in the Yale Peabody Museum’s basement, I noticed two things: first, the distinctive whiff of acetone; second, the beaming smile on Dr. Andrew Koh’s face. Koh was preparing his students for a novel experiment in Trace Residue Analysis: a process of extracting specific chemical compounds (also known as “biomarkers”) from artifacts to detect residues of ancient substances, including foodstuffs, resins, or beverages, typically using methods such as Gas Chromatography–Mass Spectrometry (GC-MS).</p>

                <p>As the founder of the ARCHEM project in 2003, Koh has specialized in the development of a field he calls archaeochemistry. He believes that current methodologies of artifact analysis are falling short of their potential, and that a more interdisciplinary approach—combining chemistry, archaeology, ethnobotany and history—could reveal more than strict chemical analysis alone. As Koh puts it: “We're trying to make this archaeochemistry, not just pure chemistry."</p>

                <p>Besides the limiting nature of a strictly chemistry-driven approach to trace residue analysis, it typically comes with other challenges. For instance, the traditional protocol used by chemists—which requires the extraction and pulverization of a small sample from the artifact itself by drilling a small hole and collecting the remnants—is inherently destructive. This can put chemists at odds with museum conservators who wish to limit damage to their collections. Koh and his team have found a brilliant solution to this problem: they have developed a protocol in which artifacts can be “washed” with solvents that extract trace residues without damaging the artifacts themselves.</p>

                {/* Event Picture */}
                <div className="mt-8 flex justify-center">
                    <img src="/trpot.jpeg" alt="picture" className="" />
                </div>

                <p>As a means-testing project, Koh et al. are using this non-destructive protocol to examine residues of two suspected beer jars. Roughly 1,800 years old and hailing from the Roman period, these vessels have excellent provenance–a term used to describe vessels with a well-documented origin and custodial history. They have never been cleaned or displayed and, as relatively untouched specimens, they are ideal for trace residue analysis. If these vessels did indeed contain organic compounds indicating the presence of beer, they could serve as “type vessels” for identifying beer vessels all over the world.</p>

                <p>In order to confirm the presence of beer residues in these artifacts, Koh, in conjunction with the Brewing Team from NELC120, needed to create “control” vessels. Using specially crafted jars from local ceramicist Maishe Dickman, the NELC120 Brewing Team helped develop historically appropriate recipes which were then brewed in Maishe’s jars, themselves copies of brewing kits excavated at a number of North Mesopotamian sites dating to the 23rd–22nd century BCE. Using his “wash” trace residue protocol, the trace residue team intends to compare the remnants in the ancient and contemporary jars in an effort to identify a residue which, if found in both vessels, can be used as a biomarker to confirm the presence of beer in artifacts found all over the world.</p>

                <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-300 mt-2">Watch the wash in action!</p>

                    <div className="mt-4 flex justify-center">
                        <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/07ca_bVZaCc"
                                title="Event Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <p>This interdisciplinary approach to trace residue analysis has exciting potential to teach us about the lives of ancient people. Besides the matter of identifying trace residue for Mesopotamian beer, this work contributes to a broader understanding of human history: food and drink can help us reconstruct fundamental aspects of the social lives of ancient humans, including their diets, economies, and social hierarchies.</p>
            </div>

        </div>

    );
}