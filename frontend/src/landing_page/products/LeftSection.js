import React from 'react'

function LeftSection({ ImgURL, Title, Description, Try, Learn, GoogleStore, playStore }) {
    return (
        <div className="container  " >
            <div  style={{marginTop:"20px"}}>
                <div className="row  g-4 mt-5 mb-5">
                    <div className="col-12 col-md-12 col-lg-6 text-center p-3">
                        <img src={ImgURL} alt="left_Img" />

                    </div>
                    <div className="col-12 col-md-12 col-lg-6 " style={{ fontSize: "1.2em" ,marginTop:"90px" }}>
                        <h2>{Title}</h2>
                        <p className="fs-5 text-muted ">{Description}</p>
                        <div className="mb-4" >
                            <a href=""  className="me-5 text-decoration-none">{Try} <span className="bi bi-arrow-right"></span></a>
                            <a href="" className="text-decoration-none">{Learn}<span className="bi bi-arrow-right"></span></a>

                        </div>
                        <div>
                            <a href="" className="me-5 "><img src={GoogleStore} alt="Googel_svg"/></a>
                            <a href=""><img src={playStore} alt="playstore_svg"/></a>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LeftSection;