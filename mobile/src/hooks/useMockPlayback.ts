import { useEffect, useRef, useState } from "react";

export type PlaybackStatus = "idle" | "loading" | "playing" | "paused";

type UseMockPlaybackOptions = {
  durationMs?: number;
  loadingMs?: number;
};

export function useMockPlayback({
  durationMs = 2400,
  loadingMs = 500,
}: UseMockPlaybackOptions = {}) {
  const [activeSourceId, setActiveSourceId] = useState<string | null>(null);
  const [status, setStatus] = useState<PlaybackStatus>("idle");
  const [progress, setProgress] = useState(0);
  const startedAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timer = setTimeout(() => {
      setStatus("playing");
      setProgress(0.04);
    }, loadingMs);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingMs, status]);

  useEffect(() => {
    if (status !== "playing") {
      return;
    }

    if (startedAtRef.current === null) {
      startedAtRef.current = Date.now() - progress * durationMs;
    }

    const timer = setInterval(() => {
      const startedAt = startedAtRef.current ?? Date.now();
      const nextProgress = Math.min((Date.now() - startedAt) / durationMs, 1);
      setProgress(nextProgress);

      if (nextProgress >= 1) {
        startedAtRef.current = null;
        setStatus("idle");
        setActiveSourceId(null);
        setProgress(0);
      }
    }, 80);

    return () => {
      clearInterval(timer);
    };
  }, [durationMs, status]);

  const play = (sourceId: string) => {
    startedAtRef.current = null;
    setActiveSourceId(sourceId);
    setStatus("loading");
    setProgress(0);
  };

  const pause = () => {
    setStatus("paused");
  };

  const resume = () => {
    if (!activeSourceId) {
      return;
    }

    startedAtRef.current = Date.now() - progress * durationMs;
    setStatus("playing");
  };

  const toggle = (sourceId: string) => {
    if (activeSourceId !== sourceId) {
      play(sourceId);
      return;
    }

    if (status === "playing") {
      pause();
      return;
    }

    if (status === "paused") {
      resume();
      return;
    }

    play(sourceId);
  };

  const getStatus = (sourceId: string): PlaybackStatus => {
    if (activeSourceId !== sourceId) {
      return "idle";
    }

    return status;
  };

  const getProgress = (sourceId: string) => {
    return activeSourceId === sourceId ? progress : 0;
  };

  useEffect(() => {
    if (status !== "paused") {
      return;
    }

    startedAtRef.current = null;
  }, [status]);

  return {
    getProgress,
    getStatus,
    toggle,
  };
}
