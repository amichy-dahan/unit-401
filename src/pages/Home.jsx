
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
        <h1 className="title-g">מורשת גדוד 46</h1>
      </div>
        
      </div>

      <img className="tank" src={tank} alt="" />

      <div className="cont">
       
         
          <h2 className="tt">גדוד 46, המכונה “שלח”, הוא אחד מגדודי השריון הממוסים והוותיקים בצה"ל.<br></br>
הגדוד הוקם בשנת 1954 כגדוד חי"ר והשתתף בלחימה ובהגנה על מדינת ישראל בשנותיה הראשונות. לקראת סוף מבצע קדש (1956) עבר הגדוד הסבה למבנה שריון כחלק מהמעבר האסטרטגי של צה"ל לכוחות משוריינים מודרניים.<br></br>

עם פרסום פקודת הקמת חטיבה 401, ערב מלחמת ששת הימים, נקבע גדוד 46 כבסיס המרכזי של החטיבה – ומשם יצא לפעולה בשדות הקרב.<br></br>
הגדוד כלל לאורך השנים פלוגת מפקדה, פלוגה ג’ – “הבחורים”, פלוגת “ברקן” ופיקוד מסייעת – כשכל פלוגה תורמת את חלקה לאתגרי הפעילות המבצעית.<br></br>

גדוד 46 לקח חלק מרכזי בלחימה היסטורית ובהמשך גם בפעילויות מבצעיות עכשוויות כחלק מחטיבה 401, חטיבת שריון מובילה הפועלת במסגרת פיקוד דרום.<br></br>
הגדוד משלב לאורך השנים נאמנות, מוכנות ויכולת מבצעית גבוהה, ומשמש נדבך חשוב בכוח השריון של מדינת ישראל – משמר את מורשתו בקרב לוחמיו ויוצא לפעולה בכל פעם שדרושה הגנה על המדינה.</h2>
      </div>
 
    </>

  )

}

export default Home;