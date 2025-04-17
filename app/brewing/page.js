"use client";
import { useState } from "react";
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

export default function BrewingPage() {
    const [showGroups, setShowGroups] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

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

            {/* Title & Group Overview */}
            <div className="text-center mt-6">
                <h1 className="text-7xl font-extrabold drop-shadow-md">The Brewing Group</h1>
                <p className="text-lg text-orange-600 mt-2">Recreating Ancient Brewing Techniques.</p>
                <p className="text-lg text-white mt-2">Words by Estelle Gerber</p>
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
                    The brewing group embarked on an ambitious journey - recreating recipes of the past from ancient Egypt and Mesopotamia. The goal was to revive forgotten techniques and explore the flavors created through their ancient brewing practices. Below you can see the steps taken and a more in depth look into the process.
                </p>
            </div>

            {/* Brewing Steps */}
            <div className="mt-10 space-y-6">
                {[
                    {
                        title: "Step 1: Gathering Ingredients",
                        image: "/barley.JPG",
                        description: "First, we sourced ancient grains like barley and wheat (our modern replacement for emmer) as well as gathered the needed lab equipment such as iodine, thermometers, beakers, hot plates, and other tools.",
                    },
                    {
                        title: "Step 2: Preparing the Tools",
                        image: "/ceram.JPG",
                        description: "Then, we assembled and prepared the ceramic fermenter that was created based on ancient ceramic fragments.",
                    },
                    {
                        title: "Step 3: Brewing Process",
                        image: "/pour.JPG",
                        description: "After that, we followed ancient brewing techniques and instructions with the help of updated lab equipment to begin the brewing process.",
                    },
                    {
                        title: "Step 4: Fermentation",
                        image: "/BEERSS.JPG",
                        description: "Next, we began pouring warm water through the vessel allowing our enzymes to break down the starch and the fermentation process to begin.",
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
                    While attending one of the brewing group's meetings, I had the chance to gain a deeper understanding of the brewing process and the science behind it. Working with Vanessa Torros and Zane Johnson (two Yale postdocs in Molecular Biology and Biochemistry), the brewing group members explored not only ancient processes but also modern scientific principles. Traditionally, brewing starts with malting grains like barley and emmer (an early form of wheat that would have been used to beer ancient beer). Malting, which involves XYZ,  initiates germination, which activates the enzymes needed to convert starches to fermentable sugars.
                    Using the pot created by local ceramicist and longtime Peabody staff member Maishe Dickman, who built the group several vessels based on ancient pottery remains published in the book TITLE, we were able to construct a filter system that allowed water to percolate through the malt.
                    This water was kept at 150 degrees fahrenheit to ensure that both alpha and beta amylase were active and able to efficiently extract sugars.
                    From there, the group used an iodine test to keep an eye on the wort’s starch levels. When iodine is added to a liquid sample like our wort, the sample will either turn blue or brown.
                    Blue indicates that starch is present and brown indicates that all of the starch has been broken down. We expected that our first test would result in blue, meaning that
                    starch was still present in our sample. This was expected as we had only put the water through the filter a few times. However, after our first iodine test, we had unexpected results. The sample showed that the starch had broken down far quicker than anticipated. To confirm whether this result was accurate, the group quickly created a control group
                    with the wheat and water to ensure our original sample contained starch and to ensure that our iodine was working. After evaluating the control group, we were able to confirm that the original sample did contain starch and that the iodine was functioning as expected. This meant
                    that the fermentation was still happening despite our first starch test having alarming results. We hypothesized that the color was altered because of the natural color of the wheat in the sample. While this moment was stressful and unexpected, it provided all members of the brewing team with a glimpse of what it is like to brew beer or work in a lab. Things will not always go as expected, so it is important to be quick on your feet and creative with solutions.

                </p>
            </div>

            {/* The Results of the Brewing */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Results of the Brewing</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    After going through the rigorous brewing process, it was time to enjoy the beer that was the result of a long and complex brewing process.
                    At the Unequal class cooking event (which you can read more about here),
                    the brewing group provided their work for people to drink as they ate the
                    food we prepared. Everyone I spoke to really enjoyed the beer and it was
                    interesting to see people try the store bought beer and compare it to the brewing group’s creation.


                    <br></br>
                    <br></br>
                    In addition to the work of the brewing group being enjoyed, it was also used by the trace residue group. The vats in which the beer was brewed were used for trace residue analysis with the hope of contributing to research at the Yale Ancient Pharmacology Program. You can click HERE to read more about the results of this testing and the process.
                    <br></br>
                    <br></br>
                    <br></br>

                    ** add link to trace residue and cooking event ** <br />
                </p>
            </div>

            {/* Brewing of the Past Versus the Present */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Brewing of the Past Versus the Present</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    Throughout the brewing process, I couldn't stop making comparisons between the actions we were taking and the decisions that ancient brewers would have made.
                    For example, we had access to a thermometer which allowed us to make sure that both the alpha and beta amylases would be present to break down the sugars. We also had access to years of research that show that 150
                    degrees is the ideal temperature for this. In ancient Egypt and Mesopotamia, they not only did not know what the exact ideal temperature was, but they also did not have a way to exactly measure the temperature of their water.
                    This implies they used a feel-based approach and that the brewers of the past must have developed the ability to recognize when the water was the perfect temperature for the breakdown of starches to occur. This also suggests
                    that the task of brewing was likely passed down and taught through families or communities as someone would need to learn how to recognize the correct temperature or starch breakdown. While this is obviously different from the process that the brewing group went through, there were also many similarities. There was still the community aspect as the students had a chance to learn from people who have been brewing for many years. Additionally, the process was still aided by feel-based science. Whether it was the aroma exuded by the yeast, or the color the water became, the postdocs had immeasurable ways to check that the process was going as intended. So, in many ways our process is still similar to that of ancient brewers.

                </p>
            </div>

            {/* Interview Section */}
            {/* Interview Section */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-extrabold text-orange-600">An interview with the Babylonian Brewing Project</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    <span className="font-bold text-white">Conducted by Megan Suka</span>
                    <br /><br />
                    Vanessa Torros and Zane Johnson, Yale postdocs in Molecular Biology and Biochemistry respectively, sat quietly next to a complicated-looking beer keg amidst the spirited chaos of students preparing for the Babylonian Feast. From this impressive keg, Vanessa had poured a small amount of a pinkish-looking liquid into a modest solo cup. I noticed her dipping a pH strip into this mixture and, having piqued my curiosity, I decided to walk over and ask what they were up to.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> Can you tell me a little bit about this project?
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> Well, we call ourselves the “Babylonian Brewing Project,” but that’s mostly just for fun. Basically, we’re recreating beers based on our best approximation of ancient Mesopotamian recipes.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> And what are you learning from this pH test?
                    <br />
                    <span className="font-extrabold text-white">Zane:</span> The pH Test measures the output of the metabolic activity of the microorganisms that are responsible for the fermentation process. It’s how we monitor the progression of the fermentation process.
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> The lower the pH, the more acidic the flavor becomes. Yeast prefer an acidic environment; a higher-sugar environment like the one we’ve provided enables the yeast to convert more sugars into alcohol. So this should only contain yeast.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> So the sugars increase the acidity, and basically have the dual effect of getting you drunker while inoculating the mixture against contamination?
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> That’s right.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> How elegant.
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> The beer we’ve made has a pH below 4.5, so it’s on the sour side. Anything than 4.5 tends to be more bitter.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> What’s significant about the yeast you’ve chosen to use for this particular beer?
                    <br />
                    <span className="font-extrabold text-white">Zane:</span> If the idea is to recreate ancient Mesopotamian beer as closely as possible, one of the key determinants will be the type of yeast they used. We know that the particular date skins endemic to the Euphrates Valley are particularly well-suited to the fermentation process, so we isolated that yeast and used it to inoculate our beer. This strain of yeast is called <em>Meyerozyma Caribbica</em>.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> So this is our best approximation of a Mesopotamian beer recipe based on the kinds of microorganisms we can find there nowadays?
                    <br />
                    <span className="font-extrabold text-white">Zane:</span> Right.
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> This particular yeast is so super delicious. Would you like to try it?
                    <br /><br />
                    Vanessa handed me a glass of a light, pink-tinged brew. It wasn’t overly-sweet, but the dryness was balanced with a tremendously fruity flavor reminiscent of dates. She reminded me that there were no actual date fruits in the recipe, but it was a very welcome coincidence.
                    <br /><br />
                    <span className="font-extrabold text-white">Megan:</span> That’s got to be one of the best beers I’ve ever tasted.
                    <br />
                    <span className="font-extrabold text-white">Vanessa:</span> Thank you! The biggest difference between this beer and contemporary beers is that this one contains no hops. Mesopotamian beer contained barley and emmer; since emmer is so closely related to wheat, we used wheat and barley in this recipe. It’s a lot different from what we’re used to drinking nowadays.
                    <br /><br />
                    Vanessa and Zane’s brewing efforts are part of a larger project at Yale led by Dr. Andrew Koh, who is working to create novel protocols for trace residue analysis. You can read more about this project here [HYPERLINK TO TRACE RESIDUE PAGE]
                </p>
            </div>
        </div>
    );
}
