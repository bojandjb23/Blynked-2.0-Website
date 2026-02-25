"use client";

import { useSyncExternalStore, useCallback } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function getServerSnapshot() {
  return false;
}

export function useReducedMotion(): boolean {
  const subscribe = useCallback((callback: () => void) => {
    const media = window.matchMedia(QUERY);
    media.addEventListener("change", callback);
    return () => media.removeEventListener("change", callback);
  }, []);

  const getSnapshot = useCallback(() => {
    return window.matchMedia(QUERY).matches;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
