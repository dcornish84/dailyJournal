// calling the database

const API = {
  journalEntries: () => {
    return fetch("http://localhost:3000/journalEntries").then(response =>
      response.json()
    );
  },

  saveJournalEntry: tacoEntry => {
    return fetch("http://localhost:3000/journalEntries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tacoEntry)
    }).then(response => response.json());
  },
  deleteEntries: (id) => {
    return fetch(`http://localhost:3000/journalEntries/${id}`, {
      method: "DELETE"
    }).then(response => response.json())
  },
  editEntries: (id) => {
    const updatedEntry = {
      date: document.querySelector("#editEntryDate").value,
      conceptsCovered: document.querySelector("#editConceptsCovered").value,
      journalEntry: document.querySelector("#editJournalEntry").value,
      mood: document.querySelector("#editMood").value
    };
    return fetch(`http://localhost:3000/journalEntries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEntry)
    }).then(response => response.json())
  },
  getSingleEntry: (id) => {
    return fetch(`http://localhost:3000/journalEntries/${id}`)
      .then(response => response.json())
  }
};
export default API;