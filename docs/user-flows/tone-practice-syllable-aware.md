# Tone Practice - Syllable-Aware Design
*Version 3.0 | Focus on Syllable-Level Tone Analysis*

## 🎯 Core Insight
Thai words consist of syllables, each with its own tone. For accurate pronunciation analysis, we must analyze at syllable level, not just whole words.

## 📝 Key Concepts

### 1. Syllable Structure
- **Single-syllable words:** One tone (e.g., "มา" - falling tone)
- **Multi-syllable words:** Multiple tones (e.g., "สวัสดี" = ส-วัส-ดี, each with tone)
- **Tone patterns:** Sequences like "mid-low-falling"

### 2. Analysis Approach
- Segment recording into syllables
- Extract pitch contour for each syllable
- Compare syllable-by-syllable with native
- Calculate accuracy per syllable and overall

## 🔄 Updated User Flow

### Flow: Practice a Word (Syllable-Aware)
```
1. Select Tone Category
   - Mid, Low, Falling, High, Rising
   - Or "All tones" for mixed practice
   
2. Choose Word
   - Words categorized by syllable count
   - Single-syllable words for tone isolation
   - Multi-syllable words for tone sequences
   
3. View Word Breakdown
   - See syllables separated
   - Each syllable shows: Thai script, tone, transcription
   - Visual tone pattern display
   
4. Listen & Study
   - Play native pronunciation (whole word)
   - Option to play individual syllables
   - View syllable timing visualization
   
5. Record
   - Record whole word
   - Real-time syllable detection feedback
   - Visual indicators for syllable boundaries
   
6. Analysis & Comparison
   - Automatic syllable segmentation
   - Per-syllable pitch comparison
   - Overall accuracy + per-syllable scores
   - Visual feedback on problem syllables
```

## 🎨 Screen Designs

### Screen 1: Word Selection (Enhanced)
```
PRACTICE TONES

Filter by:
[ Single Syllable ] [ 2 Syllables ] [ 3+ Syllables ] [ All ]

Tone Focus:
[ Mid ] [ Low ] [ Falling ] [ High ] [ Rising ] [ Mixed ]

Word List:

[ มา ] (maa) - to come
Syllables: 1 | Tone: Falling

[ สวัสดี ] (sà-wàt-dii) - hello  
Syllables: 3 | Pattern: Mid-Low-Mid

[ ขอบคุณ ] (khàwp-khun) - thank you
Syllables: 2 | Pattern: Low-High

[ อาหาร ] (aa-hǎan) - food
Syllables: 2 | Pattern: Mid-Rising
```

### Screen 2: Word Practice Interface
**Shows syllable breakdown:**
```
Word: สวัสดี (sà-wàt-dii) - hello

Syllable Breakdown:
┌─────────────┬─────────────┬─────────────┐
│  ส (sà)     │  วัส (wàt)  │  ดี (dii)   │
│  Tone: Mid  │  Tone: Low  │  Tone: Mid  │
└─────────────┴─────────────┴─────────────┘

Native Audio:
[ Play Whole Word ]  [ Play Syllable 1 ] [ 2 ] [ 3 ]

Visual Timeline:
[=== ส ===][=== วัส ===][=== ดี ===]
  0.2s        0.3s        0.25s

Recording:
[ RECORD ] - Large button
Real-time waveform with syllable markers

[ Back ] [ Analyze Recording ]
```

### Screen 3: Recording in Progress
**Shows syllable detection:**
```
Recording สวัสดี...

Real-time Analysis:
┌─────────────────────────────────────┐
│  Waveform with detected syllables   │
│  [=== syllable 1 ===][=== 2 ===]... │
│  Tone detection: Mid ✓ Low ? ...    │
└─────────────────────────────────────┘

Detected Syllables:
1. ส - Mid tone (detected)
2. วัส - Analyzing...
3. ดี - Waiting...

[ Stop Recording ] [ Cancel ]
```

### Screen 4: Syllable-by-Syllable Results
**Detailed comparison:**
```
Analysis Complete

Overall Accuracy: 82%

Syllable-by-Syllable Analysis:

1. ส (Mid Tone)
   Accuracy: 90% ✓
   [ Graph: Your vs Native pitch ]
   Feedback: "Good mid tone"

2. วัส (Low Tone) 
   Accuracy: 65% ⚠
   [ Graph: Shows your pitch too high ]
   Feedback: "Low tone should start lower"

3. ดี (Mid Tone)
   Accuracy: 92% ✓
   [ Graph: Good match ]
   Feedback: "Excellent"

Tone Pattern Accuracy: 85%
Timing Accuracy: 78%

[ Practice Problem Syllable: วัส ]
[ Try Whole Word Again ]
[ Next Word ]
```

## 🛠️ Technical Implementation

### Syllable Segmentation
**Methods:**
1. **Audio-based:** Energy detection, silence detection
2. **Forced alignment:** Using phonetic transcription
3. **ML-based:** Trained on Thai speech data

**Process:**
```
1. User records word
2. Upload to backend
3. Syllable segmentation:
   - Detect syllable boundaries
   - Extract audio for each syllable
4. Per-syllable analysis:
   - Extract normalized pitch contour
   - Compare with reference
   - Calculate accuracy
5. Combine results
```

### Pitch Analysis Per Syllable
```python
def analyze_syllable(audio_segment, reference_syllable):
    # Extract pitch contour
    pitch = extract_pitch(audio_segment)  # Librosa
    
    # Normalize
    normalized_pitch = normalize_pitch(pitch)
    normalized_ref = normalize_pitch(reference_syllable.pitch)
    
    # Time align (DTW)
    aligned_pitch, aligned_ref = dtw_align(normalized_pitch, normalized_ref)
    
    # Calculate similarity
    similarity = calculate_similarity(aligned_pitch, aligned_ref)
    
    return {
        'accuracy': similarity * 100,
        'pitch_contour': normalized_pitch,
        'reference_contour': normalized_ref,
        'alignment': aligned_pitch
    }
```

### Data Structure
```typescript
interface Syllable {
  thai: string;           // Thai script for this syllable
  transcription: string;  // Phonetic transcription
  tone: ThaiTone;        // 'mid' | 'low' | 'falling' | 'high' | 'rising'
  duration: number;      // Expected duration in seconds
  audio_url: string;     // Reference audio
  pitch_contour: number[]; // Reference pitch data
}

interface Word {
  id: string;
  thai: string;
  transcription: string;
  english: string;
  syllables: Syllable[];  // Array of syllables
  difficulty: number;     // 1-5 based on syllable count and tones
}

interface PracticeResult {
  word_id: string;
  overall_accuracy: number;
  syllable_results: {
    syllable_index: number;
    accuracy: number;
    feedback: string;
    detected_tone?: ThaiTone;
  }[];
  recording_url: string;
  created_at: Date;
}
```

## 🔧 Interface Features

### 1. Syllable Visualization
- **Color coding:** Different colors for different tones
- **Timeline display:** Visual representation of syllable durations
- **Tone symbols:** Icon for each tone type
- **Boundary markers:** Clear separation between syllables

### 2. Recording Feedback
- **Real-time syllable detection:** Show when system detects syllable boundaries
- **Tone estimation:** Attempt to identify tone in real-time (optional)
- **Volume indicators:** Per-syllable volume feedback
- **Duration guidance:** Show if syllables are too short/long

### 3. Comparison Tools
- **Toggle views:** Show/hide individual syllable graphs
- **Overlay mode:** Overlay your pitch on reference
- **Difference highlighting:** Color areas where pitch differs significantly
- **Play comparison:** Play your recording then native for A/B testing

## 📱 Mobile Considerations

### Vertical Layout for Syllables:
```
Word: สวัสดี

[Syllable 1: ส]
Tone: Mid | Your Accuracy: 90%

[Syllable 2: วัส] 
Tone: Low | Your Accuracy: 65%

[Syllable 3: ดี]
Tone: Mid | Your Accuracy: 92%

[Show Graphs] [Play Comparisons]
```

### Touch Interactions:
- Tap syllable to focus on it
- Swipe between syllable analyses
- Pinch to zoom on pitch graphs
- Long press to hear syllable in isolation

## 🎯 Learning Progression

### Level 1: Single Syllable Words
- Master individual tones in isolation
- Build muscle memory for each tone contour
- Focus on tone accuracy, not timing

### Level 2: Two-Syllable Words
- Practice tone transitions
- Work on timing between syllables
- Learn common tone patterns

### Level 3: Multi-Syllable Words & Phrases
- Complex tone sequences
- Natural speech rhythm
- Connected speech phenomena

## 🔗 Integration with Other Modules

### Shadowing Module:
- Same syllable segmentation algorithm
- Consistent pitch comparison method
- Shared visualization components

### Dictionary Module:
- Syllable breakdown for all words
- Tone pattern information
- Links to practice specific syllables

### Flashcards:
- Syllable-focused cards
- Tone recognition per syllable
- Pattern recognition exercises

## ✅ Success Metrics

### For Users:
- Per-syllable accuracy improvement
- Ability to identify problem syllables
- Understanding of tone patterns
- Progress from single to multi-syllable words

### Technical:
- Syllable segmentation accuracy > 90%
- Pitch extraction per syllable < 1 second
- Meaningful per-syllable feedback
- Consistent across different speakers

## 📋 Next Steps

### Design Tasks:
1. Create syllable visualization components
2. Design per-syllable comparison interface
3. Plan syllable segmentation feedback during recording
4. Create syllable-focused practice exercises

### Development Tasks:
1. Implement syllable segmentation algorithm
2. Build per-syllable pitch analysis
3. Create syllable-aware data structures
4. Develop syllable comparison visualizations

---

*This syllable-aware approach provides more accurate and actionable feedback for Thai tone learning, addressing the core challenge of tone production at the syllable level where it actually matters.*