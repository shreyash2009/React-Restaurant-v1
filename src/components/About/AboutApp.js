import React, { useEffect } from 'react'
import './About.css'
import About from './About'
import Parallax from './Parallax'
import AboutData from '../../utility/AboutData'
import ChefData from '../../utility/ChefData'
const AboutApp = () => {
  useEffect(()=>{
    window.scroll({
      top : 0,
      behavior: "smooth"
    }
      
    )
  },[])
  return (
    <>
    <Parallax AboutData={AboutData[0]}/>
    <section class = "section section-light">
        <h2>History Of Oliver Garden 🤌</h2>
        <br/>
        <p>
            Oliver Garden' original location was at Strandgade 93, in an old warehouse on the waterfront in the Christianshavn neighbourhood in central Copenhagen. The building is situated by the Greenlandic Trading Square (Danish: Grønlandske Handels Plads), which for 200 years was a centre for trade to and from the Faroe Islands, Finnmark, Iceland, and in particular, Greenland. Dry fish, salted herring, whale oil and skins are among the goods that were stored in and around the warehouse before being sold off to European markets. In 2003, the warehouse was turned into North Atlantic House, a centre for the art and culture of the North Atlantic region. Oasis was opened at the same time by Redzepi and Claus Meyer. After a brief stint in 2016, Oasis reopened on 15 February 2018 and moved from its previous Strandgade location to its current location at Refshalevej 96.
        </p>
    </section>
    <Parallax AboutData={AboutData[1]}/>
    <About ChefData={ChefData} />
    <Parallax AboutData={AboutData[2]}/>
    <section class = "section section-light">
        <h2>Cultural Heritage & Awards 🏆</h2>
        <br/>
        <p>Our cuisine is Nordic/Scandinavian, where our founders have attempted to redefine the Nordic culture. Chef Claus Meyer(Founder of Oasis) says, "It can be considered more an interpretation of Nordic food than classical Nordic food itself."</p>
        <br/>
    
        <ul style = {{textAlign: "left"}}>
            <p>Our Accreditions :</p>
            <li>Three Michelin - Star Restaurant</li>
            <li>In 2010, 2011, 2012, 2014 and 2021, we were ranked as the <b>Best Restaurant in the World</b> by the Restaurant magazine.</li>
        </ul>
    </section>

    </>
  )
}

export default AboutApp