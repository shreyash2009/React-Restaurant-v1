import React from 'react'

import { SiGithub, SiLinkedin,SiInstagram } from "react-icons/si";
import './Footer.css'
const Footer = () => {

  return (
    <footer class = "Footer">
      <div class = "FooterContainer">
          <div class = "Row">
              <div class = "Footer-Column">
                  <h4>Olive Garden</h4>
                  <ul>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Our Services</a></li>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Affiliate Partners</a></li>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Feedback</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Get Help</h4>
                  <ul>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">FAQ</a></li>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Contact Us</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Online Delivery</h4>
                  <ul>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Order Status</a></li>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Payment Options</a></li>
                      <li><a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer">Delivery Partners</a></li>
                  </ul>
              </div>

              <div class = "Footer-Column">
                  <h4>Follow Us</h4>
                  <div class = "Social-Links">
                      <a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer"><SiGithub/></a>
                      <a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer"><SiLinkedin/></a>
                      <a href = "https://github.com/shreyash2009" target="_blank" rel="noreferrer"><SiInstagram/></a>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer