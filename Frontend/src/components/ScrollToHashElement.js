import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  const hashElement = useMemo(() => {
    const hash = location.hash;
    const removeHashCharacter = (str) => str.slice(1);

    if (hash) {
      return document.getElementById(removeHashCharacter(hash));
    }
    return null;
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hashElement, location]);

  return null;
};

export default ScrollToHashElement;
