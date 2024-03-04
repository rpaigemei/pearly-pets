import React from "react";
import './Pets.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";

const Pets = () => (
    <div>
        <NavBar />
        <div className="body">
            <h1 className="h1">
                Pets
            </h1>
            <div className="normal">
                This is the pet database page. It will feature a gridded database of all of the senior pets available, with filters and a search bar.
            </div>    
        </div>
    </div>
)

export default Pets;