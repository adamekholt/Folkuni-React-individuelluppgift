import { useState, useEffect } from 'react';

export default function useConfetti(duration = 5000) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isActive;
}
