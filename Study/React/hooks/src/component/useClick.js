import { useEffect, useRef } from "react";

const UseClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") {
      console.warn("onClick should be a function");
      return;
    }

    const handleClick = (event) => {
      onClick(event);
    };

    if (element.current) {
      element.current.addEventListener("click", handleClick);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener("click", handleClick);
      }
    };
  }, [onClick]);

  // 올바른 방법: ref를 반환하지 말고, 직접 element를 반환
  return element;
};

export default UseClick;
