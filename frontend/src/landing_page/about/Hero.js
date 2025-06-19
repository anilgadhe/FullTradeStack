import React from 'react'

function Hero() {
    return (
        <div className="container">
            <div className=" p-2 text-center mb-5" style={{ marginTop: "120px" }} >

                <h2>We pioneered the discount broking model in India.<br></br>
                    Now, we are breaking ground with our technology.</h2>




            </div>
              <hr/>
            <div className="row g-2  p-2 mt-5  mb-5 " style={{fontSize:"1.1em"}}>
                <div className="col-12 col-md-12 col-lg-6">
                    <p> We kick-started operations on the 15th of August, 2010 <br></br> with the goal of breaking all barriers that traders and <br></br> investors face in India in terms of cost, support, and <br></br> technology. We named the company Zerodha, a combination of Zero and <br></br> "Rodha", the Sanskrit word for barrier.</p>

                    <p> Today, our disruptive pricing models and in-house <br></br> technology have made us the biggest stock broker in <br></br> India.</p>

                    <p> Over 1.6+ crore clients place billions of orders every year <br></br> through our powerful ecosystem of investment <br></br> platforms, contributing over 15% of all Indian retail<br></br> trading volumes.</p>
                </div>

                <div className="col-12 col-md-12 col-lg-6">
                    <p>  In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p> <a href="#" className="text-decoration-none">Rainmatter </a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>  And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                </div>
            </div>

            <div className="container mt-5">
                <h2 className="text-center">People</h2>
                <div className="row   mt-5 mb-5">
                    <div className="col-12 col-md-12 col-lg-6 text-center">
                        <img src="media/images/nithinKamath.jpg" style={{ borderRadius: "100%" }}  height="300" />
                        <h3 className="mt-4 text-muted">Nithin Kamath</h3>
                        <p>Founder, CEO</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6  " style={{fontSize:"1.2em"}}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome <br></br> the hurdles he faced during his decade long stint as a trader. Today,<br></br> Zerodha has changed the landscape of the Indian broking industry.</p>

                        <p>He is a member of the SEBI Secondary Market Advisory Committee <br></br> (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                        <p>Playing basketball is his zen.</p>

                        <p >Connect on <a href="#" className="text-decoration-none"> Homepage</a>/<a href="#" className="text-decoration-none">TradingQnA</a> /<a href="#" className="text-decoration-none">Twitter</a>  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero