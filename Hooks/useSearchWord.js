export const getWord = async (request) => {
    
    const search = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${request}`)
    const word = search.json()

    if(word.title === "No Definitions Found") return false

    return word
    
}