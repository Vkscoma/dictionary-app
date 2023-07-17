// Gloabal Variables
const searchBtn = document.getElementById("search-btn");

//Dictionary API Fetch
function getDefinition(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const word = document.getElementById("default-search");
    getDefinition(word.value);
    word.value = "";
});
