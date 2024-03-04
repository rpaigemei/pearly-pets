import React from "react";
import './Resources.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";

const Resources = () => (
    <div>
        <NavBar />
        <div className="body">
            <h1 className="h1">
                Resources
            </h1> 
            <div className="normal">
                This is the resources page. It will feature articles about taking care of your senior pet and, hopefully, a forum for users to discuss various things.
            </div>    
        </div>
    </div>
)

export default Resources;