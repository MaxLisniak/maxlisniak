import Slide from "./components/Slide";
import Arrow from "./components/Arrow";
import { useState, useEffect } from "react";

function App() {
  const images = [
    "./assets/nature.jpg",
    "./assets/nature2.jpg",
    "./assets/news1.jpg"
  ]
  const [currentImg, setCurrentImg] = useState(0);

  const slides = images.map(function(image_url, i){
    return (
      <Slide url={image_url} alt={"Image " + i} key={i} id={i} currentImg={currentImg} />
    )
  })
  useEffect(() => {
    if (currentImg > slides.length - 1) setCurrentImg(0);
    if (currentImg < 0) setCurrentImg(slides.length - 1);
  })

  return (
    <div className="wrap">
      <Arrow id="arrow-left" handleClick={()=>setCurrentImg(currentImg-1)} />
     
      <div id="slider">
        {slides}
      </div>

      <Arrow id="arrow-right" handleClick={()=>setCurrentImg(currentImg+1)} />
    </div>
  );
}

export default App;
