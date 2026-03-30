# Thai Tones Backend MVP

## Purpose
This backend provides the first development API for tone practice.
It currently serves:

- `GET /health`
- `GET /api/practice-words`
- `POST /api/analyze`

The analysis response is mocked for now, but the response shape is ready for a future MFA-based implementation.

## Run locally
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload --app-dir backend
```

## Example request
```bash
curl -X POST http://127.0.0.1:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"word_id":"sawasdee","recording_duration_ms":1700}'
```

## Next implementation step
Replace `backend/app/services/pronunciation.py` mock logic with:

1. uploaded audio preprocessing
2. MFA alignment
3. pitch contour extraction
4. syllable-by-syllable scoring
