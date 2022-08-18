import { characters } from "./charachters.js";

const navList = document.querySelector(".nav-list");
const characterSection = document.querySelector(".character");
const characterImg = document.createElement("img");
characterImg.setAttribute("class", "character-img");
const characterName = document.createElement("h2");
characterName.setAttribute("class", "character-name");
const characterDescription = document.createElement("p");
characterDescription.setAttribute("class", "character-description");


export function createCharacter(event){
    characterSection.appendChild(characterImg);
    characterSection.appendChild(characterName);
    characterSection.appendChild(characterDescription);
    let navItem = event.target;
    let characterId = navItem.getAttribute("id");
    if(parseInt(characterId) === characters[characterId].id){
        setActiveCharacter(event);
        characterImg.setAttribute("src", characters[characterId].image);
        characterImg.setAttribute("alt", `${characters[characterId].name} Image`);
        characterName.innerHTML = characters[characterId].name;
        characterDescription.innerHTML = characters[characterId].description;
    }; 
}

function setActiveCharacter(event){
    const activeCharacter = event.target;
    if(document.querySelector(".nav-item .selected") !== null){
        document.querySelector(".nav-item .selected").classList.remove("selected");
        activeCharacter.classList.add("selected");
    };
}

