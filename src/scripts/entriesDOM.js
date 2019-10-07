
import createThing from "./entryComponent.js"

// putting entries on the DOM

const addjournalEntriesToDom = {

    createdEntry(data) {
        console.log(data)
        data.forEach(cat => {
            let actualEntry = document.querySelector(".entryLog");
            let createEntry = createThing(cat)
            actualEntry.innerHTML += createEntry
        });
    },
    journalFilter: (entries, mood) => {
        let entryLog = document.querySelector(".entryLog");
        entryLog.innerHTML = "";
        entries.forEach(entry => {
            if (entry.mood() === mood()) {
                entryLog.innerHTML += createEntry(entry)
            }
        });
    }


}

export default addjournalEntriesToDom;


