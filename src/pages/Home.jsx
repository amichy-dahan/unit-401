
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"
import picLog from "../assets/46.png"
import tank from "../assets/tank.png"
import play from "../assets/play.png"

function Home() {
  const [openModal, setOpenModal] = useState(null);
    const driveLink = "https://drive.google.com/file/d/1AFrhlgefP580IqMWqFDwK23_Vw2Y5Z0l/view";
  return (
    <>


      <div className="pic">
       
          <img className="pic-home" src={picLog} alt="" />
 <div  className="container">
      
      </div>
        
      </div>

      <img className="tank" src={tank} alt="" />

      <div className="cont">
       
         
          <h2 className="tt">גדוד ׳שלח׳ 46 הוא גדוד שריון סדיר ומבצעי בחטיבת ׳עקבות הברזל׳ 401 הנמצאת תחת אוגדה 162 בפיקוד דרום. <br></br>
הגדוד הוקם ב־1954 כגדוד חי"ר במילואים, והשתתף בלחימה במלחמת סיני.<br></br> ב-1961 עבר הסבה לשריון ופעל תחת חטיבה 7 כגדוד מילואים טנקי AMX-13.<br></br> ב-1965 עבר הסבה למגח. ב-1967 הועבר לחטיבת המגח 401 בעת הקמתה, והיווה את גדוד ההקמה שלה.<br></br> ככזה יצא למלחמת ששת הימים, ולחם בה כגדוד מגח מילואים בפיקודו של אורי בר און (מח"ט 401 המיועד).<br></br>
הגדוד השתתף בכל מערכות ישראל החל ממלחמת ששת הימים. הגדוד בנוי מפלוגת מפקדה, פלוגת המילואים ׳אפעה׳, פלוגת ברקן, פלוגת ג׳ הבחורים ופלוגת דינגו. <br></br>

לאורך השנים משלב הגדוד נאמנות, מוכנות וכשירות מבצעית גבוהה, ומהווה נדבך מרכזי בכוח השריון של מדינת ישראל.<br></br> מורשתו חיה בלב לוחמיו, והוא ניצב בחזית בכל פעם שנדרשת הגנה על המדינה.</h2>
      </div>
 
    </>

  )

}

export default Home;