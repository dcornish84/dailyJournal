import API from "./data.js"
import journalEntries from "./entriesDom.js"


API.getJournalEntries()
.then(data => {
    journalEntries(data)})