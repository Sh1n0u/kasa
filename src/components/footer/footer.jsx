import React from "react";
import './footer.scss'
import blacklogo from '../../assets/blacklogo.png'

function Footer() {
    return (
        <footer className="footer">
            <div >
                <img src={blacklogo} alt="Logo Kasa" />
            </div>
            <p className="text">&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer