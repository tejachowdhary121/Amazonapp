import React from 'react'
import electronics1 from "../images/electronics1.png"
import electronics2 from "../images/electronics2.png"
import electronics3 from "../images/electronics3.png"
import electronics4 from "../images/electronics4.png"
import electronics5 from "../images/electronics5.png"
import electronics6 from "../images/electronics6.png"
import electronics7 from "../images/electronics7.jpg"
import electronics8 from "../images/electronics8.jpg"
import electronics9 from "../images/electronics9.jpg"
import electronics10 from "../images/electronics10.jpg"
import electronics11 from "../images/electronics11.jpg"

const Electronics1 = () => {
    return (
        <>
            <div className="container electronics1">
                <h1 className='display-3 fs-1 mt-4'>Electronics Categories</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img calssName='ms-4' src={electronics1} alt="one" width={300}/>
                    </div>
                    <div className="col-md-4 ">
                        <img className='ms-4' src={electronics2} alt="two" width={300}/>
                    </div>
                    <div className="col-md-4">
                        <img className='ms-5' src={electronics3} alt="three" width={300}/>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <img className='ms-4' src={electronics4} alt="four" width={300}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-4' src={electronics5} alt="five" width={300}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics6} alt="six" width={300}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics7} alt="seven" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics8} alt="eight" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics9} alt="nine" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics10} alt="ten" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={electronics11} alt="eleven" width={350}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Electronics1