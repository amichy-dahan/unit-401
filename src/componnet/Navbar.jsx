import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
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
    <Link onClick={() => setOpen(!open)} className="go" to="/">סיפורי גבורה</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/"> תמונות</Link>
    <Link onClick={() => setOpen(!open)} className="go" to="/worm">מלחמות ישראל</Link>
  

     
  </div>
      
      <div className="c1">
            <img className="pic1" src="2.png" alt="" />
      </div>
      <div className="c2">
            <img className="pic2" src="1.png" alt="" />
      </div>
      
 
</nav>
  </div>
    </>


  );
}

export default Navbar;