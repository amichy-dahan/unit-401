


import React from "react";
import { useState } from "react";
import tank from "../assets/tank.png"
import "./Story.css"
import img1 from "../assets/tlas/1.png";
import img2 from "../assets/tlas/2.png";
import img3 from "../assets/tlas/3.png";
import img4 from "../assets/tlas/4.png";
import img5 from "../assets/tlas/5.png";
import img6 from "../assets/tlas/6.png";
import img7 from "../assets/tlas/7.png";
import img8 from "../assets/tlas/8.png";
import img9 from "../assets/tlas/9.png";
import img10 from "../assets/tlas/10.png";
import img11 from "../assets/tlas/11.png";
import img12 from "../assets/tlas/12.png";
import img13 from "../assets/tlas/13.png";
import img14 from "../assets/tlas/14.png";

import kikar from "../assets/kikar.png"

import map from "../assets/map.png"

function Story() {

    const images = [img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];
  const [selected, setSelected] = useState(null);
  return (
    <>
      <div className="pic">

    
       
        <h1 className="gvur">סיפורי גבורה</h1>
    <div className="videos">

   <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/1mFlpYijYjE?start=3&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>


        <div className="video-wrapper">
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aPmuMD7fLmo?si=AOvVovgWAbqjgUcS?start=3&playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="kikar-video"  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/19EVbfiVMxANKkx4uQulxWGSv0aB8Ecf-/preview",
      "_blank"
    )
  }>
          <img className="kikar" src={kikar} alt="" />
        </div>
  
    </div>


    
            <div className="ot">צל"שים</div>
      </div>


     <div className="container-talash">
      <div className="button-group">
        {images.map((img, index) => (
          <button
            key={index}
            className={`image-button ${
              selected === index ? "active" : ""
            }`}
            onClick={() => setSelected(index)}
          >
            <img src={img} alt={`option-${index}`} />
          </button>
        ))}
      </div>
    </div>
    </>

  )

}

export default Story;

