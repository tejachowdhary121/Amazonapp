import React from 'react'
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <>
     <footer className="bg-dark text-white pt-5 pb-5 footer-custom mt-5 " id="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img src={logo} alt="Logo" width="120" height="40" className="d-inline-block align-text-top"/>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Get to Know Us</strong></li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Releases</li>
                            <li>Amazon Science</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Connect with Us</strong></li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Make Money with Us</strong></li>
                            <li>Sell on Amazon</li>
                            <li>Sell under Amazon Accelerator</li>
                            <li>Protect and Build Your Brand</li>
                            <li>Amazon Global Selling</li>
                            <li>Become an Affiliate</li>
                            <li>Fulfilment by Amazon</li>
                            <li>Advertise Your Products</li>
                            <li>Amazon Pay on Merchants</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="footer-section">
                        <ul>
                            <li><strong>Let Us Help You</strong></li>
                            <li>COVID-19 and Amazon</li>
                            <li>Your Account</li>
                            <li>Returns Center</li>
                            <li>100% Purchase Protection</li>
                            <li>Amazon App Download</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="developer-custom text-center fs-">&copy;1996-2024,Amazon.com, Inc. or its affiliates</div>
            <div className="column"></div>
            <div className="row-md-2">
                    <img src={logo} alt="Logo" width="120" height="40" className="d-inline-block align-text-middle"/>
                </div>
                <div className="col-md-2"></div>
        </div>
    </footer>
    </>
  )
}

export default Footer