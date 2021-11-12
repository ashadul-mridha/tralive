import React from 'react';
import img1 from '../../../images/imgg1.webp';
import img2 from '../../../images/imgg2.webp';
import img3 from '../../../images/imgg3.webp';
import img4 from '../../../images/imgg4.webp';

const ImgGellery = () => {
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-3 col-sm-6">
                    <img src={img1} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={img2} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={img3} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3 col-sm-6">
                    <img src={img4} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImgGellery;