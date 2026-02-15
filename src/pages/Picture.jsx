
import { Link } from "react-router-dom";
import "./Picture.css"
import img1 from "../assets/pic/1.jpeg"
import img2 from "../assets/pic/2.jpeg"
import img3 from "../assets/pic/3.jpeg"
import img4 from "../assets/pic/4.jpeg"
import img5 from "../assets/pic/5.jpeg"
import img6 from "../assets/pic/6.jpeg"
import img7 from "../assets/pic/7.jpeg"
import img8 from "../assets/pic/8.jpeg"
import img9 from "../assets/pic/9.jpeg"
import img10 from "../assets/pic/10.jpeg"
import img11 from "../assets/pic/11.jpeg"
import img12 from "../assets/pic/12.jpeg"
import img13 from "../assets/pic/13.jpeg"
import img14 from "../assets/pic/14.jpeg"
import img15 from "../assets/pic/15.jpeg"

import { useState } from "react";

function Picture() {
    const images = [img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <div className="image-container">
        <img
          src={images[current]}
          alt="slider"
          key={current}
          className="slide"
        />
      </div>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}

export default Picture;