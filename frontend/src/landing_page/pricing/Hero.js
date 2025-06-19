import React from 'react'

function Hero() {
    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="text-center " style={{ marginBottom: "180px" }}>
                <h1>Charges</h1>
                <p className="text-muted fs-4  ">List of all charges and taxes</p>
            </div>

            <div className="row " style={{ marginBottom: "120px" }}>
                <div className="col-12 col-sm-12 col-lg-4 text-center">
                    <img src="media/images/pricing0.svg" alt="Zero" height="200"/>
                    <h3>Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-12 col-sm-12 col-lg-4 text-center">
                    <img src="media/images/other-trades.svg" alt="Twenty" height="200" />
                    <h3>Intraday and F&O trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>

                <div className="col-12 col-sm-12 col-lg-4 text-center">
                    <img src="media/images/pricing0.svg" alt="Zero" height="200" />
                    <h3>Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges..</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;