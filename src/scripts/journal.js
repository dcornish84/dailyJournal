import API from "./data.js";
import journalEntries from "./entriesDom.js";



API.fetchJournalEntries().then((allEntries) => {
    allEntries.forEach(entries =>   {
    journalEntries(entries)})
})


document.querySelector(".recordEntryButton").addEventListener("click", () => {

    const date = document.querySelector(".journalDate").value
    const concepts = document.querySelector(".conceptsCovered").value
    const entry = document.querySelector(".journalEntry").value
    const mood = document.querySelector(".moodForTheDay").value

    const newJournalEntry = createNewEntry(date, concepts, entry, mood)
        console.log("new journal entry", newJournalEntry)

API.createEntry(newJournalEntry).then(() => {

    API.fetchJournalEntries().then((allEntries) => {
        allEntries.forEach(entries => {

            journalEntries(entries)})

        })

    })

})



