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
            {/* Header (dropdown version) */}
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
                                <a href="/trace-residue" className="block px-4 py-2 hover:bg-[#333]">Trace Residue</a>
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
            <div className="min-h-screen bg-black text-white px-8 py-16">
                {/* Title & Event Date */}
                <div className="text-center">
                    <h1 className="text-6xl font-extrabold drop-shadow-md">The Museum Group</h1>
                    <p className="text-lg text-orange-600 mt-2">Exploring curation of ancient objects at the Yale Peabody Museum.</p>
                </div>

                {/* <div className="mt-8 flex justify-center">
                    <img
                        src="/museum_graphic.png"
                        alt="Event Poster"
                        className="w-64 h-auto max-w-xs rounded-lg shadow-lg"
                    />
                </div> */}


                <div className="mt-4 space-y-6 text-lg leading-relaxed text-gray-300">
                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600">Getting Started</h3>
                        <p>
                            The students of the museum group had the opportunity to curate a museum exhibit at the Yale Peabody Museum.
                            In order to do so, the students first had to learn about curation and what objects would be possible based on the space provided.
                            Through working with the Peabody curators, they learned the size restraints of the case as well as the limitations caused by security.
                            The space they were given is near the lobby and gift shop which unfortunately meant the case did not have the security that some objects would require.
                            After learning more about the process, it was time for the group to pick their theme.
                            They discussed many ideas and ultimately decided to do two separate but connected themes for the cases.
                            In one case they would focus on the preparation of the feast and in the other, the indulgence of the feast.
                            This theme truly captured the essence of the course Unequal.
                            Throughout the semester students have read ancient recipes, recreated meals, and learned about the history behind the food/drink and how it was enjoyed.
                            After picking this theme, it was time to go through objects and plan out the case.
                        </p>
                    </div>

                    {/* Event image */}
                    <div className="mt-8 flex justify-center">
                        <img src="/concept.jpg" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600">Object Selection</h3>
                        <p>
                            Through the process of selecting objects, the museum group quickly learned both how rewarding the process can be and how difficult it can be.
                            Not only did all group members need to agree on the vision for the case but each object also had to be available and possible to be showcased in the provided case.
                            For example, if it was being used for research, displayed elsewhere, required high security, or was not prepared to be displayed, then the group was unable to use the object.
                            So, the members came up with lists of objects for each case, knowing that they might need to shift their plans depending on what was possible.
                            While this first posed as a challenge, I found that it led to deeper conversation over which objects to select.
                            It also meant that they drafted a longer list of objects that they were interested in, leading to more options when it was time to design case layout.
                        </p>
                    </div>

                    {/* Event image */}
                    <div className="mt-8 flex justify-center">
                        <img src="/breakdown.jpg" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600">Case Layout</h3>
                        <p>
                            As the group worked to design the layout of the cases, I first hand witnessed the range of knowledge and skills possessed by various group mates
                            as a result of the wide range of majors represented throughout the course. This is one of my favorite parts of Unequal; because many students come from different majors,
                            they all bring different skill sets to each group which can help in unexpected ways.
                            In regard to case layout, it meant that people were skilled with CAD (Computer Aided Design), Photoshop, and drawing.
                            With all of these skills, the case layouts below were created.
                        </p>
                    </div>
                </div>




                {/* Images of Case Design */}
                <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                    <div className="mt-4 flex space-x-4">
                        <img src="/harper.jpg" alt="Example" className=" rounded-lg object-cover" />
                        <img src="/example2.jpg" alt="layout" className="w-40 h-40 rounded-lg object-cover" />
                        <img src="/example2.jpg" alt="layout" className="w-40 h-40 rounded-lg object-cover" />
                    </div>
                </div>


              <div className="mt-8 flex justify-center">
                    <img
                        src="/museum_graphic.png"
                        alt="Event Poster"
                        className="w-64 h-auto max-w-xs rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
