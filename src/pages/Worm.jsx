

import { useState } from "react";
import "./Worm.css"
import one from "../assets/555.jpg"
import tree from "../assets/111.jpg"
import tow from "../assets/222.jpg"
import fore from "../assets/333.jpg"
import five from "../assets/444.jpg"
import six from "../assets/8.webp"
import seven from "../assets/666.jpg"
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
    <img src={five} alt='אירועי "גאות ושפל"' />
    <span>אירועי "גאות ושפל"</span>
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
                <h3 className="t">(1967)<br></br>מלחמת ששת הימים </h3>
                <p className="text-box">
                 גדוד 46 השתתף בכיבוש צומת רפיח, בשחרור רצועת עזה והשתתף בטיהור מחנות האויב. הגדוד נפגע בכיבוש אזור ביר־גפגפה.
                </p>
              </>
            )}

            {openModal === "two" && (
              <>
               <h3 className="t">(1968–1970)<br></br>מלחמת ההתשה</h3>
                <p className="text-box">
                גדוד 46 פעל במרחב סואץ ובתעלת סואץ, והשתתף במבצעי "אסתמה" נגד בסיסי מחבלים וחדירות־מחבלים תוך לחימה מתמשכת.
                </p>
              </>
            )}

            {openModal === "three" && (
              <>
               <h3 className="t">(1973)<br></br> מלחמת יום הכיפורים</h3>
                <p className="text-box">
             בימים הראשונים למלחמה לחם גדוד 46 בדרום תעלת סואץ, בגזרת המעוזים 'בוצר' ו'ליטוף', ובהמשך נע לעבר ציר המתלה. הגדוד השתתף בקרב על ואדי מבעוק ובבלימת ההתקפה של דיוויזיה 4 המצרית. בהמשך צלח הגדוד את התעלה וכבש את בסיס הטילים המצרי בגדה המערבית שלה.
                </p>
              </>
            )}
            
            {openModal === "four" && (
              <>
               <h3 className="t">(1982)<br></br> מלחמת שלום הגליל </h3>
                <p className="text-box">
             גדוד 46 לחם והוביל את החטיבה בגזרה המזרחית, בציר הכפרים שבאזור 'המעברים', המחבר בין בקעת הלבנון לבקעת דמשק. במסגרת הלחימה הפיל הגדוד מסוק סורי. באותו יום (11 ביוני 1982) כבש הגדוד את הכפרים עיחה, ג'בל א-צפחה, כפר קוק וכפרים נוספים בסביבה. 
                </p>
              </>
            )}
            
            {openModal === "five" && (
              <>
               <h3 className="t">(2005-2000)<br></br> אירועי "גאות ושפל"</h3>
                <p className="text-box">
             גדוד 46 לחם באזור יהודה ושומרון וחבל עזה והשתתף במבצעים רבים לסיכול פיגועים ולפגיעה בתשתיות הטרור, ואף מנע פיגועים בשיתוף כוחות חי"ר והנדסה. במבצע "חומת מגן" (2002) פעל הגדוד בגזרת יהודה ושומרון.
                </p>
              </>
            )}
            
            {openModal === "six" && (
              <>
               <h3 className="t">(2006)<br></br> מלחמת לבנון השנייה</h3>
                <p className="text-box">
             גדוד 46 לחם תחת חטיבת הנח"ל בגזרת הכפרים אל-עדייסה וא-טייבה, ובהמשך פעל בשיתוף חטיבה 226 וכן תחת חטיבה 401. 
                </p>
              </>
            )}
            
            {openModal === "seven" && (
              <>
               <h3 className="t">(2008)<br></br> עופרת יצוקה</h3>
                <p className="text-box">
              גדוד 46 השתתף בשלב התמרון הקרקעי במבצע ולחם תחת חטיבת גולני בגזרת סג'עייה שברצועת עזה. 
                </p>
              </>
            )}
             {openModal === "hate" && (
              <>
               <h3 className="t">(2014)<br></br> צוק איתן</h3>
                <p className="text-box">
             גדוד 46 לחם תחת חטיבת הנח"ל והוביל את ההתקפה על השכונות הצפוניות ברצועת עזה – בית לאהיה ובית חאנון.
                </p>
              </>
            )}
             {openModal === "nine" && (
              <>
               <h3 className="t">(2025-2023)<br></br> חרבות ברזל</h3>
                <p className="text-box">
            גדוד 46 תמרן בעומק רצועת עזה החל מה-27.10.2023 ועד 16.10.2025.
בתאריך ה-07.10.2023 לחמו מפקדי הגדוד ביישובי העוטף ובמקביל להם יצאה פלוגה א׳ על גבי זחלים ממחנה נחשונים ועד לעוטף עזה. בתחילת הלחימה, הגדוד הוביל את מתקפת חטיבת ׳עקבות הברזל׳, בין משימותיו הראשונות של הגדוד היו כיבוש מוצב הספינה, מוצב באדר וכיתור מ״פ שאטי. 

במהלך הפסקת האש הראשונה, בחודש נובמבר 2023, הגדוד היה במשימת הגנה בגזרת ג׳באליה על מנת לאפשר את שחרור החטופים. בהמשך הגדוד איתר והשמיד תת״ק, היווה כוח חיפוי ליחידות מיוחדות והיה הראשון לכבוש את כיכר פלסטין. הגדוד איתר אמל״ח רב והשמיד תשתיות אויב. את מרבית הלחימה ברצועת עזה הוביל גדוד 46 תחת פיקוד חטיבה 933, חטיבת הנח״ל. במהלך התמרון הגדוד לקח חלק ניכר בכיבוש מוצב ראעד, ביצע פשיטה על ביה״ח שיפאא׳, פשיטה לזייתון, התקפה לשכונת תל סולטאן ברפיח, מציאת פיר ה-L ואיתור וחילוץ 6 גופות חטופים. הגדוד תמרן בחאן יונס, וחילץ גופת חטוף. 

בתאריך 19.11.2024, הוקמה פלוגה ד בגדוד, שהצטרפה מיד גם היא לתמרון ברצועת עזה במרחב רפיח. הגדוד נלחם בצפון הרצועה, וביצע התקפה למערב בית חאנון במסגרת מבצע ״תלם המחרשה״.
לקראת סוף התמרון, כחלק ממבצע ׳מרכבות גדעון ב׳, נלחם הגדוד בעיר עזה בשכונת ריח רדואן כאשר בין משימותיו העיקריות היו פריצת ציר ׳לוצקי׳ והכנסת גדודי הנח״ל ללחימה ביעדי הקוביות. בנוסף הגן הגדוד על המל״ק והצירים הלוגיסטיים. במלחמת חרבות ברזל הגדוד שכל 9 מלוחמיו, ולוחמים נוספים מחטיבת הנח״ל שנפלו תחת פיקודו. 
לאחר הלחימה, עבר גדוד 46 לתעסוקה מבצעית בקו לבנון.
                </p>

                
              
<iframe
  className="vid"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/jrXGpGmxtfc?si=if9rYG4L8w9F-0Vl&start=3&playsinline=1"
  title="סרטון"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
  allowFullScreen
></iframe>            
              </>

            )}

            <button className="btn-close" onClick={() => setOpenModal(null)}>סגור</button>
          </div>
        </div>
      )}
      
      
      </>

  )
  
}

export default Worm;