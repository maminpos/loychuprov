



document.addEventListener("mousemove", e => {
  Object.assign(document.documentElement, {
    style:`
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}deg;
    --move-y: ${(e.clientY - window.innerHeight / 2) * -0.01}deg;
    `
  })
})

function openPage() {
  location.href = "./для_диплома/страница2.html";
}

// Функция для открытия всплывающего окна
function openPopup() {
  document.getElementById("popup").classList.add("active");
}

// Функция для закрытия всплывающего окна
function closePopup() {
  document.getElementById("popup").classList.remove("active");
}

function openPopup2() {
  document.getElementById("popup2").classList.add("active");
}

// Функция для закрытия всплывающего окна
function closePopup2() {
  document.getElementById("popup2").classList.remove("active");
}
