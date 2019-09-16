import API from "./data.js";
import addjournalEntriesToDom from "./entriesDom.js";
import entryFactoryWorker from "./entryFactory.js";


API.journalEntries().then((allEntries) => {
    allEntries.forEach(entries =>   {
        addjournalEntriesToDom(entries)})
})

// Event listener for the Record Entry button
document.querySelector(".recordEntryButton").addEventListener("click", () => {
    
    // values of the inputs
    const date = document.querySelector("#journalDates").value
    const concepts = document.querySelector("#conceptsCoveredInput").value
    const entry = document.querySelector("#journalEntryInput").value
    const mood = document.querySelector("#moodInput").value
    
    // building a journal entry
    const newEntryObject = entryFactoryWorker(date, concepts, entry, mood)
        console.log("new journal entry", newEntryObject)
    
    // save entry to json
API.newJournalEntry(newEntryObject).then(() => {

    // get all the entries again
    API.journalEntries().then((allEntries) => {
        allEntries.forEach(entries =>   {
            // sends entry to the dom
            addjournalEntriesToDom(entries)})

        })

    })

})



