import React from 'react'

import '../styles/Persona.css'

function Persona(props) {
    return (
        <>
            <h1>{props.children} {props.nombre}</h1>
            <h2>{props.pais}</h2>
            <h2>{props.edad}</h2>
            <img src={props.avatar} alt="" />

        </>
    )
}

export default Persona