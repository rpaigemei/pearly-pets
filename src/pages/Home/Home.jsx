import React from "react";
import './Home.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";

const Home = () => (
    <div>
        <NavBar />
        <div className="body">
            <h1 className="h1">
                Home
            </h1>
            <div className="normal">
                This is the home page. It will feature navigation to all other pages.
            </div>
        </div>
    </div>
)

export default Home;