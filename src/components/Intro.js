import React from "react";
import pageTear from "../assets/page-tear-top-1.svg";

const Intro = () => {
  return (
    <section>
      <h1>
        American <span className="gold-font">Wild West</span>
      </h1>
      <hr />
      <section className="section-information">
        <div className="section-information__year">
          <p>1866 — BIRTH</p>
        </div>
        <div className="section-information__text">
          <p>
            The Wild West is the name of the area that originally included the
            development zone — the Frontier, located on the territory of the
            modern states of North Dakota, South Dakota, Montana, Wyoming,
            Colorado, Kansas, Nebraska, Oklahoma and Texas, which gradually
            expanded and moved west all the way to the Pacific coast.
          </p>
        </div>
        <div className="section-information__text">
          <p>
            In a broader sense, this concept covers the entire western half of
            North America and the period from the Lewis and Clark expedition to
            the end of the Mexican Revolution. As the North American frontier
            became populated and urbanized, the Wild West lifestyle dwindled
            until, around 1920, it ceased to exist as a cultural phenomenon.
          </p>
        </div>
      </section>
      <div className="background-image-tear-top"></div>

      <div className="background-image"></div>

      <div className="background-image-tear-bottom"></div>
    </section>
  );
};

export default Intro;
