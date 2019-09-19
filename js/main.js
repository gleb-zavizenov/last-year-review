import Team from './modules/DataObject.js';

//This s an IIFE - Immediately Invoked Function Expression
//this is the JavaScript Module patern
(() => {
    let bioData = document.querySelector(".bio-wrapper").children;

    // populate the children with data object values
    // bioData[0].src = `images/${Person.image}`;
    // bioData[1].textContent = Person.name;
    // bioData[2].textContent = Person.role;
    // bioData[3].textContent = Person["bio"];

    function parsePersonData(){
        let chosenPerson = this.textContent;
        bioData[0].src = `images/${Team[chosenPerson]["avatar"]}`;
        bioData[1].textContent = Team[chosenPerson]["name"];
        bioData[2].textContent = Team[chosenPerson]["role"];
        bioData[3].textContent = Team[chosenPerson]["bio"];
    }

    //loop through and build some UI
    for(let person in Team){
        //create  button for aech team member
        let currentButton = document.createElement("button");
        currentButton.textContent = person;
        currentButton.addEventListener("click", parsePersonData);

        document.querySelector(".team").appendChild(currentButton);
        //bioData.nextElementSibling.appendChild(currentButton);
    }
})();


