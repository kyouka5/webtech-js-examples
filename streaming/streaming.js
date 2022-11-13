const API_KEY = "ADD_YOUR_API_KEY_HERE";

async function search() {
    const searchField = document.getElementById("searchTerm");
    return await findByName(searchField.value);
}

async function findByName(name) {
    const response = await fetch(`https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${name}`);
    const responseBody = await response.json();
    const titles = responseBody.title_results;
    return fillSearchResultsList(titles);
}

function fillSearchResultsList(titles) {
    const searchResults = document.getElementById("searchResults");
    searchResults.replaceChildren();
    appendTitleNames(titles, searchResults);
}

function appendTitleNames(titles, element) {
    titles.forEach(title => appendAsListItem(title, element));
}

function appendAsListItem(title, element) {
    const listItem = document.createElement("li");
    appendLinkToListItem(title, listItem);
    element.append(listItem);
}

function appendLinkToListItem(title, listItem) {
    const link = document.createElement("a");
    link.textContent = title.name;
    link.setAttribute("href", `https://www.imdb.com/title/${title.imdb_id}`);
    listItem.append(link);
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", search);