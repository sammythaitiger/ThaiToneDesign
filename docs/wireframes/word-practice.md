# Word Practice Screen
*Practice a single word with per-syllable tone analysis*

## Overall screen structure

### State 1: BEFORE_RECORDING
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        สวัสดี           ⏹️ 🔊          │ ← AppBar with actions
├─────────────────────────────────────────────────────┤
│  Word: สวัสดี (sà-wàt-dii) - hello                 │
│                                                    │
│  Syllable Breakdown:                               │
│  ┌─────────────┬─────────────┬─────────────┐      │
│  │    ส        │    วัส      │    ดี       │      │ ← Syllable Cards
│  │   (sà)      │   (wàt)     │   (dii)     │      │
│  │  Tone: Mid  │  Tone: Low  │  Tone: Mid  │      │
│  │   0.2s      │    0.3s     │    0.25s    │      │
│  └─────────────┴─────────────┴─────────────┘      │
│                                                    │
│  Listen to Native Pronunciation:                  │
│  [▶ Play Whole Word]  [▶ Syllable 1] [2] [3]      │ ← Audio Controls
│                                                    │
│  Visual Timeline (Reference):                      │
│  [=== ส ===][=== วัส ===][=== ดี ===]             │ ← Timeline
│   0.2s        0.3s        0.25s                   │
│                                                    │
│  Recording Instructions:                          │
│  1. Press the record button below                 │
│  2. Pronounce each syllable clearly               │
│  3. Try to match the tone pattern                 │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │              [ ● RECORD ]                   │  │ ← Record FAB
│  │                                             │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Back to Word List ]                            │ ← Navigation
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom nav
└─────────────────────────────────────────────────────┘
```

### State 2: DURING_RECORDING
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Recording...    ⏱️ 00:03        │ ← Timer
├─────────────────────────────────────────────────────┤
│  Recording สวัสดี...                              │
│                                                    │
│  Real-time Analysis:                              │
│  ┌─────────────────────────────────────────────┐  │
│  │  Waveform with Live Visualization          │  │ ← Live Waveform
│  │  [===●=======][===●=======][===●========]  │  │
│  │  Syllable detection in real-time          │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Detected Syllables:                              │
│  ┌─────────────────────────────────────────────┐  │
│  │ 1. ส - ✓ Detected (Mid tone estimated)     │  │ ← Real-time Feedback
│  │ 2. วัส - ● Recording in progress...        │  │
│  │ 3. ดี - ⏳ Waiting...                       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Tips for better recording:                       │
│  • Speak clearly and naturally                    │
│  • Don't rush between syllables                   │
│  • Focus on tone contours                         │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ ■ STOP ]                     │  │ ← Stop Button
│  │              (Tap to finish)                │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Cancel Recording ]                             │ ← Cancel Button
├─────────────────────────────────────────────────────┤
│  (Bottom Navigation hidden during recording)       │
└─────────────────────────────────────────────────────┘
```

### State 3: AFTER RECORDING - ANALYSIS (target: 2–3 seconds)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Analyzing...    ⏱️ 2s           │ ← Fast analysis (2–3 s)
├─────────────────────────────────────────────────────┤
│  Processing your recording...                      │
│  (This usually takes 2-3 seconds)                 │ ← Time hint
│                                                    │
│  Steps:                                           │
│  ┌─────────────────────────────────────────────┐  │
│  │ 1. Syllable segmentation ✓                 │  │ ← Progress Steps
│  │ 2. Pitch extraction for each syllable ✓    │  │
│  │ 3. Tone comparison ● In progress...        │  │
│  │ 4. Generating feedback ○ Waiting...        │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Estimated time remaining: 2 seconds              │
│                                                    │
│  What's happening:                                │
│  • Your audio is being split into syllables       │
│  • Pitch contours are extracted (pitch analysis)   │
│  • Comparing with native pronunciation            │
│  • Generating personalized feedback               │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ 🔄 Processing ]              │  │ ← Disabled Button
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [Cancel Analysis]                                │
├─────────────────────────────────────────────────────┤
│  (Bottom Navigation hidden during analysis)        │
└─────────────────────────────────────────────────────┘
```

**Performance goal:** Analysis should finish in 2–3 seconds for a smooth UX.

### State 4: RESULTS
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Results          🎯 82%         │ ← Overall Score
├─────────────────────────────────────────────────────┤
│  Word: สวัสดี - Overall Accuracy: 82%             │
│                                                    │
│  Syllable-by-Syllable Results:                    │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  ส (Mid Tone) - 90% ✓                      │  │ ← Syllable Result 1
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ────────               │   │  │ ← Pitch Graph
│  │  │  Native:     ──────────             │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Excellent mid tone!"           │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  วัส (Low Tone) - 65% ⚠                    │  │ ← Syllable Result 2
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ──────────             │   │  │
│  │  │  Native:     ────────               │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Your low tone starts too high" │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  │  [Practice This Syllable]                   │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  ดี (Mid Tone) - 92% ✓                      │  │ ← Syllable Result 3
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ──────────             │   │  │
│  │  │  Native:     ──────────             │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Perfect match!"                │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Summary:                                         │
│  • Tone Pattern Accuracy: 85%                     │
│  • Timing Accuracy: 78%                           │
│  • Fluency Score: 71%                             │
│                                                    │
│  [Try Again] [Practice Problem Syllable] [Next Word]
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

**Key results UI:** Each syllable shows a pitch contour — your tone (blue) vs native (green) for visual comparison.

### State 5: ERROR PERMISSION (no microphone)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Microphone Access                │
├─────────────────────────────────────────────────────┤
│  ⚠️ Microphone Permission Required                 │
│                                                    │
│  To record your pronunciation, we need            │
│  access to your microphone.                       │
│                                                    │
│  Please grant microphone permission:              │
│                                                    │
│  [Grant Permission]                               │ ← Opens settings
│                                                    │
│  How to enable manually:                          │
│  1. Go to Settings > Privacy > Microphone         │
│  2. Find "Thai Tone Trainer"                      │
│  3. Turn on microphone access                     │
│                                                    │
│  [Back to Word List]                              │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 6: ERROR RECORDING
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Recording Error                 │
├─────────────────────────────────────────────────────┤
│  ⚠️ Recording Failed                              │
│                                                    │
│  We couldn't record your audio.                    │
│  Possible reasons:                                 │
│  • Microphone is busy with another app            │
│  • Audio input level too low (too quiet)          │
│  • Technical issue with microphone                │
│                                                    │
│  Please try again:                                │
│                                                    │
│  [Try Again]                                      │
│                                                    │
│  Or return to word selection:                     │
│  [Back to Word List]                              │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 7: ERROR ANALYSIS
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Analysis Error                  │
├─────────────────────────────────────────────────────┤
│  ⚠️ Analysis Failed                               │
│                                                    │
│  We couldn't analyze your recording.               │
│  This might be because:                           │
│  • Recording is too short or too long             │
│  • Too much background noise                      │
│  • Server is temporarily unavailable              │
│                                                    │
│  You can:                                         │
│                                                    │
│  [Try Recording Again]                            │
│  [Back to Word List]                              │
│                                                    │
│  If this persists, please contact support.        │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 8: ERROR NETWORK (no internet)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        No Connection                  │
├─────────────────────────────────────────────────────┤
│  🌐 No Internet Connection                         │
│                                                    │
│  You need an internet connection to analyze        │
│  your recording.                                   │
│                                                    │
│  Options:                                         │
│                                                    │
│  [Retry Connection]                               │
│  [Save Recording for Later]                       │
│  [Practice Offline - Tone Recognition Only]       │
│                                                    │
│  Working offline?                                 │
│  You can still practice without analysis.         │
│  [Practice Offline]                               │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

## Navigation

### Between screens:
1. **Word Selection → Word Practice:** Tap **Practice** on the word card
2. **Back from Word Practice → Word Selection:**
   - **←** in AppBar (BackAction)
   - **Back to Word List** at bottom (only in BEFORE_RECORDING)
   - Hardware back on Android
   - Swipe back on iOS

### In-screen flow:
- **BEFORE_RECORDING → RECORDING:** Tap red RECORD
- **RECORDING → PROCESSING:** Tap orange STOP
- **PROCESSING → RESULTS:** Auto after analysis completes
- **RESULTS → BEFORE_RECORDING:** Tap **Try Again**
- **Any state → Word Selection:** AppBar Back

### Error navigation:
- Recording/analysis error → stay on screen with message
- No network → offer offline paths
- Permission issues → link to system settings

## React Native Paper components

### 1. AppBar by state
```javascript
// State: Before Recording
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="สวัสดี" />
  <Appbar.Action icon="stop-circle" disabled /> // Reserved
  <Appbar.Action icon="volume-high" onPress={playNativeAudio} />
</Appbar.Header>

// State: During Recording
<Appbar.Header>
  <Appbar.BackAction disabled />
  <Appbar.Content title="Recording..." />
  <Appbar.Action icon="timer" />
  <View style={{ paddingRight: 16 }}>
    <Text>00:{seconds.toString().padStart(2, '0')}</Text>
  </View>
</Appbar.Header>

// State: Results
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="Results" />
  <Appbar.Action 
    icon="trophy" 
    onPress={() => showAchievement(overallScore)}
  />
  <Badge visible={overallScore > 80} size={24}>
    {overallScore}%
  </Badge>
</Appbar.Header>
```

### 2. Syllable cards (before recording)
```javascript
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {word.syllables.map((syllable, index) => (
    <Card key={index} style={{ width: 100, margin: 8 }}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Title style={{ fontSize: 24 }}>{syllable.thai}</Title>
        <Paragraph>({syllable.transcription})</Paragraph>
        <Chip 
          style={{ backgroundColor: getToneColor(syllable.tone) }}
          textStyle={{ color: 'white' }}
        >
          {syllable.tone}
        </Chip>
        <Caption>{syllable.duration}s</Caption>
      </Card.Content>
      <Card.Actions>
        <Button 
          compact 
          icon="play" 
          onPress={() => playSyllableAudio(index)}
        >
          Play
        </Button>
      </Card.Actions>
    </Card>
  ))}
</ScrollView>
```

### 3. Record Button (FAB)
```javascript
// Before Recording
<FAB
  style={{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#F44336', // Red
  }}
  icon="microphone"
  label="RECORD"
  onPress={startRecording}
  color="white"
  size="large"
/>

// During Recording
<FAB
  style={{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FF9800', // Orange
  }}
  icon="stop"
  label="STOP"
  onPress={stopRecording}
  color="white"
  size="large"
  loading={isProcessing}
/>
```

### 4. Live Waveform Component
```javascript
<Surface style={{ height: 100, margin: 16, borderRadius: 8 }}>
  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
    {waveformData.map((value, index) => {
      const isCurrentSyllable = currentSyllableIndex === 
        Math.floor(index / (waveformData.length / word.syllables.length));
      
      return (
        <View
          key={index}
          style={{
            width: 2,
            height: Math.max(10, value * 80),
            backgroundColor: isCurrentSyllable ? '#2196F3' : '#BDBDBD',
            marginHorizontal: 1,
          }}
        />
      );
    })}
    
    // Syllable markers
    {word.syllables.map((_, index) => (
      <View
        key={`marker-${index}`}
        style={{
          position: 'absolute',
          left: `${(index / word.syllables.length) * 100}%`,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: '#4CAF50',
        }}
      />
    ))}
  </View>
</Surface>
```

### 5. Results cards (after analysis)
```javascript
<List.AccordionGroup>
  {results.syllableResults.map((result, index) => (
    <List.Accordion
      key={index}
      title={`${word.syllables[index].thai} (${word.syllables[index].tone})`}
      description={`Accuracy: ${result.accuracy}%`}
      left={props => (
        <Avatar.Text 
          size={40} 
          label={`${result.accuracy}%`}
          style={{ 
            backgroundColor: getAccuracyColor(result.accuracy) 
          }}
        />
      )}
      id={index.toString()}
    >
      <Card>
        <Card.Content>
          {/* Pitch Graph */}
          <VictoryLine
            data={result.yourPitch}
            style={{ data: { stroke: "#2196F3" } }}
          />
          <VictoryLine
            data={result.nativePitch}
            style={{ data: { stroke: "#4CAF50" } }}
          />
          
          <Paragraph>{result.feedback}</Paragraph>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button 
              icon="play" 
              mode="outlined"
              onPress={() => playYourSyllable(index)}
            >
              Your
            </Button>
            <Button 
              icon="play" 
              mode="outlined"
              onPress={() => playNativeSyllable(index)}
            >
              Native
            </Button>
            {result.accuracy < 70 && (
              <Button 
                icon="repeat" 
                mode="contained"
                onPress={() => practiceSyllable(index)}
              >
                Practice
              </Button>
            )}
          </View>
        </Card.Content>
      </Card>
    </List.Accordion>
  ))}
</List.AccordionGroup>
```

## Interactivity and states

### Screen states:
```
1. STATE_BEFORE_RECORDING
   • Show word and syllables
   • Record button enabled
   • Can play native audio

2. STATE_RECORDING
   • Timer running
   • Show live waveform
   • Real-time syllable detection
   • STOP enabled

3. STATE_PROCESSING
   • Show analysis progress
   • Buttons disabled
   • Can cancel
   • Target: 2–3 s analysis

4. STATE_RESULTS
   • Show results
   • Pitch comparison charts
   • Action buttons

5. STATE_ERROR_PERMISSION
   • Microphone permission error
   • **Grant Permission** button
   • How-to instructions

6. STATE_ERROR_RECORDING
   • Recording error (noise, silence, technical)
   • Error message
   • **Try Again**

7. STATE_ERROR_ANALYSIS
   • Backend analysis error
   • "Analysis failed" message
   • **Retry** and **Back to Word List**

8. STATE_ERROR_NETWORK
   • No server connection
   • Offline mode
   • **Use Cached Data** or **Retry**
```

### Tap handling:

#### 1. RECORD tap:
```
1. Check mic permission
2. If missing → request
3. Start timer
4. Start recording via expo-av
5. Go to STATE_RECORDING
6. Haptic on success
```

#### 2. STOP tap:
```
1. Stop recording
2. Save audio file
3. Upload for analysis
4. Go to STATE_PROCESSING
5. Show progress
```

#### 3. Play audio tap:
```
1. Check native/user audio exists
2. Play via expo-av
3. UI feedback (pause icon)
4. Highlight syllable while playing
```

#### 4. Practice This Syllable:
```
1. Navigate to single-syllable practice
2. Params: syllableIndex, wordId, targetTone
3. Focus one syllable
4. Simpler record/analyze flow
```

## Analysis logic

### Data flow:
```javascript
// 1. Recording done → audio URI
const recording = await Audio.Recording.createAsync(...);
const audioUri = recording.getURI();

// 2. Upload to backend
const formData = new FormData();
formData.append('audio', {
  uri: audioUri,
  type: 'audio/m4a',
  name: 'recording.m4a',
});
formData.append('wordId', word.id);
formData.append('userId', currentUser.id);

// 3. POST request
const response = await fetch('https://api.thaitone.com/analyze', {
  method: 'POST',
  body: formData,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 4. Handle response
if (response.ok) {
  const results = await response.json();
  // results has:
  // - overallAccuracy
  // - syllableResults[]
  // - pitchContours
  // - feedback
  setAnalysisResults(results);
  setScreenState('STATE_RESULTS');
} else {
  setScreenState('STATE_ERROR_ANALYSIS');
}
```

### Analysis time:
- **Target:** 2–3 seconds
- **Factors:**
  - Clip length (often 1–3 s per word)
  - Syllable count (1–4+)
  - Server load
  - User network speed

### Error handling:
```javascript
try {
  // Record and analyze
} catch (error) {
  if (error.code === 'PERMISSION_DENIED') {
    setScreenState('STATE_ERROR_PERMISSION');
  } else if (error.message.includes('network')) {
    setScreenState('STATE_ERROR_NETWORK');
  } else if (error.message.includes('recording')) {
    setScreenState('STATE_ERROR_RECORDING');
  } else {
    setScreenState('STATE_ERROR_ANALYSIS');
  }
}
```

---

## Related screens

**← Back:** [Word Selection Screen](./word-selection.md)  
**→ Next:** Syllable Practice screen (from **Practice This Syllable**)

---

*Last updated: 2026-03-28*  
*Status: ASCII wireframe — complete with errors and navigation*