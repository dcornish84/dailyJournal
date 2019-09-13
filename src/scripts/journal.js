import API from "./data.js";
import journalEntries from "./entriesDom.js";
import entryFactoryWorker from "./entryFactory.js";


API.fetchJournalEntries().then((allEntries) => {
    allEntries.forEach(entries =>   {
    journalEntries(entries)})
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
API.newEntry(newEntryObject).then(() => {

    // get all the entries again
    API.fetchJournalEntries().then((allEntries) => {
        allEntries.forEach(entries => {
            // sends entry to the dom
            journalEntries(entries)})

        })

    })

})



