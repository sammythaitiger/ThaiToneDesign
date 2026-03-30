import { useEffect, useMemo, useState } from "react";
import {
  getRecordingPermissionsAsync,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  RecordingPresets,
  useAudioRecorder as useExpoAudioRecorder,
  useAudioRecorderState,
} from "expo-audio";

type MicrophonePermission = "required" | "granted";

export function useAudioRecorder() {
  const recorder = useExpoAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const recorderState = useAudioRecorderState(recorder, 250);
  const [microphonePermission, setMicrophonePermission] =
    useState<MicrophonePermission>("required");

  useEffect(() => {
    let isMounted = true;

    async function syncPermission() {
      const permission = await getRecordingPermissionsAsync();

      if (!isMounted) {
        return;
      }

      setMicrophonePermission(permission.granted ? "granted" : "required");
    }

    void syncPermission();

    return () => {
      isMounted = false;
      if (recorderState.isRecording) {
        void recorder.stop().catch(() => undefined);
      }
    };
  }, [recorder, recorderState.isRecording]);

  async function requestPermission() {
    const permission = await requestRecordingPermissionsAsync();
    const nextPermission = permission.granted ? "granted" : "required";
    setMicrophonePermission(nextPermission);
    return nextPermission;
  }

  async function startRecording() {
    await setAudioModeAsync({
      allowsRecording: true,
      playsInSilentMode: true,
    });
    await recorder.prepareToRecordAsync();
    recorder.record();
  }

  async function stopRecording() {
    if (!recorderState.canRecord && !recorderState.isRecording) {
      return null;
    }

    await recorder.stop();
    const status = recorder.getStatus();

    await setAudioModeAsync({
      allowsRecording: false,
    });

    return {
      durationMs: status.durationMillis ?? 0,
      uri: status.url,
    };
  }

  async function cancelRecording() {
    if (!recorderState.canRecord && !recorderState.isRecording) {
      return;
    }

    await recorder.stop();
    await setAudioModeAsync({
      allowsRecording: false,
    });
  }

  return useMemo(() => ({
    microphonePermission,
    requestPermission,
    startRecording,
    stopRecording,
    cancelRecording,
  }), [microphonePermission, recorder, recorderState.canRecord, recorderState.isRecording]);
}
