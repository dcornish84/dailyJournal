import createEntry from "./entryComponent.js"


const journalEntries = {
    addToJournal(dataArray) {
        dataArray.forEach(element => {
            let entryHTML = createEntry.makeJournalEntryComponent(element)
            entriesDom.createPhrase.innerHTML += entryHTML
        })

    }

}

const entriesDom = {
    createPhrase: document.querySelector(".entrylog"),

}

export default journalEntries