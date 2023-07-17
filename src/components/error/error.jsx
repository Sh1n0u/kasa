import React from "react"
import './error.scss'
import error from '../../assets/error.png'

function Error() {
    return (
        <div className="error">
            <h2>404</h2>
            <p>Oups, tu a encore mis les doigts où il ne fallait pas !</p>
            <img src={error}/>
        </div>
    )
}

export default Error