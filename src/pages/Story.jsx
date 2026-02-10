


import React from "react";
import "./Story.css"
import ReactPlayer from "react-player";
function Story() {
    return (
        <>
            <div className="pic">
                <h1>סיפורי גבורה</h1>

                <div className="video-wrapper">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=1mFlpYijYjE&t=3s"
                        controls={true}       // מציג את הכפתורים של יוטיוב
                        width="100%"          // רספונסיבי לרוחב
                        height="100%"         // רספונסיבי לגובה של div
                        playing={false}       // לא מפעיל אוטומטית
                        light={false}         // לא תמונה מוקדמת, אלא הסרטון
                        config={{
                            youtube: {
                                playerVars: { playsinline: 1 } // חשוב למובייל
                            }
                        }}
                    />
                </div>
            </div>
        </>

    )

}

export default Story;