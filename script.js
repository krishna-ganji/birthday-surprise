/* ==========================================
   GET SCREENS
========================================== */

const welcome =
    document.getElementById("welcome");

const birthday =
    document.getElementById("birthday");

const memories =
    document.getElementById("memories");

const story =
    document.getElementById("story");

const letter =
    document.getElementById("letter");

const finalScreen =
    document.getElementById("final");


/* ==========================================
   GET BUTTONS
========================================== */

const openBtn =
    document.getElementById("openBtn");

const memoriesBtn =
    document.getElementById("memoriesBtn");

const storyBtn =
    document.getElementById("storyBtn");

const letterBtn =
    document.getElementById("letterBtn");

const finalBtn =
    document.getElementById("finalBtn");


/* ==========================================
   LETTER
========================================== */

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");


/* ==========================================
   MUSIC
========================================== */

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* ==========================================
   SHOW SCREEN
========================================== */

function showScreen(screen) {

    const allScreens =
        document.querySelectorAll(".screen");


    allScreens.forEach(
        section => {

            section.classList.remove(
                "active"
            );

        }
    );


    screen.classList.add(
        "active"
    );


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* ==========================================
   OPEN SURPRISE
========================================== */

openBtn.addEventListener(
    "click",
    () => {

        showScreen(birthday);

        startMusic();

        createConfetti();

    }
);


/* ==========================================
   BIRTHDAY → MEMORIES
========================================== */

memoriesBtn.addEventListener(
    "click",
    () => {

        showScreen(memories);

    }
);


/* ==========================================
   MEMORIES → STORY
========================================== */

storyBtn.addEventListener(
    "click",
    () => {

        showScreen(story);

    }
);


/* ==========================================
   STORY → LETTER
========================================== */

letterBtn.addEventListener(
    "click",
    () => {

        showScreen(letter);

    }
);


/* ==========================================
   OPEN LETTER
========================================== */

envelope.addEventListener(
    "click",
    () => {

        envelope.style.display =
            "none";

        letterContent.classList.add(
            "show"
        );

        createHeartBurst();

    }
);


/* ==========================================
   LETTER → FINAL
========================================== */

finalBtn.addEventListener(
    "click",
    () => {

        showScreen(finalScreen);

        createConfetti();

        createHeartBurst();

    }
);


/* ==========================================
   MUSIC
========================================== */

function startMusic() {

    backgroundMusic.volume =
        0.35;


    backgroundMusic.play()
        .catch(
            error => {

                console.log(
                    "Music could not start:",
                    error
                );

            }
        );

}


/* ==========================================
   CONFETTI
========================================== */

function createConfetti() {

    const symbols = [

        "❤️",
        "💕",
        "✨",
        "🎉",
        "💖",
        "🌸",
        "🎊",
        "🎂"

    ];


    for (
        let i = 0;
        i < 80;
        i++
    ) {


        const confetti =
            document.createElement(
                "div"
            );


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.position =
            "fixed";


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.top =
            "-30px";


        confetti.style.fontSize =
            Math.random() * 20 + 15 + "px";


        confetti.style.zIndex =
            "9999";


        confetti.style.pointerEvents =
            "none";


        document.body.appendChild(
            confetti
        );


        const duration =
            Math.random() * 3000 +
            2500;


        const rotation =
            Math.random() * 720;


        confetti.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(110vh)
                         rotate(${rotation}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-out"

            }

        );


        setTimeout(
            () => {

                confetti.remove();

            },
            duration
        );

    }

}


/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer =
    document.querySelector(
        ".hearts-container"
    );


function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "floating-heart"
    );


    const hearts = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"

    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        Math.random() * 20 +
        12 +
        "px";


    const duration =
        Math.random() * 8 + 7;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        () => {

            heart.remove();

        },
        duration * 1000
    );

}


/* Create hearts */

setInterval(
    createHeart,
    700
);


/* ==========================================
   HEART BURST
========================================== */

function createHeartBurst() {

    const symbols = [

        "❤️",
        "💕",
        "💖",
        "💗"

    ];


    for (
        let i = 0;
        i < 25;
        i++
    ) {


        const heart =
            document.createElement(
                "div"
            );


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            "50%";


        heart.style.top =
            "50%";


        heart.style.fontSize =
            Math.random() * 20 +
            15 +
            "px";


        heart.style.zIndex =
            "10000";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() * 250 +
            100;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.animate(

            [

                {

                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1

                },

                {

                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        )
                        scale(1.2)`,

                    opacity: 0

                }

            ],

            {

                duration: 1200,

                easing: "ease-out"

            }

        );


        setTimeout(
            () => {

                heart.remove();

            },
            1200
        );

    }

}