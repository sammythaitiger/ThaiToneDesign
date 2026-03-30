from typing import List, Optional

from app.schemas import PracticeWord, PracticeWordSummary, ThaiTone, WordSyllable


PRACTICE_WORDS: List[PracticeWord] = [
    PracticeWord(
        id="maa",
        thai="มา",
        transcription="maa",
        english="to come",
        syllables=[
            WordSyllable(thai="มา", transcription="maa", tone=ThaiTone.MID),
        ],
    ),
    PracticeWord(
        id="sawasdee",
        thai="สวัสดี",
        transcription="sa-wat-dii",
        english="hello",
        syllables=[
            WordSyllable(thai="ส", transcription="sa", tone=ThaiTone.MID),
            WordSyllable(thai="วัส", transcription="wat", tone=ThaiTone.LOW),
            WordSyllable(thai="ดี", transcription="dii", tone=ThaiTone.MID),
        ],
    ),
    PracticeWord(
        id="khob-khun",
        thai="ขอบคุณ",
        transcription="khop-khun",
        english="thank you",
        syllables=[
            WordSyllable(thai="ขอบ", transcription="khop", tone=ThaiTone.LOW),
            WordSyllable(thai="คุณ", transcription="khun", tone=ThaiTone.HIGH),
        ],
    ),
]


def list_word_summaries() -> List[PracticeWordSummary]:
    return [
        PracticeWordSummary(
            id=word.id,
            thai=word.thai,
            transcription=word.transcription,
            english=word.english,
            syllable_count=len(word.syllables),
        )
        for word in PRACTICE_WORDS
    ]


def get_word_by_id(word_id: str) -> Optional[PracticeWord]:
    return next((word for word in PRACTICE_WORDS if word.id == word_id), None)
