import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={props.image} alt={props.title} />
                <div className="card-body d-flex flex-column">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <div className="buttons mt-auto d-flex justify-content-evenly">
                        <a href={props.delpoyed_url} className="btn btn-primary">Deployed Project</a>
                        <a href={props.github_url} className="btn btn-secondary">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;