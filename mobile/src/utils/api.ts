import { Platform } from "react-native";

import {
  AnalyzeResponse,
  PracticeWord,
  PracticeWordSummary,
} from "../types/practice";

function getApiBaseUrl() {
  const envBaseUrl = process.env.EXPO_PUBLIC_API_BASE_URL?.trim();

  if (envBaseUrl) {
    return envBaseUrl;
  }

  if (Platform.OS === "web") {
    return "http://127.0.0.1:8000";
  }

  // Expo Go on a physical device needs the Mac's LAN IP, not localhost.
  if (Platform.OS === "android") {
    return "http://192.168.1.4:8000";
  }

  if (Platform.OS === "ios") {
    return "http://192.168.1.4:8000";
  }

  return "http://127.0.0.1:8000";
}

const API_BASE_URL = getApiBaseUrl();

async function requestJson<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchPracticeWords() {
  return requestJson<{ items: PracticeWordSummary[] }>("/api/practice-words");
}

export async function fetchPracticeWord(wordId: string) {
  return requestJson<PracticeWord>(`/api/practice-words/${wordId}`);
}

export async function analyzeWord(wordId: string, recordingDurationMs = 1800) {
  return requestJson<AnalyzeResponse>("/api/analyze", {
    method: "POST",
    body: JSON.stringify({
      word_id: wordId,
      recording_duration_ms: recordingDurationMs,
    }),
  });
}
