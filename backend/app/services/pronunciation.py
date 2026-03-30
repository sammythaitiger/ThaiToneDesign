from typing import List

from app.schemas import AnalyzeResponse, PracticeWord, SyllableFeedback, ThaiTone


def _mock_detected_tone(index: int, expected: ThaiTone) -> ThaiTone:
    if index % 3 == 1:
        return ThaiTone.MID
    return expected


def analyze_pronunciation(word: PracticeWord, recording_duration_ms: int) -> AnalyzeResponse:
    syllable_feedback: List[SyllableFeedback] = []

    for index, syllable in enumerate(word.syllables):
        detected_tone = _mock_detected_tone(index, syllable.tone)
        accuracy = 68 if detected_tone != syllable.tone else 91
        feedback = (
            "Lower the pitch onset and keep the contour stable."
            if detected_tone != syllable.tone
            else "Contour is close to the target tone."
        )
        syllable_feedback.append(
            SyllableFeedback(
                syllable=syllable.thai,
                expected_tone=syllable.tone,
                detected_tone=detected_tone,
                accuracy=accuracy,
                feedback=feedback,
            )
        )

    overall_accuracy = round(
        sum(item.accuracy for item in syllable_feedback) / len(syllable_feedback)
    )
    duration_delta = abs(recording_duration_ms - (len(word.syllables) * 650))
    timing_score = max(55, min(96, 96 - duration_delta // 20))
    next_step = (
        f"Repeat the word and focus on syllable {syllable_feedback[1].syllable}."
        if len(syllable_feedback) > 1 and syllable_feedback[1].accuracy < 80
        else "Move to the next word or record again for a cleaner sample."
    )

    return AnalyzeResponse(
        word_id=word.id,
        overall_accuracy=overall_accuracy,
        timing_score=timing_score,
        syllables=syllable_feedback,
        next_step=next_step,
    )
