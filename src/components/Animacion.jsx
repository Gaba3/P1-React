import { useEffect } from 'react';

const AnimatedElement = () => {
  useEffect(() => {
    const element = document.querySelector(".element-img");

    const updateAnimation = () => {
      const viewportWidth = window.innerWidth - 250;
      const translateValue = viewportWidth;

      const keyframes = [
        { transform: `translate(0, 0)` },
        { transform: `translate(${translateValue}px, 0)` },
        { transform: `translate(0, 0)` }
      ];
      element.animate(keyframes, { duration: 4000, iterations: Infinity });
    };

    updateAnimation();
    window.addEventListener('resize', updateAnimation);

    return () => {
      window.removeEventListener('resize', updateAnimation);
    };
  }, []);

  return <img className="element-img" src="assets/img/gafas-animation.png" alt="Lentes de sol" />;
};

export default AnimatedElement;
