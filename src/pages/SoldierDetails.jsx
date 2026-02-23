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
            <div>
                <h1 className="text-t">{soldier.story}</h1>
            </div>

        </div>
    );
}

export default SoldierDetails;