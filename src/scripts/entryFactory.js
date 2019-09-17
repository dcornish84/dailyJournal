// function to create a journal entry

const entryFactoryWorker = (date, concept, entry, mood) => {
    const freshEntry = {
        date: date,
        concepts: concept,
        entry: entry,
        mood: mood
    }
    return freshEntry
}

export default entryFactoryWorker