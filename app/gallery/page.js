"use client";

import React, { useState } from "react";
import Link from "next/link";

const images = [
  { src: "/holdingbeer.jpeg", alt: "Portrait 1", orientation: "portrait" },
  { src: "/ATE.png", alt: "Landscape 1", orientation: "landscape" },
  { src: "/SPIKE.jpeg", alt: "Portrait 2", orientation: "portrait" },
  { src: "/squad.JPG", alt: "Landscape 2", orientation: "landscape" },
  { src: "/IMG_8415.jpeg", alt: "Portrait 3", orientation: "portrait" },
  { src: "/BOYS.JPG", alt: "Landscape 3", orientation: "landscape" },
  { src: "/BEV.jpg", alt: "Portrait 4", orientation: "portrait" },
  { src: "/class.JPG", alt: "Landscape 4", orientation: "landscape" },
  { src: "/rowclay.JPG", alt: "Portrait 5", orientation: "portrait" },
  { src: "/1H.JPG", alt: "Landscape 5", orientation: "landscape" },
  { src: "/stanced.JPG", alt: "Portrait 6", orientation: "portrait" },
  { src: "/squad.JPG", alt: "Landscape 6", orientation: "landscape" },
  { src: "/SOUPV.JPG", alt: "Portrait 6", orientation: "portrait" },
  { src: "/chef.png", alt: "Landscape 6", orientation: "landscape" },
  { src: "/silly.jpg", alt: "Portrait 6", orientation: "portrait" },
  { src: "/standing.jpg", alt: "Landscape 6", orientation: "landscape" },
  { src: "/jar.jpg", alt: "Portrait 6", orientation: "portrait" },
  { src: "/poured.jpg", alt: "L 6", orientation: "landscape" },
  { src: "/gtalking.jpg", alt: "Landscape 6", orientation: "portrait" },
  { src: "/everyone.jpg", alt: "Portrait 6", orientation: "landscape" }
];

const MasonryGallery = () => {
  const [showGroups, setShowGroups] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-8 pb-16 font-serif">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
        <h2 className="text-3xl font-extrabold tracking-widest drop-shadow-lg">UNEQUAL</h2>
        <nav className="flex gap-6 relative text-white text-lg font-semibold">
          <Link href="/" className="hover:text-[#E2A96D] transition-all">Home</Link>
          <Link href="/about" className="hover:text-[#E2A96D] transition-all">About</Link>

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
                <Link href="/museum" className="block px-4 py-2 hover:bg-[#333]">Museum</Link>
                <Link href="/brewing_event" className="block px-4 py-2 hover:bg-[#333]">Brewing</Link>
                <Link href="/trace_residue" className="block px-4 py-2 hover:bg-[#333]">Trace Residue</Link>
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
                <Link href="/brewing_event" className="block px-4 py-2 hover:bg-[#333]">Brewing Event</Link>
                <Link href="/cooking_event" className="block px-4 py-2 hover:bg-[#333]">Cooking Event</Link>
              </div>
            )}
          </div>

          <Link href="/gallery" className="hover:text-[#E2A96D] transition-all">Gallery</Link>
        </nav>
      </header>

      {/* Gallery */}
      <div className="pt-[72px] p-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full overflow-hidden rounded-lg shadow-lg ${image.orientation === "portrait" ? "row-span-2" : "row-span-1"
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover ${image.src === "/draw.jpg" ? "object-bottom" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasonryGallery;
