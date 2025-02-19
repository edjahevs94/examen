import CancionesItem from "./CancionesItem"

export interface CancionItem {
    id: number,
    titulo: string,
    artista: string,
    genero: string
}

export interface CancionesListItem {
    canciones: CancionItem[]
}

const CancionesList = (props: CancionesListItem) => {
    return (
        <div className="container mt-4">
            <div className="row">
                
                {
                    props.canciones.map((cancion: CancionItem) => {
                        return (
                            <CancionesItem 
                                key={cancion.id} 
                                id={cancion.id} 
                                artista={cancion.artista} 
                                genero={cancion.genero} 
                                titulo={cancion.titulo}
                            />
                        )
                    })
                }
                
            </div>
            

        </div>
    )
}
export default CancionesList