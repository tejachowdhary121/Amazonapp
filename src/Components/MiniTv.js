import React from 'react'
import minione from "../images/miniOne.jpg"
import minitwo from "../images/miniTwo.jpg"
import minithree from "../images/miniThree.jpg"
import minifour from "../images/miniFour.jpg"
import minifive from "../images/miniFive.jpg"
import minisix from "../images/miniSix.jpg"
import miniseven from "../images/miniSeven.jpg"
import minieight from "../images/miniEight.jpg"
import mininine from "../images/miniNine.jpg"
import miniten from "../images/miniTen.jpg"

const MiniTv = () => {
    return (
        <>
            <div className="container mini-tv">
                <h1 className='display-3 fs-1 mt-4'>Trending Top 10 on Mini TV</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-4">
                        <img calssName='ms-4' src={minione} alt="one" width={350}/>
                    </div>
                    <div className="col-md-4 ">
                        <img className='ms-4' src={minitwo} alt="two" width={350}/>
                    </div>
                    <div className="col-md-4">
                        <img className='ms-5' src={minithree} alt="three" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5 ">
                        <img className='ms-4' src={minifour} alt="four" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-4' src={minifive} alt="five" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={minisix} alt="six" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={miniseven} alt="seven" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={minieight} alt="eight" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={mininine} alt="nine" width={350}/>
                    </div>
                    <div className="col-md-4 mt-5">
                        <img className='ms-5' src={miniten} alt="ten" width={350}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniTv