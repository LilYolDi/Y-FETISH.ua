function uploadVideo() {

    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();

    const videoFile = document.getElementById("videoFile").files[0];
    const imageFile = document.getElementById("imageFile").files[0];

    if (!title || !description) {
        alert("Заполните название и описание.");
        return;
    }

    if (!videoFile) {
        alert("Выберите видео.");
        return;
    }

    if (!imageFile) {
        alert("Выберите превью.");
        return;
    }

    const videoReader = new FileReader();
    const imageReader = new FileReader();

    videoReader.onload = function () {

        const videoData = videoReader.result;

        imageReader.onload = function () {

            const imageData = imageReader.result;

            let videos = JSON.parse(localStorage.getItem("videos")) || [];

            videos.unshift({

                id: Date.now(),

                title: title,

                description: description,

                file: videoData,

                image: imageData,

                views: 0,

                likes: 0,

                dislikes: 0,

                date: new Date().toLocaleDateString()

            });

            localStorage.setItem("videos", JSON.stringify(videos));

            alert("Видео опубликовано!");

            location.href = "index.html";

        };

        imageReader.readAsDataURL(imageFile);

    };

    videoReader.readAsDataURL(videoFile);

}