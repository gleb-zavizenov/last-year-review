import Person from './modules/DataObject.js';

//This s an IIFE - Immediately Invoked Function Expression
//this is the JavaScript Module patern
(() => {
    console.log("Fired!");

    console.log(Person);
    console.log(Person.name);
})();