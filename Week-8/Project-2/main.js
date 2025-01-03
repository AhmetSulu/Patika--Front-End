const movies = [
    {
        id: 1,
        title: "Inception",
        category: "action",
        description: "Rüyalar içinde geçen aksiyon dolu bir macera",
        image: "./images/inception.jpg",
        duration: "2s 28dk",
        imdb: 8.8,
        director: "Christopher Nolan",
        year: 2010,
        videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
        stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        category: "drama",
        description: "Hapishane duvarları arasında geçen bir umut hikayesi",
        image: "./images/TheShawshankRedemption.jpg",
        duration: "2s 22dk",
        imdb: 9.3,
        director: "Frank Darabont",
        year: 1994,
        videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
    },
    {
        id: 3,
        title: "The Dark Knight",
        category: "action",
        description: "Gotham şehrinin kaderini değiştirecek bir mücadele",
        image: "./images/TheDarkKnight.jpg",
        duration: "2s 32dk",
        imdb: 9.0,
        director: "Christopher Nolan",
        year: 2008,
        videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
        id: 4,
        title: "Pulp Fiction",
        category: "crime",
        description: "Los Angeles'ta kesişen suç hikayeleri",
        image: "./images/PulpFiction.jpg",
        duration: "2s 34dk",
        imdb: 8.9,
        director: "Quentin Tarantino",
        year: 1994,
        videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
        id: 5,
        title: "V For VendeTTa",
        category: "action",
        description: "Distopik bir İngiltere'de özgürlük mücadelesi",
        image: "./images/VForVendeTTa.jpg",
        duration: "2s 12dk",
        imdb: 8.2,
        director: "James McTeigue",
        year: 2005,
        videoUrl: "https://www.youtube.com/embed/lSA7mAHolAw",
        stars: ["Hugo Weaving", "Natalie Portman", "Stephen Rea"]
    },
    {
        id: 6,
        title: "The Wolf of Wall Street",
        category: "drama",
        description: "A stockbroker in New York City rises to immense wealth and power through a combination of fraud, corruption, and excess, only to experience a downfall.",
        image: "./images/thewolfofwallstreet.jpg",
        duration: "3h",
        imdb: 8.2,
        director: "Martin Scorsese",
        year: 2013,
        videoUrl: "https://www.youtube.com/embed/iszwuX1AK6A",
        stars: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"]
    },
    {
        id: 7,
        title: "Forrest Gump",
        category: "drama",
        description: "The life story of Forrest Gump, a slow-witted but kind-hearted man from Alabama who inadvertently influences several historical events in the 20th century United States.",
        image: "./images/forrestgump.jpg",
        duration: "2h 22m",
        imdb: 8.8,
        director: "Robert Zemeckis",
        year: 1994,
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
        stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
        id: 8,
        title: "Green Book",
        category: "drama",
        description: "A working-class Italian-American driver is hired to chauffeur an African-American classical pianist on a concert tour through the racially-segregated southern United States in the 1960s.",
        image: "./images/greenbook.jpg",
        duration: "2h 10m",
        imdb: 8.2,
        director: "Peter Farrelly",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/0J3P5xCTdV8",
        stars: ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"]
    },
    {
        id: 9,
        title: "Venom: The Last Dance",
        category: "action",
        description: "Eddie Brock and Venom face their most formidable adversaries yet, pursued by a mysterious military figure and alien creatures from Venom's home world, forcing them to make a devastating decision that could alter their destinies.",
        image: "./images/venom3.jpg",
        duration: "TBD",
        imdb: 6.8,
        director: "Kelly Marcel",
        year: 2024,
        videoUrl: "https://www.youtube.com/watch?v=__2bjWbetsA",
        stars: ["Tom Hardy", "Chiwetel Ejiofor", "Juno Temple", "Rhys Ifans"]
    },
    {
        id: 10,
        title: "Venom: Let There Be Carnage",
        category: "action",
        description: "Eddie Brock and Venom face off against the dangerous and violent Carnage, the symbiote created by a serial killer named Cletus Kasady.",
        image: "./images/venom2.jpg",
        duration: "1h 37m",
        imdb: 6.3,
        director: "Andy Serkis",
        year: 2021,
        videoUrl: "https://www.youtube.com/embed/HhZpJbS7pqM",
        stars: ["Tom Hardy", "Woody Harrelson", "Michelle Williams"]
    },
    {
        id: 11,
        title: "Venom",
        category: "action",
        description: "Bir anti-kahramanın karanlık dünyası ve tehlikeli macerası",
        image: "./images/venom.jpg",
        duration: "1s 52dk",
        imdb: 6.7,
        director: "Ruben Fleischer",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/u9Mv98Gr5pY",
        stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"]
    },
    {
        id: 12,
        title: "Deadpool",
        category: ["action", "comedy"],
        description: "Wade Wilson, a former special forces operative turned mercenary, undergoes an experiment that leaves him with accelerated healing powers, and he becomes the antihero Deadpool, seeking revenge on those who wronged him.",
        image: "./images/deadpool.jpg",
        duration: "1s 48dk",
        imdb: 8.0,
        director: "Tim Miller",
        year: 2016,
        videoUrl: "https://www.youtube.com/embed/ONHBaC-pfsk",
        stars: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"]
    },
    {
        id: 13,
        title: "Fast and Furious",
        category: "action",
        description: "Yarış ve aksiyon dolu bir seri",
        image: "./images/fastandfurious.jpg",
        duration: "1s 47dk",
        imdb: 6.8,
        director: "Rob Cohen",
        year: 2001,
        videoUrl: "https://www.youtube.com/embed/2TAOizOnNPo",
        stars: ["Vin Diesel", "Paul Walker", "Michelle Rodriguez"]
    },
    {
        id: 14,
        title: "Fight Club",
        category: "drama",
        description: "Karanlık ve kışkırtıcı bir hikaye",
        image: "./images/fightclub.jpg",
        duration: "2s 19dk",
        imdb: 8.8,
        director: "David Fincher",
        year: 1999,
        videoUrl: "https://www.youtube.com/embed/SUXWAEX2jlg",
        stars: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
        id: 15,
        title: "Matrix",
        category: "sci-fi",
        description: "Gerçeklik ve simülasyon arasındaki ince çizgi",
        image: "./images/matrix.jpg",
        duration: "2s 16dk",
        imdb: 8.7,
        director: "Lana Wachowski, Lilly Wachowski",
        year: 1999,
        videoUrl: "https://www.youtube.com/embed/m8e-FF8MsqU",
        stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        id: 16,
        title: "The Godfather",
        category: ["crime", "drama"],
        description: "Bir ailenin suç dünyasındaki hikayesi",
        image: "./images/thegodfather.jpg",
        duration: "2s 55dk",
        imdb: 9.2,
        director: "Francis Ford Coppola",
        year: 1972,
        videoUrl: "https://www.youtube.com/embed/sY1S34973zA",
        stars: ["Marlon Brando", "Al Pacino", "James Caan"]
    },
    {
        id: 17,
        title: "Seven",
        category: "thriller",
        description: "Yedi ölümcül günah üzerine karanlık bir polisiye hikaye",
        image: "./images/seven.jpg",
        duration: "2s 7dk",
        imdb: 8.6,
        director: "David Fincher",
        year: 1995,
        videoUrl: "https://www.youtube.com/embed/znmZoVkCjpI",
        stars: ["Brad Pitt", "Morgan Freeman", "Kevin Spacey"]
    },
    {
        id: 18,
        title: "Green Mile",
        category: "drama",
        description: "Adalet ve insanlık üzerine dokunaklı bir hikaye",
        image: "./images/greenmile.jpg",
        duration: "3s 9dk",
        imdb: 8.6,
        director: "Frank Darabont",
        year: 1999,
        videoUrl: "https://www.youtube.com/embed/ctRK-4Vt7dA",
        stars: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"]
    },
    {
        id: 19,
        title: "Avatar",
        category: "sci-fi",
        description: "Pandora gezegenindeki destansı bir macera",
        image: "./images/avatar.jpg",
        duration: "2s 42dk",
        imdb: 7.9,
        director: "James Cameron",
        year: 2009,
        videoUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
        stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"]
    },
    {
        id: 20,
        title: "The Hangover",
        category: "comedy",
        description: "Las Vegas'ta geçen çılgın bir bekarlığa veda hikayesi",
        image: "./images/thehangover.jpg",
        duration: "1s 40dk",
        imdb: 7.7,
        director: "Todd Phillips",
        year: 2009,
        videoUrl: "https://www.youtube.com/embed/tcdUhdOlz9M",
        stars: ["Bradley Cooper", "Zach Galifianakis", "Ed Helms"]
    },
    {
        id: 21,
        title: "Superbad",
        category: "comedy",
        description: "Lisedeki iki arkadaşın eğlenceli ve çılgın maceraları",
        image: "./images/superbad.jpg",
        duration: "1s 53dk",
        imdb: 7.6,
        director: "Greg Mottola",
        year: 2007,
        videoUrl: "https://www.youtube.com/embed/4eaZ_48ZYog",
        stars: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"]
    },
    {
        id: 22,
        title: "Captain America: The First Avenger",
        category: "action",
        description: "Steve Rogers, a weak but determined man, is enhanced to the peak of human physicality and becomes Captain America to fight Hydra during World War II.",
        image: "./images/CaptainAmericaTheFirstAvenger.jpg",
        duration: "2h 4m",
        imdb: 6.9,
        director: "Joe Johnston",
        year: 2011,
        videoUrl: "https://www.youtube.com/embed/J1rCr1I8Xsk",
        stars: ["Chris Evans", "Hugo Weaving", "Hayley Atwell"]
    },
    {
        id: 23,
        title: "Captain Marvel",
        category: "action",
        description: "Carol Danvers becomes one of the universe's most powerful heroes while uncovering the secrets of her past.",
        image: "./images/captainmarvel.jpg",
        duration: "2h 3m",
        imdb: 6.8,
        director: "Anna Boden, Ryan Fleck",
        year: 2019,
        videoUrl: "https://www.youtube.com/embed/Z1BCujX3pw8",
        stars: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn"]
    },
    {
        id: 24,
        title: "Iron Man",
        category: "action",
        description: "Billionaire playboy Tony Stark becomes the armored superhero Iron Man after escaping captivity and building a high-tech suit.",
        image: "./images/ironman.jpg",
        duration: "2s 6dk",
        imdb: 7.9,
        director: "Jon Favreau",
        year: 2008,
        videoUrl: "https://www.youtube.com/embed/8ugaeA-nMTc",
        stars: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"]
    },
    {
        id: 25,
        title: "Iron Man 2",
        category: "action",
        description: "Tony Stark faces new enemies, including Ivan Vanko, a genius inventor and the son of his father’s rival.",
        image: "./images/ironman2.jpg",
        duration: "2h 4m",
        imdb: 7.0,
        director: "Jon Favreau",
        year: 2010,
        videoUrl: "https://www.youtube.com/embed/wKtcmi3Rgh4",
        stars: ["Robert Downey Jr.", "Mickey Rourke", "Scarlett Johansson"]
    },
    {
        id: 26,
        title: "The Incredible Hulk",
        category: "action",
        description: "Bruce Banner, on the run from the US government, must fight a creature of his own creation while trying to cure his condition.",
        image: "./images/theincrediblehulk.jpg",
        duration: "1h 52m",
        imdb: 6.7,
        director: "Louis Leterrier",
        year: 2008,
        videoUrl: "https://www.youtube.com/embed/K1H7IYtBG-I",
        stars: ["Edward Norton", "Liv Tyler", "Tim Roth"]
    },
    {
        id: 27,
        title: "Thor",
        category: "action",
        description: "Thor, the Norse god of thunder, is cast out of his home in Asgard and must learn humility while facing a threat to Earth.",
        image: "./images/thor.jpg",
        duration: "1h 55m",
        imdb: 7.0,
        director: "Kenneth Branagh",
        year: 2011,
        videoUrl: "https://www.youtube.com/embed/JOddp-nlNvQ",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"]
    },
    {
        id: 28,
        title: "The Avengers",
        category: "action",
        description: "Nick Fury assembles a team of superheroes to stop Loki from invading Earth and subjugating humanity.",
        image: "./images/theavengers.jpg",
        duration: "2h 23m",
        imdb: 8.0,
        director: "Joss Whedon",
        year: 2012,
        videoUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Scarlett Johansson"]
    },
    {
        id: 29,
        title: "Thor: The Dark World",
        category: "action",
        description: "Thor must unite with Loki to defeat an ancient enemy, the Dark Elves, who threaten to destroy the Nine Realms.",
        image: "./images/thorthedarkworld.jpg",
        duration: "1h 52m",
        imdb: 6.9,
        director: "Alan Taylor",
        year: 2013,
        videoUrl: "https://www.youtube.com/embed/npvJ9PzF5P8",
        stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"]
    },
    {
        id: 30,
        title: "Iron Man 3",
        category: "action",
        description: "Tony Stark faces his greatest enemy, the Mandarin, after his world is destroyed.",
        image: "./images/ironman3.jpg",
        duration: "2h 10m",
        imdb: 7.2,
        director: "Shane Black",
        year: 2013,
        videoUrl: "https://www.youtube.com/embed/Kb2BfZSM7TQ",
        stars: ["Robert Downey Jr.", "Gwyneth Paltrow", "Ben Kingsley"]
    },
    {
        id: 31,
        title: "Captain America: The Winter Soldier",
        category: "action",
        description: "Captain America teams up with Black Widow to uncover a conspiracy within S.H.I.E.L.D. while facing a mysterious enemy, the Winter Soldier.",
        image: "./images/captainamericathewintersoldier.jpg",
        duration: "2h 16m",
        imdb: 7.8,
        director: "Anthony Russo, Joe Russo",
        year: 2014,
        videoUrl: "https://www.youtube.com/embed/tbayiPxkUMM",
        stars: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"]
    },
    {
        id: 32,
        title: "Guardians of the Galaxy Vol. 1",
        category: "action",
        description: "A group of misfit criminals band together to stop an intergalactic warlord from using a powerful orb to conquer the universe.",
        image: "./images/guardiansofthegalaxyvol1.jpg",
        duration: "2h 1m",
        imdb: 8.0,
        director: "James Gunn",
        year: 2014,
        videoUrl: "https://www.youtube.com/embed/d96cjJhvlMA",
        stars: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"]
    },
    {
        id: 33,
        title: "Guardians of the Galaxy Vol. 2",
        category: "action",
        description: "The Guardians continue their cosmic adventure while Peter Quill tries to uncover the truth about his parentage.",
        image: "./images/guardiansofthegalaxyvol2.jpg",
        duration: "2h 16m",
        imdb: 7.6,
        director: "James Gunn",
        year: 2017,
        videoUrl: "https://www.youtube.com/embed/2LqKjiVhfi4",
        stars: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"]
    },
    {
        id: 34,
        title: "Avengers: Age of Ultron",
        category: "action",
        description: "The Avengers must stop the rogue artificial intelligence Ultron, who seeks to cause global extinction.",
        image: "./images/avengersageofultron.jpg",
        duration: "2h 21m",
        imdb: 7.3,
        director: "Joss Whedon",
        year: 2015,
        videoUrl: "https://www.youtube.com/embed/tme8H_ha8X4",
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
    },
    {
        id: 35,
        title: "Ant-Man",
        category: "action",
        description: "A thief turned hero, Scott Lang must use his new powers to shrink in size but increase in strength to stop a villain from exploiting the Ant-Man technology.",
        image: "./images/antman.jpg",
        duration: "1h 57m",
        imdb: 7.3,
        director: "Peyton Reed",
        year: 2015,
        videoUrl: "https://www.youtube.com/embed/pWdKf3MneyI",
        stars: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly"]
    },
    {
        id: 36,
        title: "Captain America: Civil War",
        category: "action",
        description: "After an international incident, the Avengers are split into two opposing factions, one led by Captain America and the other by Iron Man.",
        image: "./images/captainamericacivilwar.jpg",
        duration: "2h 27m",
        imdb: 7.8,
        director: "Anthony Russo, Joe Russo",
        year: 2016,
        videoUrl: "https://www.youtube.com/embed/dKrVegVI0Us",
        stars: ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson"]
    },
    {
        id: 37,
        title: "Spider-Man: Homecoming",
        category: "action",
        description: "Peter Parker, still adjusting to his role as Spider-Man, must face a new villain, Vulture, while proving himself to Tony Stark.",
        image: "./images/spider-manhomecoming.jpg",
        duration: "2h 13m",
        imdb: 7.4,
        director: "Jon Watts",
        year: 2017,
        videoUrl: "https://www.youtube.com/embed/oZp6dJ7fXHk",
        stars: ["Tom Holland", "Robert Downey Jr.", "Michael Keaton"]
    },
    {
        id: 38,
        title: "Doctor Strange",
        category: "action",
        description: "A brilliant but arrogant surgeon turns to mysticism after a career-ending car accident and becomes the Sorcerer Supreme.",
        image: "./images/doctorstrange.jpg",
        duration: "1h 55m",
        imdb: 7.5,
        director: "Scott Derrickson",
        year: 2016,
        videoUrl: "https://www.youtube.com/embed/HSzx-f8sM6k",
        stars: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"]
    },
    {
        id: 39,
        title: "Black Widow",
        category: "action",
        description: "Natasha Romanoff confronts the darker parts of her past as she deals with unfinished business from her early years as a spy.",
        image: "./images/blackwidow.jpg",
        duration: "2h 13m",
        imdb: 6.8,
        director: "Cate Shortland",
        year: 2021,
        videoUrl: "https://www.youtube.com/embed/Fp9pNPdNwjI",
        stars: ["Scarlett Johansson", "Florence Pugh", "David Harbour"]
    },
    {
        id: 40,
        title: "Black Panther",
        category: "action",
        description: "T'Challa, the new king of Wakanda, must face the challenge of a new foe, Killmonger, who wants to claim the throne.",
        image: "./images/blackpanther.jpg",
        duration: "2h 14m",
        imdb: 7.3,
        director: "Ryan Coogler",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/xjDjIWPwcPU",
        stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"]
    },
    {
        id: 41,
        title: "Thor: Ragnarok",
        category: "action",
        description: "Thor must fight to escape the alien planet Sakaar and prevent the destruction of Asgard by the powerful villain Hela.",
        image: "./images/thorragnarok.jpg",
        duration: "2h 10m",
        imdb: 7.9,
        director: "Taika Waititi",
        year: 2017,
        videoUrl: "https://www.youtube.com/embed/ue80Q5xZ0nE",
        stars: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"]
    },
    {
        id: 42,
        title: "Ant-Man and the Wasp",
        category: "action",
        description: "Scott Lang teams up with Hope van Dyne to find Janet van Dyne, the original Wasp, and stop a new villain, Ghost.",
        image: "./images/antmanandthewasp.jpg",
        duration: "1h 58m",
        imdb: 7.0,
        director: "Peyton Reed",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/UU5iYHRdHr4",
        stars: ["Paul Rudd", "Evangeline Lilly", "Michael Douglas"]
    },
    {
        id: 43,
        title: "Avengers: Infinity War",
        category: "action",
        description: "The Avengers must unite with the Guardians of the Galaxy to stop Thanos from collecting all the Infinity Stones and bringing about the end of the universe.",
        image: "./images/avengersinfinitywar.jpg",
        duration: "2h 29m",
        imdb: 8.4,
        director: "Anthony Russo, Joe Russo",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
    },
    {
        id: 44,
        title: "Avengers: Endgame",
        category: "action",
        description: "The Avengers seek to undo the damage done by Thanos in the previous film and restore the lives lost in the snap.",
        image: "./images/avengersendgame.jpg",
        duration: "3h 1m",
        imdb: 8.4,
        director: "Anthony Russo, Joe Russo",
        year: 2019,
        videoUrl: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        stars: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"]
    },
    {
        id: 45,
        title: "Shang-Chi and the Legend of the Ten Rings",
        category: "action",
        description: "Shang-Chi must confront his past and battle the mysterious Ten Rings organization.",
        image: "./images/ShangChiandtheLegendoftheTenRings.jpg",
        duration: "2h 12m",
        imdb: 7.9,
        director: "Destin Daniel Cretton",
        year: 2021,
        videoUrl: "https://www.youtube.com/embed/giWIr7U1deA",
        stars: ["Simu Liu", "Awkwafina", "Tony Leung"]
    },
    {
        id: 46,
        title: "Spider-Man: Far From Home",
        category: "action",
        description: "Peter Parker goes on a school trip to Europe and must step up as Spider-Man when a new threat emerges in the form of Mysterio.",
        image: "./images/spidermanfarfromhome.jpg",
        duration: "2h 9m",
        imdb: 7.5,
        director: "Jon Watts",
        year: 2019,
        videoUrl: "https://www.youtube.com/embed/dEyL8wQZ42A",
        stars: ["Tom Holland", "Jake Gyllenhaal", "Zendaya"]
    },
    {
        id: 47,
        title: "Spider-Man: No Way Home",
        category: "action",
        description: "Peter Parker seeks the help of Doctor Strange to erase everyone's memory of him being Spider-Man, but the spell goes wrong, opening up the Multiverse.",
        image: "./images/spidermannowayhome.jpg",
        duration: "2h 28m",
        imdb: 8.3,
        director: "Jon Watts",
        year: 2021,
        videoUrl: "https://www.youtube.com/embed/JfVOs4V8p4E",
        stars: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"]
    },
    {
        id: 48,
        title: "Eternals",
        category: "action",
        description: "A group of ancient heroes known as the Eternals must come together to defend Earth from the Deviants, creatures who were long thought to be extinct.",
        image: "./images/eternals.jpg",
        duration: "2h 37m",
        imdb: 6.3,
        director: "Chloé Zhao",
        year: 2021,
        videoUrl: "https://www.youtube.com/embed/x_me3xsvDgk",
        stars: ["Gemma Chan", "Richard Madden", "Angelina Jolie"]
    },
    {
        id: 49,
        title: "Doctor Strange in the Multiverse of Madness",
        category: "action",
        description: "Doctor Strange must journey into the Multiverse to confront new and dangerous threats that endanger reality itself.",
        image: "./images/DoctorStrangeintheMultiverseofMadness.jpg",
        duration: "2h 6m",
        imdb: 7.0,
        director: "Sam Raimi",
        year: 2022,
        videoUrl: "https://www.youtube.com/embed/aWzlQ2N6qqg",
        stars: ["Benedict Cumberbatch", "Elizabeth Olsen", "Benedict Wong"]
    },
    {
        id: 50,
        title: "Black Panther: Wakanda Forever",
        category: "action",
        description: "The people of Wakanda fight to protect their nation from intervening world powers in the wake of King T'Challa's death.",
        image: "./images/blackpantherwakandaforever.jpg",
        duration: "2h 41m",
        imdb: 7.0,
        director: "Ryan Coogler",
        year: 2022,
        videoUrl: "https://www.youtube.com/embed/XjZTh_9w4D0",
        stars: ["Letitia Wright", "Angela Bassett", "Tenoch Huerta"]
    },
    {
        id: 51,
        title: "Thor: Love and Thunder",
        category: "action",
        description: "Thor teams up with Valkyrie, Korg, and Jane Foster to defeat the villain Gorr the God Butcher, who seeks the extinction of the gods.",
        image: "./images/thorloveandthunder.jpg",
        duration: "1h 59m",
        imdb: 6.3,
        director: "Taika Waititi",
        year: 2022,
        videoUrl: "https://www.youtube.com/embed/Go8nTmfrQd8",
        stars: ["Chris Hemsworth", "Natalie Portman", "Christian Bale"]
    },
    {
        id: 52,
        title: "Ant-Man and the Wasp: Quantumania",
        category: "action",
        description: "Scott Lang and Hope van Dyne team up with their families to venture into the Quantum Realm, where they encounter new dangers.",
        image: "./images/antmanandthewaspquantumania.jpg",
        duration: "2h 5m",
        imdb: 6.3,
        director: "Peyton Reed",
        year: 2023,
        videoUrl: "https://www.youtube.com/embed/VofoT_6ru_o",
        stars: ["Paul Rudd", "Evangeline Lilly", "Michael Douglas"]
    },
    {
        id: 53,
        title: "Guardians of the Galaxy Holiday Special",
        category: "action",
        description: "The Guardians of the Galaxy embark on a fun holiday adventure to make Christmas special for Peter Quill.",
        image: "./images/guardiansofthegalaxyholidayspecial.jpg",
        duration: "44m",
        imdb: 7.0,
        director: "James Gunn",
        year: 2022,
        videoUrl: "https://www.youtube.com/embed/Gv5Te_9Em48",
        stars: ["Chris Pratt", "Dave Bautista", "Karen Gillan"]
    },
    {
        id: 54,
        title: "Guardians of the Galaxy Vol. 3",
        category: "action",
        description: "The Guardians are forced to confront their past as they try to save Rocket, facing new challenges and enemies along the way.",
        image: "./images/guardiansofthegalaxyvol3.jpg",
        duration: "2h 30m",
        imdb: 8.0,
        director: "James Gunn",
        year: 2023,
        videoUrl: "https://www.youtube.com/embed/bWVuWzmIZ28",
        stars: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"]
    },
    {
        id: 55,
        title: "Kill Bill: Vol. 1",
        category: "action",
        description: "A former assassin, known as The Bride, seeks revenge on her former colleagues after they attempt to kill her and her unborn child. This is the first part of her bloody vengeance journey.",
        image: "./images/killbillvol1.jpg",
        duration: "1h 51m",
        imdb: 8.1,
        director: "Quentin Tarantino",
        year: 2003,
        videoUrl: "https://www.youtube.com/embed/7kYEdVKXfBo",
        stars: ["Uma Thurman", "Lucy Liu", "David Carradine"]
    },
    {
        id: 56,
        title: "Kill Bill: Vol. 2",
        category: "action",
        description: "The Bride continues her quest for revenge against the remaining members of the Deadly Viper Assassination Squad, leading to a final confrontation with Bill.",
        image: "./images/killbillvol2.jpg",
        duration: "2h 17m",
        imdb: 8.0,
        director: "Quentin Tarantino",
        year: 2004,
        videoUrl: "https://www.youtube.com/embed/ot6WQG_XdNo",
        stars: ["Uma Thurman", "David Carradine", "Daryl Hannah"]
    },
    {
        id: 57,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        category: "adventure",
        description: "A young hobbit named Frodo Baggins embarks on a journey to destroy a powerful ring that could bring great evil to Middle-earth, accompanied by a fellowship of allies.",
        image: "./images/TheLordoftheRingsTheFellowshipoftheRing.jpg",
        duration: "2h 58m",
        imdb: 8.8,
        director: "Peter Jackson",
        year: 2001,
        videoUrl: "https://www.youtube.com/embed/V75dMMIW2B4",
        stars: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
        id: 58,
        title: "The Lord of the Rings: The Two Towers",
        category: "adventure",
        description: "Frodo and Sam continue their journey to destroy the One Ring while Aragorn, Legolas, and Gimli fight to protect Middle-earth from the growing darkness of Sauron and Saruman.",
        image: "./images/TheLordoftheRingsTheTwoTowers.jpg",
        duration: "2h 59m",
        imdb: 8.7,
        director: "Peter Jackson",
        year: 2002,
        videoUrl: "https://www.youtube.com/embed/lXbkwzHh1X8",
        stars: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
        id: 59,
        title: "The Lord of the Rings: The Return of the King",
        category: "adventure",
        description: "The final battle for Middle-earth begins as Frodo and Sam continue their perilous journey to Mount Doom, while Aragorn prepares for his destiny as king and leads the forces of good against Sauron's armies.",
        image: "./images/TheLordoftheRingsTheReturnoftheKing.jpg",
        duration: "3h 21m",
        imdb: 8.9,
        director: "Peter Jackson",
        year: 2003,
        videoUrl: "https://www.youtube.com/embed/r5XLeFqZtTw",
        stars: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"]
    },
    {
        id: 60,
        title: "Harry Potter and the Sorcerer's Stone",
        category: "adventure",
        description: "A young boy named Harry discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry, where he uncovers the truth about his parents' mysterious death.",
        image: "./images/harrypotter1.jpg",
        duration: "2h 32m",
        imdb: 7.6,
        director: "Chris Columbus",
        year: 2001,
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 61,
        title: "Harry Potter and the Chamber of Secrets",
        category: "adventure",
        description: "Harry returns to Hogwarts for his second year and uncovers the dark secrets hidden in the Chamber of Secrets, while facing a new danger from an ancient evil.",
        image: "./images/harrypotter2.jpg",
        duration: "2h 41m",
        imdb: 7.4,
        director: "Chris Columbus",
        year: 2002,
        videoUrl: "https://www.youtube.com/embed/1bq0qff4iF8",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 62,
        title: "Harry Potter and the Prisoner of Azkaban",
        category: "adventure",
        description: "Harry discovers the truth about his family’s past and learns of the dangerous fugitive Sirius Black, who escapes from the notorious wizarding prison, Azkaban.",
        image: "./images/harrypotter3.jpg",
        duration: "2h 22m",
        imdb: 7.9,
        director: "Alfonso Cuarón",
        year: 2004,
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
        stars: ["Daniel Radcliffe", "Gary Oldman", "Emma Watson"]
    },
    {
        id: 63,
        title: "Harry Potter and the Goblet of Fire",
        category: "adventure",
        description: "Harry is unexpectedly entered into the Triwizard Tournament, a dangerous and magical competition between three wizarding schools, while dark forces rise in the wizarding world.",
        image: "./images/harrypotter4.jpg",
        duration: "2h 37m",
        imdb: 7.7,
        director: "Mike Newell",
        year: 2005,
        videoUrl: "https://www.youtube.com/embed/0vi3g1IilME",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 64,
        title: "Harry Potter and the Order of the Phoenix",
        category: "adventure",
        description: "Harry forms ‘Dumbledore’s Army’ to fight against the Ministry of Magic’s refusal to acknowledge the return of Lord Voldemort and the growing darkness in the wizarding world.",
        image: "./images/harrypotter5.jpg",
        duration: "2h 18m",
        imdb: 7.5,
        director: "David Yates",
        year: 2007,
        videoUrl: "https://www.youtube.com/embed/3GJzMnyXqKs",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 65,
        title: "Harry Potter and the Half-Blood Prince",
        category: "adventure",
        description: "As Voldemort’s power grows, Harry learns more about the Dark Lord’s past through memories given to him by Dumbledore, while struggling with his own feelings for Ginny Weasley.",
        image: "./images/harrypotter6.jpg",
        duration: "2h 33m",
        imdb: 7.6,
        director: "David Yates",
        year: 2009,
        videoUrl: "https://www.youtube.com/embed/M8IYZVfYdlI",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 66,
        title: "Harry Potter and the Deathly Hallows – Part 1",
        category: "adventure",
        description: "Harry, Ron, and Hermione embark on a dangerous journey to find and destroy Voldemort’s Horcruxes, which hold parts of his soul, to defeat him once and for all.",
        image: "./images/harrypotter7.jpg",
        duration: "2h 26m",
        imdb: 7.7,
        director: "David Yates",
        year: 2010,
        videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 67,
        title: "Harry Potter and the Deathly Hallows – Part 2",
        category: "adventure",
        description: "The final battle between Harry and Voldemort unfolds, leading to the ultimate destruction of the Dark Lord and a new beginning for Harry and his friends.",
        image: "./images/harrypotter8.jpg",
        duration: "2h 10m",
        imdb: 8.1,
        director: "David Yates",
        year: 2011,
        videoUrl: "https://www.youtube.com/embed/mObK5XD8pHk",
        stars: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"]
    },
    {
        id: 68,
        title: "Deadpool 2",
        category: ["action", "comedy"],
        description: "Deadpool forms a team called X-Force to protect a young mutant named Russell from Cable, a time-traveling soldier with a dangerous agenda, while dealing with the consequences of his own actions.",
        image: "./images/deadpool2.jpg",
        duration: "1h 59m",
        imdb: 7.7,
        director: "David Leitch",
        year: 2018,
        videoUrl: "https://www.youtube.com/embed/2pP5Sv5W6pg",
        stars: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin"]
    }
];

// Page load check
document.addEventListener('DOMContentLoaded', () => {
    // Identify the current page
    const currentPage = window.location.pathname.split('/').pop();
    
    // Page routing
    switch(currentPage) {
        case 'index.html':
        case '':
            initializeHomePage();
            break;
        case 'product.html':
            initializeProductPage();
            break;
        case 'favorites.html':
            initializeFavoritesPage();
            break;
    }

    // Initialize general search function
    initializeSearch();
});

// Home page functions
function initializeHomePage() {
    createMovieCards(movies);
    initializeCategoryFilters();
    initializeSorting();
}

// Create movie cards
function createMovieCards(movies, container = 'movieList') {
    const movieList = document.getElementById(container);
    if (!movieList) return;
    
    const template = document.getElementById('movieCardTemplate');
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const clone = template.content.cloneNode(true);
        
        // Fill card content
        const img = clone.querySelector('img');
        img.src = movie.image;
        img.alt = movie.title;
        
        clone.querySelector('.card-title').textContent = movie.title;
        clone.querySelector('.card-text').textContent = movie.description;
        clone.querySelector('.movie-year').textContent = movie.year;
        clone.querySelector('.movie-imdb').textContent = `IMDB: ${movie.imdb}`;
        
        const detailLink = clone.querySelector('a');
        detailLink.href = `product.html?id=${movie.id}`;
        
        // Set favorite button
        const favoriteBtn = clone.querySelector('.favorite-btn');
        if (favoriteBtn) {
            // Add movie ID as a data attribute
            favoriteBtn.dataset.movieId = movie.id;
            updateFavoriteButton(favoriteBtn, movie.id);
            
            favoriteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(movie.id);
            });
        }
        
        movieList.appendChild(clone);
    });
}

// Favorite operations
function toggleFavorite(movieId) {
    let favorites = getFavorites();
    const isCurrentlyFavorite = favorites.includes(movieId);
    
    if (isCurrentlyFavorite) {
        favorites = favorites.filter(id => id !== movieId);
        showNotification('Movie removed from favorites');
    } else {
        favorites.push(movieId);
        showNotification('Movie added to favorites');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    
    // If on favorites page, update list
    if (window.location.pathname.includes('favorites.html')) {
        initializeFavoritesPage();
    }
}

function updateFavoriteButtons() {
    const buttons = document.querySelectorAll('.favorite-btn');
    buttons.forEach(button => {
        const movieId = parseInt(button.dataset.movieId);
        if (movieId) {
            updateFavoriteButton(button, movieId);
        }
    });
}

function updateFavoriteButton(button, movieId) {
    const favorites = getFavorites();
    const isFavorite = favorites.includes(movieId);
    
    button.classList.toggle('active', isFavorite);
    const icon = button.querySelector('i');
    if (icon) {
        icon.className = isFavorite ? 'fas fa-heart' : 'far fa-heart';
    }
    button.title = isFavorite ? 'Remove from favorites' : 'Add to favorites';
}

// Category filtering
function initializeCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filters button');
    if (!filterButtons.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button style
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter movies
            const category = button.dataset.category;
            const filteredMovies = category === 'all'
                ? movies
                : movies.filter(movie => Array.isArray(movie.category)
                    ? movie.category.includes(category)
                    : movie.category === category);

            createMovieCards(filteredMovies);
        });
    });
}

// Sorting functions
function initializeSorting() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;

    sortSelect.addEventListener('change', () => {
        const sortedMovies = [...movies];
        
        switch(sortSelect.value) {
            case 'title':
                sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'year':
                sortedMovies.sort((a, b) => b.year - a.year);
                break;
            case 'imdb':
                sortedMovies.sort((a, b) => b.imdb - a.imdb);
                break;
        }
        
        createMovieCards(sortedMovies);
    });
}

// Search function
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredMovies = movies.filter(movie => 
                movie.title.toLowerCase().includes(searchTerm) ||
                movie.description.toLowerCase().includes(searchTerm) ||
                movie.director.toLowerCase().includes(searchTerm) ||
                movie.stars.some(star => star.toLowerCase().includes(searchTerm))
            );
            createMovieCards(filteredMovies);
        }, 300);
    });
}

// Movie details page
function initializeProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movie = movies.find(m => m.id === movieId);
    
    if (!movie) {
        window.location.href = 'index.html';
        return;
    }
    
    // Fill movie details
    document.getElementById('movieImage').src = movie.image;
    document.getElementById('movieTitle').textContent = movie.title;
    document.getElementById('movieCategory').textContent = movie.category;
    document.getElementById('movieDuration').textContent = movie.duration;
    document.getElementById('movieImdb').textContent = `IMDB: ${movie.imdb}`;
    document.getElementById('movieYear').textContent = movie.year;
    document.getElementById('movieDirector').textContent = movie.director;
    document.getElementById('movieStars').textContent = movie.stars.join(', ');
    document.getElementById('movieDescription').textContent = movie.description;
    document.getElementById('movieTrailer').src = movie.videoUrl;
    
    // Set favorite button
    const favoriteBtn = document.querySelector('.favorite-btn');
    updateFavoriteButton(favoriteBtn, movie.id);
    favoriteBtn.addEventListener('click', () => toggleFavorite(movie.id));

    // Load similar movies
    loadSimilarMovies(movie);
}

// Similar movies
function loadSimilarMovies(currentMovie) {
    const similarMovies = movies
        .filter(movie => 
            movie.id !== currentMovie.id && 
            (movie.category === currentMovie.category || 
             movie.director === currentMovie.director)
        )
        .slice(0, 3);

    createMovieCards(similarMovies, 'similarMovies');
}

// Favorites page
function initializeFavoritesPage() {
    const favorites = getFavorites();
    const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
    
    if (favoriteMovies.length === 0) {
        document.getElementById('noFavorites').style.display = 'block';
        document.getElementById('favoritesList').style.display = 'none';
        return;
    }
    
    document.getElementById('noFavorites').style.display = 'none';
    document.getElementById('favoritesList').style.display = 'block';
    
    createMovieCards(favoriteMovies, 'favoritesList');
}

// Create favorite movie cards
function createFavoriteMovieCards(movies) {
    const movieList = document.getElementById('favoritesList');
    if (!movieList) return;
    
    const template = document.getElementById('movieCardTemplate');
    movieList.innerHTML = '';
    
    movies.forEach(movie => {
        const clone = template.content.cloneNode(true);
        
        // Fill card content
        const img = clone.querySelector('img');
        img.src = movie.image;
        img.alt = movie.title;
        
        clone.querySelector('.card-title').textContent = movie.title;
        clone.querySelector('.card-text').textContent = movie.description;
        
        const detailLink = clone.querySelector('a');
        detailLink.href = `product.html?id=${movie.id}`;
        
        // Set favorite/remove button
        const removeBtn = clone.querySelector('.remove-favorite-btn');
        if (removeBtn) {
            removeBtn.dataset.movieId = movie.id;
            removeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFavorite(movie.id);
            });
        }
        
        movieList.appendChild(clone);
    });
}

// Remove from favorites
function removeFavorite(movieId) {
    let favorites = getFavorites();
    favorites = favorites.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    
    showNotification('Movie removed from favorites');
    initializeFavoritesPage(); // Refresh page content
}

// Get favorites from LocalStorage
function getFavorites() {
    try {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Error fetching favorites:', error);
        return [];
    }
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Helper functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        updateThemeButton(true);
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        updateThemeButton(isDark);
    });
});

function updateThemeButton(isDark) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
    themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'} me-1"></i>${isDark ? 'Light Mode' : 'Dark Mode'}`;
}
