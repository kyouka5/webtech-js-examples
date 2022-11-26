let latestComicIndex;

async function getComicByIndex(index = "latest") {
  $(".randomize-button").hide();
  $(".loading-button").show();
  const comic = await $.getJSON(`https://xkcd.now.sh/?comic=${index}`).done(
    () => {
      $(".randomize-button").show();
      $(".loading-button").hide();
    }
  );
  return comic;
}

async function getRandomComic() {
  if (!latestComicIndex) {
    latestComicIndex = (await getComicByIndex()).num;
  }
  const randomNumber = _.random(0, latestComicIndex);
  const randomComic = await getComicByIndex(randomNumber);
  return randomComic;
}

async function randomizeComic() {
  const randomComic = await getRandomComic();
  $("img").attr("src", randomComic.img);
}

$(window).ready(randomizeComic);
$("button").click(randomizeComic);
