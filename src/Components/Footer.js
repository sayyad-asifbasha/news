import React from 'react'
import "./footer.css"
import { SocialIcon } from 'react-social-icons'
import logo from './Logo.png';
import text from './text.png';

export default function footer() {
  return (
   <>
   <footer>
        <div id="footerBox">
            <div id="brandLogo">
                {/* <h1 >BrandLogo</h1>
                 */}
                 <div className='brandImg'>
                    <img src={logo} alt="" srcset="" />
                </div>
            </div>
            <div id="abtBrand">
                {/* <h2 className="footerHeading">AboutBrand Logo</h2> */}
                <div className='textImg'>
                    <img src={text} alt="" srcset="" />
                </div>
                
                <ul id="abtList">
                    <li className="items"><a href="/">About BrandLogo</a></li>
                    <li className="items"><a href="/">Download the App </a></li>
                    <li className="items"><a href="/">Careers </a></li>
                    <li className="items"><a href="/">Help Center </a></li>
                    <li className="items"><a href="/">Contact Us </a></li>
                </ul>
            </div>
            <div id="social">
                <h2 className="footerHeading">Social</h2>
                <ul id="abtSocial">
                   <li  className="items"> <a href="/"><p><SocialIcon url="https://instagram.com" fgColor='grey' bgColor='transparent'/>Instagram</p></a></li>
                    <li className="items"><a href="/"><p><SocialIcon url="https://facebook.com" fgColor='grey' bgColor='transparent'/>Facebook</p></a></li>
                    <li className="items"><a href="/"><p><SocialIcon url="https://x.com" fgColor='grey' bgColor='transparent'/>X</p></a></li>
                    <li className="items"><a href="/"><p><SocialIcon url="https://youtube.com" fgColor='grey' bgColor='transparent'/>Youtube</p></a></li>
                    <li className="items"><a href="/"><p><SocialIcon url="https://linkedin.com" fgColor='grey' bgColor='transparent'/>linkedIn</p></a></li>
                </ul>
            </div>
        </div>
        <p id="copyright">&copy 2024 BrandName.com ,Times Internet Limited. All rights reserved | The Times of India | Navbharat Times</p>
    </footer>
   </>
  )
}
