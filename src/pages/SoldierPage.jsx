import { useParams } from "react-router-dom";
import { soldiers } from "../data/soldiers"; // עוד רגע נסביר


export default function SoldierPage() {
  const { id } = useParams();

  const soldier = soldiers.find(
    (s) => s.id === Number(id)
  );

  if (!soldier) {
    return <p>החייל לא נמצא</p>;
  }

  return (
    <div className="soldier-page">
      <img src={soldier.image} alt={soldier.name} />
      <h1>{soldier.name}</h1>
      <h2>{soldier.fallenText}</h2>

      {/* פה תוסיף טקסט, סיפור, תמונות, וידאו וכו */}
    </div>
  );
}
