"use client";
import { useState } from "react";

export default function BrewingPage() {
    const [showGroups, setShowGroups] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6 relative text-white text-lg font-semibold">
                    <a href="/" className="hover:text-[#E2A96D] transition-all">Home</a>

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
                                <a href="/journalism" className="block px-4 py-2 hover:bg-[#333]">Brewing Event</a>
                                <a href="/cooking_event" className="block px-4 py-2 hover:bg-[#333]">Cooking Event</a>
                            </div>
                        )}
                    </div>

                    <a href="/gallery" className="hover:text-[#E2A96D] transition-all">Gallery</a>
                </nav>
            </header>

            {/* Title & Group Overview */}
            <div className="text-center mt-6">
                <h1 className="text-7xl font-extrabold drop-shadow-md">The Brewing Group</h1>
                <p className="text-lg text-orange-600 mt-2">Recreating Ancient Brewing Techniques.</p>
                <p className="text-lg text-white mt-2">Words by ----</p>
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
                <h2 className="text-3xl font-bold text-orange-600">The Task at Hand</h2>
                <p className="mt-6 text-xl">
                    The brewing group embarked on an ambitious journey - recreating recipes of the past from ancient Egypt and Mesopotamia. The goal was to revive forgotten techniques and explore the flavors created through their ancient brewing practices.
                </p>
            </div>

            {/* Brewing Steps */}
            <div className="mt-10 space-y-6">
                {[
                    {
                        title: "Step 1: Gathering Ingredients",
                        image: "/barley.JPG",
                        description: "First, we sourced ancient grains like barley and emmer as well as gathered the needed lab equipment such as iodine, thermometer, beakers, hot plates, and other tools.",
                    },
                    {
                        title: "Step 2: Preparing the Tools",
                        image: "/ceram.JPG",
                        description: "Then, we assembled and prepared the ceramic fermenter that was created based on ancient ceramic fragments.",
                    },
                    {
                        title: "Step 3: Brewing Process",
                        image: "/pour.JPG",
                        description: "After that, we followed ancient brewing techniques combined with updated lab equipment to begin the brewing process.",
                    },
                    {
                        title: "Step 4: Fermentation",
                        image: "/BEERSS.JPG",
                        description: "Next, we began fermenting in open air, allowing the ingredients to ferment and mature.",
                    },
                    {
                        title: "Step 5: Tasting & Reflection",
                        image: "/BEV.jpg",
                        description: "Finally, we tasted the brews and compared them to modern beers, reflecting on the complexity and flavor differences.",
                    },
                ].map((step, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-orange-600">{step.title}</h3>
                        <div className="mt-4 flex gap-2 items-center">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-50 h-60 rounded-lg object-cover"
                            />
                            <p className="text-xl text-gray-300">{step.description}</p>
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
                    Traditionally, brewing starts with grains like barley and emmer (an early form of wheat) being malted. Malting initiates germination, which activates the enzymes needed to convert starches to fermentable sugars.
                    Using the pot created by --- , created based on ancient pottery remains, we were able to construct a filter system that allowed water at 150°F to percolate through the malt.
                    This temperature (150) is crucial as it ensures that both alpha and beta amylases are active and efficient at extracting sugars.
                    From there, we relied on an iodine test with which a sample either turns blue or brown. When it is blue, it indicates that the sample still contains starch and when it is brown we know there has been the desired starch breakdown.
                    As we worked, we had unexpected results. The sample we used for the iodine test was showing that the starch had left the sample quicker than anticipated. As a result, the group created a control group
                    with the emmer to ensure our original sample contained starch. After evaluating the control group, we were able to confirm that the original sample did contain starch
                    which meant that the fermentation should still be possible despite our first starch test having alarming results.
                    <br></br>
                </p>
            </div>
            {/* NEw Section  */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Brewing of the Past Versus the Present</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    As we worked on the brewing process, I could not stop making comparisons between the actions we were taking and the ones that those of the past would have.
                    For example, we had access to a thermometer which allowed us to make sure that both the alpha and beta amylases would be present to break down the sugars. We also had access to years of research that show that 150
                    degrees is the ideal temperature for this. In ancient Egypt and Mesopotamia, they not only did not know what the exact ideal temperature was but they also did not have a way to measure the temperature of their water.
                    This implies they used a feel-based approach and that the brewers of the past must have developed the ability to recognize when the water was the perfect temperature for the breakdown of starches to occur. This also suggests
                    that the task of brewing was likely passed down and taught through families or communities as someone would need to learn how to recognize the correct temperature or starch breakdown.
                </p>
            </div>
            {/* NEw Section  */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Results of the Brewing</h2>
                <p className="mt-2 text-lg leading-relaxed">

                    ** add link to trace residue and cooking event **
                    <br>
                    </br>
                        ** text will be edited more**
                </p>
            </div>
        </div>
    );
}
