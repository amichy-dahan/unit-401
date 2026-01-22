
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Home.css"
function Home() {
  const [openModal, setOpenModal] = useState(null);
  return (
    <>


      <div className="pic">
        <div className={`page ${openModal ? "blur" : ""}`}>
          <img className="pic-home" src="46.png" alt="" />
    
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

export default Home;