import React from "react";
import portfolioList from "../../data/portfolioList.json"

function PortfolioCard() {

    return (
        
        <div className="d-flex justify-content-around flex-wrap">
            {portfolioList.map((project, id) => (
                <div className="p-2 portfolioCard">
                    <ul className="portfolioList">
                        <li><h5>{project.name}</h5></li>
                        <li>
                            <div className="imgSize">
                                <img src={project.image} alt="Application"></img>
                            </div>
                        </li>
                        <li><a href={project.appLink}>Application Link</a></li>
                        <li><a href={project.repoLink}>Github Repository Link</a></li>
                    </ul>
                </div>
            ))}
        </div>

    );
}

export default PortfolioCard;
