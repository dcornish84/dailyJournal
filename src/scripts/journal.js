import API from "./data.js";
import addjournalEntriesToDom from "./entriesDom.js";
import entryFactoryWorker from "./entryFactory.js";

API.journalEntries().then(allEntries => {
  addjournalEntriesToDom.createdEntry(allEntries);
});

// Event listener for the Record Entry button
document.querySelector(".recordEntryButton").addEventListener("click", () => {
  // values of the inputs
  const date = document.querySelector("#journalDates").value;
  const concepts = document.querySelector("#conceptsCoveredInput").value;
  const entry = document.querySelector("#journalEntryInput").value;
  const mood = document.querySelector("#moodInput").value;
  // building a journal entry
  const newEntryObject = entryFactoryWorker(date, concepts, entry, mood);
  console.log("new journal entry", newEntryObject);

  // input validation
  if (date === "" || concepts === "" || entry === "" || mood === "") {
    alert("Please fill out all forms");
  }
  if (
    concepts.includes("@", "#", "$", "%") ||
    entry.includes("@", "#", "$", "%")
  ) {
    alert("This character is invalid");
  }
  // save entry to json
  API.saveJournalEntry(newEntryObject).then(() => {
    // get all the entries again
    API.journalEntries().then(newEntryObject => {
      addjournalEntriesToDom.createdEntry(newEntryObject);
    });
  });
});

// filtering moods
const moods = document.getElementsByName("mood");

moods.forEach(radioButton => {
  radioButton.addEventListener("click", event => {
    const moodFeeling = event.target.value;
    API.journalEntries()
      .then(data => {
        addjournalEntriesToDom.journalFilter(data, moodFeeling)
      })
  })
});

// delete button for journal entry
document.querySelector(".entryLog").addEventListener("click", event => {
  if (event.target.id.startsWith("deleteEntry--")) {
    API.deleteEntries(event.target.id.split("--")[1])
      .then(() => {
        document.querySelector(".entryLog").innerHTML = "";
        API.addjournalEntriesToDom().then(data => {
          addjournalEntriesToDom.createdEntry(data)
        })

      })
  } else if (event.target.id.startsWith("editJournalEntry")) {
    editForm(event.target.id.split("--")[1])
  }
})

// edit form for changing a journal entry

const editForm = (entryId) => {
  let hiddenId = document.querySelector("#entryId")
  let editDate = document.querySelector("#editEntryDate")
  let editConcepts = document.querySelector("#editConceptsCovered")
  let editJournalEntry = document.querySelector("#editJournalEntry")
  let editMood = document.querySelector("#editMood")

  API.getSingleEntry(entryId)
    .then(response => {
      hiddenId.value = entryId
      editDate.value = response.date
      editConcepts.value = response.concepts
      editJournalEntry.value = response.entry
      editMood.value = response.mood
    })
}

// event listener for the edit button

document.querySelector("#editButton").addEventListener("click", (event) => {

  API.editEntries(document.querySelector("#entryId").value)
    .then((response => {
      document.querySelector("#editEntryDate").value = "";
      document.querySelector("#editConceptsCovered").value = "";
      document.querySelector("#editJournalEntry").value = "";
      document.querySelector("#editMood").value = "";
      document.querySelector(".entryLog").innerHTML = "";
      API.journalEntries().then(data => {
        addjournalEntriesToDom.createdEntry(data)
      })

    }))
})