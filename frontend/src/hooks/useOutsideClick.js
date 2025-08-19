import { useRef, useEffect } from "react";

export default function useOutsideClick(onClose, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function clickHanlder(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("click", clickHanlder , listenCapturing);
    return () => document.removeEventListener("click" , clickHanlder)
  }, []);

  return ref;
}
