import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const NuevaCancionPage = () => {

    const navigate = useNavigate()
    const [titutlo, setTitulo] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [artista, setArtista] = useState<string>("")


    const guardarCancionHandler = async () => {
        // Falta implementar
        //https://examenapp01.azurewebsites.net
        const url = "https://examenapp01.azurewebsites.net/canciones"
        const resp = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                titulo: titutlo,
                genero: genero,
                artista: artista
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json()
        if (data.msg == "Exito") {
            console.log("Exito al insertar cancion")
            navigate("/")
        }

    }

    const tituloHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setTitulo(e.target.value)
    }

    const generoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGenero(e.target.value)
    }

    const artistaHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArtista(e.target.value)
    }



    return (
        <div className="container">
            <h1>Nueva Cancion</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={titutlo} onChange={
                        tituloHandler
                    }/>
                </div>
                <div className="mb-3">
                    <label htmlFor="artista" className="form-label">Artista</label>
                    <input type="text" className="form-control" id="artista" value={artista} onChange={
                        artistaHandler
                    }/>
                </div>
                <div className="mb-3">
                    <label htmlFor="genero" className="form-label">Genero</label>
                    <input type="text" className="form-control" id="genero" value={genero} onChange={
                        generoHandler
                    }/>
                </div>
                <button type="button" className="btn btn-primary" onClick={
                    ()=> guardarCancionHandler()
                    }>Guardar</button>
            </form>
        </div>
    )

}

export default NuevaCancionPage