import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'

const Footer = () => {
    return (

        <div className="footer-div">

            <div className='footer-container'>
                <div className="left-footer">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iste maiores vero rem temporibus, incidunt consectetur velit praesentium deleniti quo totam.</p>

                    <div className="social-media-box">
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="center">
                    <h1>COMAPNY</h1>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Delivery</p>
                    <p>Privacy</p>
                </div>
                <div className="right-footer" id='contact-us'>
                    <h1>GET IN TOUCH</h1>
                    <p>5419576456</p>
                    <p>rahdmr534@gmail.com</p>
                </div>

            </div>
            <div className="copyright-box">
                <hr style={{ margin: '0px' }} />
                <h1 style={{ display: 'flex', justifyContent: 'center' }}>copyright {'\u00A9'} </h1>
            </div>

        </div>

    )
}

export default Footer