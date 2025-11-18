import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { LenisContext } from '../context/LenisContext';

function SmoothScrollWrapper({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      wheelMultiplier: 1.0,
    });

    setLenis(newLenis);

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export default SmoothScrollWrapper;
