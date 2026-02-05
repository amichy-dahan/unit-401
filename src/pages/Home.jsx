
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

         

        
      </div>
 
    </>

  )

}

export default Home;