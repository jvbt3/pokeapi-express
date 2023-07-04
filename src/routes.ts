import Router from "express"
import pokemonController from "./pokemonController/pokemonController"


const routes = Router()

routes.get("/pokemons", pokemonController.getPokemons)
routes.get("/pokemons/:nome", pokemonController.filtroPokemonByNome)
routes.get("/pokemons/tipo/:tipo", pokemonController.filtroPokemonByTipo)
routes.get("/pokemons/NumeroDex/:dex", pokemonController.filtroPokemonByDex)

routes.post("/pokemonsJson", pokemonController.postPokemon)

export default routes