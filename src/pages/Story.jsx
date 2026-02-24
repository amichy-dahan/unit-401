


import React from "react";
import { useState } from "react";
import tank from "../assets/tank.png"
import "./Story.css"
import { tzalashSoliders } from "../data/tzalash.js";
import kikar from "../assets/kikar.png"
import { useNavigate } from "react-router-dom";



function Story() {
  const navigate = useNavigate();
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


    
            <div className="ot">בעלי העיטורים בגדוד</div>
      </div>


     <div className="container-talash">
      <div className="button-group">
           {tzalashSoliders.map((tzalash) => (
          <button
            key={tzalash.id}
            className={`image-button ${
              selected === tzalash.id ? "active" : ""
            }`}
            onClick={() => navigate(`/soldiert/${tzalash.id}`)}
          >
            <img src={tzalash.image} alt={`option-${tzalash.id}`} />
          </button>
        ))}
      </div>
    </div>
    </>

  )

}

export default Story;

