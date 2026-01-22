import { useState } from "react";
import "./AccessibilityMenu.css";
import { useAccessibility } from "./AccessibilityProvider";

export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const {
    toggleLargeText,
    toggleHighContrast,
    reset
  } = useAccessibility();
  return (
    <>
      {/* כפתור */}
      <button
        className="accessibility-btn"
        onClick={() => setOpen(!open)}
        aria-label="נגישות"
      >
        ♿
      </button>

      {/* תפריט */}
     <div className={`accessibility-menu ${open ? "open" : ""}`}>
        <h3>נגישות</h3>
        <button onClick={toggleLargeText}>הגדלת טקסט</button>
        <button onClick={toggleHighContrast}>ניגודיות גבוהה</button>
        <button onClick={reset}>איפוס</button>
      </div>
    </>
  );
}
