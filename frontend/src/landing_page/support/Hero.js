import React from 'react'

function Hero() {
    return (
        <div className="bg-primary " style={{ marginTop: "60px",minheight:"50vh" }}>
            <div className="container">
                    <div className="d-flex justify-content-between" style={{marginTop:"50px",marginBottom:"60px"}}>
                     <a href="" className="text-decoration-none text-white fs-3">Support Portal</a>
                    <a href="" className=" text-white text-end">Track tickets</a>
                    </div>
               

                <div className=" row " >
                    <div className="col-12  col-md-12 col-lg-8 mb-3">
                        <h5 className="text-white m-4 fs-4">Search for an answer or browse help topics to create a ticket</h5>
                        <div className="input-group mb-3">
                            <input style={{height:"55px"}} className="form-control rounded-0 " placeholder="Eg. how do i activate F&O why is my order gert rejected ..." size="60"  aria-describedby="basic-addon1"></input>
                            <span className=" rounded-0 bi bi-search ms-auto bg-white input-group-text" id="basic-addon1"></span>
                        </div>

                        <div className="row ">
                            <div className="col-12 col-md-12 col-lg-4">
                                <a href="" className="text-white fs-5">Track account opening</a>
                            </div>

                            <div className="col-12 col-md-12 col-lg-4">
                                <a href="" className="text-white fs-5"> Track segment activation</a>
                            </div>

                            <div className="col-12 col-md-12 col-lg-4">
                                <a href="" className="text-white fs-5"> Intraday margins</a>
                            </div>

                            <div className="col-12 col-md-12 col-lg-4">
                                <a href="" className="text-white fs-5"> Dashboard user manual</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <h4 className="text-white mb-3">Features</h4>
                        <ol>
                            <li className="text-white mb-3 fs-5" ><a href="" className="text-white">Surveillance measure on scrips - June 2025</a></li>
                            <li className="text-white fs-5"><a href="" className="text-white">Offer for sale (OFS) – June 2025</a></li>

                        </ol>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Hero;