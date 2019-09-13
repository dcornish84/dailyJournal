// function to create a journal entry

const entryFactoryWorker = (date, concept, entry, mood) => {
    const freshEntry = {
        Date: date,
        Concepts: concept,
        Entry: entry,
        Mood: mood
    }
    return freshEntry
}

export default entryFactoryWorker