import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log("error", error);
    return (
        <>
            <h1>Error</h1>
            <h3>{error.statusText}</h3>
            <Link to="/"><button>Home</button></Link>
        </>
    )
}

export default Error