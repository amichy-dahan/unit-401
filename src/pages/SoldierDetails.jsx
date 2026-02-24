import { useParams } from "react-router-dom";
import { tzalashSoliders } from "../data/tzalash.js";
import "./SoldierDetails.css";
function SoldierDetails() {
    const { id } = useParams();

    const soldier = tzalashSoliders.find(
        (s) => s.id === Number(id)
    );

    if (!soldier) {
        return <h2>לא נמצא חייל</h2>;
    }

    return (
        <div className="container-tzalsh">

            <div className="imt">
                <img className="image-tzalash" src={soldier.image} alt={soldier.name} />
            </div>
            <div className="dad-text">
                <span className="text-t">{soldier.story}</span>
            </div>

        </div>
    );
}

export default SoldierDetails;