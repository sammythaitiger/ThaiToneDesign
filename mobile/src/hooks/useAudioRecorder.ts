import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";

type MicrophonePermission = "required" | "granted";

export function useAudioRecorder() {
  const recordingRef = useRef<Audio.Recording | null>(null);
  const [microphonePermission, setMicrophonePermission] =
    useState<MicrophonePermission>("required");

  useEffect(() => {
    let isMounted = true;

    async function syncPermission() {
      const permission = await Audio.getPermissionsAsync();

      if (!isMounted) {
        return;
      }

      setMicrophonePermission(permission.granted ? "granted" : "required");
    }

    void syncPermission();

    return () => {
      isMounted = false;
      const activeRecording = recordingRef.current;
      if (activeRecording) {
        void activeRecording.stopAndUnloadAsync().catch(() => undefined);
      }
    };
  }, []);

  async function requestPermission() {
    const permission = await Audio.requestPermissionsAsync();
    const nextPermission = permission.granted ? "granted" : "required";
    setMicrophonePermission(nextPermission);
    return nextPermission;
  }

  async function startRecording() {
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      playsInSilentModeIOS: true,
    });

    const recording = new Audio.Recording();

    await recording.prepareToRecordAsync(
      Audio.RecordingOptionsPresets.HIGH_QUALITY
    );
    await recording.startAsync();

    recordingRef.current = recording;
  }

  async function stopRecording() {
    if (!recordingRef.current) {
      return null;
    }

    const activeRecording = recordingRef.current;
    recordingRef.current = null;

    await activeRecording.stopAndUnloadAsync();
    const status = await activeRecording.getStatusAsync();

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });

    return {
      durationMs: status.durationMillis ?? 0,
      uri: activeRecording.getURI(),
    };
  }

  async function cancelRecording() {
    if (!recordingRef.current) {
      return;
    }

    const activeRecording = recordingRef.current;
    recordingRef.current = null;
    await activeRecording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
  }

  return {
    microphonePermission,
    requestPermission,
    startRecording,
    stopRecording,
    cancelRecording,
  };
}
