import React from "react";
import PortfolioCard from "../../components/PortfolioCard";

function Portfolio() {
    return (
        <main id="page-content">

            <div className="container">
                <div className="aboutMe page-center">
                    <div className="w-80 mx-auto">
                        
                        <div className="row">
                            
                            <div className="col-1"></div>
                            
                            <div className="col-10">
                            
                                <div className="row">
                                    <div className="col-12"><h4>Portolio</h4><hr></hr></div>
                                </div>
                            
                                <div className="row">
                                    <div className='col-sm-1'></div>
                                    <div className='col-sm-10'>                                            
                                        <PortfolioCard></PortfolioCard>
                                    </div>
                                    <div className='col-sm-1'></div>
                                </div>

                            </div>

                            <div className="col-1"></div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Portfolio;
