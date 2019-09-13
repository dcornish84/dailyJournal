// represents what my entry will look like in HTML

const makeJournalEntryComponent = (entry) =>{
    return `
    <article>
    <section>${entry.date}</section>
    <section>${entry.concepts}</section>
    <section>${entry.entry} </section>
    <section>${entry.mood}</section>
<article>
`
}


export default makeJournalEntryComponent



