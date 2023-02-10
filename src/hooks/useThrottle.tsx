
import { useEffect, useRef } from 'react';

export const useThrottle = (callback:Function, delay: number = 200, deps: Array<any> = []) => {
  const lastRan = useRef(Date.now());

  useEffect(
    () => {
      const handler = setTimeout(function() {
        if (Date.now() - lastRan.current >= delay) {
          callback();
          lastRan.current = Date.now();
        }
      }, delay - (Date.now() - lastRan.current));

      return () => {
        clearTimeout(handler);
      };
    },
    [delay, ...deps],
  );
};

export default useThrottle;

/**
 * const [inputValue, setInputValue] = useState("");
 * useThrottle(() => {
 * make API call
 * }, 500);
 */