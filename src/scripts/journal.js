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
    const date = document.querySelector(".journalDate").value
    const concepts = document.querySelector(".conceptsCovered").value
    const entry = document.querySelector(".journalEntry").value
    const mood = document.querySelector(".moodForTheDay").value
    
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



