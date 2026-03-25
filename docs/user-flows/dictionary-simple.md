# Dictionary - Simplified
*Version 2.0 | Basic Word Lookup with Tone Info*

## 🎯 Goal
Quickly look up Thai words to see pronunciation, tone, and meaning.

## 🔄 Basic Flow
```
1. Search Word
   - Type Thai script or English
   - See autocomplete suggestions
   
2. View Word Details
   - Thai script and transcription
   - Tone pattern (per syllable)
   - English translation
   - Listen to native pronunciation
   - See example sentence
   
3. Save or Practice (Optional)
   - Add to "My Words" list
   - Practice pronunciation (link to tone practice)
   - Create flashcard
```

## 🎨 Screens

### Screen 1: Search
**Simple search interface:**
```
DICTIONARY

Search Thai or English:
[ Search bar with autocomplete ]

Recent searches:
- สวัสดี (hello)
- อาหาร (food) 
- ขอบคุณ (thank you)

[ My Saved Words ] [ Browse Common Words ]
```

### Screen 2: Search Results
**Minimal results display:**
```
Results for "สวัสดี":

1. สวัสดี (sà-wàt-dii)
   Meaning: hello, goodbye
   Tones: Mid-Low-Mid
   
2. สวัสดีครับ (sà-wàt-dii khráp)
   Meaning: hello (polite male)
   Tones: Mid-Low-Mid-High
   
3. สวัสดีค่ะ (sà-wàt-dii khâ)
   Meaning: hello (polite female)
   Tones: Mid-Low-Mid-Falling

Click word for details
```

### Screen 3: Word Details
**Clean word view:**
```
Word: สวัสดี (sà-wàt-dii)
Meaning: hello, goodbye

Pronunciation:
[ Play Audio ] [ Slow Speed ]

Syllable Breakdown:
┌─────────────┬─────────────┬─────────────┐
│  ส (sà)     │  วัส (wàt)  │  ดี (dii)   │
│  Tone: Mid  │  Tone: Low  │  Tone: Mid  │
└─────────────┴─────────────┴─────────────┘

Example Sentence:
สวัสดีครับ ยินดีที่ได้รู้จัก
(sà-wàt-dii khráp, yin-dii thîi dâi rúu-jàk)
Hello, nice to meet you.

[ Add to My Words ] [ Practice This Word ] [ Create Flashcard ]

[ Back to Search ] [ Next Word ]
```

## 📝 Data Structure

### Word Entry (Simplified):
```typescript
interface Word {
  id: string;
  thai: string;           // Thai script
  transcription: string;  // Romanization
  english: string;        // English meaning
  syllables: Syllable[];  // Array of syllables
  audio_url: string;      // Pronunciation audio
  example: {
    thai: string;
    transcription: string;
    english: string;
  };
}

interface Syllable {
  thai: string;     // Thai character(s)
  tone: ThaiTone;   // 'mid' | 'low' | 'falling' | 'high' | 'rising'
}
```

### Database Size:
- **Initial:** 500 most common Thai words
- **Expandable:** Add more as needed
- **Focus:** Practical, everyday vocabulary

## 🔧 Features

### Search Functionality:
- **Thai script search:** Type Thai characters
- **English search:** Type English meaning
- **Transcription search:** Type romanization
- **Autocomplete:** Suggestions as you type

### Word Display:
- **Clear tone labeling:** Each syllable shows tone
- **Audio playback:** Native speaker pronunciation
- **Example sentence:** Contextual usage
- **Visual tone indicators:** Color-coded by tone

### User Actions:
- **Save word:** Add to personal list
- **Practice:** Link to tone practice module
- **Flashcard:** Create quick flashcard
- **Share:** Copy word info

## 📱 Mobile View

### Vertical Layout:
```
[ Search bar ]
[ Word details ]
[ Syllable breakdown ]
[ Example sentence ]
[ Action buttons ]
```

### Touch Optimized:
- Large tap targets
- Easy scrolling
- Simple navigation

## 🔗 Integration

### From Tone Practice:
- Click practiced word → Dictionary entry
- See detailed tone information

### From Shadowing:
- Click word in subtitles → Dictionary lookup
- Learn words in context

### From Flashcards:
- View word details while reviewing
- Add new words from dictionary

## 🎯 Success Criteria

### For Users:
- Find words quickly (1-2 searches)
- Understand tone pattern at a glance
- Hear clear pronunciation
- Save words for later review

### Technical:
- Search response < 1 second
- Audio loads immediately
- Works offline (cached words)
- Mobile-friendly

## 🚀 Implementation Plan

### Phase 1: Basic Dictionary
1. Search functionality
2. Word database (500 words)
3. Simple word detail page
4. Audio playback

### Phase 2: Enhanced Features
1. Syllable breakdown display
2. "My Words" list
3. Integration with other modules
4. More words (1000+)

## 📋 Next Steps

### Design:
1. Create clean word detail layout
2. Design syllable visualization
3. Plan mobile experience

### Development:
1. Build search backend
2. Create word database
3. Implement audio player
4. Add "My Words" functionality

---

*This simplified dictionary provides essential word lookup functionality with focus on tone information, supporting the core goal of Thai tone learning without unnecessary complexity.*