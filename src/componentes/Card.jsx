import React from "react";

const Card =(props)=>{

    return (
        <div>
            <p>soy Card</p>
         ---------------------------------------------------------------------
            <div className="botonPa">
                <button /* onClick={onClose} */>chau</button>
            </div>
         ---------------------------------------------------------------------
            <div className="NombreCiudad">
                <h2>{props.name}</h2>
                <p> Temperatura Maxima: {props.max}</p>
                <p>Temperatura minima: {props.min}</p>
            </div>

         ---------------------------------------------------------------------
            <div>
                <p>Inserte imagen: {props.imagen}</p>
            </div>

        </div>
    )
}

export default Card