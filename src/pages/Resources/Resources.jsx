import React from "react";

import './Resources.css';
import '../../pages/pages.css'

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ArticleCard from "../../components/ArticleCard/ArticleCard"

import ArticleData from "./ArticleData";

function Resources() {
    const articleList = ArticleData.map((article) => {
        return (
            <ArticleCard
                name={article.name}
                description={article.description}
                image={article.image}
                link={article.link}
            />
        )
    })

    return (
        <div>
            <div>
                <NavBar />
            </div> 

            <div className="body">
                <div className="title">
                    <h1>
                        Resources
                    </h1>
                </div>
                <div className="introduction">
                    <p>
                        Welcome to the resources page! It is no secret that caring for senior pets can have its challenges, but they deserve to be loved for the rest of their lives. Continue below to find articles that can help you care for your new senior pet!
                    </p>
                    <p className="instructions">
                        Hover to read a short preview of the article. Click 'Read More' to be redirected to the article page, located on Petfinder. All articles presented on this page were sourced from Petfinder.
                    </p>
                </div>
                <div className="articles">
                    {articleList}
                </div>
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div>
    )
}

export default Resources;