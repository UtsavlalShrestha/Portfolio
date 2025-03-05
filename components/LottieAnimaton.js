import { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });



export default function LottieAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../public/animation.json'), // Adjust path if needed
      });
    }
  }, []);

  return <div ref={containerRef} style={{ width: 300, height: 300 }} />;
}
