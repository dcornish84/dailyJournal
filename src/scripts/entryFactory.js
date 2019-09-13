// function to create a journal entry

const entryFactoryWorker = (date, concept, entry, mood) => {
    const freshEntry = {
        journalDate: date,
        conceptsCovered: concept,
        journalEntry: entry,
        moodForTheDay: mood
    }
    return freshEntry
}

export default entryFactoryWorker