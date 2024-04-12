import React, { useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";


import './Search.css'

function Search({ filterUpdate, filterText }) {
    // useRef() to allow input to be mutable for when it is being typed into the search bar
    const input = useRef();

    // Focuses the cursor on the search bar when the gallery page is opened
    useEffect(() => {
        input.current.focus();
    }, []);

    // Sets the filterText to the typed input
    function handleChange(event) {
        filterUpdate(event);
    }

    // Shows the input as it is typed in the search bar
    return (
        <form className="petSearch">
            <FaSearch className="petSearchIcon"/>
            <input
                ref={input}
                type="search"
                placeholder="Type name to search..."
                value={filterText}
                onChange={handleChange}
            />
        </form>
    );
}
export default Search;
