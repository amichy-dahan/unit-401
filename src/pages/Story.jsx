


import React from "react";
import tank from "../assets/tank.png"
import "./Story.css"
function Story() {
  return (
    <>
      <div className="pic">

        <div className="pic-tank">
 <img className="tank1" src={tank} alt="" />
        </div>
       
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

    </div>
     
      </div>
    </>

  )

}

export default Story;

