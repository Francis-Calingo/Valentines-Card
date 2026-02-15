// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const ooBtn = document.querySelector(".btn[alt='Oo']");
const wenBtn = document.querySelector(".btn[alt='Wen']");
const iyoBtn = document.querySelector(".btn[alt='Iyo']");

const title = document.getElementById("letter-title");
const pittoImg = document.getElementById("letter-pitto");
const buttons = document.getElementById("letter-buttons");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "YAYYY! I love you! 😘";

    pittoImg.src = "smiling-pitbull.gif";

    buttons.style.display = "none";

});

// OO is clicked

ooBtn.addEventListener("click", () => {
    title.textContent = "YAYYY! Mahal kita! 😘";

    pittoImg.src = "smiling-pitbull.gif";

    buttons.style.display = "none";

});

// WEN is clicked

ooBtn.addEventListener("click", () => {
    title.textContent = "YAYYY! Ay-ayaten ka! 😘";

    pittoImg.src = "smiling-pitbull.gif";

    buttons.style.display = "none";

});

// IYO is clicked

ooBtn.addEventListener("click", () => {
    title.textContent = "YAYYY! Namumutan ta ka! 😘";

    pittoImg.src = "smiling-pitbull.gif";

    buttons.style.display = "none";

});
