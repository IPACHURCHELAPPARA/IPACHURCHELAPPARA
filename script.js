document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Dynamic Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    if(navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        });
    }

    // 2. Smooth Scroll Reveal Effect for Cards
    const cards = document.querySelectorAll(".card");
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("reveal");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger immediately for items already in view

    // 3. Daily Bible Verses Logic
    const verses = [
        { text: `"For God so loved the world, that he gave his only Son..."`, ref: "John 3:16" },
        { text: `"I can do all things through him who strengthens me."`, ref: "Philippians 4:13" },
        { text: `"Trust in the LORD with all your heart..."`, ref: "Proverbs 3:5" },
        { text: `"The LORD is my shepherd; I shall not want."`, ref: "Psalm 23:1" },
        { text: `"And we know that for those who love God all things work together for good..."`, ref: "Romans 8:28" },
        { text: `"Be strong and courageous. Do not be frightened, and do not be dismayed..."`, ref: "Joshua 1:9" },
        { text: `"But they who wait for the LORD shall renew their strength..."`, ref: "Isaiah 40:31" }
    ];

    const verseTextEl = document.getElementById("daily-verse-text");
    const verseRefEl = document.getElementById("daily-verse-ref");

    if (verseTextEl && verseRefEl) {
        // Use the day of the year to pick a consistent daily verse
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        
        const verseIndex = dayOfYear % verses.length;
        verseTextEl.innerText = verses[verseIndex].text;
        verseRefEl.innerText = verses[verseIndex].ref;
    }

    // 4. Control Panel Password Lock
    const controlBtn = document.getElementById("control-panel-btn");
    if(controlBtn) {
        controlBtn.addEventListener("click", () => {
            const pass = prompt("Enter Administration Password:");
            if (pass === "8618317572@timon") {
                window.location.href = "control.html";
            } else if (pass !== null) {
                alert("Access Denied. Incorrect Password.");
            }
        });
    }
});