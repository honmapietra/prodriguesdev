import React from 'react';
import './styles.css'
import Image from './image/pyetra.jpg';


const Contacts = () => {
    return (
        <div className="container-contacts">
            <div className="contacts">
                <img src={Image} alt="" />
                <p>ABLUE LUB</p>
            </div>

        </div>
    )
}

export default Contacts;