import React from 'react'

function Stats() {
    return ( 
        <div className="container mb-5 " style={{marginBottom:"200px"}}>
            <div className="row ">
              <div className=" col-12 col-md-12 col-lg-6">
                <h1 className='mb-5'>Trust with confidence</h1>
                <h5>Customer-first always</h5>
                <p className='mb-5'>That's why 1.6+ crore customers trust FulltradeStack with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                <h5>No spam or gimmicks</h5>
                <p className='mb-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a></p>

                <h5>The FulltradeStack universe</h5>
                <p className='mb-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h5>Do better with money</h5>
                <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
              </div>
                 
                
              <div className="col-12 col-md-12 col-lg-6">
                <img src='media/images/ecosystem.png' alt='Ecosystem_Img' width='100%'/>
                <div className="d-flex justify-content-evenly">
                    <a href=''>Explore our products <span className='bi bi-arrow-right'></span></a>
                    <a href=''>Try Dashboard demo  <span className='bi bi-arrow-right'></span></a>

                </div>
              </div>              
            </div>

        </div>
     );
}

export default Stats;