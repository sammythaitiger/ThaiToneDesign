# Shadowing Practice - Simplified
*Version 2.0 | Syllable-by-Syllable Comparison*

## 🎯 Goal
Practice Thai pronunciation by imitating YouTube videos, with syllable-level pitch comparison.

## 🔄 Basic Flow
```
1. Find Thai Video
   - Search or browse YouTube
   - Select Thai language content
   
2. Generate Subtitles
   - Auto-generate Thai subtitles with Whisper
   - Get timestamps for each phrase
   
3. Select Phrase to Practice
   - Click on subtitle segment
   - View phrase text with syllable breakdown
   
4. Record & Compare
   - Listen to native phrase
   - Record your version
   - Compare syllable-by-syllable
   - See pitch contours for each syllable
   
5. Review Results
   - Overall accuracy
   - Per-syllable feedback
   - Option to repeat or continue
```

## 🎨 Screens

### Screen 1: Video Browser
**Simple search interface:**
```
SHADOWING PRACTICE

Search Thai videos:
[ Search bar: "Thai news", "conversation", etc. ]

Or browse categories:
[ News ] [ Conversation ] [ Drama ] [ Education ]

Recent searches:
- Thai language lesson
- Thai news today
- Thai drama clip

[ My Saved Videos ] [ Continue Last Session ]
```

### Screen 2: Video Player with Subtitles
**After selecting video:**
```
Video: Thai News Report - Episode 5

[ YouTube Player ]
[ Play ] [ Pause ] [ 0.5x ] [ 1x ] [ 1.5x ]

Subtitles (auto-generated):
00:05 สวัสดีครับ (Hello)
00:08 วันนี้เราจะมาพูดถึง... (Today we will talk about...)
00:12 เรื่องสภาพอากาศ... (about the weather...)

Click a subtitle line to practice it

[ Back to Search ] [ Practice Selected ]
```

### Screen 3: Phrase Practice
**After clicking subtitle:**
```
Practice Phrase: สวัสดีครับ (Hello)

Phrase Breakdown:
สวัสดีครับ = ส-วัส-ดี-ครับ
4 syllables

Syllable Details:
1. ส (sà) - Mid tone
2. วัส (wàt) - Low tone  
3. ดี (dii) - Mid tone
4. ครับ (khráp) - High tone

Native Audio:
[ Play Phrase ] [ Play Slow: 0.75x ] [ Loop ]

Recording:
[ RECORD ] - Record your version
Waveform display during recording

[ Back to Video ] [ Analyze ]
```

### Screen 4: Syllable Comparison Results
**After recording:**
```
Analysis Complete

Overall Accuracy: 75%

Syllable-by-Syllable Comparison:

1. ส (Mid Tone)
   Accuracy: 90% ✓
   [ Pitch graph: Your vs Native ]
   Feedback: "Good mid tone"

2. วัส (Low Tone)
   Accuracy: 60% ⚠
   [ Pitch graph: Your pitch too high ]
   Feedback: "Low tone should be lower"

3. ดี (Mid Tone)
   Accuracy: 85% ✓
   [ Pitch graph: Good match ]
   Feedback: "Slightly too short"

4. ครับ (High Tone)
   Accuracy: 65% ⚠
   [ Pitch graph: Rising too slowly ]
   Feedback: "High tone needs sharper rise"

Timing: Good pace between syllables
Overall: Good, focus on low and high tones

[ Practice Problem Syllables ] [ Try Again ] [ Next Phrase ]
```

## 🛠️ Technical Process

### 1. Subtitle Generation
```
YouTube Video → Extract Audio → Whisper Transcription → Thai Text + Timestamps
```

### 2. Syllable Segmentation
```
Thai Text → Syllable Boundary Detection → Syllable List with Tones
```

### 3. Audio Alignment
```
Native Audio + Syllable Timestamps → Extract Audio per Syllable
User Recording + Same Syllable Boundaries → Extract Audio per Syllable
```

### 4. Per-Syllable Analysis
```
For each syllable:
  1. Extract pitch contour (normalized)
  2. Compare with native pitch contour
  3. Calculate similarity score (0-100%)
  4. Generate feedback
```

### 5. Combined Results
```
Average syllable scores = Overall accuracy
Identify weakest syllables
Generate improvement suggestions
```

## 📝 Data Flow

### From YouTube to Practice:
```
1. User selects YouTube video
2. System extracts audio (or uses available)
3. Whisper transcribes to Thai with timestamps
4. Thai text segmented into syllables
5. Syllables analyzed for tone patterns
6. Ready for practice
```

### During Practice:
```
1. User records phrase
2. Audio uploaded to backend
3. Align with native audio (DTW)
4. Apply same syllable boundaries
5. Extract pitch per syllable
6. Compare per syllable
7. Return results
```

## ⚙️ Settings & Options

### Basic Controls:
- **Playback speed:** 0.5x, 0.75x, 1x, 1.25x, 1.5x
- **Auto-play:** Play native audio before recording
- **Loop:** Repeat phrase automatically
- **Recording length:** Auto-stop after phrase ends

### Display Options:
- **Show syllable boundaries:** On/Off
- **Tone colors:** Color-code syllables by tone
- **Waveform:** Show during recording
- **Graph detail:** Simple/Detailed pitch graphs

## 📱 Mobile Experience

### Vertical Layout:
```
[ Video thumbnail ]
[ Phrase text with syllable breaks ]
[ Native audio controls ]
[ Record button ]
[ Results: Scroll through syllables ]
```

### Touch Interactions:
- Tap syllable to focus on it
- Swipe between syllable analyses
- Pinch to zoom pitch graphs
- Tap+hold to hear syllable in isolation

## 🎯 Learning Features

### Focused Practice:
- **Repeat problem syllables:** Practice just the syllables you struggle with
- **Slow motion:** Practice at reduced speed
- **Tone isolation:** Practice specific tones across different syllables
- **Pattern practice:** Work on common tone sequences

### Progress Tracking:
- Track accuracy per tone (across all shadowing)
- Track improvement on problem syllables
- Note which syllable positions are difficult
- Monitor pacing between syllables

## 🔗 Integration with Other Modules

### With Tone Practice:
- Same pitch comparison algorithm
- Shared syllable segmentation
- Consistent feedback format
- Linked practice recommendations

### With Dictionary:
- Click on word in subtitles → Dictionary lookup
- Save phrases to vocabulary
- Practice words in context

### With Dashboard:
- Track shadowing time and accuracy
- Show progress on tone mastery from shadowing
- Recommend videos based on weak tones

## ✅ Success Criteria

### For Users:
- Can see clear syllable-by-syllable comparison
- Understand which specific syllables need work
- Improve accuracy on problem tones
- Feel confident imitating natural speech

### Technical:
- Whisper transcription accuracy for Thai > 90%
- Syllable boundary detection accurate
- Pitch comparison meaningful per syllable
- Processing time < 10 seconds total

## 🚀 Implementation Phases

### Phase 1: Basic Shadowing
1. YouTube video embedding
2. Manual phrase selection (user clicks subtitles)
3. Simple recording and playback
4. Whole-phrase accuracy score

### Phase 2: Syllable Analysis
1. Automatic syllable segmentation
2. Per-syllable pitch extraction
3. Syllable-by-syllable comparison
4. Detailed per-syllable feedback

### Phase 3: Enhanced Features
1. Automated difficulty assessment
2. Personalized video recommendations
3. Progress tracking across sessions
4. Offline practice capability

## 📋 Next Steps

### Design Tasks:
1. Create syllable visualization for subtitles
2. Design per-syllable comparison interface
3. Plan recording feedback with syllable detection
4. Create practice flow for problem syllables

### Development Tasks:
1. Integrate Whisper for Thai transcription
2. Implement syllable segmentation for Thai
3. Build syllable-aligned pitch comparison
4. Create shadowing session tracking

---

*This simplified shadowing flow focuses on syllable-level comparison, providing targeted feedback for improving Thai pronunciation through imitation of native speakers.*