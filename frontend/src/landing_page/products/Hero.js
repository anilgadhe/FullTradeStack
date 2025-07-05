import React from 'react'

function Hero() {
    return (
        <div className="container  " style={{ marginTop: "200px"}}>
        <div className="text-center" style={{ marginBottom: "120px" }}>
            <h1 className="fs-1">FulltradeStack Products</h1>
            <p className="fs-4 ">Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <a href="#" className="text-decoration-none">investment offerings →</a></p>
        </div>
        <hr/>
       </div>
    );
}

export default Hero;