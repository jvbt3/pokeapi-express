import app from "./app";

async function server() {
    try {
        app.listen(8080, "localhost", () => {
            console.log("Servidor na porta 8080")
        })
    } catch (error) {
        console.log("Erro ao subir servidor", error)
    }
}

server()