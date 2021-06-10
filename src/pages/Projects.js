import React from "react";
import Project from "../components/Project";

function Projects() {
    return (
        <div>
            <h1>My Projects</h1>
            <div>
                <Project
                    title="Space-e"
                    image="./images/spacee.png"
                    deployed_url="https://space-e.herokuapp.com/"
                    github_url="https://github.com/bborumoore/space-e"
                    text="Description"
                />
                <Project title="" image="" deployed_url="" github_url="" text="Description"/>
                <Project title="" image="" deployed_url="" github_url="" text="Description"/>
                <Project title="" image="" deployed_url="" github_url="" text="Description"/>
                <Project title="" image="" deployed_url="" github_url="" text="Description"/>
                <Project title="" image="" deployed_url="" github_url="" text="Description"/>
            </div>
        </div>
    );
}

export default Projects;