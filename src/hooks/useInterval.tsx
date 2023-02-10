import { useState, useEffect, useRef } from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null && delay > 0) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    } else {
      tick();
    }
  }, [delay]);
};

export default useInterval


/**
 * const [count, setCount] = useState(0);
 * useInterval(() => {
 *  setCount(count + 1);
}, 1000);
 */