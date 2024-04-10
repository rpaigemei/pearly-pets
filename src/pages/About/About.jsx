import React from "react";
import './About.css';
import '../../pages/pages.css'
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portrait from '../../images/portrait.jpg';
import sophie1 from '../../images/sophie 1.jpg';
import sophie2 from '../../images/sophie 2.jpg';
import sophie3 from '../../images/sophie 3.jpg';
import sophie4 from '../../images/sophie 4.jpg';
import sophie5 from '../../images/sophie 5.jpg';
import sophie6 from '../../images/sophie 6.jpg';

function About() {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div>
            <div className="nav">
                <NavBar />
            </div> 

            <div className="body">
                <div className="title">
                    <h1>
                        About Pearly Pets
                    </h1>
                </div>
                <div className="aboutMe">
                    <h1>
                        Hello there!
                    </h1>
                    <div className="aboutMeInfo">
                        <div className="paragraph">
                            <p>
                                My name is Paige Reeves and I am a junior at the University of Florida. I am majoring in Computer Science with minors in Mass Communications and Digital Arts & Science.
                            </p>
                            <p>
                                I love crocheting, baking, and dancing. I joined Floridance, a student-led dance organization at UF, my sophomore year and I am honored to be the current Historian. This position gives me an outlet for my passion for photography, along with dancing.
                            </p>
                            <p>
                                I am a member of Women in Computer Science and Engineering (WiCSE), and I was given the opportunity to participate in their Shadowing Program this semester. With the guidance of my professional mentor, Haritha Mellacheruvu, I have been tasked with working on a semester-long individual technical project. Thus, I have been developing Pearly Pets - a web application that hosts a database of available senior pets.
                            </p>
                            <p>
                                Continue reading below to learn more about Pearly Pets!
                            </p>
                        </div>
                        <img src={portrait} alt="me!" className="portrait"/>
                    </div>
                </div>
                <div className="developing">
                    <h1>
                        Developing Pearly Pets
                    </h1>
                    <h2>
                        To develop Pearly Pets, I have used the following technologies:
                    </h2>
                    <div className="technologies">
                        <p>
                            Figma
                        </p>
                        <p>
                            React.js
                        </p>
                        <p>
                            Javascript, HTML/CSS
                        </p>
                        <p>
                            Petfinder API
                        </p>
                    </div>
                    <div className="developingInfo">
                        <p>
                            After brainstorming ideas and deciding on my project, I used Figma to create low-fidelity wireframes. I chose to use React.JS, utilizing Javascript/HTML in Visual Studio Code, to develop this website application. I have used a few APIs to support the backend of the project. The Petfinder API provides the pet database that the whole website is built around. Other smaller APIs I have used are the Firebase API to handle logins and emailJS API to support the contact form. Netlify hosts the site and is configured to deploy from GitHub. 
                        </p>
                    </div>
                </div>
                <div className="inspiration">
                    <h1>
                        Inspiration for Pearly Pets
                    </h1>
                    <h2>
                        My inspiration for this project came from my dog, Sophie Mei.
                    </h2>
                    <div className="inspirationInfo">
                        <div className="carousel">
                            <Slider {...settings}>
                                <div className="slide">
                                    <img src={sophie1} alt="sophie slide 1" className="sophie"/>
                                </div>
                                <div>
                                    <img src={sophie2} alt="sophie slide 2" className="sophie"/>
                                </div>
                                <div>
                                    <img src={sophie3} alt="sophie slide 3" className="sophie"/>
                                </div>
                                <div>
                                    <img src={sophie4} alt="sophie slide 4" className="sophie"/>
                                </div>
                                <div>
                                    <img src={sophie5} alt="sophie slide 5" className="sophie"/>
                                </div>
                                <div>
                                    <img src={sophie6} alt="sophie slide 6" className="sophie"/>
                                </div>
                            </Slider>
                        </div>                        
                        <div className="inspirationParagraph">
                            <p>
                                Sophie was truly my everything. She made it all the way to her sweet sixteen, adorned with pearls. She loved three things: us, food, and her stroller. The only thing she ever hated was baby gates, but she won that battle when we got rid of them and gave her full run of the house. There just aren't enough words to say how much I loved her, even with her crust and stubborness.
                            </p>
                            <p>
                                Unfortunately, Sophie developed quite a few health issues as she got older. We began monitoring a heart murmur, and she was eventually diagnosed with congestive heart failure. We were able to manage her condition for a while with medications, but it soon became too much for her. In June of 2023, she let us know that it was her time.
                            </p>
                            <p>
                                It is no secret that caring for senior pets can have its challenges. I took care of Sophie more as she got older and it was a lot of work to manage all her health issues. It can be difficult to find senior pets their forever home because they can be  to take care of and they may have less years left. I wanted to create a site that highlights these pets that deserve to find a home for the rest of their lives. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer">
                <Footer /> 
            </div>
        </div>
    )
}

export default About;