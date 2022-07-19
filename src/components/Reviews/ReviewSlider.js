import React, { useState } from "react";
import data from "../../utility/ReviewSliderData";
import { FaQuoteRight } from "react-icons/fa";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  return (
    <section id="reviewSliderContainer">
      <h2 className="reviewheading">Top Reviews</h2>
      <div className="underline"></div>
      <div className="SliderContainer">
        {data.map((person, personIndex) => {
          const { id, name, quote, img } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} id="person_review" className={position}>
              <img src={img} alt={name} className="personImg"></img>
              <h4>{name}</h4>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <div className="btn_container">

        <button className="prev" onClick={() => setIndex(index === 0? data.length-1 : index-1)}>
          <FaArrowAltCircleLeft  className="prev"/>
        </button>
        <button className="next" onClick={() => setIndex(index ===data.length-1 ? 0 : index+1)}>
          <FaArrowAltCircleRight  className="next"/>
        </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSlider;
