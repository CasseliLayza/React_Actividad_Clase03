import React from 'react'

function Persona(props) {
    return (
        <>
        <div className='contenedo-dtos'>
            <h1>{props.children} {props.nombre}</h1>
            <h2>{props.pais}</h2>
            <h2>{props.edad}</h2>
        </div>
            <img src={props.avatar} alt="" />

        </>
    )
}

export default Persona