import React from 'react'

function RightSection({ImgURL ,Description,Title ,Learn }) {
    return (
        <div className="container  " >
            <div style={{ marginTop: "20px" }}>
                <div className="row  g-4 mt-5 mb-5">
                    <div className="col-12 col-md-12 col-lg-6 "  style={{ fontSize: "1.2em", marginTop: "90px" }}>

                        <h2>{Title}</h2>
                        <p className="fs-5 text-muted ">{Description}</p>

                        <a href="" className="text-decoration-none">{Learn} <span className="bi bi-arrow-right"></span></a>

                    </div>
                    <div className="col-12 col-md-12 col-lg-6 text-center p-3">
                        <img src={ImgURL} alt="left_Img" />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default RightSection;