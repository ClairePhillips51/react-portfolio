import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="col-12 col-lg-6">
            <div className="card">
                <img src={props.image} alt={props.title} />
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <div>
                    <a href={props.delpoyed_url} className="btn btn-primary">Deployed Project</a>
                    <a href={props.github_url} className="btn btn-secondary">GitHub Repository</a>
                </div>
            </div>
        </div>
    );
}

export default Project;