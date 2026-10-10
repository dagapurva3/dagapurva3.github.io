'use client'
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/canvas/Stars"), {
  ssr: false,
});

// The starfield is a GPU-heavy three.js scene. Skip it on phones to keep
// the site smooth and save battery; tablets and desktops keep it.
const StarsBackground = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (!show) return null;
  return <StarsCanvas />;
};

export default StarsBackground;
