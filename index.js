const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

function showThanksContainer() {
  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
}

function updateRating() {
  actualRating.innerHTML = this.innerHTML;
}

function resetForm() {
  mainContainer.style.display = "block";
  thanksContainer.classList.add("hidden");
}

submitButton.addEventListener("click", showThanksContainer);

ratings.forEach((rating) => {
  rating.addEventListener("click", updateRating);
});

rateAgain.addEventListener("click", resetForm);
