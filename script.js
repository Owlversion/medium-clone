const tabs = document.querySelectorAll(".tabs button");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelector(".tabs .active")
        ?.classList.remove("active");

        tab.classList.add("active");
    });
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            const title = card.querySelector("h2").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }
    });
}

const readButtons = document.querySelectorAll(".readBtn");

readButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Article Page Opening Soon 🚀");
    });
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });
});

window.addEventListener("load", () => {
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";
            card.style.transition = "0.5s";
        }, index * 200);
    });
});