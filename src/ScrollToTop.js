import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import React from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation;

  // to scroll to top when component mounts
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
