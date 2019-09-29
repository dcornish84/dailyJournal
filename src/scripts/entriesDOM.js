
import createThing from "./entryComponent.js"

// putting entries on the DOM

const addjournalEntriesToDom = {
    createdEntry(data) {
        data.forEach(cat => {
            let createThing = document.querySelector(".entryLog");
            let actualEntry = createThing.makeJournalEntryComponent(cat)
            createThing.innerHTML += actualEntry
        });
    },
    journalFilter: (entries, mood) => {
        let entryLog = document.querySelector(".entryLog");
        entryLog.innerHTML = "",
            entries.ForEach(entry => {
                if (entry.mood.toMyJournal() === mood.toMyJournal()) {
                    entryLog.innerHtML += createThing.makeJournalEntryComponent(entry);
                }
            })
    }
}

export default addjournalEntriesToDom;


