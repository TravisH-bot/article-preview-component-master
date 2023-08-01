const popup = document.querySelector(".share-popup");

function share() {
  if (popup.style.display === "none") {
    popup.style.display = "flex";
  } else {
    popup.style.display = "none";
  }
}
