
import makeJournalEntryComponent from "./entryComponent.js"


const journalEntries = (entries) =>{
    let entryLog = document.querySelector(".entryLog");
    for (let i = 0; i < entries.length; i++){
        entryLog.innerHTML += makeJournalEntryComponent(entries[i]);
    }
}


export default journalEntries


// const journalEntries = {
//     addToJournal(dataArray) {
//         dataArray.forEach(element => {
//             let entryHTML = createEntry.makeJournalEntryComponent(element)
//             entriesDom.createPhrase.innerHTML += entryHTML
//         })

//     }

// }

// const entriesDom = {
//     createPhrase: document.querySelector(".entrylog"),

// }






