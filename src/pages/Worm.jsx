

import { useState } from "react";
import "./Worm.css"
import one from "../assets/1.jpg"
import tree from "../assets/3.jpg"
import tow from "../assets/2.jpg"
import fore from "../assets/4.jpg"
import five from "../assets/5.jpg"
import six from "../assets/6.JPG"
import seven from "../assets/7.jpg"
import hite from "../assets/8.jpg"
import nine from "../assets/9.jpg"

function Worm() {
      const [openModal, setOpenModal] = useState(null);
  return (
      <>

     
<div className="bg">

        <div className={`page ${openModal ? "blur" : ""}`}>

   

          <div className="group-bt">
  <button className="card" onClick={() => setOpenModal("one")}>
    <img src={one} alt="מלחמת ששת הימים" />
    <span>מלחמת ששת הימים</span>
  </button>

  <button className="card" onClick={() => setOpenModal("two")}>
    <img src={tow} alt="מלחמת ההתשה" />
    <span>מלחמת ההתשה</span>
  </button>

  <button className="card" onClick={() => setOpenModal("three")}>
    <img src={tree} alt="מלחמת יום הכיפורים" />
    <span>מלחמת יום הכיפורים</span>
  </button>

  <button className="card" onClick={() => setOpenModal("four")}>
    <img src={fore} alt="מלחמת שלום הגליל" />
    <span>מלחמת שלום הגליל</span>
  </button>

  <button className="card" onClick={() => setOpenModal("five")}>
    <img src={five} alt='אינתיפאדת אל־אקצא' />
    <span>אירועי אינתיפאדת אל־אקצא</span>
  </button>

  <button className="card" onClick={() => setOpenModal("six")}>
    <img src={six} alt="מלחמת לבנון השנייה" />
    <span>מלחמת לבנון השנייה</span>
  </button>

  <button className="card" onClick={() => setOpenModal("seven")}>
    <img src={seven} alt="עופרת יצוקה" />
    <span>מבצע עופרת יצוקה</span>
  </button>

  <button className="card" onClick={() => setOpenModal("hate")}>
    <img src={hite} alt="צוק איתן" />
    <span>מבצע צוק איתן</span>
  </button>

  <button className="card" onClick={() => setOpenModal("nine")}>
    <img src={nine} alt="חרבות ברזל" />
    <span>מלחמת חרבות ברזל</span>
  </button>
</div>

          </div>

</div>


      {openModal && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            {openModal === "one" && (
              <>
                <h3>(1967)<br></br>מלחמת ששת הימים </h3>
                <p className="text-modal">
                 גדוד 46 השתתף בכיבוש צומת רפיח, בשחרור רצועת עזה והשתתף בטיהור מחנות האויב. הגדוד נפגע בכיבוש אזור ביר־גפגפה.
                </p>
              </>
            )}

            {openModal === "two" && (
              <>
               <h3>(1968–1970)<br></br>מלחמת ההתשה</h3>
                <p className="text-modal">
                גדוד 46 פעל במרחב סואץ ובתעלת סואץ, והשתתף במבצעי "אסתמה" נגד בסיסי מחבלים וחדירות־מחבלים תוך לחימה מתמשכת.
                </p>
              </>
            )}

            {openModal === "three" && (
              <>
               <h3>(1973)<br></br> מלחמת יום הכיפורים</h3>
                <p className="text-modal">
              בימים הראשונים למלחמה לחם גדוד 46 בדרום תעלת סואץ, בגזרת המעוזים "בודפשט" ו"מצמד", עצר את צליחת הצבא המצרי וכבש מחדש מעוזים שנפלו. בהמשך השתתף הגדוד בצליחת התעלה והתקדם לעבר העיר סואץ.
                </p>
              </>
            )}

            <button onClick={() => setOpenModal(null)}>סגור</button>
          </div>
        </div>
      )}
      
      
      </>

  )
  
}

export default Worm;