import React, { useState } from "react";
import { FaCaretDown, FaDog, FaCat } from "react-icons/fa";

import './Pets.css';
import '../../pages/pages.css';

import NavBar from "../../components/NavBar/NavBar";
import Search from "../../components/Search/Search";
// import Filter from "../../components/Filter/Filter";
import Database from "../../components/Database/Database";
import Footer from "../../components/Footer/Footer";

function Pets() {
    const [filterText, setFilterText] = useState('');

    function filterUpdate(value) {
        setFilterText(value.target.value);
    }

    const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);

    function toggleTypeDropdown() {
        setTypeDropdownOpen(!typeDropdownOpen);
    }

    
    const [typeLabel, setTypeLabel] = useState();
    const[type, setType] = useState();

    function changeType(typeLabel, type) {
        setTypeLabel(typeLabel);
        setType(type);

        toggleTypeDropdown();
    }

    return (
       <div>
            <div>
                <NavBar />
            </div>

            <div className="body">
                <div className="title">
                    <h1>
                        Adoptable Pets
                    </h1>
                </div>
                <div className="content">
                    <div className="searchFilterContainer">
                        <div className="filter">
                            {type ? (
                                <p>
                                    {typeLabel}
                                </p>
                            ) : (
                                <p>
                                    Select Pet Type
                                </p>
                            )}
                            <FaCaretDown className="petTypeIcon" onClick={toggleTypeDropdown}/>
                            {typeDropdownOpen ? (
                                <ul className="typeDropdown">
                                    <li className="typeDropdownItem" onClick={() => changeType(<div><FaDog className="typeIcon" />Dogs</div>, "Dog")}>
                                        <FaDog className="typeDropdownIcon" />
                                        Dog
                                    </li>
                                    <li className="typeDropdownItem" onClick={() => changeType(<div><FaCat className="typeIcon" />Cats</div>, "Cat")}>
                                        <FaCat className="typeDropdownIcon" />
                                        Cat
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                        <div className="search">
                            <Search
                                filterUpdate={filterUpdate}
                                filterText={filterText}
                            />
                        </div>
                    </div>
                    <div className="data">
                        {type ? (
                            <Database type={type} filterText={filterText}/>
                        ) : (
                            <div className="databaseWarning">
                                Please select type from dropdown above to view adoptable pets!
                            </div>
                        )}
                        
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