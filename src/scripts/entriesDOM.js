
import makeJournalEntryComponent from "./entryComponent.js"


const journalEntries = (entries) =>{
    let entryLog = document.querySelector(".entryLog");
    for (let i = 0; i < entries.length; i++){
        entryLog.innerHTML += makeJournalEntryComponent(entries[i]);
    }
}


export default journalEntries









