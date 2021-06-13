import React from "react";
import Project from "../components/Project";
import "./projects.css";

function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="container">
                <div className="row">
                    <Project
                        title="Space-e"
                        image="./images/spacee.png"
                        deployed_url="https://space-e.herokuapp.com/"
                        github_url="https://github.com/bborumoore/space-e"
                        text="Spacee is the place to find all the latest space news, space launches and events, where over the world the iss station is. 
                        The user can also view NASA's photo of the day. The user can also save specific events or the entire calendar to their own personal calendar. 
                        Sign-up or login to see the magic!"
                    />
                    <Project
                        title="Fitness Tracker" 
                        image="./images/graphs.png" 
                        deployed_url="https://infinite-citadel-09071.herokuapp.com/?id=60a958f300df780015c89196" 
                        github_url="https://github.com/ClairePhillips51/fitness-tracker" 
                        text="Creating the back-end portion of a fitness tracker application by using a Mongo database 
                        with a Mongoose schema and handle routes with Express."
                    />
                </div>
                <div className="row">
                    <Project 
                        title="Employee Directory" 
                        image="./images/employee-directory.png" 
                        deployed_url="https://clairephillips51.github.io/employee-directory/" 
                        github_url="https://github.com/ClairePhillips51/employee-directory" 
                        text="Using React to create an employee directory so that an employeer can easily view all their employees 
                        at once and have quick access to their non-sensitve information."
                    />
                    <Project 
                        title="Budget Tracker" 
                        image="./images/budget-tracker.png" 
                        deployed_url="https://fast-beyond-42631.herokuapp.com/" 
                        github_url="https://github.com/ClairePhillips51/budget-tracker" 
                        text="Adding offline functionality to the exisitng Budget tracker to transform it into a progressive web application."
                    />
                </div>
                <div className="row">
                    <Project 
                        title="Team Profile Generator" 
                        image="./images/team-generator.png" 
                        deployed_url="https://drive.google.com/file/d/1HAFPCAg5VGkYCV6_47GeTcE4k6KYDusZ/view" 
                        github_url="https://github.com/ClairePhillips51/team-profile-generator" 
                        text="Using node.js in the command line to generate a working html document contaning team profiles. 
                        Using jest to test the class applications from the command line. "
                    />
                    <Project 
                        title="Weather Dashboard" 
                        image="./images/wx-dash.png" 
                        deployed_url="https://clairephillips51.github.io/weather-dashboard/" 
                        github_url="https://github.com/ClairePhillips51/weather-dashboard" 
                        text="A weather dashboard that displays current weather conditions and a five-day forecast for a given city. 
                        Any typed in city is saved to a list that when clikced that cities weather can be viewed."
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;