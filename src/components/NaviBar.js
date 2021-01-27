import React from "react";

import {Link} from "react-router-dom";




export default function NaviBar() {

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className="navbar-brand" href="#">QuizzBiu</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <a><Link className="nav-link" to="/Home">Główna strona <span className="sr-only">(current)</span></Link></a>
                    </li>
                   
                    <li className="nav-item">
                        <a className="nav-link">Kontakt</a>
                    </li>
                    <li className="nav-item">
                        <a><Link className="nav-link" to="/About">O projekcie</Link></a>
                    </li>

                </ul>
              
            </div>
        </nav>
    )
}