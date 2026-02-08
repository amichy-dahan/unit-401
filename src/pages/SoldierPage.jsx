import { useParams } from "react-router-dom";
import { soldiers } from "../data/soldiers"; // עוד רגע נסביר
import "./SoldierPage.css";

export default function SoldierPage() {
  const { id } = useParams();

  const soldier = soldiers.find(
    (s) => s.id === Number(id)
  );

  if (!soldier) {
    return <p>החייל לא נמצא</p>;
  }

  return (


    <>
    
       <div className="soldier-page">
      <img src={soldier.image} alt={soldier.name} />
    
    </div>
      <h1 className="text">{soldier.name}</h1>
      <h2 className="text">{soldier.fallenText}</h2>

    </>

  );
}
