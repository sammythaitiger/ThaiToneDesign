# Shadowing Screen
*Short native-speaker clip, syllable-level subtitles, repeat, and (optional) recording*

**Content:** not YouTube. Video and **`cues`** timestamps are supplied by the product (CDN / packs). Model: [../curated-shadowing-content.md](../curated-shadowing-content.md).

## Overall screen structure

### State 1: VIDEO LIBRARY (lesson picker)
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  Continue watching                                 │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] Greetings · 2 min · Mid/Low focus  │  │
│  │  Progress ██████░░░░ 40%      [ Resume ]    │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Categories:                                      │
│  ┌────────┬────────┬────────┐                     │
│  │Daily   │Food    │Travel  │  ← Chips / filter   │
│  └────────┴────────┴────────┘                     │
│                                                    │
│  All lessons:                                      │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] สวัสดี — hello chain · 90s       │  │
│  │  Tones: M L M                                │  │
│  └─────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────┐  │
│  │  [thumb] Ordering food · 3 min               │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 2: PLAYER (primary)
```
┌─────────────────────────────────────────────────────┐
│  ← Library        Greetings            🔊 ⋮       │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │           [ VIDEO / expo-av ]               │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│  ━━━━●━━━━━━━━━━━━ 0:42 / 1:20                    │ ← scrubber
│                                                    │
│  Subtitles (karaoke by syllable):                 │
│  สวัสดี ครับ  ผม ชื่อ...                           │
│  [Mid][Low][High] ...  ← highlight current syllable │
│                                                    │
│  Controls:                                        │
│  [ A-B Loop ] [ 0.75x ] [ 1x ] [ 1.25x ]          │
│  [ Replay sentence ]                              │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │     [ ● Shadow: record my line ]            │  │ ← optional MVP+1
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Tip: Say it together with the speaker, then solo. │
├─────────────────────────────────────────────────────┤
│  (Bottom tabs hidden in fullscreen player)       │
└─────────────────────────────────────────────────────┘
```

### State 3: RECORDING / COMPARE (extended)
```
┌─────────────────────────────────────────────────────┐
│  ← Player          Recording...        ⏱️ 00:05    │
├─────────────────────────────────────────────────────┤
│  Target sentence: สวัสดีครับ                       │
│  [▶ Reference]                                    │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [ Mini waveform / level meter ]            │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ ■ Stop ]   [ Cancel ]                          │
│                                                    │
│  After stop → short tone feedback (like Word      │
│  Practice) or listen-back only.                   │
└─────────────────────────────────────────────────────┘
```

### State 4: LESSON COMPLETE
```
┌─────────────────────────────────────────────────────┐
│  Lesson complete                                  │
├─────────────────────────────────────────────────────┤
│  Greetings — you watched 100%                     │
│  Loops used: 4  ·  Shadow takes: 2                 │
│                                                    │
│  [ Next lesson ]  [ Back to library ]             │
│  [ Add vocabulary to Flashcards ]                  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 5: LOADING
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  Loading lessons...                                │
│  [Skeleton grid of thumbnails]                     │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 6: EMPTY
```
┌─────────────────────────────────────────────────────┐
│  Shadowing                     ⚙️ 🔍 👤           │
├─────────────────────────────────────────────────────┤
│  No lessons available                              │
│                                                    │
│  Download lesson packs in Settings or when online.  │
│  [ Refresh ]                                       │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 7: ERROR (playback)
```
┌─────────────────────────────────────────────────────┐
│  ← Library        Error                            │
├─────────────────────────────────────────────────────┤
│  ⚠️ Could not load video                           │
│                                                    │
│  Check connection or try lower quality.           │
│                                                    │
│  [ Retry ]  [ Audio only mode ]                   │
└─────────────────────────────────────────────────────┘
```

## React Native Paper components

### Mini player + quality menu
```javascript
import { Video } from 'expo-av';

<Card style={{ margin: 16, overflow: 'hidden' }}>
  <Video
    ref={videoRef}
    source={{ uri: lesson.videoUrl }}
    useNativeControls={false}
    onPlaybackStatusUpdate={onStatus}
    style={{ width: '100%', aspectRatio: 16 / 9 }}
  />
</Card>
<Slider value={position} onValueChange={seek} minimumValue={0} maximumValue={duration} />
<Menu visible={menuVisible} anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
  <Menu.Item onPress={() => setQuality('720')} title="720p" />
  <Menu.Item onPress={() => setQuality('480')} title="480p" />
</Menu>
```

### Subtitles with syllable highlight
```javascript
<View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 16 }}>
  {cues.map((cue, i) => (
    <Chip
      key={i}
      mode={activeCue === i ? 'flat' : 'outlined'}
      style={{ margin: 4, backgroundColor: activeCue === i ? toneColor(cue.tone) : undefined }}
      onPress={() => seekTo(cue.startMs)}
    >
      {cue.text}
    </Chip>
  ))}
</View>
```

## Navigation

### Stack
```
ShadowingStack:
  - VideoLibrary
  - LessonPlayer (fullscreen option)
  - (optional) RecordingAnalysis — shared module with Word Practice
```

### Transitions
1. Tap syllable in subtitles → seek video.
2. **Dictionary** — long-press word → search (if word markup exists).
3. **Flashcards** — from lesson complete screen.

## Responsive behavior

- **Landscape:** full-width video, subtitle strip below.
- **PiP / background audio:** optional later (platform policy).

## Performance

1. Your MP4/HLS from CDN; multiple quality URLs in lesson manifest; watch cache and offline packs (premium).
2. **Cue JSON** is small — ship with lesson metadata or fetch separately.
3. Prefetch **next** lesson in playlist at low priority.
4. No user-facing runtime transcription — sync only via `startMs`/`endMs` in data.

## Test cases

### Test 1: Basic viewing
```
1. Library → open lesson
2. Verify play/pause, scrubber
3. A-B loop on one phrase
```

### Test 2: Karaoke syllables
```
1. During playback verify activeCue updates
2. Tap chip → seeks correctly
```

### Test 3: Network error
```
1. Start lesson, drop network
2. Show ERROR with Retry / audio-only if cached
```

## Related screens

**← Back:** Bottom tabs  
**→ Next:** [Dictionary Screen](./dictionary.md), [Word Practice Screen](./word-practice.md), [Flashcards Screen](./flashcards.md)

---

*Last updated: 2026-03-28*  
*Status: ASCII wireframe — Complete*
