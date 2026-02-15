import { useState } from "react";
import "./Picture.css"
import img1 from "../assets/pic/1.jpeg"
import img2 from "../assets/pic/2.jpeg"
import img3 from "../assets/pic/3.jpeg"
import img4 from "../assets/pic/4.jpeg"
import img5 from "../assets/pic/5.jpeg"
import img6 from "../assets/pic/6.jpeg"
import img7 from "../assets/pic/7.jpeg"
import img8 from "../assets/pic/8.jpeg"
import img9 from "../assets/pic/9.jpeg"
import img10 from "../assets/pic/10.jpeg"
import img11 from "../assets/pic/11.jpeg"
import img12 from "../assets/pic/12.jpeg"
import img13 from "../assets/pic/13.jpeg"
import img14 from "../assets/pic/14.jpeg"
import img15 from "../assets/pic/15.jpeg"

function Picture() {
  const images = [img1, img2, img3 , img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  
    const [selectedIndex, setSelectedIndex] = useState(null);



// תמונה נבחרת:
const selected = selectedIndex !== null ? images[selectedIndex] : null;

// פונקציות ניווט
const prevImage = (e) => {
  e.stopPropagation(); // כדי שלא תסגור את המודאל
  setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
};

const nextImage = (e) => {
  e.stopPropagation();
  setSelectedIndex((selectedIndex + 1) % images.length);
};
  

  return (
    <>

      <div className="pictures">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
           onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

    {selected && (
  <div className="modal1" onClick={() => setSelectedIndex(null)}>
    <div className="modal-content">
      <button className="close-btn" onClick={() => setSelectedIndex(null)}>✕</button>
      <button className="arrow left" onClick={prevImage}>❮</button>
      <img src={selected} alt="Selected" className="modal-image"/>
      <button className="arrow right" onClick={nextImage}>❯</button>
    </div>
  </div>
)}
    </>
  );
}

export default Picture;
