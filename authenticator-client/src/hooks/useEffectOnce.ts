import { useEffect, useRef } from "react";


const useEffectOnce = (callback: () => void) => {
  const called = useRef(false);

  useEffect(() => {
    if (!called.current) {
      callback();
      called.current = true;
    }
  }, [callback]);
};


export default useEffectOnce;
