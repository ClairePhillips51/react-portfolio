import React from "react";
import "./style.css";

function Project(props) {
    const cardStyle = {
        "background-color": "#dce0f3"
    };
    const primStyle = {
        "background-color": "#5ab9ea",
        "border": "none",
        "color": "black"
    };
    const secStyle = {
        "background-color": "#84ceeb",
        "border": "none",
        "color": "#505050"
    };

    return (
        <div className="col">
            <div className="card h-100" style={cardStyle}>
                <img src={props.image} alt={props.title} />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <div className="buttons mt-auto d-flex justify-content-evenly">
                        <a href={props.deployed_url} className="btn btn-primary" style={primStyle}>Deployed Project</a>
                        <a href={props.github_url} className="btn btn-secondary" style={secStyle}>GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;