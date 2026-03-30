import sys
from pathlib import Path

from fastapi.testclient import TestClient

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.main import app


client = TestClient(app)


def test_healthcheck():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_list_practice_words():
    response = client.get("/api/practice-words")

    assert response.status_code == 200
    payload = response.json()
    assert len(payload["items"]) >= 3
    assert payload["items"][0]["id"]


def test_get_practice_word_detail():
    response = client.get("/api/practice-words/sawasdee")

    assert response.status_code == 200
    payload = response.json()
    assert payload["id"] == "sawasdee"
    assert len(payload["syllables"]) == 3


def test_analyze_known_word():
    response = client.post(
        "/api/analyze",
        json={"word_id": "sawasdee", "recording_duration_ms": 1700},
    )

    assert response.status_code == 200
    payload = response.json()
    assert payload["word_id"] == "sawasdee"
    assert payload["overall_accuracy"] > 0
    assert len(payload["syllables"]) == 3


def test_analyze_unknown_word():
    response = client.post(
        "/api/analyze",
        json={"word_id": "missing-word", "recording_duration_ms": 1700},
    )

    assert response.status_code == 404
