import API from "./data.js";
import addjournalEntriesToDom from "./entriesDom.js";
import entryFactoryWorker from "./entryFactory.js";

API.journalEntries().then(allEntries => {
  allEntries.forEach(entries => {
    addjournalEntriesToDom(entries);
  });
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
      someEntry.addjournalEntriesToDom(newEntryObject);
    });
  });
});

const moods = document.getElementsByName("mood");

moods.forEach(radioButton => {
  radioButton.addEventListener("click", event => {
    const moodFeeling = event.target.value;
    API.journalEntries()
      .then(data => {
        journalEntries.filter(data, moodFeeling)
      })
  })
});