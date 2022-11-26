const API_KEY = "ADD_YOUR_API_KEY_HERE";

function search() {
    const searchField = $("#searchTerm");
    return findByName(searchField.val());
}

async function findByName(name) {
    const response = await $.getJSON(`https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${name}`);
    const titles = response.title_results;
    return fillSearchResultsList(titles);
}

function fillSearchResultsList(titles) {
    const searchResults = $("#searchResults");
    searchResults.empty();
    appendTitleNames(titles, searchResults);
}

function appendTitleNames(titles, element) {
    titles.forEach(title => appendAsListItem(title, element));
}

function appendAsListItem(title, element) {
    const listItem = createListItem(title);
    element.append(listItem);
}

function createListItem(title) {
    const listItem = document.createElement("a");
    $(listItem).addClass("list-group-item list-group-item-action");
    $(listItem).text(title.name);
    $(listItem).attr("href", `https://www.imdb.com/title/${title.imdb_id}`);
    return listItem;
}

$("#searchButton").click(search);