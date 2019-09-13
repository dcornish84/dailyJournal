// calling the database 

const API = {
        journalEntries: () => {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    },



    newJournalEntry: (tacoEntry) => {
        return fetch("http://localhost:3000/journalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tacoEntry)
        }).then(response => response.json())

}}

export default API