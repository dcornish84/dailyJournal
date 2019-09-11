import API from "./data.js"
import journalEntries from "./entriesDom.js"


API.fetchJournalEntries()
.then(data => {
    journalEntries(data)})