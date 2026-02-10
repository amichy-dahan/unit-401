import AccessibilityMenu from "./componnet/AccessibilityMenu";
import { AccessibilityProvider } from "./componnet/AccessibilityProvider";
import Navbar from "./componnet/Navbar";
import About from "./pages/About";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Worm from "./pages/Worm";
import SoldierPage from "./pages/SoldierPage";
import Story from "./pages/Story";

function App() {
  

  return (
  
    <HashRouter>
        <AccessibilityProvider>

      
          <AccessibilityMenu/>
         <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/worm" element={<Worm/>}/>
         <Route path="/soldier/:id" element={<SoldierPage/>} />
          <Route path="/story" element={<Story/>} />
      </Routes>
        </AccessibilityProvider>
    </HashRouter>
  )
}

export default App
