"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var PokemonSchema = new mongoose_1.Schema({
    Nome: {
        type: String
    },
    Tipo: {
        type: Array
    },
    Status: {
        type: Number
    },
    NumeroDex: {
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Pokemon', PokemonSchema);
//# sourceMappingURL=pokemonSchema.js.map