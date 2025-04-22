export default function Contributors() {
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
        <div className="max-w-4xl mx-auto px-6 py-12 text-white font-serif">
            <h2 className="text-3xl font-bold mb-8 text-center">It Takes a Village…</h2>
            <ul className="space-y-4 border border-gray-700 rounded-xl p-6 bg-black/40 backdrop-blur-md shadow-md">
                {contributors.map((name, idx) => (
                    <li key={idx} className="border-b border-gray-700 last:border-none pb-2">
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
