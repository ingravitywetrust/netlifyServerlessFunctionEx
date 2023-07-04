exports.handler = async function (event, context) {
    const eventBody = JSON.parse(event.body)
    const poke_api = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region
    console.log(event)

    const response = await fetch(poke_api)
    const data = await response.json()
    return {
        statusCode: 200,
        body: 
            JSON.stringify({
            pokemon: data.pokemon_entries})
    }
}
