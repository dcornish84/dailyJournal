
import makeJournalEntryComponent from "./entryComponent.js"

// putting entries on the DOM

const addjournalEntriesToDom = (entries) =>{
    let entryLog = document.querySelector(".entryLog");
    for (let i = 0; i < entries.length; i++){
        entryLog.innerHTML += makeJournalEntryComponent(entries[i]);
    }
}


export default addjournalEntriesToDom












