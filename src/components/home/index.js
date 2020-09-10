import React from 'react';
import './styles.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container-home">
            <div className="intro">
                <h2> <b>PIETRA</b> RODRIGUES | DESENVOLVEDORA <b>FRONT-END</b></h2>
                <Link to="/about"><button>MAIS SOBRE MIM</button></Link>
            </div>
        </div>
    )
}

export default Home;