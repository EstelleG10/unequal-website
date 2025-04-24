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

            {/* Title & Group Overview */}
            <div className="text-center mt-6">
                <h1 className="text-6xl font-extrabold drop-shadow-md">The Journalism Group</h1>
                <p className="text-lg text-orange-600 mt-2">Our Reflection on Process, Perspective, and Collaboration</p>
                <p className="text-lg text-white mt-2">Words by the Journalism Team</p>
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




            {/* Event Picture  */}
            <div className="mt-8 flex justify-center">
                <img src="/slideone.jpg" alt="Event Poster" className="max-w-4xl w-full rounded-xl shadow-lg mx-auto" />
            </div>

            {/* Project Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Process in Motion</h2>
                <p className="mt-6 max-w-[90rem] mx-auto text-xl">
                    The meta-experience of being in a process, observing the processes of others, and then reflecting on both has always fascinated me. This course offered a rare opportunity to do all three at once. From the start, the structure felt intentionally loose—an experiment in itself. At times, it felt like there wasn’t enough leadership, which led to a “too many cooks in the kitchen” atmosphere. But that friction gave way to something unexpectedly rich: strategies were improvised, roles negotiated, and new ways of collaborating emerged among students and staff alike.
                    <br></br>
                    <br></br>
                    The whole thing was intimidating from the onset. Taking on the role of journalist, in particular, felt daunting. The responsibility to observe, analyze, and re-present something as it was happening felt impossibly large. And yet, that’s exactly the space I needed to be in—to grow, to step back, and to participate differently than I have in other academic settings.
                    <br></br>
                    <br></br>
                    It’s a strange thing to write about an experience for others. How do you stay present, observant, and analytical all at once—and then translate that into something digestible for a general audience? But this is also what humans do. We tell stories. We document what matters to us. And even when it feels impossible, people still want to know what others have to say.
                    <br></br>
                    <br></br>
                    This course explored feasting and drinking as more than sustenance—as social tools for shaping identity, belonging, and exclusion. Ironically, we experienced similar patterns within our own class: the formation of assignment groups, the negotiation of status, and the subtle bureaucratic weight of academic hierarchy. We are at Yale, after all. But within that framework, there was also room for creativity, conflict, and care. It was messy, yes—but that mess gave us something real to write about.
                    <br></br>
                    <br></br>
                    I feel incredibly lucky to have had such fantastic journalism partners to navigate this experience with. Our balance felt just right, and it was the fodder for both individual and collective reflection, growth, and creative output. We each brought different strengths and perspectives, and together, we found a rhythm that made space for thoughtful collaboration without stifling individual voice.

                </p>
            </div>


            {/* Project Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Architecture of Story</h2>
                <p className="mt-6 max-w-[90rem] mx-auto text-xl">
                    The meta-experience of being in a process, observing the processes of others, and then reflecting on both has always fascinated me. This course offered a rare opportunity to do all three at once. From the start, the structure felt intentionally loose—an experiment in itself. At times, it felt like there wasn’t enough leadership, which led to a “too many cooks in the kitchen” atmosphere. But that friction gave way to something unexpectedly rich: strategies were improvised, roles negotiated, and new ways of collaborating emerged among students and staff alike.
                    <br></br>
                    <br></br>
                    The whole thing was intimidating from the onset. Taking on the role of journalist, in particular, felt daunting. The responsibility to observe, analyze, and re-present something as it was happening felt impossibly large. And yet, that’s exactly the space I needed to be in—to grow, to step back, and to participate differently than I have in other academic settings.
                    <br></br>
                    <br></br>
                    It’s a strange thing to write about an experience for others. How do you stay present, observant, and analytical all at once—and then translate that into something digestible for a general audience? But this is also what humans do. We tell stories. We document what matters to us. And even when it feels impossible, people still want to know what others have to say.
                    <br></br>
                    <br></br>
                    This course explored feasting and drinking as more than sustenance—as social tools for shaping identity, belonging, and exclusion. Ironically, we experienced similar patterns within our own class: the formation of assignment groups, the negotiation of status, and the subtle bureaucratic weight of academic hierarchy. We are at Yale, after all. But within that framework, there was also room for creativity, conflict, and care. It was messy, yes—but that mess gave us something real to write about.
                    <br></br>
                    <br></br>
                    I feel incredibly lucky to have had such fantastic journalism partners to navigate this experience with. Our balance felt just right, and it was the fodder for both individual and collective reflection, growth, and creative output. We each brought different strengths and perspectives, and together, we found a rhythm that made space for thoughtful collaboration without stifling individual voice.

                </p>
            </div>



            {/* Project Overview */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Hand-Spun Infrastructure</h2>
                <p className="mt-6 max-w-[90rem] mx-auto text-xl">
                    Coming into Unequal, I was excited by the chance to collaborate with students from different academic backgrounds. I knew this would be an opportunity to learn from my peers, especially as we tackled group projects that were outside many of our comfort zones. Few of us had any prior experience with our assigned topics, which made the process both exhilarating and a little intimidating. I was no exception—I had never brewed beer, conducted trace residue analysis, curated a museum exhibit, or written a journalistic article. And while I wouldn't claim mastery over any of those things now, I’ve gained a real appreciation for the kind of thinking, trial-and-error, and teamwork that each one requires.
                    <br></br>
                    <br></br>
                    As a member of the journalism group, I was eager to contribute not just as a writer but also as a coder. Early on, I proposed that we build our final website from scratch, using code instead of relying on a templated platform. I’m incredibly grateful to my teammates for trusting me with that vision and supporting me throughout the entire process—even when the coding challenges piled up. It’s rare to get this kind of experience in a non-CS course, and I loved being able to bring those skills into a humanities-centered space.
                    <br></br>
                    <br></br>
                    There were many technical decisions to make—what language to use, how to structure the site, where to host it so it would stay accessible long-term and for free. We eventually landed on JavaScript and Tailwind CSS, hosted on Vercel. Along the way, I had to teach myself new techniques to support the interactive features we wanted, like the image gallery. It wasn’t always easy, but it was deeply satisfying to see it come together—and even more meaningful to have built it in true collaboration with my team.
                    <br></br>
                    <br></br>
                </p>
            </div>


            {/* Science Behind Brewing */}
            <div className="mt-6 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Our Final Reflection</h2>
                <p className="mt-4 max-w-[90rem] mx-auto mx-auto text-xl">
                    Together, our three reflections offer different angles on the same experience: learning by doing, writing through uncertainty, and creating something shared. Whether wrestling with theory, shaping narrative, or building a website from scratch, we were each pushed beyond what we thought we could do. And in that discomfort, something memorable emerged—not just in the work we produced, but in the way we showed up for each other.

                </p>
            </div>

            {/* The Results of the Brewing */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Acknowledgements</h2>
                <p className="mt-4 max-w-[90rem] mx-auto mx-auto text-xl">
                    A special thank you to Michaela Herrmann, Communications Specialist (Staff Writer/Reporter) at Yale University, for her thoughtful mentorship and steady guidance throughout the semester. Her insight, encouragement, and deep commitment to our learning made this project not only possible, but meaningful. We couldn’t have accomplished this massive undertaking without her support.

                </p>

            </div>
        </div>
    );
}
