


import React from "react";
import "./Story.css"
function Story() {
    return (
        <>
         <div className="pic">
           <h1>
סיפורי גבורה
      </h1>

      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/1mFlpYijYjE?start=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      </div>
        </>

    )

}

export default Story;