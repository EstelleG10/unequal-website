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
                <h1 className="text-7xl font-extrabold drop-shadow-md">Brewing Event</h1>
                <h2 className="text-3xl font-extrabold drop-shadow-md">An Evening of Drinking With the Ancients</h2>
                <p className="text-md text-grey-300 font-semibold mt-1">March 6th, 2025</p>
                <p className="text-md text-grey-300 font-semibold mt-1">Words by Megan Suka</p>
            </div>

            {/* Event Picture  */}
            <div className="mt-8 flex justify-center">
                <img src="/beertalk.jpeg" alt="Event Poster" className="max-w-2xl w-full rounded-xl shadow-lg mx-auto" />
            </div>


            {/* Event Description */}
            <div className="mt-12 max-w-7xl mx-auto text-gray-200 space-y-6 leading-relaxed text-xl">

                <p><strong>“Nearly 4000 years ago, in what is now the land of Iraq, a song was composed in honor of the divine Ninkasi, goddess of a golden, delicious, nutritious drink that we love and enjoy to this day.” </strong></p>

                <p>
                    With this preface, co-instructor of NELC120 Unequal, Gojko Barjamovic of Yale’s Department of Near Eastern Languages and Cultures, introduced Dr.Tate Paulette of North Carolina State University to a full house of 160 guests in the elegantly adorned Great Hall of the Yale Peabody Museum. Here, Paulette delivered a lively guest lecture based on his 2024 book In the Land of Ninkasi: A History of Beer in Ancient Mesopotamia. Paulette’s book is the first text to pull together the evidence on ancient brewing in a monograph form. As the world’s foremost expert on ancient beer brewing techniques and what he calls “gastro-politics,” Paulette deftly wove archaeological evidence, ancient texts, and the formidable task of their interpretation into a story-driven account of Mesopotamian brewing practices.
                </p>

                <p>
                    “What we have in 3000 B.C. Mesopotamia is evidence of the world’s first great beer culture,” Paulette told the audience. Research in recent decades, particularly in the arena of trace residue analysis, has given us a fragmentary knowledge of brewing practices in earlier cultures. What’s remarkable about Paulette’s work in third-millennium BC Mesopotamia, by contrast, is that “We suddenly have a wealth of evidence to work with ... This is the first time we can really see a beer culture in its full complexity.” This picture, he says, comes to us in the forms of archaeological, artistic, and written evidence.
                </p>

                <p>
                    One of the more amusing pieces of archaeological evidence Paulette shared with the audience was a cylinder seal (an ornately-decorated object which, when rolled over wet clay, left an imprint of an image unique to its owner—akin to a signature) that seemed to leave little room for misinterpretation: its imprint shows a man drinking beer through a straw, simultaneously laid out over a woman, in what one hopes was a passionate, drunken love affair. “In some ways,” Paulette noted with a grin, “drinking culture hasn’t changed a bit since ancient times.”
                </p>

                <p>
                    Etiquette aside, Mesopotamian drinking culture was as socially significant as it was economically indispensable. Thousands of cuneiform tablets have been recovered which detail administrative accounts of commercial logistics, like grain stores, delivery receipts, brewing recipes, and tavern locations. They were remarkably specific: you might find an inventory of types and quantities of beer and instructions for how much should be delivered to various locations. Other evidence includes protective rituals; prayers and hymns to Ninkasi, goddess of brewing; drinking songs; and narrative accounts of drunkenness varying from “slightly buzzed” to what can only be described as “dangerously wasted.”
                </p>

                {/* Event Picture  */}
                <div className="mt-8 flex justify-center">
                    <img src="/beertalk2.jpeg" alt="Event Poster" className="max-w-2xl w-full rounded-xl shadow-lg mx-auto" />
                </div>

                <p>
                    After the lecture and a lively Q&A, guests eagerly swarmed the bar set up among the towering dinosaurs in Burke Hall for a chance to sample ancient brews. As an accompaniment to Dr. Paulette’s talk, Yale School of Medicine researchers Vanessa Todorow, Zane Johnson and Christian Mahl—who have spent the semester as auxiliary course instructors in NELC120 in charge of the brewing team—offered samples of two Mesopotamian beers that they brewed specially for this event, following recipes developed in an inter-departmental effort to re-create these ancient beverages.
                </p>

                <p>
                    Rather than brave the line for the food tables snaking outside the banquet hall, I decided to wait it out and eavesdrop on a group of people while waiting for a chance to ask Dr. Paulette further questions. By the time I did reach the bar, the charcuterie tables had been reduced to piles of wilted lettuce and grape stems—signs of an evening well-enjoyed by the many guests in attendance—but I was lucky that neither of the two kegs I’d hoped to sample had run dry. The first beer, simply called “sweet beer,” had a low alcohol content with what Todorow called “a bready profile, with some fruity and mildly sour notes.” The other, named the “good beer,” had a stronger, 5-6% ABV content, with a more acidic, citrusy profile, accompanied by herbal and peppery undertones.
                </p>

                <p>
                    As both an accessible educational experience open to the New Haven public and a hands-on enrichment of the brewing team’s course contributions, the event was a fascinating, fun, and charming experience for all in attendance. Learning about Dr. Paulette’s research, while simultaneously incorporating his insights with the process of our archaeological and brewing efforts in class, brought us closer to understanding the significance of Mesopotamian beer culture than we could have achieved in the classroom alone.
                </p>

                {/* Event Picture  */}
                <div className="mt-8 flex justify-center">
                    <img src="/standingup.jpeg" alt="Event Poster" className="max-w-2xl w-full rounded-xl shadow-lg mx-auto" />
                </div>

                <p className="text-lg text-gray-400 italic">
                    The lecture and event was generously organized with funding from the Yale Peabody Museum, Yale’s Department of Near Eastern Languages and Civilizations, Department of Anthropology, the Yale Ancient Pharmacology Program, The Yale Babylonian Collection, and the Franke Program in Science and the Humanities.
                </p>
            </div>
        </div>

    );
}