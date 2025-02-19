import { Link } from "react-router-dom"

import Footer from "../components/Footer"
import CancionesList, { CancionItem } from "../components/CancionesList"
import { useEffect, useState } from "react"


const CancionesPage = () => {

    const [listadoCanciones, setListadoCanciones] = useState<CancionItem[]>([])

    const obtenerCancionesHandler = async () => {
        const url = "https://examenapp01.azurewebsites.net/canciones"
        const resp = await fetch(url)
        const data = await resp.json()
        if (data.msg = "Exito") {
            console.log(data.canciones)
            setListadoCanciones(data.canciones)
        } else {
            console.log("Error obteniendo data: ", data.msg)
        }
    }
    useEffect(()=> {
        obtenerCancionesHandler()
    },[])
    
    
    return (
        <div className="container">
            <h1>Canciones</h1>
            <div className="mt-2">
                <Link to="/add" className="btn btn-primary">Nueva Cancion</Link>
                <CancionesList canciones= {listadoCanciones}/>
                <Footer />
            </div>
        </div>
    )
}

export default CancionesPage