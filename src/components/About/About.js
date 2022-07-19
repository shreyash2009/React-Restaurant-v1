import React from "react";

const About = ({ ChefData }) => {
  window.addEventListener('scroll',reveal);
  function reveal(){

    let revealarea = document.querySelector('.reveal');
    let windowHeight = window.innerHeight;
    let revealTop = revealarea.getBoundingClientRect().top;         //The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

                                                                  //  The getBoundingClientRect() method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
    let revealPoint = 150;
    if(revealTop<windowHeight - revealPoint){
     revealarea.classList.add("active"); 
    }
    
  }
  return (
    <section id="ChefBlock">
      <h4 className="Chefs-title">Our Team</h4>
      <div className="Chefs_container reveal">
        {ChefData.map((item) => {
          const { id, imgurl, h1, p1 } = item;
          return (
            <article key={id} className="ChefContainer">
                <div className="ChefImg">
              <img src={imgurl} alt="chefimg" className="chefimg" />
              </div>
              <div className="ChefInfo">
                <h3>{h1}</h3>
                <p>{p1}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default About;
