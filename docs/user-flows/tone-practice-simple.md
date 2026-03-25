# Tone Practice - Simplified User Flow
*Version 2.0 | Core Tone Learning*

## 🎯 Goal
Practice Thai tones by recording and comparing pitch contours with native pronunciation.

## 🔄 Basic Flow
```
1. Choose Tone
   - Select from 5 tones: Mid, Low, Falling, High, Rising
   
2. Choose Word/Syllable
   - Each tone has 5-10 practice words/syllables
   - Select one to practice
   
3. Listen & Record
   - Listen to native pronunciation
   - Record your version
   - See real-time waveform
   
4. Compare Pitch
   - System analyzes recording
   - Shows normalized pitch contour comparison
   - Your recording (green) vs Native (blue)
   
5. View Results
   - Accuracy score (0-100%)
   - Basic feedback
   - Option to try again or next word
```

## 🎨 Screens

### Screen 1: Tone Selection
**Simple layout:**
```
[ Thai Tone Trainer ]
[ Dashboard ] [ Tones ] [ Shadowing ] [ Dictionary ] [ Flashcards ]

PRACTICE THAI TONES

[ MID TONE ]    [ LOW TONE ]    [ FALLING TONE ]
Accuracy: 75%   Accuracy: 60%   Accuracy: 45%

[ HIGH TONE ]   [ RISING TONE ]
Accuracy: 80%   Accuracy: 30%

Click a tone to practice
```

**Each tone card shows:**
- Tone name and symbol
- Your current accuracy
- Practice count
- "Continue" button if in progress

### Screen 2: Word Selection
**After selecting a tone:**
```
PRACTICE FALLING TONE

Choose word to practice:

[ มา ] (maa) - to come
[ กา ] (gaa) - crow
[ ขา ] (khaa) - leg
[ คา ] (khaa) - to be stuck
[ ฝา ] (faa) - lid

[ Back ] [ Random Word ]
```

**Each word shows:**
- Thai script
- Transcription
- Translation
- Click to select

### Screen 3: Practice Interface
**Clean recording interface:**
```
Word: มา (maa) - to come
Tone: Falling

[ LISTEN ] - Play native pronunciation
Waveform visualization of native audio

[ RECORD ] - Large circular button
Real-time waveform as you record

Recording controls:
[ Play ] [ Stop ] [ Re-record ]

[ Back to words ] [ Analyze ]
```

### Screen 4: Pitch Comparison
**After recording:**
```
Analysis Complete

Accuracy: 78%

Pitch Comparison:
[ Graph showing two lines ]
- Blue: Native pitch contour (normalized)
- Green: Your pitch contour (normalized)
- X-axis: Time (normalized)
- Y-axis: Pitch (normalized)

Feedback:
- "Your falling tone starts too high"
- "Try starting from lower pitch"
- "Good vowel duration"

[ Try Again ] [ Next Word ] [ Back to Tones ]
```

## 🛠️ Technical Details

### Pitch Analysis Process:
1. **Recording:** User records word (1-3 seconds)
2. **Upload:** Audio sent to Python backend
3. **Pitch Extraction:** Librosa extracts pitch contour
4. **Normalization:**
   - Time normalization: Align to same duration
   - Pitch normalization: Scale to same range
   - Remove absolute frequency differences
5. **Comparison:** Compare normalized contours
6. **Scoring:** Calculate similarity (DTW or correlation)
7. **Feedback:** Generate simple suggestions

### Normalization Explained:
- **Why normalize?** Different voices have different base frequencies
- **What we compare:** Shape of pitch contour, not absolute values
- **Result:** Fair comparison regardless of gender/voice type

### Accuracy Calculation:
- Compare normalized pitch contours
- Use Dynamic Time Warping (DTW) for time alignment
- Calculate similarity score (0-100%)
- Simple formula: 100% - (normalized distance * 100)

## ⚙️ Settings (Minimal)

### User Can:
- Adjust microphone sensitivity
- Toggle auto-play of native audio
- Choose graph visualization style
- Set recording duration (1-5 seconds)

### System Defaults:
- Recording: 3 seconds max
- Auto-play native: ON
- Show waveforms: YES
- Normalization: ALWAYS

## 📱 Mobile View

### Vertical Layout:
```
1. Tone selection (scroll horizontally)
2. Word selection (grid)
3. Recording (full-width controls)
4. Comparison (graph fills width)
```

### Touch Optimization:
- Large buttons
- Simple swipe navigation
- Minimal typing required

## 🔗 Integration Points

### With Dictionary:
- Click word to see definition
- Save practiced words to vocabulary

### With Dashboard:
- Update tone accuracy scores
- Track practice frequency
- Show progress over time

### With Flashcards:
- Create tone recognition cards
- Use practiced words in flashcards

## ✅ Success Criteria

### User Can:
1. Record and compare all 5 tones
2. See clear pitch contour visualization
3. Understand accuracy feedback
4. Track improvement over time
5. Practice specific words per tone

### Technical:
1. Pitch extraction < 2 seconds
2. Normalization accurate
3. Comparison meaningful
4. Mobile responsive
5. Offline recording possible

---

*This simplified flow focuses on core tone practice with normalized pitch comparison, removing unnecessary complexity while maintaining learning effectiveness.*