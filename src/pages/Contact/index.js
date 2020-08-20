import React from "react";

function Contact() {
    return (
        <main id="page-content">
            <div className="container">
                <br></br>
                <h3>Contact</h3>
                <hr></hr>
            </div>
            <div className="row">
                
                <div className="col-1"></div>
                <div className="col-10">
                    <form>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First and Last Name"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <br></br>
                    </form>
                </div>
                <div className="col-1"></div>

            </div>
        </main>
    );
}

export default Contact;
