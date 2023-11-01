import { useEffect, useState } from 'react';

export function LoadingBar(){
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    let itv = setInterval(() => {
      if (currentProgress < 100) {
        const increment = Math.random() * 40;
        currentProgress += increment;
        if (currentProgress > 100) currentProgress = 100;
        setProgress(currentProgress);
      } else {
        clearInterval(itv);
      }
    }, 800);

    return () => {
      clearInterval(itv);
    };
  }, []);

  return (
    <div
      className="loading h-1 w-[0%] bg-ocean-500 transition-all duration-200 absolute z-50 top-0"
      style={{ width: `${progress}%` }}
    ></div>
  );
};