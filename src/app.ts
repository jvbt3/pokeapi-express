import express from "express"
import routes from "./routes"
import mongoose from "mongoose"

class App{
    public express: express.Application

    public constructor(){
        this.express = express()

        this.middleWare()
        this.routes()
        this.database()
    }

    public middleWare(): void{
        this.express.use(express.json())
    }

    public routes(): void{
        this.express.use(routes)
    }

    private async database(){
        try {
           mongoose.set("strictQuery", true)
           await mongoose.connect("mongodb://0.0.0.0:27017/pokemons")
           console.log("Banco de dados conectado com sucesso")
        } catch (error) {
            console.log("Erro conectar ao banco de dados")
        }
    }
}

export default new App().express