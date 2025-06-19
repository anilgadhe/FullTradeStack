import React from 'react'

function Universe() {
    return (
        <div className="container">
            <div className=" text-center">
                <p className="fs-4 mb-5">Want to know more about our technology stack? Check out the <a href="#" className="text-decoration-none"> Zerodha.tech </a> blog.</p>

                <h1 className="mb-3">The Zerodha Univeese</h1>
                <p className="fs-5">Extend your trading and investment experience even further with our partner platforms</p>

            </div>
            <div className="row mt-5">
                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/zerodhaFund.png" alt="zerodha_img" height="50" />
                    <p className=" fs-6">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>

                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/sensibullLogo.svg" alt="zerodha_img" height="50" />
                    <p className=" fs-6">Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/tijori.svg" alt="zerodha_img" height="50" />
                    <p className="text-center fs-6">Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/streakLogo.png" alt="zerodha_img" height="50" />
                    <p className=" fs-6">
                        Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>

                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/smallcaseLogo.png" alt="zerodha_img" height="50" />
                    <p className=" fs-6">
                        Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>

                <div className="col-12  col-md-12 col-lg-4 text-center">
                    <img src="media/images/dittoLogo.png" alt="zerodha_img" height="50" />
                    <p className="text-center fs-6">
                        Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
            </div>

            <div className="d-flex justify-content-center mb-5"><button className="mt-5 btn btn-primary text-white  fw-bold p-2 fs-6 mt-3 w-25 w-sm-50 w-md-25 w-lg-20">Sign Up for free</button></div>
        </div>
    );
}

export default Universe;