
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

         
   <img
  className="play"
  src={play}
  alt="סרטון"
  style={{ cursor: "pointer" }} // חשוב שהסמן יראה שזה לחיץ
  onClick={() => window.open(driveLink, "_blank", "noopener,noreferrer")}
/>
        
      </div>
 
    </>

  )

}

export default Home;