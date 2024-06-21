import React, { useState } from 'react';

const PrimeVideo1 = () => {
    const [currentVideo, setCurrentVideo] = useState(null);

    const handleMouseEnter = (videoSrc) => {
        //const video = document.getElementById(videoSrc);
        //video.play();
        //setCurrentVideo(video);
    };

    const handleMouseLeave = () => {
        if (currentVideo !== null) {
            currentVideo.pause();
        }
    };


    const handleVideoClick = (videoId) => {
        if (currentVideo !== null) {
            currentVideo.pause();
        }
    const handlePlay = () => {
        if (currentVideo) {
            currentVideo.play()
                .then(() => setCurrentVideo(currentVideo))
                .catch(error => console.error('Failed to play video:', error));
        }
    };
};
    return (
        <>
            <div className="container fresh1">
                <h1 className='display-3 fs-1 mt-4'>Movies on Prime</h1>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-6">
                    <video id="video1" className="rounded-video" controls width="538" height="224" poster={require("../images/sitaramam.jpg")} onMouseEnter={() => handleMouseEnter("video1")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video1")}> 
                        <source src={require("../videos/sitaramam.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Sita Ramam</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video2" className="rounded-video" controls width="538" height="224" poster={require("../images/kgf2.jpg")} onMouseEnter={() => handleMouseEnter("video2")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video2")}>
                        <source src={require("../videos/kgf2.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">K.G.F CHAPTER 2</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video3" className="rounded-video" controls width="538" height="224" poster={require("../images/jathiratnalu.jpg")} onMouseEnter={() => handleMouseEnter("video3")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video3")}>
                        <source src={require("../videos/jathiratnalu.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Jathiratnalu</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="528" height="224" poster={require("../images/ninnukori.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/ninnukori.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Ninnu Kori</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="528" height="224" poster={require("../images/ntr1.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/ntr1.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">NTR Kathanayakudu</p>
                    </div>
        
                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="528" height="224" poster={require("../images/ntr2.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/ntr2.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">NTR Mahanayakudu</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video5" className="rounded-video" controls width="538" height="224" poster={require("../images/tiger.jpg")} onMouseEnter={() => handleMouseEnter("video5")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video5")}>
                        <source src={require("../videos/tiger.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Tiger Nageswara Rao</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video6" className="rounded-video" controls width="538" height="224" poster={require("../images/v.jpg")} onMouseEnter={() => handleMouseEnter("video6")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video6")}>
                        <source src={require("../videos/v.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">V (Telugu)</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video7" className="rounded-video" controls width="522" height="222" poster={require("../images/whistle.jpg")} onMouseEnter={() => handleMouseEnter("video7")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video7")}>
                        <source src={require("../videos/whistle.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Whistle</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video8" className="rounded-video" controls width="508" height="224" poster={require("../images/saindhav.jpg")} onMouseEnter={() => handleMouseEnter("video8")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video8")}>
                        <source src={require("../videos/saindhav.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Saindhav</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video9" className="rounded-video" controls width="524" height="218" poster={require("../images/vakeelsaab.jpg")} onMouseEnter={() => handleMouseEnter("video9")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video9")}>
                        <source src={require("../videos/vakeelsaab.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Vakeel Saab</p>
                    </div>
                        <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="538" height="224" poster={require("../images/pushpa.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/pushpa.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Pushpa: The Rise - Part 1</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="528" height="226" poster={require("../images/hgpk.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/hgpk.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Hello Guru Prema Kosame</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="574" height="226" poster={require("../images/maharshi.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/maharshi.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Maharshi</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="532" height="228" poster={require("../images/svsc.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/svsc.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Seetamma Vakitlo Sirimalle Chettu</p>
                    </div>

                    <div className="col-md-6">
                    <video id="video4" className="rounded-video" controls width="538" height="224" poster={require("../images/paagal.jpg")} onMouseEnter={() => handleMouseEnter("video4")} onMouseLeave={handleMouseLeave} onClick={() => handleVideoClick("video4")}>
                        <source src={require("../videos/paagal.mp4")} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                        <p className="movie-title">Paagal</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PrimeVideo1
