import React from 'react'

function Pricing() {
    return ( 
       <div className='container mt-5 mb-5' > 
          <div className='row' style={{margin:"100px 0px 100px 0px"}}>
            <div className='col-12 col-md-12 col-lg-6'>
               <h2>Unbeatable pricing</h2>
               <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            </div>

            <div className='col-12 col-md-12 col-lg-6'>
                <div className="row">
                    <div className='col-12 col-sm-12 col-lg-4 d-flex'>
                        <img src='media/images/pricing0.svg' witdh='100' height='100'/>
                         <p style={{fontSize:"10px",marginTop:"40px"}}> Free account opening</p>
                    </div>

                     <div className='col-12 col-sm-12 col-lg-4 d-flex'>
                        <img src='media/images/pricing0.svg' witdh='100' height='100'/>
                        <p style={{fontSize:"10px",marginTop:"40px"}} > Free equity delivery and direct mutual funds</p>
                    </div>

                    <div className='col-12 col-sm-12 col-lg-4 d-flex'>
                        <img src='media/images/other-trades.svg' witdh='100' height='100'/>
                        <p style={{fontSize:"10px",marginTop:"40px" }}>Intraday and F&O</p>
                    </div>


                </div>
            </div>
          </div>
       </div>
     );
}

export default Pricing;