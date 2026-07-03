const videos = [

{
    title: "Добро пожаловать в Y-FETISH",
    file: "videos/demo.mp4",
    image: "images/thumb1.jpg",
    description: "Демонстрационное видео главной страницы.",
    views: 1523,
    likes: 352
},

{
    title: "Путешествие по горам",
    file: "videos/mountains.mp4",
    image: "images/thumb2.jpg",
    description: "Красивые виды гор и природы.",
    views: 846,
    likes: 97
},

{
    title: "Город ночью",
    file: "videos/city.mp4",
    image: "images/thumb3.jpg",
    description: "Видео ночного города.",
    views: 2411,
    likes: 284
},

{
    title: "Море и пляж",
    file: "videos/beach.mp4",
    image: "images/thumb4.jpg",
    description: "Отдых на берегу моря.",
    views: 1105,
    likes: 156
},

{
    title: "Закат",
    file: "videos/sunset.mp4",
    image: "images/thumb5.jpg",
    description: "Красивый закат в высоком качестве.",
    views: 3904,
    likes: 632
}

];

// Автоматическое заполнение карточек на главной странице
const cards = document.querySelector("aside");

if (cards) {

    cards.innerHTML = "<h2>Следующие видео</h2>";

    videos.forEach((video, index) => {

        cards.innerHTML += `
            <div class="card" onclick="location.href='video.html?id=${index}'">

                <img src="${video.image}" alt="${video.title}">

                <h3>${video.title}</h3>

                <p>👁 ${video.views.toLocaleString()} просмотров</p>

            </div>
        `;

    });

}