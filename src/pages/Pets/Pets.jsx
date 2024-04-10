import React, { useState } from "react";

import './Pets.css';
import '../../pages/pages.css';

import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Database from "../../components/Database/Database";
import Footer from "../../components/Footer/Footer";

function Pets() {
    const [filterText, setFilterText] = useState('');

    function filterUpdate(value) {
        setFilterText(value.target.value);
    }

    return (
       <div>
            <div>
                <NavBar />
            </div>

            <div className="body">
                <h1 className="h1">
                    Pets
                </h1> 
                <div className="grid">
                    <div className="filter">
                        <Filter />
                    </div>
                    <div className="search">
                        <Search
                            filterUpdate={filterUpdate}
                            filterText={filterText}
                        />
                    </div>
                    <div className="data">
                        <Database />
                    </div>
                </div>   
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div> 
    ) 
}

export default Pets;