import { useState, useEffect } from "react";

const ParallaxScrollY = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return offsetY;
};
export default ParallaxScrollY;

// Se usa en cada imagen o componente que se quiere usar este efecto
// style={{transform: `translateY(${offsetY * 0.08}px)`}}
