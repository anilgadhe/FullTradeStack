import React from 'react'

function Ticket() {
    return (
        <div className="container " style={{ marginTop: "120px" }}>
            <h3 className="text-muted m-5">To create a ticket, select a relevant topic</h3>


            <div className="row">
                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-plus-circle"></span> Account Opening</h5>

                    <a className="text-decoration-none"><p>Resident individual</p> </a>
                    <a className="text-decoration-none"><p> Minor</p></a>
                    <a className="text-decoration-none"><p> Non Resident Indian (NRI)</p></a>
                    <a className="text-decoration-none"><p> Company, Partnership, HUF and LLP</p></a>
                    <a className="text-decoration-none"><p> Glossary</p></a>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-person"></span>Your Zerodha Account</h5>

                    <p><a className="text-decoration-none">Your Profile </a></p>
                    <p><a className="text-decoration-none"> Account modification</a></p>
                    <p><a className="text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a></p>
                    <p><a className="text-decoration-none"> Nomination</a></p>
                    <p><a className="text-decoration-none">Transfer and conversion of securities</a></p>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-bar-chart-fill"></span> Kite</h5>

                    <a className="text-decoration-none"><p>IPO</p> </a>
                    <a className="text-decoration-none"><p>Trading FAQs</p></a>
                    <a className="text-decoration-none"><p>Margin Trading Facility (MTF) and Margins</p></a>
                    <a className="text-decoration-none"><p>Charts and orders</p></a>
                    <a className="text-decoration-none"><p>Alerts and Nudges</p></a>
                    <a className="text-decoration-none"><p>General</p></a>
                </div>
            </div>

            <div className="row mt-5 mb-5">
                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-archive"></span>  Funds</h5>

                    <a className="text-decoration-none"><p>Resident individual</p> </a>
                    <a className="text-decoration-none"><p> Minor</p></a>
                    <a className="text-decoration-none"><p> Non Resident Indian (NRI)</p></a>
                    <a className="text-decoration-none"><p> Company, Partnership, HUF and LLP</p></a>
                    <a className="text-decoration-none"><p> Glossary</p></a>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-dash-circle-fill"></span>Console</h5>

                    <p><a className="text-decoration-none"> Portfolio</a></p>
                    <p><a className="text-decoration-none">Corporate actions</a></p>
                    <p><a className="text-decoration-none">Funds statement</a></p>
                    <p><a className="text-decoration-none">Reports</a></p>
                    <p><a className="text-decoration-none">Profile</a></p>
                    <p><a className="text-decoration-none">Segments </a></p>
                </div>

                <div className="col-12 col-md-12 col-lg-4">
                    <h5 className="mb-3"><span className="bi bi-coin"></span> Coin</h5>

                    <a className="text-decoration-none"><p>Mutual funds</p> </a>
                    <a className="text-decoration-none"><p>National Pension Scheme (NPS)</p></a>
                    <a className="text-decoration-none"><p>Features on Coin</p></a>
                    <a className="text-decoration-none"><p>Payments and Orders</p></a>
                    <a className="text-decoration-none"><p>General</p></a>

                </div>
            </div>
        </div>
    );
}

export default Ticket;