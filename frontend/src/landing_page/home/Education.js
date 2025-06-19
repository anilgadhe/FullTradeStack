import React from 'react'

function Education() {
    return ( 
      <div className="container " style={{margin:"100px 0px 100px 0px"}}>
        <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
            <img src="media/images/education.svg" alt="education_svg"  height="280"/>
        </div>

        <div className="col-12 col-md-12 col-lg-6 " >
           <h2>Free and open market education</h2>
           <p className="mb-2 mt-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
           <a href="#" className="mb-5">Varsity <span className="bi bi-arrow-right"></span></a>
           <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
           <a href="#">TradingQ&A <span className="bi bi-arrow-right"></span></a>
        </div>        
        </div>
      </div>
     );
}

export default Education;