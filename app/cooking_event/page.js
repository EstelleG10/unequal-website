"use client";

import { useState } from "react";

export default function CookingEventPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
            {/* Header */}
            <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
                <h2 className="text-3xl text-white font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
                <nav className="flex gap-6">
                    <a href="/" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Home</a>
                    <a href="/brewing" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing</a>
                    <a href="/museum" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Museum</a>
                    <a href="/gallery" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Gallery</a>
                    <a href="/trace-residue" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Trace Residue</a>
                    <a href="/journalism" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Brewing Event</a>
                    <a href="/cooking_event" className="text-white text-lg font-semibold hover:text-[#E2A96D] transition-all">Cooking Event</a>
                </nav>
            </header>

            {/* Title & Event Date */}
            <div className="text-center">
                <h1 className="text-7xl font-extrabold drop-shadow-md">Feasting Like the Ancients:</h1>
                <h2 className="text-3xl font-extrabold drop-shadow-md">A Culinary and Archaeological Experiment</h2>
                <p className="text-lg text-orange-600 mt-2">Exploring ancient recipes and brewing techniques.</p>
                <p className="text-md text-grey-300 font-semibold mt-1">February 18th, 2025</p>
                <p className="text-md text-grey-300 font-semibold mt-1">Words by Katie Marshall </p>
            </div>

            {/* Event Poster */}
            <div className="mt-8 flex justify-center">
                <img src="/POSTER_EVENT.png" alt="Event Poster" className="w-96 h-100 max-w-3xl rounded-lg shadow-lg" />
            </div>



            {/* Katie's article  */}
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Setting the Table for the Past</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    Assyriologist Gojko Barjamovic and Egyptologist Vincent Morel have taken an innovative approach to co-teaching their Yale College Spring 2025 course, Unequal: Dynamics of Power and Social Hierarchy in Ancient Egypt and Mesopotamia. Rather than limiting discussions to texts and lectures, the course immerses students in experimental archaeology by using food as a lens to explore power structures, cultural identity, and communal rituals.
                    <br /><br />
                    At the heart of this exploration is the role of feasting and drinking in shaping ancient societies. The first major event of the semester—a full-scale recreation of Mesopotamian cuisine—threw the class into the real process of cooking a feast fit for an ancient gathering. Appetite for the Past took place on Tuesday, February 18, 2025, at the Humanities Quadrangle on Yale’s campus. This public event featured an academic introduction followed by a reception where attendees sampled dishes sourced from ancient Mesopotamian tablets housed in the Yale Babylonian Collection. The class carefully prepared two stews: Pašrūtum ("Unwinding"), a vegetarian stew, and Tuh’u, a rich lamb and vegetable stew.
                    <br /><br />
                    While the event itself was a spectacle of scholarship and sensory experience, my role as a documentarian shaped my perspective in unexpected ways. Rather than simply experiencing the feast, I found myself behind the camera, capturing the process as it unfolded—from candid interviews to the quiet intensity of food preparation. This article offers a glimpse behind the scenes, where collaboration, problem-solving, and personal reflections brought the past to life.
                </p>
            </div>
            {/* Event image */}
            <div className="mt-8 flex justify-center">
                <img src="/schoolsquad.png" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
            </div>

            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Framing the Moment</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    I was immersed in the evening’s unfolding moments: moving through the space with my camera, snapping candid photographs, and conducting impromptu video interviews along with my fellow journalism teammates Estelle Gerber and Megan Suka. My approach often startled my subjects, catching them mid-task or mid-thought, which only added to the authenticity of the footage. Personal curiosity guided my documentation: I asked, “What is your favorite part of cooking?”—a question that became my own lens through which I experienced the evening.
                    <br /><br />
                    As Barjamovic et al. (2019) note in Food in Ancient Mesopotamia from Ancient Mesopotamia Speaks, “…food defines who we are” (109). Feasting was more than just nourishment in the ancient world—it played a fundamental role in reinforcing hierarchies, shaping identity, and even fostering a connection to the divine. The course structure reflects this reality by blurring the lines between academic theory and hands-on experimental archaeology. Instead of merely studying ancient societies in theory, we immerse ourselves in their practices, bridging the gap between research and experience.
                </p>
            </div>
            {/* Event image */}
            <div className="mt-8 flex justify-center">
                <img src="/slaying.png" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
            </div>
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Stirring the Unexpected</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    Event preparations had been underway long before students arrived at 4:00 p.m. Pia Sörenson, food scientist and chemist from Harvard University, arrived early to equip our team with the necessary tools to prepare our meal. With a tight schedule in place, we had just ninety minutes to prepare the food before guests arrived at 6:30 p.m. for introductions, followed by dinner at 7:00 p.m. From the moment we entered, the atmosphere buzzed with excitement. Patricia Jurado Gonzales, master chef with Basque Culinary Center, gathered us around two central tables, laden with cutting boards, bowls, vegetables, utensils, and hotplates. The choreography of food preparation had to be executed flawlessly from chopping to mashing to cooking. The group steadily expanded as more students joined, slipping seamlessly into roles as sous-chefs, coordinators, and documentarians. Just as the final preparations were in motion, the event took an unexpected turn. A sudden shift in the room’s atmosphere hinted at trouble. Professors and chefs exchanged urgent glances before the announcement:
                    <br /><br />
                    “The power outlets tripped!”
                    <br /><br />
                    This was no minor inconvenience. The hotplates, crucial for cooking the lamb stew, had lost power. An electrician was summoned, and for a moment, all seemed well—until the power tripped again. Then once more. Meanwhile, in the Student Lounge, where additional cooking stations had been relocated, the same issue persisted. As if that weren’t enough, word arrived that the catering team—responsible for transporting additional entrees—had suffered a tire blowout on the way to the event. The situation seemed to spiral into chaos. Yet, remarkably, no one lost their composure. Students and faculty adapted, finding alternative ways to keep the event moving.
                </p>
            </div>
            {/* Event image */}
            <div className="mt-8 flex justify-center">
                <img src="/BEETS.PNG" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
            </div>
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">The Feast Unfolds</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    Despite the unexpected hurdles, the evening proceeded. By 6:30 p.m., guests began arriving, blissfully unaware of the behind-the-scenes challenges. They checked in, eager to take part in this historic culinary experiment. Then, as if on cue, the tension broke. The energy in the room shifted, settling into a rhythm of shared enthusiasm. The event kicked off with introductions to the historical and cultural significance of the dishes, emphasizing the labor of love, scholarship, and community effort that had brought them to life. As the food was served, the line wrapped around the room, with guests eagerly awaiting their turn to taste the ancient flavors.
                    <br /><br />
                    Additionally, biologists with Yale’s School of Medicine, Master Brewer Vannessa Todoro and Yeast Specialist Zane Johnson, carefully recreated brews—both alcoholic and non-alcoholic—following ancient fermentation techniques and ingredients, adding another layer of authenticity to the experience. More than just a meal, the night became a sensory journey. The smells of ancient spices, the taste of slow-cooked stews, and the warmth of shared food created a moment of deep connection between students, scholars, attendees, and a culinary tradition thousands of years old.
                </p>
            </div>
            {/* Event image */}
            <div className="mt-8 flex justify-center">
                <img src="/ate.PNG" alt="Event Poster" className="w-97 h-95 max-w-xl rounded-lg shadow-lg" />
            </div>
            <div className="mt-8 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg text-gray-300">
                <h2 className="text-3xl font-bold text-orange-600">Savoring Time and Tradition</h2>
                <p className="mt-2 text-lg leading-relaxed">
                    For me, the most compelling moments of the night weren’t just about the food—it was the energy behind it. From the focused precision of chopping vegetables to the collective scramble when the power failed, the evening thrived on teamwork, quick thinking, and a shared goal. More than anything, what stood out was the camaraderie—students and experts alike laughing through challenges, adjusting on the fly, and savoring not just the final dishes but the process itself. The kitchen became a space where history felt tangible, not just studied but experienced firsthand.
                    <br /><br />
                    The short video below captures these moments: candid glimpses of preparation, spontaneous problem-solving, and reflections from the scholars and organizers about what their favorite parts of cooking are. Curator of the Yale Babylonian Museum, Dr. Agnete Lassen, provided the tablet replica of the original recipe and assisted with the preparations and the scholarly presentation. In the end, Appetite for the Past wasn’t just about recreating ancient recipes—it was about rediscovering the communal spirit that has always surrounded food. Watching the event unfold in real time reinforced that the act of preparing and sharing a meal is just as meaningful as the feast itself.
                </p>
            </div>


            {/* Video Section */}
            <div className="mt-10 bg-black/50 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-orange-600">Event Video</h2>
                <p className="text-lg text-gray-300 mt-2">Watch highlights from the event!</p>

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
        </div>

    );
}