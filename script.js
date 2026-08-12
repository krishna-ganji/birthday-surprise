// =====================================
// ELEMENTS
// =====================================

const screens = document.querySelectorAll(".screen");

const openBtn = document.getElementById("openBtn");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const confettiContainer =
    document.getElementById("confetti-container");


// =====================================
// SHOW SCREEN
// =====================================

function showScreen(screenId) {

    screens.forEach((screen) => {
        screen.classList.remove("active");
    });


    const nextScreen =
        document.getElementById(screenId);


    if (nextScreen) {

        nextScreen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


// =====================================
// START MUSIC
// =====================================

function startMusic() {

    if (!backgroundMusic) {
        return;
    }


    backgroundMusic.volume = 0.5;


    backgroundMusic
        .play()
        .then(() => {

            console.log("Music started");

        })
        .catch((error) => {

            console.log(
                "Music could not start:",
                error
            );

        });
}


// =====================================
// OPEN SURPRISE
// =====================================

openBtn.addEventListener("click", () => {

    showScreen("birthday");

    startMusic();

    createConfetti();

});


// =====================================
// NEXT BUTTONS
// =====================================

const nextButtons =
    document.querySelectorAll(".next-button");


nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const nextScreen =
            button.getAttribute("data-next");


        if (nextScreen) {

            showScreen(nextScreen);

        }

    });

});


// =====================================
// CONFETTI
// =====================================

function createConfetti() {

    if (!confettiContainer) {
        return;
    }


    confettiContainer.innerHTML = "";


    const symbols = [
        "❤️",
        "💕",
        "✨",
        "🌸",
        "💖",
        "🎉"
    ];


    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDelay =
            Math.random() * 3 + "s";


        piece.style.fontSize =
            Math.random() * 12 + 10 + "px";


        confettiContainer.appendChild(piece);

    }

}


// =====================================
// TRY TO RESUME MUSIC AFTER INTERACTION
// =====================================

document.addEventListener("click", () => {

    if (
        backgroundMusic &&
        backgroundMusic.paused
    ) {

        backgroundMusic
            .play()
            .catch(() => {
                // Browser may still block playback.
            });

    }

});


// =====================================
// KEYBOARD SUPPORT
// =====================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            const activeScreen =
                document.querySelector(
                    ".screen.active"
                );


            if (
                activeScreen &&
                activeScreen.id === "welcome"
            ) {

                openBtn.click();

            }

        }

    }
);