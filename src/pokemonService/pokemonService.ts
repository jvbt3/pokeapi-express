import { json } from 'express'
import {readFile, writeFile} from 'fs/promises'
import pokemonSchema from './../Schema/pokemonSchema'

class PokemonService{

    async fetchPokemons() {
        const response = await fetch("http://localhost:3000/pokemons-data")
        const dados = await response.json()

        return dados
    }

    async organizeDados(){
        const dadosPokemons = await this.fetchPokemons()
        let data = await dadosPokemons.map(pokemon => {
            return {
                Nome: pokemon.name,
                Tipo: pokemon.types.map(type => type.type.name),
                Satus: pokemon.stats[0].base_stat,
                NumeroDex: pokemon.game_indices[0].game_index,
                Altura: pokemon.height,
                Peso: pokemon.weight,
                moves: pokemon.moves.slice(0, 4).map(moves => moves.move.name)
            }
        })
        return data.slice(0, 10)
    }

    async writePokemonJson(data){
        try {
            await writeFile('pokemons.json', JSON.stringify(data, null, 4))
            console.log("Arquivo escrito com sucesso.")
        } catch (error) {
            console.log("Erro ao escrever arquivo.")
        }
    }

    async readPokemonJson(){
        const readPokemon = await readFile('pokemons.json', 'utf-8')
        return JSON.parse(readPokemon)
    }

    async salvarNoBanco(data){
        const dados = await pokemonSchema.insertMany(data)
        return dados
    }

    async filtroTipo(tipo){
        let data: any = await this.readPokemonJson()

        return data.filter((item) => item.Tipo == tipo)
    }

    async filtroDex(dex){
        let data = await this.readPokemonJson()

        return data.filter((item) => item.NumeroDex == dex)
    }

    async filtroNome(nome){
        let data: any = await this.readPokemonJson()

        return data.filter((item) => item.Nome == nome)
    }
}

export default new PokemonService()