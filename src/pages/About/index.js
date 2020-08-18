import React from "react";

function About() {
    return (
        <main className="container">
            <div className="aboutMe page-center">
                <div className="w-80 mx-auto">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row">
                                <div className="col-12"><h4>About Me</h4><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10"></div>
                                <div className="img"><img src="/images/Tanner Headshot.jpg" class=" img-fluid float-left imgmax" alt="Tanner Head Shot"></img>
                                    <p>Tim is an experienced information technology professional with over 30 years of service at some of the world’s top companies including Target, American Express, Hallmark and Polaris.   In addition, in over half of his career he worked as a consultant at firms like Accenture and Deloitte where he advised Fortune 500 organizations on how to utilize and deliver technology. </p>
                                    <p>The combination of consulting and corporate roles has provided both depth and breadth of experience and has fueled much of his success in recent times.</p>
                                    <p>Tim combines advanced leadership and disciplined execution to get business goals accomplished.  He builds great teams by maximizing the skills of those he leads and thoughtfully allocates tasks and responsibilities based upon an understanding for team member readiness.  The result is delivery of mission-critical business results.</p>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <div className="row">
                                <div className="col-12"><h4>Other Information</h4><hr></hr></div>
                            </div>
                            <div className="row">
                                <div className="col-1"></div>
                                <div className="col-10"></div>
                                <ul className="portfolioList">
                                    <li><p>Email Address: timtanner@tanner-companies.com</p></li>
                                    <li><p>Phone Number: 763-559-4379</p></li>
                                    <li><div className="otherInforLinks"><a href="https://www.linkedin.com/in/timtanner/">LinkedIn Link</a></div></li>
                                    <li><div className="otherInforLinks"><a href="https://github.com/ttanner44">Github Profile Link</a></div></li>
                                    <li><div className="otherInforLinks"><a href="images/Tanner Resume.pdf">Resume Link</a></div></li>
                                </ul>
                                <div className="col-1"></div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;
