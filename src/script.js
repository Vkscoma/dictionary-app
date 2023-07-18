// Gloabal Variables
const searchBtn = document.getElementById("search-btn");

//Dictionary API
function getDefinition(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            handleWord(data);
            renderDefinition(data);
            renderSynonyms(data);
            renderPartOfSpeech(data);
            renderExample(data);
        });
}

function handleWord(data) {
    const keyWord = document.getElementById("main--word");
    keyWord.innerText = capitalizeFirstLetter(data[0].word);
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function renderDefinition(data) {
    const definitionElement = document.querySelector("#definition--list");
    const definitionArray = data[0].meanings[0].definitions;

    if (definitionArray.length > 1) {
        for (let i = 0; i < definitionArray.length; i++) {
            const definitionLI = createListItem(definitionArray[i].definition, "my-2");
            definitionElement.appendChild(definitionLI);
        }
    } else {
        const definitionLI = createListItem("No definition found");
        definitionElement.appendChild(definitionLI);
    }
}

function renderSynonyms(data) {
    const synonymElement = document.querySelector("#synonyms--element");
    const synonymArray = data[0].meanings[0].synonyms;

    if (synonymArray.length > 1) {
        for (let i = 0; i < synonymArray.length; i++) {
            const synonymLI = createListItem(synonymArray[i], "my-2", "text-purple-400");
            synonymElement.appendChild(synonymLI);
        }
    } else {
        const synonymLI = createListItem("No synonyms found");
        synonymElement.appendChild(synonymLI);
    }
}

function renderPartOfSpeech(data) {
    const typeElement = document.querySelector("#verb--element");
    typeElement.innerText = data[0].meanings[0].partOfSpeech;
    typeElement.classList.add("italic");
}

function renderExample(data) {
    const exampleElement = document.querySelector("#example--list");
    const exampleSample = data[0].meanings[1]?.definitions[0]?.example;

    if (exampleSample) {
        const exampleLI = createListItem(exampleSample);
        exampleElement.appendChild(exampleLI);
    }
}

function createListItem(text, ...classNames) {
    const listItem = document.createElement("li");
    listItem.innerText = text;

    for (const className of classNames) {
        listItem.classList.add(className);
    }

    return listItem;
}


searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const word = document.getElementById("default-search");
    const definitionElement = document.querySelector("#definition--list");
    const synonymElement = document.querySelector("#synonyms--element");
    const wordDescriptions = document.querySelectorAll(".word--description");
    getDefinition(word.value);
    wordDescriptions.forEach((description) => {
        description.classList.remove("hidden");
    });
    word.value = "";
    definitionElement.innerText = "";
    synonymElement.innerText = "";
});
