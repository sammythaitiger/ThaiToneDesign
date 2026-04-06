import { useEffect, useRef } from "react";

import { MotionLayoutPreset, animateNextLayout } from "../utils/motion";

export function useMotionTransition(
  trigger: string,
  preset: MotionLayoutPreset = "standard"
) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    animateNextLayout(preset);
  }, [preset, trigger]);
}
