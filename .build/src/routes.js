"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var pokemonController_1 = __importDefault(require("./pokemonController/pokemonController"));
var routes = (0, express_1.default)();
routes.get("/pokemons", pokemonController_1.default.getPokemons);
routes.get("/pokemons/:nome", pokemonController_1.default.filtroPokemonByNome);
routes.get("/pokemons/tipo/:tipo", pokemonController_1.default.filtroPokemonByTipo);
routes.get("/pokemons/NumeroDex/:dex", pokemonController_1.default.filtroPokemonByDex);
routes.post("/pokemonsJson", pokemonController_1.default.postPokemon);
exports.default = routes;
//# sourceMappingURL=routes.js.map