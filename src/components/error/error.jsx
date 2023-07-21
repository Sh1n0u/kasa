import React from "react"
import './error.scss'
import error from '../../assets/error.png'

function Error() {
    return (
        <div className="error">
            <h2>404</h2>
            <p>Oups, la page que vous avez demandez n'existe pas !</p>
        </div>
    )
}

export default Error