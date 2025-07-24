const foto = document.getElementById("foto");
const btn = document.getElementById("btnSurprise");
const popup = document.getElementById("popup");

foto.addEventListener("click", () => {
  alert("Kamu cantik banget, tahu nggak? Gak mau kasih mam ego aku lagi nih??? 😍");
});

btn.addEventListener("click", () => {
  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
}
