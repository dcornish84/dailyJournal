// represents what my entry will look like in HTML

const createThing = (entry) => {
    return `
    <div>
    <p>${entry.date}</p>
    <p>${entry.concepts}</p>
    <p>${entry.entry} </p>
    <p>${entry.mood}</p>
    <button type="button" id="deleteEntry--${entry.id}">Delete Entry</button>
    <button type="button" id="editEntry--${entry.id}">Edit Entry</button>
    </div>
            `
}


export default createThing