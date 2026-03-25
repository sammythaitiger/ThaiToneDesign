# Thai Tone Trainer - Simplified Design Specification
*Version 2.0 | Focused on Core Functionality | Last Updated: 2024-03-25*

## 📋 Project Overview
**Thai Tone Trainer** - Web application for learning Thai tones through scientific pronunciation analysis.

**Core Focus Areas:**
1. **Tone Practice** - Record and compare pitch contours for 5 Thai tones
2. **Shadowing** - Practice with YouTube videos using Whisper subtitles  
3. **Dictionary** - Simple word lookup with tone information
4. **Flashcards** - Anki-like system for tones and vocabulary
5. **Dashboard** - Progress tracking and recommendations

**Timeline:** 4 months total
- **Weeks 1-2:** Design & Planning
- **Months 1-4:** Development with focused MVP

---

## 🎯 Simplified User Goals
1. Practice Thai tones with visual feedback (F0 pitch graphs)
2. Improve pronunciation through YouTube video shadowing
3. Look up words and learn tone patterns
4. Review vocabulary with simple flashcards
5. Track learning progress

---

## 📱 Core Modules (Simplified)

### Module 1: Tone Practice (Syllable-Aware)
**Purpose:** Master Thai tones with syllable-level analysis

**Key Features:**
- Select from 5 tones (Mid, Low, Falling, High, Rising)
- Practice words broken down into syllables
- Each syllable has its own tone
- Record pronunciation
- Compare normalized pitch contours syllable-by-syllable
- See accuracy per syllable and overall

**Screens:**
1. **Tone Selection** - Choose tone to focus on
2. **Word Selection** - Pick word (shows syllable breakdown)
3. **Practice Interface** - Record with syllable visualization
4. **Results** - Syllable-by-syllable comparison graphs

**Technical:**
- Web Audio API for recording
- Python/Librosa for pitch extraction and normalization
- Syllable segmentation algorithm
- Dynamic Time Warping (DTW) for time alignment
- Normalized pitch comparison (not raw F0)

### Module 2: Shadowing Practice  
**Purpose:** Imitate native speakers with syllable-level feedback

**Key Features:**
- Browse/search Thai YouTube videos
- Auto-generate Thai subtitles with Whisper
- Select phrases from subtitles
- Record your version
- Compare syllable-by-syllable (normalized pitch)
- See which specific syllables need improvement

**Screens:**
1. **Video Browser** - Find Thai content
2. **Phrase Selection** - Click subtitle segments
3. **Practice Interface** - Video + subtitles + recording
4. **Results** - Per-syllable pitch comparison

**Technical:**
- YouTube Data API v3
- Whisper for Thai transcription
- Same syllable segmentation as tone module
- Per-syllable normalized pitch comparison

### Module 3: Simple Dictionary
**Purpose:** Look up Thai words with tone information

**Simple Features:**
- Search words (Thai script or English)
- View word details: Thai, transcription, tone pattern, translation
- Listen to native pronunciation
- Save words to personal list
- View example sentence

**Screens:**
1. **Search** - Find words
2. **Word Details** - Complete word information
3. **My Words** - Saved vocabulary list

**Technical:**
- Basic word database (500+ common words)
- Audio playback
- Simple search functionality
- User word lists

### Module 4: Basic Flashcards
**Purpose:** Review tones and vocabulary like Anki

**Simple Features:**
- Create cards: Thai→English, English→Thai, Tone recognition
- Review cards with spaced repetition
- Mark cards as easy/medium/hard
- Track card mastery

**Screens:**
1. **Card Review** - Flip and rate cards
2. **Card Management** - Create/edit cards
3. **Progress** - Review statistics

**Technical:**
- Simple spaced repetition algorithm
- Card database
- Review scheduling

### Module 5: User Dashboard
**Purpose:** Track progress and get recommendations

**Simple Features:**
- Tone practice progress (5 tones)
- Vocabulary count
- Recent activity
- Practice recommendations
- Basic statistics

**Screens:**
1. **Main Dashboard** - Overview of progress
2. **Detailed Stats** - More detailed information

---

## 🏗️ Technical Stack (Simplified)

### Frontend
- **Framework:** Next.js 14 with TypeScript
- **Styling:** Tailwind CSS
- **Visualization:** D3.js for graphs
- **Audio:** Web Audio API
- **State:** React Context or Zustand (simple)

### Backend
- **API:** Python FastAPI
- **Audio Processing:** Librosa for F0 extraction
- **Transcription:** Whisper for Thai subtitles
- **Database:** PostgreSQL for user data and words
- **Hosting:** Vercel (frontend), Railway/Render (backend)

### Key APIs
- YouTube Data API v3
- Custom audio processing API (Python/FastAPI)
- Database API (user, words, progress)

---

## 🎨 UI/UX Principles

### Design Philosophy
- **Clean & Focused:** No distractions, focus on learning
- **Visual Feedback:** Clear graphs and comparisons
- **Simple Navigation:** Easy to find what you need
- **Mobile-Friendly:** Works well on all devices

### Core Components
- **Recording Interface:** Large record button, waveform display
- **Graph Comparison:** Side-by-side F0 pitch graphs
- **Video Player:** Custom controls for shadowing
- **Card Interface:** Simple flip cards for flashcards
- **Progress Indicators:** Clear visual progress

### Color Scheme
- **Primary:** Blue (#3B82F6) - Thai inspired
- **Tone Colors:**
  - Mid: Blue (#3B82F6)
  - Low: Green (#10B981)
  - Falling: Orange (#F59E0B)
  - High: Red (#EF4444)
  - Rising: Purple (#8B5CF6)
- **Background:** Light/Dark theme support

### Typography
- **English:** Inter (clean, readable)
- **Thai:** Noto Sans Thai (clear Thai script)
- **Sizes:** Comfortable reading sizes

---

## 🔄 User Flows (Simplified)

### Flow 1: Practice a Tone (Syllable-Aware)
```
1. Dashboard → "Practice Tones"
2. Select tone to focus on (or "All")
3. Choose word (see syllable breakdown)
4. Listen to native pronunciation (whole word or per syllable)
5. Record your version
6. View syllable-by-syllable pitch comparison
7. See accuracy per syllable and overall
```

### Flow 2: Shadow a YouTube Video (Syllable-Level)
```
1. Dashboard → "Shadowing Practice"
2. Find Thai video (search or browse)
3. Click subtitle phrase to practice
4. Listen to native audio
5. Record your version
6. View syllable-by-syllable pitch comparison
7. See which specific syllables need work
8. Repeat problem syllables or continue
```

### Flow 3: Look Up a Word (1 minute)
```
1. Anywhere in app → Search bar
2. Type Thai or English word
3. View word details (tone, pronunciation, meaning)
4. Listen to audio
5. Save to "My Words" if wanted
```

### Flow 4: Review Flashcards (5 minutes)
```
1. Dashboard → "Review Flashcards"
2. Flip card (Thai → English or tone recognition)
3. Rate difficulty (Easy/Medium/Hard)
4. Continue through due cards
5. View progress at end
```

---

## 📊 Data Structure (Simplified)

### Core Data Types
```typescript
// User
interface User {
  id: string;
  email: string;
  name: string;
  created_at: Date;
}

// Tone Practice Progress
interface ToneProgress {
  user_id: string;
  tone: 'mid' | 'low' | 'falling' | 'high' | 'rising';
  accuracy: number; // 0-100
  practice_count: number;
  last_practiced: Date;
}

// Word (Dictionary with syllables)
interface Word {
  id: string;
  thai: string;
  transcription: string;
  english: string;
  syllables: {
    thai: string;
    tone: 'mid' | 'low' | 'falling' | 'high' | 'rising';
  }[];
  audio_url: string;
  example_sentence: string;
}

// Flashcard
interface Flashcard {
  id: string;
  user_id: string;
  front: string;
  back: string;
  card_type: 'thai_english' | 'english_thai' | 'tone_recognition';
  difficulty: number; // 1-3
  next_review: Date;
}

// Practice Session
interface PracticeSession {
  id: string;
  user_id: string;
  module: 'tone' | 'shadowing' | 'flashcards';
  duration: number; // seconds
  accuracy?: number;
  created_at: Date;
}
```

---

## 🚀 Development Priorities

### Phase 1 (Month 1): Tone Practice MVP
1. User authentication (simple)
2. Tone selection interface
3. Audio recording and playback
4. F0 graph visualization
5. Basic comparison and scoring

### Phase 2 (Month 2): Dictionary & Flashcards
1. Word search and database
2. Word detail views with audio
3. Flashcard system (create/review)
4. User word lists

### Phase 3 (Month 3): Shadowing
1. YouTube video integration
2. Whisper subtitle generation
3. Shadowing recording interface
4. Syllable-level comparison

### Phase 4 (Month 4): Polish & Launch
1. Dashboard with progress tracking
2. UI polish and responsiveness
3. Testing and bug fixes
4. Launch preparation

---

## ✅ Acceptance Criteria

### MVP Launch (Month 2-3)
1. Users can practice all 5 Thai tones with visual feedback
2. Dictionary with 500+ common words searchable
3. Basic flashcard system for review
4. User accounts and progress tracking
5. Responsive web interface

### Complete Version (Month 4)
1. YouTube shadowing functionality
2. Syllable-by-syllable comparison
3. Improved dashboard and recommendations
4. Polished UI/UX
5. Ready for public use

---

## 🎯 Success Metrics

### User Learning
- Tone accuracy improvement over time
- Vocabulary growth (words learned)
- Regular usage (sessions per week)
- User satisfaction (simple feedback)

### Technical
- Audio processing time < 5 seconds
- Page load time < 3 seconds
- Uptime > 99%
- Mobile responsiveness

---

## 📝 Next Steps (Design Phase)

### Week 1 Remaining:
1. Finalize wireframes for all core screens (8-10 screens)
2. Define exact user flows for each module
3. Create component specifications
4. Plan database schema

### Week 2:
1. Create detailed mockups
2. Plan development sprints
3. Set up development environment
4. Start implementation planning

---

## 🔗 References & Resources

### Technical:
- Web Audio API documentation
- Librosa for pitch extraction
- Whisper AI for Thai transcription
- YouTube Data API
- D3.js for data visualization

### Learning Resources:
- Thai tone pronunciation guides
- Common Thai vocabulary lists
- YouTube channels with clear Thai content

---

*This simplified specification focuses on core functionality needed for effective Thai tone learning. All features should serve the primary goal: helping users master Thai tones through visual feedback and practice.*