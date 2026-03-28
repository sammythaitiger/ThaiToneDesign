# Curated content for Shadowing
*No YouTube: video and markup are supplied by the product (you or your team); the client only plays and tracks progress.*

## Why this document exists

The user **does not** browse YouTube or **generate** subtitles at runtime. The catalog shows **lessons** from your library: each lesson = a video file + machine-readable **cues** (time + text + optional syllables/tones).

## Entities

### `ShadowingLesson` (catalog)

| Field | Description |
|------|-------------|
| `id` | Stable UUID/slug |
| `title`, `description` | For list and player screen |
| `categoryId` | Greetings, Food, … |
| `durationSec` | Expected duration |
| `thumbnailUrl` | Grid thumbnail |
| `video` | See below |
| `cues` | Array of subtitle/phrase entries for karaoke and seek |
| `relatedWordIds` | Optional link to dictionary |

### `video` (playback source)

One of these (MVP → scale):

1. **CDN URL** — direct `.mp4` or **HLS** (`m3u8`); client: `expo-av`.
2. **Multiple qualities** — array of `{ quality, url }` for the menu as in the wireframe.
3. **Local bundle** — demo/offline pack only (size-limited).

No YouTube iframe / Data API in the app.

### `Cue` (markup item)

```json
{
  "startMs": 5000,
  "endMs": 8200,
  "text": "สวัสดีครับ",
  "transcription": "sà-wàt-dii khráp",
  "english": "Hello",
  "syllables": [
    { "text": "ส", "tone": "mid", "startMs": 5000, "endMs": 5600 },
    { "text": "วัส", "tone": "low", "startMs": 5600, "endMs": 6800 }
  ]
}
```

MVP minimum: `startMs`, `endMs`, `text`. The rest follows as the pipeline matures.

### `ShadowingProgress` (server or local)

Per user + `lessonId`: `lastPositionMs`, `percentComplete`, `completedAt`, counters for loops / shadow takes — as in the **Lesson complete** wireframe.

## Pipeline on your side (not in the app)

1. Record or import video → upload to CDN / object storage.
2. Produce **cues**: manually in a tool, or semi-automatically via **offline** scripts (MFA/Whisper/etc.) — internal only; do not promise users in-app auto-generation.
3. Publish **manifest** (JSON or API endpoint): lesson list + video URLs + cues.
4. App: pull manifest → cache → player + karaoke.

## Compared to the old approach

| Before | Now |
|--------|-----|
| YouTube search, API | Catalog of your lessons |
| Whisper at runtime for users | Markup baked into `cues` |
| Dependence on external platform | Control of licensing and quality |

---

*Updated: 2026-03-28*
