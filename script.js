const foto = document.getElementById("foto");
const btn = document.getElementById("btnSurprise");
const popup = document.getElementById("popup");

foto.addEventListener("click", () => {
  alert("Kamu cantik banget, tahu nggak? 😍");
});

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
}
