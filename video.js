const video = document.getElementById("video");
const source = video.querySelector("source");

const cards = document.querySelectorAll(".card");

// Переключение видео
cards.forEach(card => {
    card.addEventListener("click", () => {

        const newSource = card.querySelector("source").getAttribute("src");

        source.src = newSource;

        video.load();
        video.play();

        document.querySelector(".info h1").textContent =
            card.querySelector("h3").textContent;

        document.querySelector(".description p").textContent =
            "Сейчас воспроизводится: " +
            card.querySelector("h3").textContent;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

// Кнопки управления
document.getElementById("play").onclick = () => video.play();

document.getElementById("pause").onclick = () => video.pause();

document.getElementById("mute").onclick = () => {
    video.muted = !video.muted;
};

document.getElementById("fullscreen").onclick = () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
};

// Лайки
let likes = Number(localStorage.getItem("likes")) || 352;
const likesSpan = document.getElementById("likes");
likesSpan.textContent = likes;

document.getElementById("like").onclick = () => {
    likes++;
    likesSpan.textContent = likes;
    localStorage.setItem("likes", likes);
};

// Дизлайки
let dislikes = Number(localStorage.getItem("dislikes")) || 18;
const dislikesSpan = document.getElementById("dislikes");
dislikesSpan.textContent = dislikes;

document.getElementById("dislike").onclick = () => {
    dislikes++;
    dislikesSpan.textContent = dislikes;
    localStorage.setItem("dislikes", dislikes);
};

// Просмотры
let views = Number(localStorage.getItem("views")) || 1523;
views++;
document.getElementById("views").textContent = "👁 " + views;
localStorage.setItem("views", views);

// Поиск
const search = document.querySelector(".search input");

search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(value) ? "block" : "none";

    });

});