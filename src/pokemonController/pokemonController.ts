import pokemonService from "./../pokemonService/pokemonService";
import { Request, Response } from "express";

class PokemonController{

    async getPokemons(req: Request, res: Response){
        try {
            let data = await pokemonService.organizeDados()
            await pokemonService.writePokemonJson(data)
            res.json(data)
        } catch (error) {
           console.log("Erro ao mostrar pokemon", error) 
           res.send(500)
        }   
    }

    async postPokemon(req: Request, res: Response){
        try {
            let data = await pokemonService.organizeDados()
        await pokemonService.writePokemonJson(data)
        const dados = await pokemonService.salvarNoBanco(data)

        res.status(200).json(dados)

        console.log("Dados salvos no banco de dados com sucesso")
        } catch (error) {
        console.log("erro ao salvar no banco de dados", error)    
        }
        
    }

    async filtroPokemonByTipo(req: Request, res: Response){
        const data = await pokemonService.filtroTipo(req.params.tipo)

        res.status(200).json(data)
    }

    async filtroPokemonByDex(req: Request, res: Response){
        const data = await pokemonService.filtroDex(req.params.dex)

        res.status(200).json(data)
    }

    async filtroPokemonByNome(req: Request, res: Response){
        const data = await pokemonService.filtroNome(req.params.nome)

        res.status(200).json(data)
    }

}

export default new PokemonController()