from typing import Any, Dict, List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.data import PRACTICE_WORDS, get_word_by_id, list_word_summaries
from app.schemas import AnalyzeRequest, AnalyzeResponse, HealthResponse, PracticeWord
from app.services.pronunciation import analyze_pronunciation


app = FastAPI(
    title="Thai Tones API",
    version="0.1.0",
    description="MVP API for Thai tone practice and syllable-aware feedback.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health", response_model=HealthResponse)
def healthcheck() -> HealthResponse:
    return HealthResponse(status="ok", service="thai-tones-api")


@app.get("/api/practice-words")
def practice_words() -> Dict[str, Any]:
    return {"items": list_word_summaries()}


@app.get("/api/practice-words/{word_id}", response_model=PracticeWord)
def practice_word_detail(word_id: str) -> PracticeWord:
    word = get_word_by_id(word_id)
    if word is None:
        raise HTTPException(status_code=404, detail="Word not found")

    return word


@app.get("/api/practice-words-full", response_model=List[PracticeWord])
def practice_words_full() -> List[PracticeWord]:
    return PRACTICE_WORDS


@app.post("/api/analyze", response_model=AnalyzeResponse)
def analyze(request: AnalyzeRequest) -> AnalyzeResponse:
    word = get_word_by_id(request.word_id)
    if word is None:
        raise HTTPException(status_code=404, detail="Word not found")

    return analyze_pronunciation(word=word, recording_duration_ms=request.recording_duration_ms)
