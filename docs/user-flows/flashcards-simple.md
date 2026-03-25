# Flashcards - Simplified
*Version 2.0 | Anki-like System for Tones & Vocabulary*

## 🎯 Goal
Review Thai tones and vocabulary using spaced repetition (like Anki).

## 🔄 Basic Flow
```
1. Review Due Cards
   - System shows cards due for review
   - Cards can be: Thai→English, English→Thai, Tone recognition
   
2. Answer & Rate
   - See front of card
   - Think of answer
   - Flip card to see back
   - Rate difficulty: Again/Hard/Good/Easy
   
3. Schedule Next Review
   - System schedules next review based on rating
   - Easy cards shown less frequently
   - Hard cards shown more frequently
   
4. Manage Cards (Optional)
   - Create new cards
   - Edit existing cards
   - Organize by tags or decks
```

## 🎨 Screens

### Screen 1: Review Session
**Clean card interface:**
```
Flashcards Review

Due today: 15 cards
Current: Card 3 of 15

Front:
มา

[ Tap to flip ]

Difficulty buttons (after flip):
[ Again ] [ Hard ] [ Good ] [ Easy ]

[ Pause ] [ End Session ]
```

### Screen 2: Card Flip (Example)
**Thai → English card:**
```
Front: มา

[ Tap to flip ]

Back:
มา (maa)
Meaning: to come
Tone: Falling

[ Again ] [ Hard ] [ Good ] [ Easy ]
```

**Tone recognition card:**
```
Front: Listen to audio
[ Play Audio: "maa" ]

[ Tap to flip ]

Back:
Word: มา (maa)
Tone: Falling ✓
Your guess: [ Select tone ]

[ Again ] [ Hard ] [ Good ] [ Easy ]
```

### Screen 3: Card Management
**Simple card list:**
```
My Flashcards (42 cards)

Search: [ Search bar ]

Filter by:
[ All ] [ Due ] [ New ] [ Difficult ]

Card List:
1. มา (maa) - to come [ Tone: Falling ]
2. สวัสดี (sà-wàt-dii) - hello [ Tones: Mid-Low-Mid ]
3. อาหาร (aa-hǎan) - food [ Tones: Mid-Rising ]
...

[ New Card ] [ Edit ] [ Delete ]
```

### Screen 4: Create/Edit Card
**Simple card creator:**
```
Create New Flashcard

Card Type:
[ Thai → English ] [ English → Thai ] [ Tone Recognition ]

Front:
[ Text input or audio upload ]

Back:
[ Text input for meaning/tone ]

Tags: [ Add tags: "tones", "food", "verbs" ]

[ Save Card ] [ Cancel ]
```

## 🛠️ Technical Details

### Card Types:
1. **Thai → English**
   - Front: Thai word
   - Back: English meaning + tone info

2. **English → Thai**
   - Front: English meaning
   - Back: Thai word + tone info

3. **Tone Recognition**
   - Front: Audio of word
   - Back: Thai word + correct tone
   - Option for user to guess tone before flipping

### Spaced Repetition Algorithm:
**Simple version (like Anki's SM-2):**
```
When card is reviewed:
  If rating = "Again":
    interval = 1 day (or minutes if first review)
  
  If rating = "Hard":
    interval = current interval * 1.2
    
  If rating = "Good":
    interval = current interval * 2.5
    
  If rating = "Easy":
    interval = current interval * 4.0
    
Next review = today + interval
```

### Data Structure:
```typescript
interface Flashcard {
  id: string;
  user_id: string;
  
  // Card content
  card_type: 'thai_english' | 'english_thai' | 'tone_recognition';
  front: string;      // Thai text, English text, or audio URL
  back: string;       // Meaning, Thai word, or tone info
  
  // Spaced repetition
  interval: number;   // Days until next review
  ease_factor: number; // Modifier for interval
  due_date: Date;     // When card is due
  
  // Metadata
  tags: string[];
  created_at: Date;
  review_count: number;
  correct_count: number;
}

interface ReviewSession {
  id: string;
  user_id: string;
  cards_reviewed: number;
  correct_answers: number;
  duration: number; // seconds
  created_at: Date;
}
```

## ⚙️ Settings & Options

### Basic Settings:
- **New cards per day:** Limit new cards shown daily
- **Review limit:** Maximum reviews per session
- **Card order:** Mixed, new first, due first
- **Audio auto-play:** Auto-play audio on tone cards

### Display Options:
- **Show tone information:** Always/On flip/Never
- **Show example sentences:** Yes/No
- **Dark mode:** System/Manual

## 📱 Mobile Experience

### Card Review (Mobile):
```
[ Card front - large text ]
[ Flip button - bottom center ]
[ After flip: difficulty buttons ]
```

### Gestures:
- **Tap:** Flip card
- **Swipe left:** Mark "Again"
- **Swipe right:** Mark "Easy"
- **Swipe up/down:** Show answer options

## 🎯 Learning Features

### For Tone Practice:
- **Tone recognition cards:** Audio → Identify tone
- **Tone pattern cards:** Practice multi-syllable tone sequences
- **Minimal pair cards:** Distinguish similar words with different tones

### For Vocabulary:
- **Context cards:** Words in example sentences
- **Image cards:** Optional image associations
- **Audio cards:** Pronunciation practice

### Progress Tracking:
- **Daily streak:** Consecutive days with reviews
- **Accuracy rate:** % correct over time
- **Cards mastered:** Cards with long intervals
- **Time spent:** Total review time

## 🔗 Integration

### With Dictionary:
- One-click card creation from dictionary
- Sync word mastery status
- Use dictionary audio for cards

### With Tone Practice:
- Create cards from practiced words
- Link to practice specific problem cards
- Share tone analysis data

### With Dashboard:
- Show flashcards progress
- Recommend cards based on weaknesses
- Track review consistency

## ✅ Success Criteria

### For Users:
- Can review cards efficiently
- Understand spaced repetition
- See progress over time
- Create custom cards easily

### Technical:
- Spaced repetition works correctly
- Card review smooth and fast
- Data sync across devices
- Offline review capability

## 🚀 Implementation Phases

### Phase 1: Basic Flashcards
1. Card review interface
2. Simple spaced repetition
3. Basic card creation
4. Progress tracking

### Phase 2: Enhanced Features
1. Multiple card types
2. Audio cards for tones
3. Card organization (tags/decks)
4. Import/export (Anki compatibility)

### Phase 3: Advanced Features
1. Smart recommendations
2. Shared decks
3. Advanced statistics
4. Mobile app

## 📋 Next Steps

### Design Tasks:
1. Create card flip animation
2. Design difficulty rating interface
3. Plan card management layout
4. Create mobile gestures

### Development Tasks:
1. Implement spaced repetition algorithm
2. Build card database
3. Create review session flow
4. Add audio support for tone cards

---

*This simplified flashcard system provides Anki-like functionality focused on Thai tone learning, with spaced repetition to ensure long-term retention of tones and vocabulary.*