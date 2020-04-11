/* globals */
// ========================
// Variables
// ========================
const btnPopup = document.querySelector(".btn__popup");
const btnClose = document.querySelector(".btn__close");
const overlayWindow = document.querySelector(".popup__overlay");
const waveHand = document.querySelector(".wave-hand");
const inputFocus = document.querySelector("input");

// ========================
// Functions
// ========================

/**
 * Opens the Popup Window
 */
function openPopup() {
  overlayWindow.classList.add("open__popup");
  waveHand.classList.add("play");
  inputFocus.focus();
}

/**
 * Closes the Popup Window
 */
function closePopup() {
  overlayWindow.classList.remove("open__popup");
  waveHand.classList.remove("play");
}

// ========================
// Events
// ========================

/**
 * Runs function to open the Popup
 */
btnPopup.addEventListener("click", () => {
  openPopup();
});

/**
 * Runs function to close the Popup
 */
btnClose.addEventListener("click", () => {
  closePopup();
});
