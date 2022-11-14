async function getComicByIndex(index = "latest") {
    const response = await fetch(`https://xkcd.now.sh/?comic=${index}`);
    const comic = await response.json();
    return comic;
}

async function getRandomComic() {
    const latestComic = await getComicByIndex();
    const randomNumber = _.random(0, latestComic.num);
    const randomComic = await getComicByIndex(randomNumber);
    return randomComic;
}

async function randomizeComic() {
    const image = document.querySelector("img");
    const randomComic = await getRandomComic();
    image.src = randomComic.img;
}

window.addEventListener("load", randomizeComic);

const randomizeButton = document.querySelector("button");
randomizeButton.addEventListener("click", randomizeComic);
