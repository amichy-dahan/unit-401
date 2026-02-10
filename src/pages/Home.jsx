
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"
import picLog from "../assets/46.png"
import play from "../assets/play.png"

function Home() {
  const [openModal, setOpenModal] = useState(null);
    const driveLink = "https://drive.google.com/file/d/1AFrhlgefP580IqMWqFDwK23_Vw2Y5Z0l/view";
  return (
    <>


      <div className="pic">
       
          <img className="pic-home" src={picLog} alt="" />

         
   <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1mFlpYijYjE?start=3&si=BYy8AW4_w_7IkP6T"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0, width: "30%", height: "30%" }}
      ></iframe>
    </div>
        
      </div>
 
    </>

  )

}

export default Home;