
import makeJournalEntryComponent from "./entryComponent.js"

// putting entries on the DOM

const doctorDom = {

    addjournalEntriesToDom: (entries) => {
        document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent(entries)
    },

    filterMood: (entries, mood) => {
        let entryLog = document.querySelector(".entryLog");
        entryLog.innerHTML = "";
        entries.forEach(entry => {
            if (entry.mood === mood) {
                entryLog.innerHTML += addjournalEntriesToDom(entry);
            }
        });


}







}

// const addjournalEntriesToDom = (entries) =>{
//     let entryLog = document.querySelector(".entryLog");
//     for (let i = 0; i < entries.length; i++){
//         entryLog.innerHTML += makeJournalEntryComponent(entries[i]);
//     }
// }


export default doctorDom;



