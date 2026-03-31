

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
import map from "../assets/map.png"

function Worm() {
  const [openModal, setOpenModal] = useState(null);
  const [open, setOpen] = useState(false);
  const defaultFontSize = 17;
  const [fontSize, setFontSize] = useState(defaultFontSize);


  const increaseFont = () => {
    setFontSize((prev) => Math.min(prev + 2, 35)); // מקסימום 30px
  };

  const decreaseFont = () => {
    setFontSize((prev) => Math.max(prev - 2, 12)); // מינימום 12px
  };


  const resetFont = () => {
    setFontSize(defaultFontSize);
  };
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
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(1967)<br></br>מלחמת ששת הימים </h3>
                <p className="text-box" style={{ fontSize }}>
                  משימתו של גדוד 46 במלחמת ששת הימים הייתה לפרוץ לרצועת עזה ולהתקדם לכיוון צומת רפיח, כדי לאפשר את הכניסה של חטיבה 7 לאזור רפיח ושייח׳ זוויד.<br></br> הגדוד לחם נגד כוח השריון של האויב.<br></br> פלוגה ב׳ לקחה חלק בקרבות נגד כוחות אויב ליד הכפר שין, ואחר כך הצטרפה ליחידת הצנחנים עימה כבשה את חאן יונס ושאר כפרי הרצועה. פלוגה ג׳ לקחה חלק בפריצת מתחם הג׳ידי, כבשה את שדה התעופה באל- עריש והמשיכה לכיוון ג׳בל לבני עד לתעלה. הגדוד מילא תפקיד חיוני בהבקעה של הפיקוד והאוגדה בגזרה הצפונית של סיני. הגדוד נפגע בכיבוש אזור ביר- גפגפה.<br></br> בסיום המלחמה קיבלו 8 חיילים צלש״ים, והגדוד שכל 14 מלוחמיו.<br></br>
                  <button className="card" onClick={() => setOpenModal("ten")}>
                    <span>קטע עדות של חייל שלחם במלחמת ששת הימים בפלוגה ג׳</span>
                  </button>
                </p>
              </>
            )}

            {openModal === "two" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(1968–1970)<br></br>מלחמת ההתשה</h3>
                <p className="text-box" style={{ fontSize }}>
                  בתקופה שלפני המלחמה, היה הגדוד בסיני לצורך האימונים ותעסוקה מבצעית בקו התעלה. עם תחילת המלחמה הטיל צה״ל על היחידות בסיני להיאחז בגזרות הקו. גדוד 46 החזיק את הגזרה הדרומית של התעלה מכברית ועד ראס- סודר. הגדוד פעל במרחב סואץ ובתעלת סואץ, והשתתף במבצעי ״אסתמה״ נגד בסיסי מחבלים וחדירות מחבלים תוך לחימה מתמשכת. הגדוד לחם במשך חודשים רבים מאוד, ברציפות של שלושה חודשים בקו, יציאה לאימונים של שלושה חודשים וחזרה לקו להמשך הלחימה.
                  מבצע כראמה- הגדוד השתתף בפשיטה המשוריינת על קיני המחבלים בעיירה כראמה שמעבר לירדן. הגזרה בה פעל היו תחנות המשטרה הירדניות פיפי וא- צאפי. הגדוד ביצע זאת בצורה הטובה ביותר וללא נפגעים.<br></br>
                  <button className="card" onClick={() => setOpenModal("eleven")}>
                    <span>קטע עדות של מ״פ מהגדוד שפיקד באותם ימים</span>
                  </button>
                </p>
              </>
            )}

            {openModal === "three" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(1973)<br></br> מלחמת יום הכיפורים</h3>
                <p className="text-box" style={{ fontSize }}>
                  בימים הראשונים למלחמה לחם גדוד 46 בגזרה הדרומית של תעלת סואץ, בגזרת המעוזים ׳בוצר׳ ו׳ליטוף׳, ובהמשך נע לעבר ציר המתלה. הגדוד השתתף בקרב על ואדי מבעוק ובבלימת ההתקפה של דיוויזיה 4 המצרית. בהמשך צלח הגדוד את התעלה וכבש את בסיס הטילים המצרי בגדה המערבית שלה. זמן מה לאחר הפסקת האש הוחלפה החטיבה ויצאה לתגבר את הקו לכיוון קהיר. הגדוד נאחז בגזרת הקו על כביש סואץ- קהיר. במסגרת הסכם הפרדת הכוחות, פינה הגדוד את הגדה המערבית של התעלה והתמקם בצפון סיני.
                </p>
                <br>
                </br>

              </>
            )}

            {openModal === "four" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(1982)<br></br> מלחמת שלום הגליל </h3>
                <p className="text-box" style={{ fontSize }}>
                  במלחמת שלום הגליל היה הגדוד חוד החנית של החטיבה. הגדוד לחם והוביל את החטיבה בגזרה המזרחית, בציר הכפרים שבאזור ׳המעברים׳, המחבר בין בקעת הלבנון לבקעת דמשק. במלחמה זו הובילה פלוגה ג׳ את הגדוד ואת החטיבה בכל שלבי הלחימה. פלוגה א׳ השתתפה בלחימה במסגרת ביה״ס לקצינים עד היום השלישי. ביום הרביעי ללחימה נלחם הגדוד בכוח קומנדו סורי בכפר א-זית. ביום השישי נקלע הגדוד למארב קומנדו והפיל את אחד המסוקים. בהמשך תנועתו לכפר קוק ספג תקיפות אוויר וטילים אך השלים את תנועתו וכבש את הכפר.
                </p>
              </>
            )}

            {openModal === "five" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(2005-2000)<br></br> אירועי "גאות ושפל"</h3>
                <p className="text-box" style={{ fontSize }}>
                  בפרוץ המאורעות סייעה פלוגה ב׳ לכוחות ההנדסה בפיצוץ והורדת בנייני התאומים בנצרים. זה היה המבצע הגדול הראשון במהלך גאות ושפל. במהלך החודשים שלאחר מכן השתתף הגדוד בשני מבצעים נוספים: ״שירה ענוגה 1״ בנווה דקלים בהשתתפות 2 טנקים ובמבצע ״חישוף צומת מגן 3״ בהשתתפות 2 טנקים. בחודש דצמבר, לאחר תעסוקה של כחצי שנה, ירד הגדוד לאימון כאשר לזכותו נרשמים עשרות מחבלים הרוגים. במאי 2001 עלה הגדוד לתעסוקה בגזרת עציון ויהודה. ביולי 2001 עבר הגדוד לאימון קצר ונערך לכניסה לתעסוקה בעזה. הגדוד החזיק גזרת קו ירוק כפר דרום ופרוזדור כיסופים מרכז הרצועה. תקופה זו ברצועת עזה התאפיינה במבצעים רבים- כיבוש והריסת מפג״ד 3, ״שירה ענוגה 2״, מבצעים לאורך ציר פילדלפי, תפיסת מסתננים לתוך תחומי ישראל, סיכול הנחת מטענים על גדר המערכת ותפיסת מבוקשים. בנובמבר 2001 סיים הגדוד את תעסוקתו ברצועת עזה וירד לאימון מקוצר. מיד בתום השבוע הראשון של האימון הופעל הגדוד לכיתור טולכרם אותו ביצעה פלוגה ב׳. המפג״ד ופלוגה ג׳ הוקפצו לגזרת רמאללה למבצע ״דואר יוצא 21״ - כיתור השכונות הצפוניות של רמאללה והפלת אנטנות השידורים של רדיו רמאללה. בסיום המבצע הופעל הגדוד לטולכרם למבצע ״יום זהוב 2״, לכיתור העיר טולכרם. כמו כן הוקפץ הגדוד למבצע ״בקרוב אצלך״ בגזרת רמאללה, ולמבצע ״אבנים מתגלגלות״ בכפר עוג׳א. במבצע ״חומת מגן״ (2002) פעל הגדוד בגזרת יהודה ושומרון.
                </p>
              </>
            )}

            {openModal === "six" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(2006)<br></br> מלחמת לבנון השנייה</h3>
                <p className="text-box" style={{ fontSize }}>
                  גדוד 46 היה בתעסוקה מבצעית באיו”ש כשהוחלט להקפיצו צפונה ולהפעילו עם הכוחות שהיו מוכנים ללחימה בלבנון.

                  ב־25 ביולי 2006 ביצע הגדוד אימון מזורז ונוהל קרב לאזור א־טייבה עם חטיבת הנח”ל לקראת הכניסה למלחמה. ב־30 ביולי הצטרף ללחימה בלבנון, ולמעשה לא חזר לשטח מדינת ישראל עד גמר המלחמה.

                  ביום שלישי, 1 באוגוסט, התקדם הגדוד לעבר הכפר רב־א־תלתין, ולאחר שהיית לילה המשיך לכיוון העיר א־טייבה.

                  בתאריכים– 2-7 באוגוסט פעל הגדוד במרחב א־טייבה תחת פיקודה של חטיבת הנח”ל. פעילות זו כללה מארבים, פשיטות, מבצעים ופריצת צירים לוגיסטיים. בשטח המאוים ניהל הגדוד חילופי אש  עם חיזבאללה. בפעילות זו נהרג סמל יהונתן שרעבי ז”ל מפגיעת טיל בטנק בו שהה.

                  בימים הבאים התקדם הגדוד מערבה לאזור חירבת כסיף, במשימה להשתלט על השטחים שמהם נורות קטיושות ומרגמות לעבר ישראל.

                  הגדוד המשיך בפתיחת צירים לכיוון הישוב קנטרה ובד בבד סייע לכוחות אחרים, כמו חלוץ והחזרה לשטח מדינת ישראל של לוחם שאחיו נהרג בקרבות לבנון.

                  בבוקר יום שישי ה־11 באוגוסט הועבר הגדוד מפיקוד חטיבת הנח”ל לחטיבה 401 ושולב בנוהלי הקרב למשימה החטיבתית לפרוץ את הסלוקי ולכבוש שטחים שממערב לו. הגדוד הכניס ארבעה טנקים לחטיבת חי”ר מילואים שמשימתה הייתה לשמר את השליטה על השטח שעד הסלוקי כדי לאפשר צירים פתוחים. למחרת בשבת, הוטלה על כוח מגדוד 46 משימה לחלץ טנק שנפגע מאזור כסיף. במהלך ניסיון לחבור לחילוץ, נפגע טנק מפגיעת טיל וארבעת אנשי הצוות נהרגו: מפקד הכוח, סרן בניה ריין, סמל אורי גרוסמן, סמ”ר אדם גורן וסמ”ר אלכס בונימוביץ’.

                  הסכם הפסקת האש הושג בעוד הגדוד שוהה בוואדי סלוקי, מוכן לחצות את הוואדי מערבה להמשך המשימות. בקרבות השתתף הגדוד במבצעים ובמשימות מורכבים מאוד, במהלכם הרג ופגע במחבלים רבים. אחרון הטנקים של גדוד 46 הגיע לשטח מדינת ישראל ביום שלישי, 15 באוגוסט 2006 בשעה 10:30.

                  במלחמה זו נהרגו חמישה לוחמים, ונפצעו 16 מלוחמי הגדוד, ובהם הסמג”ד ארז סעדון. עם כל הפצועים וההרוגים, בכל זאת המשיך הגדוד בלחימה ועמד בגבורה בכל משימה שהוטלה עליו.
                </p>
              </>
            )}

            {openModal === "seven" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(2008)<br></br> עופרת יצוקה</h3>
                <p className="text-box" style={{ fontSize }}>
                  גדוד 46 השתתף בשלב התמרון הקרקעי במבצע ולחם תחת חטיבת גולני בגזרת סג'עייה שברצועת עזה.

                </p>
              </>
            )}
            {openModal === "hate" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(2014)<br></br> צוק איתן</h3>
                <p className="text-box" style={{ fontSize }}>
                  גדוד 46 לחם תחת חטיבת הנח"ל והוביל את ההתקפה על השכונות הצפוניות ברצועת עזה – בית לאהיה ובית חאנון.
                </p>
              </>
            )}
            {openModal === "nine" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>(2025-2023)<br></br> חרבות ברזל</h3>


                <img
                  src={map}
                  alt="preview"
                  className="full-image-click"
                  onClick={() => setOpen(true)}
                />


                {open && (
                  <div className="overlay" onClick={() => setOpen(false)}>
                    <img
                      src={map}
                      alt="preview"
                      className="full-image"
                    />
                  </div>
                )}
                <p className="text-box" style={{ fontSize }}>
                  גדוד 46 תמרן בעומק רצועת עזה החל מה-27.10.2023 ועד 16.10.2025.
                  בתאריך ה-07.10.2023 לחמו מפקדי הגדוד ביישובי העוטף ובמקביל להם יצאה פלוגה א׳ על גבי זחלים ממחנה נחשונים ועד לעוטף עזה. בתחילת הלחימה, הגדוד הוביל את מתקפת חטיבת ׳עקבות הברזל׳, בין משימותיו הראשונות של הגדוד היו כיבוש מוצב הספינה, מוצב באדר וכיתור מ״פ שאטי.

                  במהלך הפסקת האש הראשונה, בחודש נובמבר 2023, הגדוד היה במשימת הגנה בגזרת ג׳באליה על מנת לאפשר את שחרור החטופים. בהמשך הגדוד איתר והשמיד תת״ק, היווה כוח חיפוי ליחידות מיוחדות והיה הראשון לכבוש את כיכר פלסטין. הגדוד איתר אמל״ח רב והשמיד תשתיות אויב. את מרבית הלחימה ברצועת עזה הוביל גדוד 46 תחת פיקוד חטיבה 933, חטיבת הנח״ל. במהלך התמרון הגדוד לקח חלק ניכר בכיבוש מוצב ראעד, ביצע פשיטה על ביה״ח שיפאא׳, פשיטה לזייתון, התקפה לשכונת תל סולטאן ברפיח, מציאת פיר ה-L ואיתור וחילוץ 6 גופות חטופים. הגדוד תמרן בחאן יונס, וחילץ גופת חטוף.

                  בתאריך 19.11.2024, הוקמה פלוגה ד בגדוד, שהצטרפה מיד גם היא לתמרון ברצועת עזה במרחב רפיח. הגדוד נלחם בצפון הרצועה, וביצע התקפה למערב בית חאנון במסגרת מבצע ״תלם המחרשה״.
                  לקראת סוף התמרון, כחלק ממבצע ׳מרכבות גדעון ב׳, נלחם הגדוד בעיר עזה בשכונת ריח רדואן כאשר בין משימותיו העיקריות היו פריצת ציר ׳לוצקי׳ והכנסת גדודי הנח״ל ללחימה ביעדי הקוביות. בנוסף הגן הגדוד על המל״ק והצירים הלוגיסטיים. במלחמת חרבות ברזל הגדוד שכל 9 מלוחמיו, ולוחמים נוספים מחטיבת הנח״ל שנפלו תחת פיקודו.
                  לאחר הלחימה, עבר גדוד 46 לתעסוקה מבצעית בקו לבנון.<br>
                  </br>
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


                </p>




              </>

            )}

            {openModal === "ten" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>עדות של חייל שלחם במלחמת ששת הימים בפלוגה ג׳</h3>
                <p className="text-box" style={{ fontSize }}>
                  ״נסענו כולנו אחרי טנק המ״פ, עברנו את הקו הירוק ומיד נוצר מגע עם מערך האויב בגזרתו, פתאום נחתה על הפלוגה מכת אש חזקה, הכל היה מבולבל ריח מוזר עמד באוויר. פתאום נשמעו קריאות בקשר. הטנק של אמנון המ״פ נפגע קשה כולם חששו לגורל המ״פ. כעבור שניות מספר התברר שהפגיעה הייתה ישירה ואמנון והקשר שלו נהרגו במקום. דממה אחזה בפלוגה, הלם, כאב וחוסר וודאות, אותו אמנון שתמיד חיזק, גיבה ונטע בכולנו תחושת ניצחון נהרג. מיד הלכנו לחלץ את הגופות. המראות היו קשים. מיד נטל את הפיקוד על הפלוגה סגן כוכבי, אחד הקצינים בפלוגה, כולם התעשתו בתוך שניות מספר וכוכבי צעק בקשר: ״את הקרב הזה אנחנו מנצחים בשביל אמנון״׳. מיד כל טנקי הפלוגה פתחו באש על יעד האויב שהושמד. תעוזה כזו של חיילים בודדים מתגלה רק בקרבות אמיתיים וכך הם היו אנשי הפלוגה. מותו של אמנון במהלכים הראשונים של הקרב הותיר כאב קשה בפלוגה אך נטע נחישות- ילדים שהתבגרו והפכו ללוחמים גיבורים לתפארת המדינה. זו הייתה הפלוגה, אלו היו האנשים, זו הייתה הרעות״.
                </p>
              </>
            )}
            {openModal === "eleven" && (
              <>
                <div className="text-controls">
                  <button onClick={increaseFont}>➕</button>
                  <button onClick={decreaseFont}>➖</button>
                  <button onClick={resetFont}>🔄</button>
                </div>
                <h3 className="t" style={{ fontSize: fontSize + 4 }}>קטע עדות של מ״פ מהגדוד שפיקד באותם ימים</h3>
                <p className="text-box" style={{ fontSize }}>
                  ״כדי לשמוע את יציאת פגזי ה- 160 מ״מ שהמצרים כיוונו לעברנו, היו לנו צופים מיוחדים שזה היה כל תפקידם. הייתה להם משרוקית על הצוואר וברגע שהיינו שומעים שריקה זה היה הסימן לכולם להיכנס לבונקרים. החיים במעוז היו בתוך הבונקרים, הדברים הכי פשוטים כמו לעשות את הצרכים הפכו לסכנת חיים. בתור מפקד, הלחץ הנפשי שלי היה איום כי אם אני אומר לחייל ללכת לתצפית בחוץ, אני יודעת שהאחוזים הם גבוהים שהוא ייפצע או ייהרג. בתקופה של 4 חודשים היו לנו 17 הרוגים ועשרות פצועים. חוץ מזה מתחילות רגישויות לרעשים, למשל הרעש שנשמע בזמן שסוגרים מקרר דומה לרעש של יציאת הפגז, וכך גם בבית, בחופשה כשפתאום נסגר המקרר- הייתי קופץ כמו חתול״.
                </p>
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