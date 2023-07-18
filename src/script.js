// Gloabal Variables
const searchBtn = document.getElementById("search-btn");

//Dictionary API
function getDefinition(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0].meanings[0].partOfSpeech);
            // Update DOM with the Word
            const keyWord = document.getElementById("main--word");
            keyWord.innerText = data[0].word.slice(0, 1).toUpperCase() + data[0].word.slice(1);
            // Update DOM with the Definition
            const definitionElement = document.querySelector("#definition--list");
            // console.log(data[0].meanings[0].definitions);
            const definitionArray = data[0].meanings[0].definitions;
            if (definitionArray.length > 1) {
                for (let i = 0; i < definitionArray.length; i++) {
                    const definitionLI = document.createElement("li");
                    definitionLI.classList.add("my-2");
                    definitionLI.innerText = definitionArray[i].definition;
                    definitionElement.appendChild(definitionLI);
                }
            } else {
                const definitionLI = document.createElement("li");
                definitionLI.innerText = "No definition found";
                definitionElement.appendChild(definitionLI);
            }
            // Render Synonyms of the word
            const synonymElement = document.querySelector("#synonyms--element");
            const synonymArray = data[0].meanings[0].synonyms;
            if (synonymArray.length > 1) {
                for (let i = 0; i < synonymArray.length; i++) {
                    const synonmyLI = document.createElement("li");
                    synonmyLI.classList.add("my-2", "text-purple-400");
                    synonmyLI.innerText = synonymArray[i];
                    synonymElement.appendChild(synonmyLI);
                }
            } else {
                const synonmyLI = document.createElement("li");
                synonmyLI.innerText = "No Synonyms found";
                synonymElement.appendChild(synonmyLI);
            }
            // Render what type of word it is
            const typeElement = document.querySelector("#verb--element");
            typeElement.innerText = data[0].meanings[0].partOfSpeech;
            // Render Example of the word
            const exampleElement = document.querySelector("#example--list ");
            const exampleSample = data[0].meanings[1].definitions[0].example;
            if (exampleSample) {
                const exampleLI = document.createElement("li");
                exampleLI.innerText = exampleSample;
                exampleElement.appendChild(exampleLI);
            }
        });

}

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const word = document.getElementById("default-search");
    const definitionElement = document.querySelector("#definition--list");
    getDefinition(word.value);
    word.value = "";
    definitionElement.innerText = "";
});
