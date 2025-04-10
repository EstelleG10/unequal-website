"use client";

import React, { useState } from "react";
import Link from "next/link"

export default function UnequalInterviewPage() {
    const [showGroups, setShowGroups] = useState(false);
    const [showEvents, setShowEvents] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6 relative text-white text-lg font-semibold">
                    <Link href="/" className="hover:text-[#E2A96D] transition-all">
                        Home
                    </Link>

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
                                <a href="/museum" className="block px-4 py-2 hover:bg-[#333]">
                                    Museum
                                </a>
                                <a href="/brewing" className="block px-4 py-2 hover:bg-[#333]">
                                    Brewing
                                </a>
                                <a href="/trace-residue" className="block px-4 py-2 hover:bg-[#333]">
                                    Trace Residue
                                </a>
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
                                <a href="/journalism" className="block px-4 py-2 hover:bg-[#333]">
                                    Brewing Event
                                </a>
                                <a href="/cooking_event" className="block px-4 py-2 hover:bg-[#333]">
                                    Cooking Event
                                </a>
                            </div>
                        )}
                    </div>

                    <a href="/gallery" className="hover:text-[#E2A96D] transition-all">
                        Gallery
                    </a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="mx-auto max-w-3xl p-6 space-y-12">
                {/* Intro Title */}
                <header className="text-center space-y-2">
                    <h1 className="text-6xl text-[#E2A96D] font-bold tracking-tight">
                        <span className="">UNEQUAL Explained</span>
                    </h1>
                </header>

                <p>
                   WORDS
                </p>

                {/* Interview Title */}
                <header className="text-center space-y-2">
                    <h1 className="text-6xl text-[#E2A96D] font-bold tracking-tight">
                        <span className="italic">An interview with Professor Morel</span>
                    </h1>
                </header>

                {/* Question 1 */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">
                        What has your experience been so far in teaching this course – has anything been particularly fun, exciting, challenging? How do your students benefit from the course's blended lecture and hands‑on approach?
                    </h2>
                    <p>
                        What makes the course especially unique is that it’s co‑taught by two specialists—myself, focusing on ancient Egypt, and Gojko Barjamovic, who works on ancient Mesopotamia. We’re both in the room for each of the two weekly lectures, which lets us draw real‑time comparisons and build connections between these two early civilizations that gave rise to some of humanity’s first states.
                    </p>
                    <p>
                        But the class doesn’t stop with Egypt and Mesopotamia—we also look at patterns of power, dominance, and inequality in a broader, cross‑cultural way. I think that’s one of the things students really take away: a sense that what we study in the ancient world helps us think more critically about societies in general, including our own.
                    </p>
                    <p>
                        The in‑class dialogue is genuinely exciting—often lively, sometimes humorous—and students get to witness how historical knowledge is actually produced, right in front of them. It’s a dynamic format, and to be honest, Gojko and I are constantly learning from it too.
                    </p>
                    <p>
                        Another key aspect is the theoretical grounding we bring to the course. We draw on thinkers like Michel Foucault, Max Weber, and Pierre Bourdieu—just to name a few—to help students reflect on state formation, social hierarchy, surveillance, and the relationship between power and knowledge. So we’re bridging humanities with social science, political theory, anthropology—you name it.
                    </p>
                    <p>
                        And then there’s the hands‑on side of the course. Through lab sessions and creative assignments, students don’t just learn about the past—they get to engage with it directly. Whether it’s recreating ancient recipes or working with primary sources, they’re invited to question the past in active, imaginative ways.
                    </p>
                </section>

                {/* Question 2 */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">
                        Can you share a highlight from your time leading the brewing section of this course?
                    </h2>
                    <p>
                        The experimental archaeology around ancient brewing methods was definitely a highlight—for us as instructors, and for the students too. We had two sessions: one using clay vessels, and another using metal. Both attracted quite a crowd—not just students, but also Yale specialists from all sorts of disciplines, gathering around as the students carefully tracked their brewing recipes. It was a great moment of shared curiosity and collaboration. As an example of the kind of interdisciplinarity it takes to study the past, I’m not sure we could’ve come up with a better way to show it in action.
                    </p>
                </section>

                {/* Question 3 */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">
                        Is there anything you really hope students take away from this course, either about the ancient world or more generally?
                    </h2>
                    <p>
                        More than anything, I hope students walk away from <span className="italic">Unequal</span> with a real sense that the ancient world still matters—that even the deep past continues to shape the present. I also hope they leave with a better understanding of the kinds of questions we can ask of history, and the tools we use to explore it.
                    </p>
                    <p>
                        As historians of the ancient world, we often feel a bit like detectives—we’re piecing things together from fragments… sometimes literally from what’s been thrown away! That’s why we’ve made it a point to get students working directly with primary sources: to show them that history isn’t something fixed or given—it’s something we interpret, something we actively reconstruct. And ultimately, that power has always been connected to the ability to tell stories about the past.
                    </p>
                    <p>
                        I’d also like to think the course encourages students to put on a kind of historian’s lens when looking at the world around them—to question structures of power in our own society, and to think more critically and creatively about how we understand both the past and the present.
                    </p>
                </section>

                {/* Reflection */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-bold">Words From the Journalism Team</h2>
                    <p>PUT WORDS HERE FROM US</p>
                </section>
            </main>
        </div>
    );
}
