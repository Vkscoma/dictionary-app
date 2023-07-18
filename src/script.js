// Gloabal Variables
const searchBtn = document.getElementById("search-btn");

//Dictionary API Fetch
function getDefinition(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            // Definition console.log(data[0].meanings[0].definitions[0].definition);
            // console.log(data);
            // Update DOM with the Word
            const keyWord = document.getElementById("main--word");
            keyWord.innerText = data[0].word.slice(0, 1).toUpperCase() + data[0].word.slice(1);
            // Update DOM with the Definition
            const definitionElement = document.querySelector("#definition--list");
            console.log(data[0].meanings[0].definitions);
            const definitionArray = data[0].meanings[0].definitions;
            if (definitionArray.length > 1) {
                for (let i = 0; i < definitionArray.length; i++) {
                    const definitionLI = document.createElement("li");
                    definitionLI.innerText = definitionArray[i].definition;
                    definitionElement.appendChild(definitionLI);
                }
            } else {
                const definitionLI = document.createElement("li");
                definitionLI.innerText = definitionArray[0].definition;
                definitionElement.appendChild(definitionLI);
            }
        });

}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const word = document.getElementById("default-search");
    getDefinition(word.value);
    word.value = "";
});
