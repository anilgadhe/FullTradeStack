import React from 'react'


function Hero() {
    return ( 
        <div className='container ' style={{marginBottom:"200px",marginTop:"100px"}}>
         <div className='row text-center d-flex  justify-content-center'>
    
               <img src="media/images/homeHero.png" alt="Hero_Img"  />

                <h1 className=' mt-5'>Invest in everything</h1>
                <p className=' fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                  <button className='btn btn-primary text-white fw-bold p-2 fs-6 mt-3 w-25 w-sm-50 w-md-25 w-lg-20'>
                        Sign up for free
                   </button>

                
        

         </div> 

        </div>
     );
}

export default Hero;