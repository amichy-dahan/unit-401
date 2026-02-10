import { useParams } from "react-router-dom";
import { soldiers } from "../data/soldiers"; // עוד רגע נסביר
import { useEffect } from "react";
import "./SoldierPage.css";

export default function SoldierPage() {
  const { id } = useParams();

  const soldier = soldiers.find(
    (s) => s.id === Number(id)
  );
    useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  if (!soldier) {
    return <p>החייל לא נמצא</p>;
  }

  return (


    <>
    <div className="picS">

   
       <div className="soldier-page">
      <div className="im">
        <img src={soldier.image} alt={soldier.name} />
        </div>
          <div className="head-text">
               <h1 className="text">{soldier.name}</h1>
               <h2 className="text">{soldier.fallenText}</h2>
        </div>
    </div>
    <div className="container-text">

      <div className="text-box">
  <p>
    {soldier.story}
  </p>
</div>
    </div>
 
 </div>
    </>

  );
}
