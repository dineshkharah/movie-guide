const movieData = {
    1: {
        id: 1,
        title: "Furiosa: A Mad Max Saga",
        genre: ["Action", "Adventure"],
        year: 2024,
        rating: 8.7,
        description: "A prequel to the Mad Max franchise focusing on the backstory of Imperator Furiosa.",
        image: "images/furiosa.jpg",
        pgRating: "R",
        starring: ["Actor 1", "Actor 2"],
        directedBy: "Director Name",
        duration: 120,
        isVertical: "images/furiosa_vertical.jpg",
        detailedDescription: "In a dystopian wasteland ruled by tyrannical warlords, Imperator Furiosa, a fearless female warrior, escapes captivity with the help of Max Rockatansky. Together, they embark on a high-octane chase across the desert, pursued by a ruthless warlord and his savage army. Furiosa's motives for her escape are gradually revealed, as she seeks to return a group of young women to their homeland."
    },
    2: {
        id: 2,
        title: "The Fall Guy",
        genre: ["Action", "Comedy"],
        year: 2024,
        rating: 7.4,
        description: "A remake of the 1980s television series about a Hollywood stuntman who moonlights as a bounty hunter.",
        image: "images/fall_guy.jpg",
        pgRating: "PG-13",
        starring: ["Actor 1", "Actor 2"],
        directedBy: "Director Name",
        duration: 110,
        isVertical: "images/fall_guy_vertical.jpg",
        detailedDescription: "Roy Colt, a washed-up Hollywood stuntman struggling to make ends meet, discovers a hidden talent for bounty hunting. He uses his stunt skills and charisma to capture wanted criminals, while navigating the chaotic world of Hollywood and the often-murky world of bounty hunting."
    },
    3: {
        id: 3,
        title: "Evil Does Not Exist",
        genre: ["Drama", "Mystery"],
        year: 2024,
        rating: 8.2,
        description: "A complex story that explores the nature of truth and justice, following a young woman who accuses a famous writer of rape.",
        image: "images/evil_does_not_exist.jpg",
        pgRating: "R",
        starring: ["Actor 1", "Actor 2"],
        directedBy: "Director Name",
        duration: 105,
        isVertical: "images/evil_does_not_exist_vertical.jpg",
        detailedDescription: "Elena, a determined young woman, shatters the life of renowned writer David Monroe when she publicly accuses him of sexual assault. As the case unfolds, the media frenzy and societal pressures force Elena and David to confront their pasts and fight for what they believe in. The film explores themes of power dynamics, trauma, and the complexities of truth-seeking."
    },
    4: {
        id: 4,
        title: "In a Violent Nature",
        genre: ["Thriller"],
        year: 2024,
        rating: 7.8,
        description: "A tense and suspenseful film set in the wilderness, where two strangers become entangled in a dangerous situation.",
        image: "images/in_a_violent_nature.jpg",
        pgRating: "NC-17",
        starring: ["Actor 1", "Actor 2"],
        directedBy: "Director Name",
        duration: 90,
        isVertical: "images/in_a_violent_nature_vertical.jpg",
        detailedDescription: "When Kate, an experienced hiker, ventures deep into a remote wilderness area, she encounters Vaughn, a mysterious man seemingly lost and injured. Initially hesitant to trust him, Kate offers him help. However, their situation takes a sinister turn as they become entangled in a web of secrets and danger lurking in the isolated wilderness. They must rely on each other for survival as they fight to unravel the truth and escape the unseen threat."
    },
    5: {
        id: 5,
        title: "The First Omen",
        genre: ["Horror"],
        year: 2024,
        rating: 6.9,
        description: "A reimagining of the classic horror film The Omen, following a couple who begin to suspect their adopted son may be the Antichrist.",
        image: "images/the_first_omen.jpg",
        pgRating: "R",
        starring: ["Actor 1", "Actor 2"],
        directedBy: "Director Name",
        duration: 130,
        isVertical: "images/the_first_omen_vertical.jpg",
        detailedDescription: "After a tragic miscarriage, Katherine and John, a grieving couple, adopt a seemingly angelic young boy named Damien. However, a series of disturbing events and unexplainable tragedies begin to plague their lives shortly after the adoption. As the occurrences escalate, Katherine becomes increasingly suspicious of Damien, noticing a chilling coldness in his eyes. John dismisses her fears, but a series of cryptic warnings from a mysterious priest fuel Katherine's growing conviction that their adopted son may be the embodiment of evil."
    },
    6: {
        id: 6,
        title: "Space Odyssey: Mars Mission",
        genre: ["Sci-Fi", "Adventure"],
        year: 2024,
        rating: 7.9,
        description: "A team of astronauts embarks on a dangerous mission to Mars, facing unexpected challenges and discovering startling secrets.",
        image: "images/space_odyssey.jpg",
        pgRating: "PG-13",
        starring: ["Actor 3", "Actor 4"],
        directedBy: "Director Name",
        duration: 140,
        isVertical: "images/space_odyssey_vertical.jpg",
        detailedDescription: "A team of elite astronauts is sent to Mars on a groundbreaking mission to explore the possibility of human colonization. As they venture into the unknown, they encounter unforeseen dangers and unravel mysteries that challenge their understanding of the red planet and their own humanity."
    },
    7: {
        id: 7,
        title: "The Haunted Manor",
        genre: ["Horror", "Mystery"],
        year: 2024,
        rating: 6.5,
        description: "A group of friends investigates an abandoned mansion rumored to be haunted, uncovering its dark past.",
        image: "images/haunted_manor.jpg",
        pgRating: "R",
        starring: ["Actor 5", "Actor 6"],
        directedBy: "Director Name",
        duration: 115,
        isVertical: "images/haunted_manor_vertical.jpg",
        detailedDescription: "A group of adventurous friends decides to explore an old, abandoned mansion that has been the subject of ghostly legends for decades. As they delve deeper into the manor's dark corridors, they begin to experience eerie phenomena and uncover the tragic history that haunts the place. Their curiosity soon turns into a fight for survival as they confront malevolent spirits and their own fears."
    },
    8: {
        id: 8,
        title: "Romantic Getaway",
        genre: ["Romance", "Comedy"],
        year: 2024,
        rating: 7.0,
        description: "A couple's romantic vacation turns into a hilarious adventure filled with unexpected twists.",
        image: "images/romantic_getaway.jpg",
        pgRating: "PG",
        starring: ["Actor 7", "Actor 8"],
        directedBy: "Director Name",
        duration: 95,
        isVertical: "images/romantic_getaway_vertical.jpg",
        detailedDescription: "Emma and Jake plan a romantic getaway to a secluded island resort, hoping to rekindle their relationship. However, their plans go awry as they encounter a series of comedic mishaps and colorful characters. Amidst the chaos, they rediscover the love and laughter that brought them together in the first place."
    },
    9: {
        id: 9,
        title: "Cyber Crime",
        genre: ["Thriller", "Sci-Fi"],
        year: 2024,
        rating: 8.1,
        description: "A hacker uncovers a massive cyber conspiracy, putting her life in danger as she races to expose the truth.",
        image: "images/cyber_crime.jpg",
        pgRating: "R",
        starring: ["Actor 9", "Actor 10"],
        directedBy: "Director Name",
        duration: 130,
        isVertical: "images/cyber_crime_vertical.jpg",
        detailedDescription: "Renowned hacker Alex Parker stumbles upon a vast cyber conspiracy while investigating a high-profile data breach. As she digs deeper, she finds herself targeted by powerful forces determined to keep the truth hidden. With time running out, Alex must use her skills to expose the conspiracy and stay one step ahead of her pursuers."
    },
    10: {
        id: 10,
        title: "Magical Creatures",
        genre: ["Fantasy", "Adventure"],
        year: 2024,
        rating: 7.6,
        description: "In a world where magical creatures exist, a young boy discovers he has a special connection to them.",
        image: "images/magical_creatures.jpg",
        pgRating: "PG",
        starring: ["Actor 11", "Actor 12"],
        directedBy: "Director Name",
        duration: 125,
        isVertical: "images/magical_creatures_vertical.jpg",
        detailedDescription: "In a mystical world filled with magical creatures, young Liam discovers that he possesses the rare ability to communicate with them. As he embarks on a journey to save his village from an ancient evil, Liam forms deep bonds with his magical companions and learns about his true destiny."
    },
    11: {
        id: 11,
        title: "Secret Agent: Covert Ops",
        genre: ["Action", "Thriller"],
        year: 2024,
        rating: 8.3,
        description: "An elite secret agent is assigned a dangerous mission to infiltrate a terrorist organization.",
        image: "images/secret_agent.jpg",
        pgRating: "PG-13",
        starring: ["Actor 13", "Actor 14"],
        directedBy: "Director Name",
        duration: 135,
        isVertical: "images/secret_agent_vertical.jpg",
        detailedDescription: "James Conrad, a top-tier secret agent, is tasked with infiltrating a notorious terrorist organization that threatens global security. As he delves deeper into their operations, James uncovers a web of deceit and betrayal. With his cover at risk, he must navigate a dangerous world of espionage and prevent a catastrophic attack."
    },
    12: {
        id: 12,
        title: "The Great Heist",
        genre: ["Crime", "Drama"],
        year: 2024,
        rating: 7.7,
        description: "A group of master thieves plans an elaborate heist on a high-security vault.",
        image: "images/great_heist.jpg",
        pgRating: "R",
        starring: ["Actor 15", "Actor 16"],
        directedBy: "Director Name",
        duration: 145,
        isVertical: "images/great_heist_vertical.jpg",
        detailedDescription: "Led by the brilliant mastermind Leo, a group of highly skilled thieves comes together to pull off the heist of the century. Their target: a heavily fortified vault containing priceless treasures. As they execute their meticulous plan, they face unforeseen challenges and must rely on their wits and each other to succeed."
    },
    13: {
        id: 13,
        title: "The Lost Kingdom",
        genre: ["Adventure", "Fantasy"],
        year: 2024,
        rating: 8.5,
        description: "A young explorer discovers an ancient, hidden kingdom and must protect it from invaders.",
        image: "images/lost_kingdom.jpg",
        pgRating: "PG",
        starring: ["Actor 17", "Actor 18"],
        directedBy: "Director Name",
        duration: 150,
        isVertical: "images/lost_kingdom_vertical.jpg",
        detailedDescription: "When young archaeologist Sophie stumbles upon an ancient map, she embarks on a perilous journey to find the lost kingdom of Atlantis. Along the way, she encounters mythical creatures and uncovers powerful secrets. As invaders threaten the kingdom, Sophie must rally the inhabitants and protect their hidden world from destruction."
    },
    14: {
        id: 14,
        title: "Future Wars",
        genre: ["Sci-Fi", "Action"],
        year: 2024,
        rating: 7.2,
        description: "In a dystopian future, humanity fights for survival against an advanced alien race.",
        image: "images/future_wars.jpg",
        pgRating: "PG-13",
        starring: ["Actor 19", "Actor 20"],
        directedBy: "Director Name",
        duration: 140,
        isVertical: "images/future_wars_vertical.jpg",
        detailedDescription: "In a bleak future where Earth is on the brink of collapse, humanity faces its greatest threat: an advanced alien race seeking to conquer the planet. Led by the fearless General Sarah Connor, a group of resistance fighters must band together to protect their world and find a way to turn the tide of war."
    },
    15: {
        id: 15,
        title: "Parallel Lives",
        genre: ["Drama", "Sci-Fi"],
        year: 2024,
        rating: 8.0,
        description: "Two individuals from parallel universes discover they are connected in ways they never imagined.",
        image: "images/parallel_lives.jpg",
        pgRating: "PG-13",
        starring: ["Actor 21", "Actor 22"],
        directedBy: "Director Name",
        duration: 120,
        isVertical: "images/parallel_lives_vertical.jpg",
        detailedDescription: "Lena and Alex, living in parallel universes, begin to experience strange occurrences that connect them across dimensions. As they communicate through cryptic messages and dreams, they uncover a shared destiny that could change both their worlds. Together, they must navigate their differences and work to bridge the gap between their realities."
    },
    16: {
        id: 16,
        title: "The Enchanted Forest",
        genre: ["Fantasy", "Family"],
        year: 2024,
        rating: 7.3,
        description: "A group of children discovers a magical forest and embarks on an adventure to save it from destruction.",
        image: "images/enchanted_forest.jpg",
        pgRating: "PG",
        starring: ["Actor 23", "Actor 24"],
        directedBy: "Director Name",
        duration: 100,
        isVertical: "images/enchanted_forest_vertical.jpg",
        detailedDescription: "During a summer camp, a group of children stumbles upon an enchanted forest filled with magical creatures and ancient spells. When they learn that the forest is threatened by a greedy developer, they band together to protect its secrets. Along the way, they forge friendships, discover their own inner strength, and uncover the true magic of the forest."
    },
    17: {
        id: 17,
        title: "The Time Traveler",
        genre: ["Sci-Fi", "Romance"],
        year: 2024,
        rating: 7.8,
        description: "A scientist invents a time machine and accidentally travels back to meet his soulmate in the past.",
        image: "images/time_traveler.jpg",
        pgRating: "PG-13",
        starring: ["Actor 25", "Actor 26"],
        directedBy: "Director Name",
        duration: 115,
        isVertical: "images/time_traveler_vertical.jpg",
        detailedDescription: "Dr. Ethan Clarke, a brilliant but lonely scientist, creates a time machine and accidentally transports himself to the past. There, he meets Emma, a kind-hearted woman with whom he forms an immediate connection. As they navigate the challenges of time travel, Ethan must decide whether to stay in the past with Emma or return to his own time, knowing their love transcends all barriers."
    },
    18: {
        id: 18,
        title: "Deserted",
        genre: ["Thriller", "Drama"],
        year: 2024,
        rating: 7.4,
        description: "A man wakes up in a deserted town with no memory of how he got there and must uncover the truth.",
        image: "images/deserted.jpg",
        pgRating: "R",
        starring: ["Actor 27", "Actor 28"],
        directedBy: "Director Name",
        duration: 105,
        isVertical: "images/deserted_vertical.jpg",
        detailedDescription: "John wakes up in a deserted town with no memory of how he arrived. As he explores the eerily empty streets, he encounters clues that lead him to uncover a sinister plot involving mind control and government secrets. With time running out, John must piece together his fragmented memories and find a way to escape before it's too late."
    },
    19: {
        id: 19,
        title: "Underwater City",
        genre: ["Sci-Fi", "Adventure"],
        year: 2024,
        rating: 7.9,
        description: "In a future where humanity lives underwater, a young woman discovers a hidden world beneath the ocean.",
        image: "images/underwater_city.jpg",
        pgRating: "PG-13",
        starring: ["Actor 29", "Actor 30"],
        directedBy: "Director Name",
        duration: 130,
        isVertical: "images/underwater_city_vertical.jpg",
        detailedDescription: "In a future where rising sea levels have forced humanity to build underwater cities, young marine biologist Ava discovers a hidden world beneath the ocean floor. As she delves deeper, she uncovers ancient secrets and faces challenges that test her courage and ingenuity. Ava must protect the delicate balance of this new world while uncovering the truth about her own past."
    },
    20: {
        id: 20,
        title: "Midnight Circus",
        genre: ["Horror", "Mystery"],
        year: 2024,
        rating: 7.1,
        description: "A traveling circus arrives in a small town, bringing with it dark secrets and supernatural occurrences.",
        image: "images/midnight_circus.jpg",
        pgRating: "R",
        starring: ["Actor 31", "Actor 32"],
        directedBy: "Director Name",
        duration: 110,
        isVertical: "images/midnight_circus_vertical.jpg",
        detailedDescription: "When the Midnight Circus rolls into a quiet town, strange and terrifying events begin to unfold. Local journalist Sarah investigates the circus's dark history and discovers that its performers are not what they seem. As she delves deeper, Sarah must confront her own fears and unravel the mystery before the circus leaves town, taking its deadly secrets with it."
    },
    21: {
        id: 21,
        title: "Rising Sun",
        genre: ["Drama", "Romance"],
        year: 2024,
        rating: 8.4,
        description: "A heartfelt story about a young couple's journey through life's challenges and their unwavering love.",
        image: "images/rising_sun.jpg",
        pgRating: "PG-13",
        starring: ["Actor 33", "Actor 34"],
        directedBy: "Director Name",
        duration: 125,
        isVertical: "images/rising_sun_vertical.jpg",
        detailedDescription: "Emma and Liam, a young couple deeply in love, face a series of life-altering challenges that test their relationship. From career setbacks to personal losses, their bond is put to the ultimate test. Through it all, they discover that true love endures all trials and emerges stronger than ever."
    },
    22: {
        id: 22,
        title: "Ghost Hunters",
        genre: ["Horror", "Comedy"],
        year: 2024,
        rating: 7.5,
        description: "A group of amateur ghost hunters gets more than they bargained for when they investigate a haunted house.",
        image: "images/ghost_hunters.jpg",
        pgRating: "PG-13",
        starring: ["Actor 35", "Actor 36"],
        directedBy: "Director Name",
        duration: 100,
        isVertical: "images/ghost_hunters_vertical.jpg",
        detailedDescription: "A ragtag team of amateur ghost hunters sets out to investigate an infamous haunted house, hoping to capture evidence of the supernatural. What starts as a fun adventure quickly turns into a terrifying ordeal as they encounter real spirits and uncover the house's dark history. With a mix of humor and horror, the team must find a way to survive the night and escape the haunted house."
    },
    23: {
        id: 23,
        title: "The Last Guardian",
        genre: ["Action", "Fantasy"],
        year: 2024,
        rating: 8.0,
        description: "A lone warrior is tasked with protecting an ancient artifact that holds the key to the world's salvation.",
        image: "images/last_guardian.jpg",
        pgRating: "PG-13",
        starring: ["Actor 37", "Actor 38"],
        directedBy: "Director Name",
        duration: 130,
        isVertical: "images/last_guardian_vertical.jpg",
        detailedDescription: "In a world where magic and ancient prophecies collide, lone warrior Aric is entrusted with guarding a powerful artifact that can either save or destroy the world. As dark forces close in, Aric must embark on a perilous journey to protect the artifact and prevent it from falling into the wrong hands. Along the way, he discovers his true destiny and the strength within himself."
    },
    24: {
        id: 24,
        title: "The Hidden Truth",
        genre: ["Thriller", "Mystery"],
        year: 2024,
        rating: 7.6,
        description: "A journalist uncovers a conspiracy that threatens to expose powerful secrets and endanger her life.",
        image: "images/hidden_truth.jpg",
        pgRating: "R",
        starring: ["Actor 39", "Actor 40"],
        directedBy: "Director Name",
        duration: 120,
        isVertical: "images/hidden_truth_vertical.jpg",
        detailedDescription: "Investigative journalist Kate dives into a high-profile case that leads her to uncover a conspiracy involving powerful figures. As she gets closer to the truth, she finds herself targeted by those who will stop at nothing to keep their secrets hidden. With her life on the line, Kate must navigate a web of lies and deception to reveal the hidden truth."
    },
    25: {
        id: 25,
        title: "Alien Encounter",
        genre: ["Sci-Fi", "Thriller"],
        year: 2024,
        rating: 7.3,
        description: "A small town experiences a series of unexplained phenomena after a mysterious object crashes nearby.",
        image: "images/alien_encounter.jpg",
        pgRating: "PG-13",
        starring: ["Actor 41", "Actor 42"],
        directedBy: "Director Name",
        duration: 110,
        isVertical: "images/alien_encounter_vertical.jpg",
        detailedDescription: "When a mysterious object crashes near a small town, strange and unexplainable events begin to occur. The townspeople are thrust into a state of fear and confusion as they encounter extraterrestrial beings. Local sheriff Mike and scientist Dr. Grace must work together to uncover the truth behind the alien encounter and protect their town from the unknown threat."
    }
};

export default movieData;
