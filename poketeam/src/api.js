export const searchPokemom = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error: ', error)
    }
}
export const getPokemom = async (limit = 50, offset = 25) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error: ', error)
    }
}