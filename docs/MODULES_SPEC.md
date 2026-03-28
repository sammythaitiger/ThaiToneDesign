# Thai Tone Trainer - Module Specifications for Wireframing
*React Native + Expo + React Native Paper | Last Updated: 2024-03-25*

## 📋 Overview
This document provides detailed specifications for the five core modules of the Thai Tone Trainer mobile application. Each module is designed for mobile-first touch interfaces using React Native Paper components.

## 🎨 Design System Foundation

### React Native Paper Implementation
**Theme Configuration:**
```typescript
const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#3B82F6',    // Thai Blue (Mid tone)
    accent: '#10B981',     // Thai Green (Low tone)
    falling: '#F59E0B',    // Falling tone orange
    high: '#EF4444',       // High tone red
    rising: '#8B5CF6',     // Rising tone purple
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1F2937',
    error: '#DC2626',
  },
  fonts: {
    regular: { fontFamily: 'Inter_400Regular' },
    medium: { fontFamily: 'Inter_500Medium' },
    light: { fontFamily: 'Inter_300Light' },
  },
  roundness: 12,
};
```

### Core UI Components (React Native Paper)
- **Navigation:** Bottom Tabs + Stack Navigation
- **Cards:** Elevated cards for content grouping
- **Buttons:** Contained, outlined, text variants
- **Inputs:** TextInput with labels and validation
- **Progress Indicators:** Linear and circular progress
- **Chips:** For tags and status indicators
- **Dialogs:** Modals for actions and confirmations
- **Snackbars:** Temporary notifications

---

## 📱 Module 1: Tone Practice (Syllable-Aware)

### Goal
Practice Thai tones with syllable-level pitch comparison and visual feedback.

### Core Features
1. **Tone Selection:** Choose from 5 Thai tones (Mid, Low, Falling, High, Rising)
2. **Word Practice:** Practice words broken down by syllables
3. **Recording:** Record pronunciation with real-time feedback
4. **Visual Comparison:** Compare pitch contours syllable-by-syllable
5. **Accuracy Scoring:** Per-syllable and overall accuracy scores

### Screens & User Flow

#### Screen 1: Tone Selection Dashboard
**Purpose:** Main entry point for tone practice

**UI Components (React Native Paper):**
- **Header:** AppBar with back button
- **5 Tone Cards:** Card component with Card.Content and Card.Actions
- **Progress Indicators:** CircularProgress for each tone
- **Quick Actions:** Button with "Practice All Tones"

**Tone Card Structure:**
```
Card
├── Card.Content
│   ├── Title (tone name with Icon)
│   ├── Paragraph (accuracy percentage)
│   └── LinearProgress (accuracy visualization)
└── Card.Actions
    └── Button (Practice)
```

**Interactions:**
- Tap tone card → navigate to word selection
- Swipe horizontally between tone cards
- Pull-to-refresh to update progress

#### Screen 2: Word Selection
**Purpose:** Choose words to practice for selected tone

**UI Components:**
- **Back Button:** IconButton in AppBar
- **Filter Chips:** Chip components for syllable filters
- **Word Grid:** Card components in FlatList
- **Search Bar:** TextInput with autoComplete

**Word Card:**
```
Card
├── Card.Content
│   ├── Title (Thai script)
│   ├── Paragraph (meaning + syllable count)
│   └── Chip (difficulty stars)
└── Card.Actions
    └── Button (Select)
```

#### Screen 3: Practice Interface
**Purpose:** Record and compare pronunciation

**Layout:** Vertical stack with three main sections

**Section 1: Word Display**
- Large Thai text with syllable coloring
- Phonetic transcription (Text component)
- Tone pattern visualization (custom SVG)
- Native audio playback (IconButton + Slider)

**Section 2: Recording Controls**
- Large circular Button (FAB) for recording
- Real-time waveform (react-native-svg)
- Recording timer (Text with animation)
- Volume meter (ProgressBar)
- Action buttons: Play, Stop, Re-record

**Section 3: Live Feedback**
- Syllable boundary indicators (Chip components)
- Real-time tone detection (optional)
- Visual guidance for pitch contour

#### Screen 4: Results & Comparison
**Purpose:** Show analysis results and improvement suggestions

**UI Components:**
- **Overall Accuracy:** Large Text percentage
- **Syllable Breakdown:** List.Accordion per syllable
- **Pitch Graphs:** VictoryNative charts
- **Feedback Points:** List.Item with Icon
- **Action Buttons:** Button variants

**Syllable Result Card:**
```
List.Accordion
├── List.AccordionTitle (syllable + accuracy)
├── List.AccordionDescription
│   ├── VictoryChart (pitch comparison)
│   └── Text (feedback)
└── List.AccordionActions
    └── Button (Practice this syllable)
```

### Technical Notes
- **Audio:** expo-av for recording/playback
- **Visualization:** react-native-svg + victory-native
- **Processing:** Server-side pitch analysis via Python/Librosa
- **Offline:** Local recording cache with sync later
- **Performance:** Target < 5 seconds for analysis

---

## 🎬 Module 2: Shadowing Practice

### Goal
Practice pronunciation by imitating native speakers in **curated video lessons** (product-owned content). Users browse your library; each lesson ships with **pre-authored cue data** (timestamps + text + optional syllables). **No YouTube** in the client.

### Core Features
1. **Lesson Library:** Browse/search **your** lessons by category, duration, tone focus
2. **Structured cues:** Subtitles/karaoke from lesson manifest (not user-generated transcription)
3. **Phrase / line practice:** Tap cue or syllable chip → seek; optional A-B loop
4. **Syllable Comparison:** Per-syllable pitch analysis (same pipeline as tone practice when recording is enabled)
5. **Progress Tracking:** Resume position, lesson complete, loops / shadow takes

### Screens & User Flow

#### Screen 1: Lesson Library
**Purpose:** Discover and select a **ShadowingLesson** from the catalog

**UI Components:**
- **Search Bar:** TextInput with search IconButton (lesson titles/tags)
- **Category Tabs:** SegmentedButtons or Chip
- **Lesson Grid:** Card components in FlatList
- **Filter Chips:** Chip for difficulty, duration, tone focus
- **Continue watching:** Card with resume CTA

**Lesson Card:**
```
Card
├── Card.Cover (thumbnail from lesson asset)
├── Card.Content
│   ├── Title (lesson title)
│   ├── Paragraph (metadata: duration, tone tags)
│   └── ProgressBar (watch progress)
└── Card.Actions
    └── Button (Open / Resume)
```

#### Screen 2: Lesson Player
**Purpose:** Watch curated video with interactive cues

**Layout:** Video player above, cue/syllable strip below

**Video Player:**
- **expo-av** (or equivalent) with **your** video URL (MP4/HLS from CDN)
- Custom controls overlay (IconButton)
- Speed adjustment (Menu with Menu.Item)
- Optional quality menu if multiple renditions exist

**Interactive Cues:**
- Color-coded by tone where `syllables[]` is present (Chip components)
- Tap cue → seek; current cue highlighted
- Translation on long press (if present in cue)

#### Screen 3: Phrase Practice
**Purpose:** Practice selected phrase with recording and feedback

**UI Components:**
- **Phrase Display:** Large Text with syllable breaks
- **Native Audio:** Slice of lesson audio via video seek + loop
- **Recording Interface:** Same as tone practice module
- **Comparison Results:** Syllable-by-syllable analysis

#### Screen 4: Session / Lesson Summary
**Purpose:** Lesson complete + optional session stats

**UI Components:**
- **Completion:** Percent watched, loops, shadow takes
- **Session Stats:** Card with DataTable (when user recorded)
- **Next lesson:** Button to continue curriculum

### Technical Notes
- **Content model:** Manifest/API listing `ShadowingLesson` + `video` URLs + `cues[]` — see `docs/curated-shadowing-content.md`
- **Authoring:** Cues produced offline (manual or internal tooling); **not** generated in-app at runtime
- **Playback sync:** Client uses cue timestamps only
- **Caching:** Video + manifest caching for offline practice (premium optional)
- **Performance:** No user-visible “subtitle generation” step; target fast manifest fetch and smooth playback

---

## 📖 Module 3: Dictionary

### Goal
Quick word lookup with detailed tone information and pronunciation.

### Core Features
1. **Smart Search:** Search by Thai script, English, or transcription
2. **Syllable Breakdown:** Detailed syllable and tone information
3. **Audio Pronunciation:** Native speaker audio for each word
4. **Example Sentences:** Contextual usage examples
5. **Word Lists:** Save and organize vocabulary

### Screens & User Flow

#### Screen 1: Dictionary Search
**Purpose:** Main search interface for word lookup

**UI Components:**
- **Search Bar:** TextInput with autoComplete
- **Quick Filters:** Chip components
- **Search History:** List.Item with IconButton
- **Empty State:** Card with illustration

#### Screen 2: Search Results
**Purpose:** Display search results in list format

**Result Item:**
```
List.Item
├── List.ItemTitle (Thai word)
├── List.ItemDescription (meaning + tones)
├── List.ItemRight (IconButton for details)
└── Divider
```

#### Screen 3: Word Details
**Purpose:** Comprehensive word information

**Layout:** TabView with 4 tabs

**Tab 1: Overview**
- Thai script and transcription (Text)
- English translation(s) (Text)
- Audio pronunciation (IconButton + Slider)
- Quick actions: Save, Practice, Create Flashcard (Button)

**Tab 2: Tone Analysis**
- Syllable breakdown with tone colors (Chip)
- Pitch contour visualization (VictoryChart)
- Tone production guide (List)
- Minimal pairs (Card)

**Tab 3: Examples & Usage**
- Example sentences with audio (Card)
- Contextual usage notes (Text)
- Collocations and common phrases (Chip)
- Cultural notes (Alert)

**Tab 4: Related Words**
- Synonyms and antonyms (List)
- Words with similar tone patterns (Chip)
- Category-based suggestions (Card)

#### Screen 4: My Words
**Purpose:** Manage personal vocabulary lists

**UI Components:**
- **List Tabs:** SegmentedButtons for categories
- **Word Cards:** Card with progress indicators
- **List Actions:** FAB for creating new lists
- **Study Tools:** Button for practicing selected words

### Technical Notes
- **Database:** 500+ free words, 2000+ premium
- **Audio:** Pre-recorded native pronunciations
- **Offline:** Dictionary download for premium users
- **Sync:** Cloud sync for word lists and progress
- **Performance:** Target < 1 second search response

---

## 🃏 Module 4: Flashcards

### Goal
Review vocabulary and tones using spaced repetition system.

### Core Features
1. **Card Types:** Thai→English, English→Thai, Tone recognition
2. **Spaced Repetition:** SM-2 algorithm for optimal scheduling
3. **Swipe Interface:** Gesture-based card review
4. **Progress Tracking:** Mastery levels and statistics
5. **Custom Decks:** Create and organize card decks

### Screens & User Flow

#### Screen 1: Flashcard Dashboard
**Purpose:** Overview of flashcard activity and progress

**UI Components:**
- **Due Cards Counter:** Badge with number
- **Progress Rings:** CircularProgress per card type
- **Deck Overview:** Card with DataTable
- **Quick Actions:** Button "Review Due Cards"

#### Screen 2: Card Review
**Purpose:** Main interface for reviewing flashcards

**Interaction Pattern:** Swipe-based Tinder-like interface

**Card Front:**
```
Animated.View
├── Card (elevation)
│   ├── Card.Content
│   │   └── Title (card content)
│   └── Card.Actions
│       └── IconButton (flip)
└── Overlay (swipe indicators)
```

**Card Back:**
```
Card
├── Card.Content
│   ├── Title (answer)
│   ├── Paragraph (additional info)
│   └── IconButton (play audio)
└── Card.Actions
    └── ButtonGroup (difficulty ratings)
```

**Difficulty Ratings:**
- **Swipe Left:** Hard (Icon thumb-down)
- **Tap/Tap:** Good (Icon thumb-up)
- **Swipe Right:** Easy (Icon star)

#### Screen 3: Card Management
**Purpose:** Create, edit, and organize flashcards

**UI Components:**
- **Card List:** FlatList with List.Item
- **Card Editor:** Dialog with TextInput fields
- **Bulk Actions:** Checkbox + Menu
- **Import/Export:** Button with Menu

#### Screen 4: Statistics
**Purpose:** Track learning progress and effectiveness

**UI Components:**
- **Progress Charts:** VictoryLine charts
- **Retention Rate:** ProgressBar with percentage
- **Weak Areas:** List with Icon
- **Study Streak:** Badge with number

### Technical Notes
- **Algorithm:** SM-2 spaced repetition
- **Sync:** Cloud sync for card state and scheduling
- **Offline:** Full offline review capability
- **Notifications:** Local reminders for due cards
- **Performance:** Instant card flip animations

---

## 📊 Module 5: Dashboard

### Goal
Track overall progress and provide personalized recommendations.

### Core Features
1. **Progress Overview:** Visual summary of all learning activities
2. **Activity Feed:** Recent practice sessions and achievements
3. **Personalized Recommendations:** AI-powered practice suggestions
4. **Goal Tracking:** Daily/weekly learning goals
5. **Streaks & Achievements:** Gamification elements

### Screens & User Flow

#### Screen 1: Main Dashboard
**Purpose:** Central hub for all learning activities

**Layout:** ScrollView with sections

**Section 1: Welcome & Streak**
- Personalized greeting (Text)
- Current streak counter (Badge)
- Today's goal progress (ProgressBar)

**Section 2: Tone Mastery**
- CircularProgress indicators for 5 tones
- Accuracy trends (VictoryLine)
- Button "Practice Weakest Tone"

**Section 3: Quick Stats**
- Card with DataTable for stats
- Total practice time, words learned, etc.

**Section 4: Recent Activity**
- List with List.Item for activities
- Achievements unlocked (Badge)
- Progress milestones (Chip)

**Section 5: Recommendations**
- Card with personalized suggestions
- Button "Continue where you left off"
- Chip for new content

#### Screen 2: Detailed Statistics
**Purpose:** In-depth analytics and progress tracking

**UI Components:**
- **Time Period Selector:** SegmentedButtons
- **Progress Graphs:** VictoryChart components
- **Skill Breakdown:** DataTable with sorting
- **Export Options:** Button with Menu

#### Screen 3: Achievements
**Purpose:** Gamification and motivation

**UI Components:**
- **Achievement Grid:** FlatList with Card
- **Progress Bars:** LinearProgress for achievements
- **Leaderboard:** Card with Avatar list
- **Share Options:** IconButton with Share API

### Technical Notes
- **Data Aggregation:** Combine data from all modules
- **Personalization:** Simple recommendation algorithm
- **Caching:** Local cache for offline viewing
- **Performance:** Smooth animations for progress updates
- **Privacy:** User controls for data sharing

---

## 🔗 Module Integration Points

### Shared Components
1. **Recording Interface:** Consistent across Tone Practice and Shadowing
2. **Syllable Visualization:** Same component in Dictionary and Results
3. **Audio Player:** Standardized across all modules
4. **Progress Indicators:** Consistent visual language

### Navigation Flow
```
Dashboard (Home)
├── Tone Practice
│   ├── Tone Selection
│   ├── Word Selection
│   └── Practice Interface
├── Shadowing Practice
│   ├── Video Browser
│   ├── Video Player
│   └── Phrase Practice
├── Dictionary
│   ├── Search
│   ├── Word Details
│   └── My Words
├── Flashcards
│   ├── Review
│   ├── Management
│   └── Statistics
└── Settings & Profile
```

### Data Flow
- **User Progress:** Sync across modules via Zustand store
- **Audio Files:** Cache locally, sync with cloud
- **Word Database:** Download updates for premium users
- **Subscription Status:** Check via RevenueCat API

---

## 🎯 Wireframing Guidelines

### For Design Team:
1. **Use React Native Paper Components:** Reference the component library
2. **Mobile-First Design:** 44x44px touch targets, safe areas
3. **Gesture Considerations:** Plan for swipe, tap, pinch interactions
4. **Theme Consistency:** Use the defined color scheme and typography
5. **Accessibility:** Include VoiceOver/TalkBack labels

### For Development Team:
1. **Component Reusability:** Create shared components for repeated patterns
2. **Performance:** Optimize for 60fps animations
3. **Offline Support:** Plan caching strategies for each module
4. **Testing:** Include unit tests for critical functionality
5. **Documentation:** Comment complex logic and component props

---

## 📝 Next Steps for Wireframing

1. **Create wireframes** for each screen using React Native Paper components
2. **Design interactions** for touch gestures and animations
3. **Define component states** (loading, error, empty, success)
4. **Create responsive layouts** for different screen sizes
5. **Test with users** for usability and learning effectiveness

*This document serves as the foundation for creating detailed wireframes and user interface designs for the Thai Tone Trainer mobile application.*