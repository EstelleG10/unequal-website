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
                <h2 className="text-3xl text-white font-extrabold tracking-widest drop-shadow-lg">
                    <Link href="/" className="hover:text-[#E2A96D] transition-all">
                        UNEQUAL
                    </Link>
                </h2>
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
            <div className="min-h-screen bg-black text-white px-8 py-16">
                {/* Title & Event Date */}
                <div className="text-center">
                    <h1 className="text-7xl font-extrabold drop-shadow-md">The Museum Group</h1>
                    <p className="text-2xl text-orange-600 mt-2">Exploring curation of ancient objects at the Yale Peabody Museum.</p>
                </div>

                {/* Slideshow Presentation */}
                <div className="mt-12 text-center">
                    <div className="flex justify-center">
                        <iframe
                            src="https://docs.google.com/presentation/d/1qbZDkLnVTtNnBs-xrVHE2C5FqxeesovZvDU3QNlJFps/embed?start=true&loop=true&delayms=5000"
                            className="w-full max-w-4xl h-[700px] rounded-xl shadow-xl border border-orange-500"
                            allowFullScreen
                            title="Journalism Group Slideshow"
                        ></iframe>
                    </div>
                </div>


                <div className="mt-4 space-y-6 text-lg leading-relaxed text-gray-300">
                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600">Getting Started</h3>
                        <p className="max-w-[90rem] mx-auto" >
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

                    <header className="text-center space-y-2">
                        <h1 className="text-6xl text-orange-600 font-bold tracking-tight">
                            <span className="">Breaking Down The Curatorial Process </span>
                        </h1>
                    </header>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">1. Picking A Theme </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            As we drafted our exhibition themes, it became clear that even in brainstorming, these concepts had to be grounded in material culture. Thus, we immediately began selecting objects from the collections to help visualize potential themes. It was immediately evident that some stories of inequality were easier to tell through the collections than others. We realized that the narrative of our cases had to be succinct while still allowing us to represent multiple object types, scales, and regions. Thus, a sort of “let them eat cake” theme arose. By exploring inequality through food and drink, we are able to work with objects related to daily life, funerary culture, and elitism.
                        </p>
                    </div>
                    {/* Event image */}
                    <div className="mt-8 flex justify-center">
                        <img src="/concept.jpg" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">2. Choosing Objects </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            Our goal was to select a visually diverse set of objects that illustrate inequality in daily life. For instance, we chose to display two cups: one made of redware and one made of ceramic with ornate designs. We found that the ornate ceramic cup came from a tomb, while the redware cup was discovered buried between two village houses. Though the archeological contexts differ, these objects still demonstrate inequality. Having a proper tomb was typically associated with elite status in Ancient Egypt, this decorative ceramic cup was likely a valuable ceremonial object, not meant for practical use. The redware cup, on the other hand, was functional and common. We believe that displaying objects like these can paint a comprehensive picture of inequality through the culture surrounding food and feast.
                        </p>
                    </div>

                    {/* Event image
                    <div className="mt-8 flex justify-center">
                        <img src="/breakdown.jpg" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
                    </div> */}

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">3. Adjusting Object Selection </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            After we felt confident about our object list, we formally requested items through the Peabody. We quickly ran into a few issues, which forced us to replace several objects. The problems were primarily related to the size constraints within the cases, in addition to some conservation concerns. Custom mounts were not possible given our limited time frame, so particularly large, fragile, or non-freestanding objects were automatically eliminated. For instance, a fragmented stela we planned on being the visual anchor in the case was shockingly roughly 140 lbs and thus too heavy to be exhibited. We collaborated with Peabody conservators, curators, liaisons, and many other fantastic people to find replacement objects. We then constructed a more feasible object list that still fit our narrative.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">4. Designing The Cases </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            Once the final item list had been compiled, we began to formalize the layout across the cases. We allocated one case to describe the making of the feast and the other to the feast itself, separating objects accordingly. To better visualize the layouts of each case, various members of our group created various digital models of the space. This included illustrated renditions of the cases in addition to 3-D models accomplished through CAD. We wanted the display to look balanced while still mixing object size, type, and color. After a few drafts and ideas for posters on the top shelves, we shared our designs with the museum team at the Peabody.

                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">5. Coordinating Object Delivery and Preparation </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            Though many of the objects on our list were conveniently stored at the Peabody, many require additional steps before their exhibition. For example, one culinary tablet is on display, so we had to commission a 3D-printed replica. Another piece, “Fragment of an Offering Table”, was reported to have a “salt problem” and needed cleaning. Other objects, such as a large amphora, are still on pallets at West Campus, further pushing our exhibition date. After accounting for cleaning, transportation, and installation, we expect the exhibit to be complete by the end of June.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">6. Drafting a Narrative </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            Crafting the purpose of our exhibit involved creating a compelling narrative that was both cogent and meaningful. For each case—“Feast Preparation” and “Feasting Itself”—we distilled intricate historical relationships and power dynamics into focused introductory labels that abided by the museum’s 20–25 word “big idea” and 60–65 word supporting text format. We prioritized clarity, emotional engagement, and thematic cohesion. For “Feast Preparation,” we highlighted the labor and power behind every elaborate feast. Our words needed to connect unassuming objects into a unified narrative, enabling visitors to see that ancient feasts were not merely a matter of celebration or nourishment but of power, reinforcing economic and ritual order.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold text-[#E2A96D]">7. Writing Labels </h3>
                        <p className="max-w-[90rem] mx-auto" >
                            Like much of this process, writing labels for our objects proved a bigger challenge than initially anticipated. We gleaned most information through the LUX catalog, but our labels were made robust by utilizing resources such as transliteration books to help decipher tablets. The biggest challenge was prioritizing information that would appeal to the general public, not just a member of this class. This meant thinking carefully about how much context to give, how to phrase things clearly, and how to make sure each label supported the bigger story we’re trying to tell.
                        </p>
                    </div>
                    {/* 
                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600">Case Layout</h3>
                        <p className="max-w-[90rem] mx-auto" >
                            As the group worked to design the layout of the cases, I first hand witnessed the range of knowledge and skills possessed by various group mates
                            as a result of the wide range of majors represented throughout the course. This is one of my favorite parts of Unequal; because many students come from different majors,
                            they all bring different skill sets to each group which can help in unexpected ways.
                            In regard to case layout, it meant that people were skilled with CAD (Computer Aided Design), Photoshop, and drawing.
                            With all of these skills, the case layouts below were created.
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
