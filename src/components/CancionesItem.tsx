import { CancionItem } from "./CancionesList"

const CancionesItem = (props : CancionItem) => {
    return (
        <div className="col-4 border p-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.titulo}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.genero}</h6>
                    <p className="card-text">{props.artista}</p>
                </div>
            </div>
        </div>

    )
}

export default CancionesItem