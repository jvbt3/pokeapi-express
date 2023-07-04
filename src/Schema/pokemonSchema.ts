//schema para salvar dados dos pokemons no banco de dados

import {Schema , model} from "mongoose"


const PokemonSchema = new Schema ({
    Nome: {
        type: String
    },
    Tipo: {
        type: Array
    },
    Status: {
        type: Number
    },
    NumeroDex:{
        type: Number
    },
    Altura: {
        type: Number
    },
    Peso: {
        type: Number
    },
    moves: {
        type: Array
    }
}, {timestamps: true})

export default model('Pokemon', PokemonSchema)