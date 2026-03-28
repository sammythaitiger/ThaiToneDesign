# Shadowing Practice - Simplified
*Version 3.0 | Curated lessons | Syllable-by-syllable comparison*

## 🎯 Goal
Practice Thai pronunciation by imitating **curated native-speaker video** (your lesson library), with syllable-level pitch comparison. **No YouTube** in the app: video URLs and subtitle/cue data ship with each lesson.

## 🔄 Basic Flow
```
1. Browse Lesson Library
   - Categories (Greetings, Food, …)
   - Search lesson titles / tags
   - Continue watching / Resume

2. Open a Lesson
   - Stream or play cached video (MP4 / HLS from your CDN)
   - Subtitles driven by pre-authored cues (time + text + optional syllables)

3. Practice Along
   - Tap a cue or syllable chip → seek video
   - A-B loop, speed control, replay sentence
   - Optional: record own line → same analysis as Tone Practice

4. Record & Compare (when enabled)
   - Listen to native phrase (from cue timing)
   - Record your version
   - Compare syllable-by-syllable

5. Review Results
   - Overall accuracy
   - Per-syllable feedback
   - Lesson complete → next lesson / back to library
```

## 🎨 Screens

### Screen 1: Lesson Library
```
SHADOWING

Continue watching:
[ thumb ] Greetings · 2 min · Mid/Low focus · [ Resume ]

Categories:
[ Daily ] [ Food ] [ Travel ]

All lessons:
[ thumb ] สวัสดี — hello chain · 90s · Tones: M L M
[ thumb ] Ordering food · 3 min

[ Pull to refresh manifest ]
```

### Screen 2: Lesson Player
```
Lesson: Greetings

[ Video player — expo-av, your video URL ]
[ Play ] [ Pause ] [ 0.75x ] [ 1x ] [ 1.25x ] [ A-B loop ]

Subtitles (from cues, karaoke by syllable):
สวัสดี ครับ  ผม ชื่อ …
[Mid][Low][High] …

Tap syllable/cue to seek · Long-press word → Dictionary (optional)

[ Shadow: record ] (optional)
[ Back to library ]
```

### Screen 3: Phrase / Line Practice
```
Target: สวัสดีครับ (Hello)

Breakdown: ส-วัส-ดี-ครับ (4 syllables)

Native:
[ Play reference ] [ Slow ] [ Loop ]

[ RECORD ] … [ Analyze ]
```

### Screen 4: Syllable Comparison Results
*(Same structure as previous spec: per-syllable scores, pitch feedback, repeat / next.)*

## 🛠️ Technical Process

### 1. Content (authoring — not in the client)
```
Video file → CDN / storage
Authoring → cue JSON (timestamps + Thai + optional syllables/tones)
Manifest → API or static JSON listing lessons
```

### 2. Client playback
```
Load lesson manifest → pick video URL + cues → expo-av + synced chips
```

### 3. Syllable segmentation & analysis
*(Unchanged from tone module: same backend alignment and pitch comparison when user records.)*

```
Thai text → syllable boundaries (PyThaiNLP / known from cue)
User recording → MFA/DTW → per-syllable pitch compare
```

## 📝 Data Flow

### From lesson asset to practice readiness
```
1. App fetches lesson list (manifest)
2. User opens lesson → video URI + cues available (cached offline if downloaded)
3. No user-facing transcription step — cues are pre-shipped
```

### During practice
*(Same as before: upload or local process recording, align, per-syllable scores.)*

## 🔗 Integration with Other Modules

- **Tone Practice:** same comparison pipeline.
- **Dictionary:** optional deep link from cue word to word id.
- **Dashboard:** shadowing time, completion, weak tones from shadowing.

## ✅ Success Criteria

### Users
- Smooth playback of **your** lessons; subtitles stay in sync with cues.
- Clear syllable-level feedback when recording is enabled.

### Technical
- Lesson manifest and video URLs versioned; app handles stale cache.
- Processing time for analysis unchanged (target &lt; 5–10 s as in tone module).

### Content
- Cue timing QA on a sample of lessons before release.

## 🚀 Implementation Phases

### Phase 1
1. Manifest + lesson list UI
2. `expo-av` player + cue-driven subtitle strip
3. Progress: resume / complete

### Phase 2
1. Recording + per-syllable analysis (reuse Word Practice backend)
2. Offline download of selected lessons (premium)

### Phase 3
1. Richer cues (syllable-level karaoke), related vocabulary → flashcards

---

*Curated-content model detail: [../curated-shadowing-content.md](../curated-shadowing-content.md)*  
*Wireframe: [../wireframes/shadowing.md](../wireframes/shadowing.md)*
