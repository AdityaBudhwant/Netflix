// ================= LOGIN CHECK =================

if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ================= GET MOVIE ID =================

const id = Number(new URLSearchParams(window.location.search).get("id")) || 1;

// ================= MOVIES DATABASE =================

const movies = [

{
id:1,
title:"Extraction",
subtitle:"Netflix Original",
description:"Tyler Rake takes on the world's deadliest rescue mission.",
poster:"images/images/movie1.jpeg",
trailer:"https://www.youtube.com/embed/L6P3nI6VnlY"

},

{
id:2,
title:"Extraction 2",
subtitle:"Action Thriller",
description:"Tyler Rake returns for another dangerous mission.",
poster:"images/images/movies2.jpeg",
trailer:"https://www.youtube.com/embed/Y274jZs5s7s",
},

{
id:3,
title:"Squid Game",
subtitle:"Netflix Series",
description:"456 players compete in deadly survival games.",
poster:"images/images/movies3.jpeg",
trailer:"https://www.youtube.com/embed/oqxAJKy0ii4"
},

{
id:4,
title:"Wednesday",
subtitle:"Netflix Original",
description:"Wednesday joins Nevermore Academy.",
poster:"images/images/movies4.jpeg",
trailer:"https://www.youtube.com/embed/Di310WS8zLk"
},

{
id:5,
title:"Stranger Things",
subtitle:"Sci-Fi Adventure",
description:"A supernatural mystery unfolds in Hawkins.",
poster:"images/images/movies5.jpeg",
trailer:"https://www.youtube.com/embed/b9EkMc79ZSU"
}

,

{
id:6,
title:"The Adam Project",
subtitle:"Sci-Fi Action",
description:"A time-traveling pilot meets his younger self.",
poster:"images/images/movies6.jpeg",
trailer:"https://www.youtube.com/embed/IE8HIsIrq4o"
},

{
id:7,
title:"The Gray Man",
subtitle:"Action Thriller",
description:"A CIA operative becomes the world's most wanted target.",
poster:"images/images/movies7.jpeg",
trailer:"https://www.youtube.com/embed/BmllggGO4pM"
},

{
id:8,
title:"Red Notice",
subtitle:"Action Comedy",
description:"An FBI profiler teams up with the world's greatest art thief.",
poster:"images/images/movies8.jpeg",
trailer:"https://www.youtube.com/embed/Pj0wz7zu3Ms"
},

{
id:9,
title:"6 Underground",
subtitle:"Action",
description:"Six billionaires fake their deaths to fight crime.",
poster:"images/images/movies9.jpeg",
trailer:"https://www.youtube.com/embed/YLE85olJjp8"
},

{
id:10,
title:"Triple Frontier",
subtitle:"Action Adventure",
description:"Former soldiers plan a dangerous heist.",
poster:"images/images/movies10.jpeg",
trailer:"https://www.youtube.com/embed/t-8YzacFX3o"
}

,

{
id:11,
title:"The Old Guard",
subtitle:"Action Fantasy",
description:"Immortal warriors fight to protect humanity.",
poster:"images/images/movies11.jpeg",
trailer:"https://www.youtube.com/embed/aK-X2d0lJ_s"
},

{
id:12,
title:"The Mother",
subtitle:"Action Thriller",
description:"A deadly assassin comes out of hiding to protect her daughter.",
poster:"images/images/movies12.jpeg",
trailer:"https://www.youtube.com/embed/8BFdFeOS3oM"
},

{
id:13,
title:"Army of the Dead",
subtitle:"Zombie Action",
description:"A team enters zombie-infested Las Vegas for a massive heist.",
poster:"images/images/movies13.jpeg",
trailer:"https://www.youtube.com/embed/tI1JGPhYBS8"
},

{
id:14,
title:"Bird Box",
subtitle:"Thriller",
description:"A mysterious force drives people to deadly acts.",
poster:"images/images/movies14.jpeg",
trailer:"https://www.youtube.com/embed/o2AsIXSh2xo"
},

{
id:15,
title:"The Witcher",
subtitle:"Fantasy Series",
description:"Geralt of Rivia battles monsters and destiny.",
poster:"images/images/movies15.jpeg",
trailer:"https://www.youtube.com/embed/ndl1W4ltcmg"
}

,

{
id:16,
title:"Lucifer",
subtitle:"Fantasy Crime",
description:"The Devil leaves Hell and helps solve crimes in Los Angeles.",
poster:"images/images/movies16.jpeg",
trailer:"https://www.youtube.com/embed/X4bF_quwNtw"
},

{
id:17,
title:"Money Heist",
subtitle:"Crime Thriller",
description:"A mysterious Professor leads the biggest heist in history.",
poster:"images/images/movies17.jpeg",
trailer:"https://www.youtube.com/embed/_InqQJRqGW4"
},

{
id:18,
title:"Dark",
subtitle:"Sci-Fi Mystery",
description:"A small town hides a terrifying time-travel secret.",
poster:"images/images/movies18.jpeg",
trailer:"https://www.youtube.com/embed/ESEUoa-mz2c"
},

{
id:19,
title:"All of Us Are Dead",
subtitle:"Zombie Thriller",
description:"Students struggle to survive a zombie outbreak.",
poster:"images/images/movies19.jpeg",
trailer:"https://www.youtube.com/embed/IN5TD4VRcSM"
},

{
id:20,
title:"Alice in Borderland",
subtitle:"Survival Thriller",
description:"Players must survive deadly games in an abandoned Tokyo.",
poster:"images/images/movies20.jpeg",
trailer:"https://www.youtube.com/embed/49_44FFKZ1M"
}

,

{
id:21,
title:"John Wick",
subtitle:"Action",
description:"Legendary assassin John Wick returns for revenge.",
poster:"images/images/movies21.jpeg",
trailer:"https://www.youtube.com/embed/qEVUtrk8_B4"
},

{
id:22,
title:"Mission: Impossible – Fallout",
subtitle:"Action Spy",
description:"Ethan Hunt races against time to stop a global disaster.",
poster:"images/images/movies22.jpeg",
trailer:"https://www.youtube.com/embed/wb49-oV0F78"
},

{
id:23,
title:"Top Gun: Maverick",
subtitle:"Action Drama",
description:"Maverick trains a new generation of elite fighter pilots.",
poster:"images/images/movies23.jpeg",
trailer:"https://www.youtube.com/embed/giXco2jaZ_4"
},

{
id:24,
title:"Interstellar",
subtitle:"Sci-Fi",
description:"A team travels through a wormhole to save humanity.",
poster:"images/images/movies24.jpeg",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
},

{
id:25,
title:"Inception",
subtitle:"Sci-Fi Thriller",
description:"A skilled thief enters dreams to steal secrets.",
poster:"images/images/movies25.jpeg",
trailer:"https://www.youtube.com/embed/YoHD9XEInc0"
}

,

{
id:26,
title:"The Batman",
subtitle:"Superhero",
description:"Batman hunts the Riddler in Gotham City.",
poster:"images/images/movies26.jpeg",
trailer:"https://www.youtube.com/embed/mqqft2x_Aa4"
},

{
id:27,
title:"Avengers: Endgame",
subtitle:"Superhero",
description:"The Avengers assemble for one final battle.",
poster:"images/images/movies27.jpeg",
trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
},

{
id:28,
title:"Spider-Man: No Way Home",
subtitle:"Superhero",
description:"Spider-Man faces villains from other universes.",
poster:"images/images/movies28.jpeg",
trailer:"https://www.youtube.com/embed/JfVOs4VSpmA"
},

{
id:29,
title:"Oppenheimer",
subtitle:"Biography",
description:"The story of J. Robert Oppenheimer.",
poster:"images/images/movies29.jpeg",
trailer:"https://www.youtube.com/embed/uYPbbksJxIg"
},

{
id:30,
title:"Dune",
subtitle:"Sci-Fi",
description:"Paul Atreides begins his legendary journey.",
poster:"images/images/movies30.jpeg",
trailer:"https://www.youtube.com/embed/n9xhJrPXop4"
}

];

// ================= LOAD MOVIE =================

const movie = movies.find(m => m.id === id);

if (!movie) {
    alert("Movie Not Found");
    window.location.href = "index.html";
}

document.getElementById("title").innerText = movie.title;
document.getElementById("subtitle").innerText = movie.subtitle;
document.getElementById("description").innerText = movie.description;
document.getElementById("poster").src = movie.poster;
document.getElementById("trailer").src = movie.trailer;

// ================= PLAY BUTTON =================

document.getElementById("playBtn").addEventListener("click", () => {

    document.getElementById("trailer").src =
        movie.trailer + "?autoplay=1";

    let continueWatching =
        JSON.parse(localStorage.getItem("continueWatching")) || [];

    continueWatching = continueWatching.filter(
        m => m.id !== movie.id
    );

    continueWatching.unshift({
        id: movie.id,
        title: movie.title,
        poster: movie.poster
    });

    localStorage.setItem(
        "continueWatching",
        JSON.stringify(continueWatching)
    );

});

// ================= MY LIST =================

document.getElementById("listBtn").addEventListener("click", () => {

    let myList =
        JSON.parse(localStorage.getItem("myList")) || [];

    if (!myList.find(m => m.id === movie.id)) {

        myList.push(movie);

        localStorage.setItem(
            "myList",
            JSON.stringify(myList)
        );

        alert("Added to My List ❤️");

    } else {

        alert("Already in My List");

    }

});

