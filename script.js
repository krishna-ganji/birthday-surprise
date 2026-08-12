// ========================================
// SCREEN NAVIGATION
// ========================================

const screens = document.querySelectorAll(".screen");


// ========================================
// BUTTONS
// ========================================

const openBtn = document.getElementById("openBtn");
const memoriesBtn = document.getElementById("memoriesBtn");
const storyBtn = document.getElementById("storyBtn");
const letterBtn = document.getElementById("letterBtn");
const finalBtn = document.getElementById("finalBtn");


// ========================================
// BACK BUTTON
// ========================================

const backBtn = document.getElementById("backBtn");


// ========================================
// MUSIC
// ========================================

const backgroundMusic =
    document.getElementById("backgroundMusic");


// ========================================
// SCREEN HISTORY
// ========================================

let screenHistory = [];


// ========================================
// CURRENT SCREEN
// ========================================

function getCurrentScreen() {

    return document.querySelector(".screen.active");

}


// ========================================
// SHOW SCREEN
// ========================================

function showScreen(screenId, saveHistory = true) {

    const currentScreen = getCurrentScreen();


    // ------------------------------------
    // Save current screen
    // ------------------------------------

    if (
        saveHistory &&
        currentScreen &&
        currentScreen.id !== screenId
    ) {

        screenHistory.push(
            currentScreen.id
        );

    }


    // ------------------------------------
    // Hide all screens
    // ------------------------------------

    screens.forEach((screen) => {

        screen.classList.remove("active");

    });


    // ------------------------------------
    // Show requested screen
    // ------------------------------------

    const nextScreen =
        document.getElementById(screenId);


    if (nextScreen) {

        nextScreen.classList.add("active");

    }


    // ------------------------------------
    // Scroll to top
    // ------------------------------------

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    // ------------------------------------
    // Update Back button
    // ------------------------------------

    updateBackButton();

}


// ========================================
// UPDATE BACK BUTTON
// ========================================

function updateBackButton() {

    if (!backBtn) {
        return;
    }


    const currentScreen =
        getCurrentScreen();


    // Hide Back button on welcome screen

    if (
        !currentScreen ||
        currentScreen.id === "welcome" ||
        screenHistory.length === 0
    ) {

        backBtn.style.display = "none";

    } else {

        backBtn.style.display = "flex";

    }

}


// ========================================
// BACK BUTTON CLICK
// ========================================

if (backBtn) {

    backBtn.addEventListener("click", () => {

        if (screenHistory.length === 0) {
            return;
        }


        // Get previous screen

        const previousScreen =
            screenHistory.pop();


        // Show previous screen
        // without adding current screen
        // to history again

        showScreen(
            previousScreen,
            false
        );

    });

}


// ========================================
// OPEN SURPRISE
// ========================================

if (openBtn) {

    openBtn.addEventListener("click", () => {

        showScreen("birthday");


        // Start music

        if (backgroundMusic) {

            backgroundMusic.volume = 0.5;

            backgroundMusic
                .play()
                .catch((error) => {

                    console.log(
                        "Music autoplay blocked:",
                        error
                    );

                });

        }

    });

}


// ========================================
// BIRTHDAY → MEMORIES
// ========================================

if (memoriesBtn) {

    memoriesBtn.addEventListener("click", () => {

        showScreen("memories");

    });

}


// ========================================
// MEMORIES → STORY
// ========================================

if (storyBtn) {

    storyBtn.addEventListener("click", () => {

        showScreen("story");

    });

}


// ========================================
// STORY → LETTER
// ========================================

if (letterBtn) {

    letterBtn.addEventListener("click", () => {

        showScreen("letter");

    });

}


// ========================================
// LETTER → FINAL
// ========================================

if (finalBtn) {

    finalBtn.addEventListener("click", () => {

        showScreen("final");

    });

}


// ========================================
// ENVELOPE
// ========================================

const envelope =
    document.getElementById("envelope");

const letterContent =
    document.getElementById("letterContent");


if (envelope && letterContent) {

    envelope.addEventListener("click", () => {

        envelope.style.display = "none";

        letterContent.classList.add("show");

    });

}


// ========================================
// INITIAL STATE
// ========================================

updateBackButton();