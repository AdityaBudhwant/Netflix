console.log("Netflix Clone Started!");

// ================= SEARCH =================

const search = document.getElementById("search");

if (search) {

    search.addEventListener("keyup", function () {

        const filter = search.value.toLowerCase();

        const movies = document.querySelectorAll(".movie-row a");

        movies.forEach(function (movie) {

            const img = movie.querySelector("img");

            if (!img) return;

            const name = img.alt.toLowerCase();

            movie.style.display = name.includes(filter)
                ? ""
                : "none";

        });

    });

}

// ================= LOGOUT =================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("loggedIn");
        localStorage.removeItem("profile");

        alert("Logged Out Successfully");

        window.location.href = "login.html";

    });

}

// ================= WELCOME =================

const welcome = document.getElementById("welcome");

if (welcome) {

    const profile = localStorage.getItem("profile");

    if (profile) {

        welcome.innerText = "Welcome, " + profile;

    }

}

// ================= CONTINUE WATCHING =================

const continueRow = document.getElementById("continueRow");

if (continueRow) {

    const list =
        JSON.parse(localStorage.getItem("continueWatching")) || [];

    continueRow.innerHTML = "";

    list.forEach(function (movie) {

        continueRow.innerHTML += `

        <a href="movie.html?id=${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}">
        </a>

        `;

    });

}

const heroMovies = [

{
id:1,
title:"Extraction",
subtitle:"Netflix Original Movie",
desc:"Tyler Rake takes on the world's deadliest rescue mission.",
image:"images/images/movie1.jpeg"
},

{
id:2,
title:"Extraction 2",
subtitle:"Action Thriller",
desc:"Tyler Rake returns for another dangerous mission.",
image:"images/images/movies2.jpeg"
},

{
id:3,
title:"Squid Game",
subtitle:"Netflix Series",
desc:"456 players compete in deadly survival games.",
image:"images/images/movies3.jpeg"
},

{
id:4,
title:"Wednesday",
subtitle:"Netflix Original",
desc:"Wednesday joins Nevermore Academy.",
image:"images/images/movies4.jpeg"
},

{
id:5,
title:"Stranger Things",
subtitle:"Sci-Fi Adventure",
desc:"A supernatural mystery unfolds in Hawkins.",
image:"images/images/movies5.jpeg"
},

{
id:6,
title:"The Adam Project",
subtitle:"Sci-Fi Action",
desc:"A time-traveling pilot meets his younger self.",
image:"images/images/movies6.jpeg"
},

{
id:7,
title:"The Gray Man",
subtitle:"Action Thriller",
desc:"A CIA agent becomes the world's most wanted man.",
image:"images/images/movies7.jpeg"
},

{
id:8,
title:"Red Notice",
subtitle:"Action Comedy",
desc:"An FBI profiler hunts the world's greatest art thief.",
image:"images/images/movies8.jpeg"
},

{
id:9,
title:"6 Underground",
subtitle:"Action",
desc:"Six billionaires fake their deaths to fight crime.",
image:"images/images/movies9.jpeg"
},

{
id:10,
title:"Triple Frontier",
subtitle:"Action Adventure",
desc:"Former soldiers attempt a dangerous heist.",
image:"images/images/movies10.jpeg"
},

{
id:11,
title:"The Old Guard",
subtitle:"Action Fantasy",
desc:"Immortal warriors fight to protect humanity.",
image:"images/images/movies11.jpeg"
},

{
id:12,
title:"The Mother",
subtitle:"Action Thriller",
desc:"A deadly assassin protects her daughter.",
image:"images/images/movies12.jpeg"
},

{
id:13,
title:"Army of the Dead",
subtitle:"Zombie Action",
desc:"A team enters zombie-infested Las Vegas for a massive heist.",
image:"images/images/movies13.jpeg"
},

{
id:14,
title:"Bird Box",
subtitle:"Thriller",
desc:"A mysterious force threatens humanity.",
image:"images/images/movies14.jpeg"
},

{
id:15,
title:"The Witcher",
subtitle:"Fantasy Series",
desc:"Geralt of Rivia battles monsters and destiny.",
image:"images/images/movies15.jpeg"
},

{
id:16,
title:"Lucifer",
subtitle:"Fantasy Crime",
desc:"The Devil helps solve crimes in Los Angeles.",
image:"images/images/movies16.jpeg"
},

{
id:17,
title:"Money Heist",
subtitle:"Crime Thriller",
desc:"The Professor plans the greatest heist ever.",
image:"images/images/movies17.jpeg"
},

{
id:18,
title:"Dark",
subtitle:"Sci-Fi Mystery",
desc:"A small town hides terrifying time-travel secrets.",
image:"images/images/movies18.jpeg"
},

{
id:19,
title:"All of Us Are Dead",
subtitle:"Zombie Thriller",
desc:"Students fight to survive a zombie outbreak.",
image:"images/images/movies19.jpeg"
},

{
id:20,
title:"Alice in Borderland",
subtitle:"Survival Thriller",
desc:"Deadly games decide who survives.",
image:"images/images/movies20.jpeg"
},

{
id:21,
title:"John Wick",
subtitle:"Action",
desc:"Legendary assassin John Wick returns for revenge.",
image:"images/images/movies21.jpeg"
},

{
id:22,
title:"Mission: Impossible Fallout",
subtitle:"Spy Action",
desc:"Ethan Hunt races to stop a global catastrophe.",
image:"images/images/movies22.jpeg"
},

{
id:23,
title:"Top Gun: Maverick",
subtitle:"Action Drama",
desc:"Maverick trains the next generation of fighter pilots.",
image:"images/images/movies23.jpeg"
},

{
id:24,
title:"Interstellar",
subtitle:"Sci-Fi",
desc:"A journey through space to save humanity.",
image:"images/images/movies24.jpeg"
},

{
id:25,
title:"Inception",
subtitle:"Sci-Fi Thriller",
desc:"A thief enters dreams to steal secrets.",
image:"images/images/movies25.jpeg"
},

{
id:26,
title:"The Batman",
subtitle:"Superhero",
desc:"Batman hunts Gotham's most dangerous criminal.",
image:"images/images/movies26.jpeg"
},

{
id:27,
title:"Avengers: Endgame",
subtitle:"Superhero",
desc:"The Avengers fight their final battle.",
image:"images/images/movies27.jpeg"
},

{
id:28,
title:"Spider-Man: No Way Home",
subtitle:"Superhero",
desc:"Spider-Man faces villains from the multiverse.",
image:"images/images/movies28.jpeg"
},

{
id:29,
title:"Oppenheimer",
subtitle:"Biography",
desc:"The story of J. Robert Oppenheimer.",
image:"images/images/movies29.jpeg"
},

{
id:30,
title:"Dune",
subtitle:"Sci-Fi Adventure",
desc:"Paul Atreides begins his legendary journey.",
image:"images/images/movies30.jpeg"
}

];

let currentHero = 0;

const hero = document.querySelector(".hero");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroDescription = document.getElementById("heroDescription");
const heroPlay = document.getElementById("heroPlay");
const heroInfo = document.getElementById("heroInfo");

function updateHero() {

    if (!hero) return;

    const movie = heroMovies[currentHero];

    heroTitle.innerText = movie.title;
    heroSubtitle.innerText = movie.subtitle;
    heroDescription.innerText = movie.desc;

    hero.style.background =
        `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.8)),
        url('${movie.image}')`;

    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";

}

if (hero) {

    updateHero();

    setInterval(() => {

        currentHero++;

        if (currentHero >= heroMovies.length) {

            currentHero = 0;

        }

        updateHero();

    }, 5000);

}

if (heroPlay) {

    heroPlay.addEventListener("click", () => {

        window.location.href =
            "movie.html?id=" + heroMovies[currentHero].id;

    });

}

if (heroInfo) {

    heroInfo.addEventListener("click", () => {

        window.location.href =
            "movie.html?id=" + heroMovies[currentHero].id;

    });

}

// ================= PROFILE NAME =================

const profileName = localStorage.getItem("profileName") || "User";

const username = document.getElementById("username");

if (username) {
    username.innerText = profileName;
}