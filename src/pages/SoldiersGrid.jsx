import React from "react";
import { Link } from "react-router-dom";
import "./SoldiersGrid.css";
import { useState } from "react";

const soldiers = [
  { id: 1, name: "דוד כהן", image: "/images/soldier1.jpg", link: "/soldier/1" },
  { id: 2, name: "יוסי לוי", image: "/images/soldier2.jpg", link: "/soldier/2" },
  { id: 3, name: "רון ברק", image: "/images/soldier3.jpg", link: "/soldier/3" },
  { id: 4, name: "אורי גל", image: "/images/soldier4.jpg", link: "/soldier/4" },
  { id: 5, name: "יואב כהן", image: "/images/soldier5.jpg", link: "/soldier/5" },
  { id: 6, name: "אלעד לוי", image: "/images/soldier6.jpg", link: "/soldier/6" },
  { id: 7, name: "גיא ברק", image: "/images/soldier7.jpg", link: "/soldier/7" },
  { id: 8, name: "נמרוד רוזן", image: "/images/soldier8.jpg", link: "/soldier/8" },
  { id: 9, name: "רפאל כהן", image: "/images/soldier9.jpg", link: "/soldier/9" },
  { id: 10, name: "עמית לוי", image: "/images/soldier10.jpg", link: "/soldier/10" },
  { id: 11, name: "איתי ברק", image: "/images/soldier11.jpg", link: "/soldier/11" },
  { id: 12, name: "תומר כהן", image: "/images/soldier12.jpg", link: "/soldier/12" },
  { id: 13, name: "יעקב לוי", image: "/images/soldier13.jpg", link: "/soldier/13" },
  { id: 14, name: "שחר רוזן", image: "/images/soldier14.jpg", link: "/soldier/14" },
  { id: 15, name: "רון כהן", image: "/images/soldier15.jpg", link: "/soldier/15" },
  { id: 16, name: "ניב לוי", image: "/images/soldier16.jpg", link: "/soldier/16" },
  { id: 17, name: "אור ברק", image: "/images/soldier17.jpg", link: "/soldier/17" },
  { id: 18, name: "דניאל רוזן", image: "/images/soldier18.jpg", link: "/soldier/18" },
  { id: 19, name: "עומר כהן", image: "/images/soldier19.jpg", link: "/soldier/19" },
  { id: 20, name: "ליאור לוי", image: "/images/soldier20.jpg", link: "/soldier/20" },
];


export default function SoldiersGrid() {
      const [search, setSearch] = useState("");

  // מסנן חיילים לפי שם
  const filteredSoldiers = soldiers.filter((soldier) =>
    soldier.name.toLowerCase().includes(search.toLowerCase())
  );
  return (

      <div className="dad">
      {/* שדה חיפוש */}

      <div className="find">
  <input
        type="text"
        placeholder="חפש חייל לפי שם..."
        value={search}
        className="inS"
        onChange={(e) => setSearch(e.target.value)}
       
      />
      </div>
    

      {/* גריד של חיילים */}
      <div className="iscor">
        {filteredSoldiers.map((soldier) => (
          <div key={soldier.id} className="soldier-card">
            <img
              src={soldier.image}
              alt={soldier.name}
              className="soldier-image"
            />
            <h3>{soldier.name}</h3>
            <Link to={soldier.link} className="soldier-btn">
             לעמוד ההנצחה
            </Link>
          </div>
        ))}

        {/* אם אין תוצאות */}
        {filteredSoldiers.length === 0 && (
          <p style={{ marginTop: "20px" }}>לא נמצאו חיילים לפי השם הזה</p>
        )}
      </div>
    </div>
  );
}
