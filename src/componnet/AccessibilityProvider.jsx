import { createContext, useContext, useEffect, useState } from "react";

const AccessibilityContext = createContext();

export function AccessibilityProvider({ children }) {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("large-text", largeText);
    document.body.classList.toggle("high-contrast", highContrast);
  }, [largeText, highContrast]);
  return (
    <AccessibilityContext.Provider
      value={{
     
        toggleLargeText: () => setLargeText(prev => !prev),
        toggleHighContrast: () => setHighContrast(prev => !prev),
        reset: () => {
          setLargeText(false);
          setHighContrast(false);
        }
      }}
    >
     
        {children}
   
    </AccessibilityContext.Provider>
  );
}

export const useAccessibility = () => useContext(AccessibilityContext);
