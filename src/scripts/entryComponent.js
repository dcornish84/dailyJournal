// represents what my entry will look like in HTML

const createThing = (entry) => {
    return `
    <div>
    <p>${entry.date}</p>
    <p>${entry.concepts}</p>
    <p>${entry.entry} </p>
    <p>${entry.mood}</p>
    </div>
            `
}


export default createThing