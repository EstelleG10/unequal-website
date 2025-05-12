"use client";
import { useState } from "react";
import Link from "next/link";

export default function Contributors() {
    const [showGroups, setShowGroups] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

    const contributors = [
        "Cumings, Michael (The Office of Public Affairs & Communications)",
        "Darnell, John (Department of Near Eastern Languages and Civilizations)",
        "DeAngelo, Rebekah (Yale Peabody Museum)",
        "Dickman, Maishe (George Street Pottery Studio)",
        "Gonzales, Patricia Jurado (Universitat Oberta de Catalunya)",
        "Goren, Shiri (Department of Near Eastern Languages and Civilizations)",
        "Hochstrasser, Mark (Yale School of Medicine)",
        "Hartman, Amaleah (Molecular, Cellular and Developmental Biology)",
        "Heiser, David (Yale Peabody Museum)",
        "Herrmann, Michaela (Faculty of Arts and Sciences Dean's Office)",
        "Howell, Eleanor (Yale Peabody Museum)",
        "Johnson, Zane (Yale School of Medicine)",
        "Kamp, Ty (The Franke Program in Science and the Humanities)",
        "Koh, Andrew (Yale Ancient Pharmacology Program)",
        "Lassen, Agnete (Yale Babylonian Collection)",
        "Mahl, Christian (Alechemy Brewing)",
        "Marcum, Marsha (Lead Building Services Coordinator, Yale HQ)",
        "Mariani, Carol (Molecular, Cellular and Developmental Biology)",
        "Moeller, Nadine (Department of Near Eastern Languages and Civilizations)",
        "Muchnik, Sydney (Yale Peabody Museum)",
        "Norris, Christopher (Yale Peabody Museum)",
        "Paulette, Tate (North Carolina State University)",
        "Renton, Chris (Yale Ancient Pharmacology Program)",
        "Scarpa, Steven (Yale Peabody Museum)",
        "Skelly, David (Yale Peabody Museum)",
        "Sörensen, Pia (Harvard University)",
        "Todorow, Vanessa (Yale School of Medicine)",
        "Trivelli, Sharon (George Street Pottery Studio)",
        "Wagensonner, Klaus (Yale Babylonian Collection)",
        "White, Maureen (Yale Peabody Museum)",
        "Willauer, Maddison (Yale Peabody Museum)",
        "Wolenski, Joseph (Molecular, Cellular and Developmental Biology)",
        "The Department of Anthropology, Yale University",
        "The Department of Near Eastern Languages and Civilizations, Yale University",
        "The Franke Program in Science and the Humanities",
        "The Willoughby Fund",
        "The Yale Babylonian Collection"
    ];

    return (
        <>
            <div className="bg-black text-white pt-20 px-8 pb-8 font-serif">

                {/* Header */}
                <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                    <h2 className="text-3xl text-white font-extrabold tracking-widest drop-shadow-lg">
                        <Link href="/" className="hover:text-[#E2A96D] transition-all">
                            UNEQUAL
                        </Link>
                    </h2>
                    <nav className="flex gap-6 relative text-white text-lg font-semibold">
                        <Link href="/" className="hover:text-[#E2A96D] transition-all">Home</Link>
                        <a href="/about" className="hover:text-[#E2A96D] transition-all">About</a>

                        <div className="relative">
                            <button onClick={() => setShowGroups(!showGroups)} className="hover:text-[#E2A96D] transition-all">
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

                        <div className="relative">
                            <button onClick={() => setShowEvents(!showEvents)} className="hover:text-[#E2A96D] transition-all">
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
            </div>

            {/* Contributors Section */}
            <div className="max-w-4xl mx-auto px-6 py-2 text-white font-serif">
                <h2 className="text-4xl font-bold mb-8 text-center">It Takes a Village...</h2>

                <p className="mb-4 text-lg">
                    We are grateful to our many supporters and collaborators for making this course and its events possible:
                </p>

                <p className="mb-8 text-lg">
                    Events and activities were organized with funding from Yale’s Department of Near Eastern Languages and Civilizations,
                    the Department of Anthropology, The Yale Peabody Museum, the Yale Program in Ancient Pharmacology,
                    the Yale Babylonian Collection, The Franke Program in Science and the Humanities, and the Willoughbyby Fund.
                </p>

                <ul className="space-y-4 border border-gray-700 rounded-xl p-6 bg-black/40 backdrop-blur-md shadow-md">
                    {contributors.map((name, idx) => (
                        <li key={idx} className="border-b border-gray-700 last:border-none pb-2">
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
