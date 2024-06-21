import React from 'react'
import fresh1 from "../images/fresh1.jpg"
import fresh2 from "../images/fresh2.jpg"
import fresh3 from "../images/fresh3.jpg"
import fresh4 from "../images/fresh4.jpg"
import fresh5 from "../images/fresh5.jpg"
import fresh6 from "../images/fresh6.jpg"
import fresh7 from "../images/fresh7.jpg"
import fresh8 from "../images/fresh8.jpg"
import fresh9 from "../images/fresh9.jpg"
import fresh10 from "../images/fresh10.jpg"

const Fresh1 = () => {
    return (
        <>
            <div className="container fresh1">
                <h1 className='display-3 fs-1 mt-4'>Amazon Fresh Categories</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img calssName='ms-4' src={fresh1} alt="one" width={350}/>
                    </div>
                    <div className="col-md-4 ">
                        <img className='ms-4' src={fresh2} alt="two" width={350}/>
                    </div>
                    <div className="col-md-4">
                        <img className='ms-5' src={fresh3} alt="three" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <img className='ms-4' src={fresh4} alt="four" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-4' src={fresh5} alt="five" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={fresh6} alt="six" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={fresh7} alt="seven" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={fresh8} alt="eight" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={fresh9} alt="nine" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={fresh10} alt="ten" width={350}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Fresh1