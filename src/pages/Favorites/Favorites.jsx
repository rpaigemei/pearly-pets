import React from "react";

import './Favorites.css';
import '../../pages/pages.css'

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Favorites() {
    return (
        <div>
            <div>
                <NavBar />
            </div> 

            <div className="body">
                
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div>
    )
}

export default Favorites;