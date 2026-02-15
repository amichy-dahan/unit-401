import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import pic1 from "../assets/1.png"
import pic2 from "../assets/2.png"
function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>

     {open && <div className="menu-overlay" onClick={() => setOpen(false)}></div>}
     
  <div className="sec">
   
   

 <nav className="navbar-page">
  <div className="mobile-menu-icon" onClick={() => setOpen(!open)}>
    ☰
  </div>
  
  <div className={`links-container right ${open ? "open" : ""}`}>
   
    <Link onClick={() => setOpen(!open)} className="go" to="/">דף הבית</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/about">נזכור את כולם</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/story">סיפורי גבורה</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/picture"> תמונות</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/worm">מלחמות ישראל</Link>
  

     
  </div>
      
      <div className="c1">
            <img className="pic1" src={pic2} alt="" />
      </div>
      <div className="c2">
            <img className="pic2" src={pic1} alt="" />
      </div>
      
 
</nav>
  </div>
    </>


  );
}

export default Navbar;