import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./types";

export const Portal = ({ target = "root", children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById(target)!)
    : null;
};
