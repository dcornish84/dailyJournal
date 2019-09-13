// calling the database 

const API = {
        JournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },



    newJournalEntry(tacoEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tacoEntry)
        }).then(response => response.json())

}},

export default API