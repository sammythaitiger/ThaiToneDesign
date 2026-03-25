# User Flow: Smart Dictionary Module
*Version 1.0 | Vocabulary Acquisition with Tone Focus*

## 🎯 Overview
Complete path for users searching, learning, and managing Thai vocabulary with emphasis on tone patterns and contextual usage.

## 👤 Primary User Persona
- **Name:** James, 25-year-old university student
- **Goal:** Build academic vocabulary for Thai studies program
- **Current Level:** Lower-intermediate (knows basics, expanding vocabulary)
- **Motivation:** Learn words in context with proper tone pronunciation

## 📋 Flow Entry Points
1. **Main Navigation** → "Dictionary" menu item
2. **Tone Practice** → "View word details" from practice word
3. **Shadowing** → Click on word in subtitles → "Look up in dictionary"
4. **Flashcards** → "Add new word" from card creation
5. **Search Bar** (global) → Direct word search

## 🔄 Complete Flow Diagram

```
Start
  ↓
[Entry Point] → Landing on Dictionary Search
  ↓
1. Search & Discovery Phase
  ├── Use search bar (Thai, English, transcription)
  ├── Apply filters (tone, category, difficulty, frequency)
  ├── Browse categories or themed word lists
  ├── View "Word of the day" or recommendations
  └── Select word from search results
  ↓
2. Word Exploration Phase
  ├── View comprehensive word details
  ├── Listen to native pronunciation
  ├── Study tone pattern visualization
  ├── Review example sentences with audio
  ├── See related words (synonyms, antonyms, minimal pairs)
  └── Check word usage statistics
  ↓
3. Learning Integration Phase
  ├── Add word to personal list (studying, mastered, difficult)
  ├── Create flashcard from word (multiple card types)
  ├── Practice pronunciation (link to tone practice)
  ├── Save example sentences for later review
  └── Share word with study group
  ↓
4. List Management Phase (Optional)
  ├── Create new word list (thematic, custom)
  ├── Add/remove words from existing lists
  ├── Organize lists by priority or category
  ├── Export lists for printing or sharing
  └── Set study goals for lists
  ↓
[Decision Point]
  ├── Search for another word
  ├── Practice words from current list
  ├── Review recently viewed words
  └── Return to main learning flow
  ↓
End/Next Action
```

## 🎨 Screen-by-Screen Breakdown

### Screen 1: Dictionary Search & Discovery
**Purpose:** Find words through search, filters, and browsing

**UI Elements:**
- **Primary Search Bar:** 
  - Smart search: Thai script, English, phonetic transcription
  - Auto-suggestions as typing
  - Search history dropdown
  
- **Advanced Filters Panel:**
  - **Tone Filter:** Select one or multiple tones (Mid, Low, Falling, High, Rising)
  - **Tone Pattern Filter:** Specific patterns (e.g., "mid-low", "high-rising")
  - **Category Filter:** Food, Travel, Business, Family, Animals, etc.
  - **Difficulty Filter:** Beginner, Intermediate, Advanced
  - **Frequency Filter:** Top 100, Top 500, Top 1000, All
  - **Part of Speech:** Noun, Verb, Adjective, Adverb, etc.
  - **Word Length:** 1-2 syllables, 3-4 syllables, 5+ syllables
  
- **Browse Sections:**
  - **Categories Grid:** Visual icons for common categories
  - **Themed Word Lists:** "Survival Thai", "Business Meetings", "Food Ordering"
  - **Word of the Day:** Featured word with quick preview
  - **Recently Viewed:** Quick access to previous searches
  - **Your Lists:** Personal word collections
  
- **Search Results Display:**
  - Card-based results with key information
  - Each card shows: Thai word, transcription, tone pattern, English translation
  - Color-coded tone indicators
  - Status badges: "In your list", "Recently practiced", "New"
  - Quick actions: Add to list, Practice, View details

### Screen 2: Word Detail View
**Purpose:** Comprehensive learning of a single word

**Layout:** Tabbed interface for different information types

**Tab 1: Overview**
- **Word Display:**
  - Large Thai script (with tone coloring)
  - Phonetic transcription below (with tone marks)
  - English translation(s)
  - Part of speech and grammar notes
  
- **Pronunciation Section:**
  - Native audio player (play, loop, slow speed)
  - Visual tone pattern graph (pitch contour)
  - Recording button: "Try pronouncing it"
  - Comparison with your previous attempts
  
- **Quick Stats:**
  - Frequency rank (1-5000)
  - Difficulty rating (1-5 stars)
  - Commonness in spoken vs written Thai

**Tab 2: Tone Analysis**
- **Tone Pattern Visualization:**
  - Detailed pitch contour graph (native speaker)
  - Comparison with similar tone patterns
  - Minimal pairs: Words that differ only by tone
  
- **Tone Production Guide:**
  - "How to pronounce this tone" instructions
  - Mouth position diagrams (for relevant sounds)
  - Common mistakes and how to avoid them
  
- **Tone Context Examples:**
  - How tone changes in different word positions
  - Tone sandhi rules if applicable
  - Practice sentences with this tone

**Tab 3: Examples & Usage**
- **Example Sentences:**
  - 5-10 contextual examples (Thai + English)
  - Audio for each example sentence
  - Translation with word highlighted
  - Option to practice each sentence (shadowing)
  
- **Collocations & Phrases:**
  - Common word combinations
  - Idiomatic expressions containing the word
  - Formal vs informal usage
  
- **Cultural Notes:**
  - When and how to use the word appropriately
  - Cultural context or connotations
  - Regional variations if any

**Tab 4: Related Words**
- **Semantic Relations:**
  - Synonyms and near-synonyms
  - Antonyms and opposites
  - Hypernyms (broader categories)
  - Hyponyms (specific examples)
  
- **Tone Relations:**
  - Minimal pairs (same sound, different tone)
  - Words with similar tone patterns
  - Tone families (groups of words with same pattern)
  
- **Learning Path:**
  - "People who studied this also studied..."
  - Suggested next words to learn
  - Prerequisite words if any

**Tab 5: Learning Tools**
- **Add to Lists:**
  - Quick add to "Studying", "Mastered", or "Difficult"
  - Create new custom list
  - Add with note or priority level
  
- **Create Flashcards:**
  - Multiple card type options:
    - Thai → English
    - English → Thai  
    - Audio → Identify word
    - Tone recognition card
    - Sentence completion card
  - Customize card difficulty and tags
  
- **Practice Options:**
  - "Practice pronunciation" (goes to tone module)
  - "Use in sentence" (sentence building exercise)
  - "Test recognition" (listening comprehension)

### Screen 3: Word Lists Management
**Purpose:** Organize and manage personal vocabulary collections

**UI Elements:**
- **Lists Overview:**
  - System lists: "Studying", "Mastered", "Difficult", "For Review"
  - Custom lists created by user
  - Each list shows: word count, progress %, last reviewed
  
- **List Detail View:**
  - List name and description
  - Word cards within the list
  - Sort options: Alphabetical, Added date, Difficulty, Progress
  - Filter: Show only unmastered words, only difficult words
  
- **List Actions:**
  - Add/remove words
  - Change list name, description, color coding
  - Set study goals (e.g., "Learn 5 words this week")
  - Export list (CSV, PDF, Anki format)
  - Share list with study group or class
  
- **Bulk Operations:**
  - Select multiple words for batch actions
  - Move between lists
  - Mark as mastered/difficult
  - Generate practice session from selected words

### Screen 4: Categories & Themes
**Purpose:** Browse words by topic or learning theme

**UI Elements:**
- **Category Grid:**
  - Visual icons for 20+ categories
  - Each category shows: word count, your progress
  - Popular categories highlighted
  
- **Theme-Based Learning Paths:**
  - "Restaurant Ordering": 50 essential words/phrases
  - "Hotel Check-in": Vocabulary for travelers
  - "Business Meetings": Formal Thai vocabulary
  - "Family & Relationships": Personal vocabulary
  
- **Category Detail View:**
  - Category description and learning tips
  - Word list for the category
  - Related categories (e.g., Food → Cooking → Restaurants)
  - Practice exercises specific to category

## ⚠️ Error States & Edge Cases

### Error 1: Word Not Found
**User sees:** "No results found for '[search term]'"
**Suggestions:**
- "Check your spelling or try phonetic transcription"
- "Search in English instead"
- "Browse similar categories"
- "Request word to be added" (with submission form)

### Error 2: Multiple Word Meanings
**User sees:** "3 meanings found for '[word]'" with disambiguation
**Options:**
- View each meaning separately with context examples
- See usage frequency for each meaning
- Select the relevant meaning for learning

### Error 3: Limited Example Sentences
**Detection:** Word has few or no example sentences
**User sees:** "Help improve this entry" call-to-action
**Options:**
- Contribute your own example sentence
- Vote on community-submitted examples
- Request more examples from teachers

### Error 4: Audio Unavailable
**User sees:** "Pronunciation audio not available"
**Alternatives:**
- Use text-to-speech as fallback
- Link to similar word with audio
- Mark for audio recording by community

## 📊 Success Metrics for This Flow

### Engagement Metrics
- **Search success rate:** % of searches that find relevant words
- **Time per word:** Average time spent exploring word details
- **List creation rate:** % of users who create custom word lists
- **Return to dictionary:** Frequency of dictionary usage

### Learning Metrics
- **Words added to lists:** Average per user per week
- **Mastery progression:** % of words moved from "studying" to "mastered"
- **Context understanding:** Ability to use words in correct context
- **Tone recognition improvement:** Better tone identification for dictionary words

### Technical Metrics
- **Search response time:** < 500ms for 95% of searches
- **Audio loading time:** < 1 second for pronunciation audio
- **Image/visual loading:** < 2 seconds for all assets
- **Offline availability:** % of dictionary accessible offline

## 🔄 Alternative Flows

### Flow A: Quick Lookup
**For:** Quick reference during other activities
**Path:** Click word anywhere in app → Quick definition popup → Option for full details
**Time:** 10-15 seconds

### Flow B: Deep Study Session
**For:** Intensive vocabulary learning
**Path:** Select word list → Study each word systematically → Create flashcards → Practice pronunciation → Review progress
**Time:** 20-30 minutes

### Flow C: Discovery Learning
**For:** Casual learning, exploration
**Path:** Browse categories → Discover new words → Save interesting finds → Casual practice
**Time:** 5-10 minutes

## 🎮 Gamification Elements

### During Exploration:
- **Word mastery levels:** Bronze, Silver, Gold for each word
- **Category completion badges:** Complete categories
- **Discovery achievements:** Find rare or difficult words
- **Collection milestones:** 50 words, 100 words, etc.

### For Community:
- **Contributor badges:** For adding examples or corrections
- **Popular lists:** Most saved/followed word lists
- **Expert ratings:** Community voting on word difficulty
- **Learning challenges:** Weekly vocabulary challenges

## 🛠️ Technical Requirements

### Frontend Requirements:
- Advanced search with filters and autocomplete
- Tabbed interface for word details
- Audio player with visualization
- Interactive tone pattern graphs
- Responsive grid for word lists

### Data Requirements:
- Comprehensive word database (5000+ words)
- Example sentences with audio
- Tone pattern annotations
- Word relationships (synonyms, categories, etc.)
- Frequency and difficulty ratings

### Integration Requirements:
- Link with tone practice module
- Connection to flashcard system
- Shadowing module integration (click words)
- Progress tracking synchronization

## 📱 Responsive Behavior

### Desktop (1024px+):
- Multi-column layout with side filters
- Tabbed word detail interface
- Advanced visualization space

### Tablet (768px-1024px):
- Simplified single column with expandable filters
- Stacked tabs for word details
- Optimized touch interactions

### Mobile (320px-768px):
- Full-screen search and results
- Swipeable tabs for word details
- Larger touch targets
- Priority on essential information

## ♿ Accessibility Considerations

### Visual Accessibility:
- High contrast text for Thai script
- Screen reader support for word definitions
- Adjustable text size
- Color-blind friendly tone indicators

### Cognitive Accessibility:
- Clear information hierarchy
- Consistent navigation patterns
- Option to simplify complex information
- Step-by-step learning paths

### Motor Accessibility:
- Keyboard navigation for all functions
- Voice search capability
- Large, well-spaced touch targets
- No time-limited interactions

## 🔄 Iteration Plan

### Version 1.0 (Launch):
- Basic search with Thai/English
- Simple word details (translation, audio, examples)
- Personal word lists (add/remove)
- Tone pattern display (simple)

### Version 1.1 (Month 2):
- Advanced filters (tone, category, difficulty)
- Enhanced tone visualization
- Example sentence audio and practice
- Bulk list operations

### Version 2.0 (Month 4):
- Community features (shared lists, contributions)
- Advanced word relationships
- Integrated learning paths
- Offline dictionary download

## 📝 Implementation Priorities

### Phase 1 (Core Dictionary):
1. Search functionality with basic filters
2. Word detail page with essential information
3. Personal word list management
4. Audio pronunciation playback

### Phase 2 (Enhanced Learning):
1. Advanced tone visualization and analysis
2. Example sentences with context practice
3. Category browsing and themed lists
4. Integration with other modules

### Phase 3 (Community & Advanced):
1. User contributions and corrections
2. Social features (share lists, collaborate)
3. Advanced analytics for learning progress
4. Teacher tools for classroom use

## 🔗 Integration Points

### With Tone Practice Module:
- "Practice this word" direct link
- Shared tone visualization components
- Progress synchronization for word mastery

### With Shadowing Module:
- Click words in subtitles to open dictionary
- Save phrases from videos to word lists
- Practice vocabulary in context from videos

### With Flashcards Module:
- One-click flashcard creation from words
- Sync word mastery status with flashcard scheduling
- Use dictionary as source for card content

### With Progress Dashboard:
- Track vocabulary growth over time
- Show weakest words needing review
- Recommend new words based on progress

---

*This user flow defines the complete dictionary experience, focused on making vocabulary learning systematic, contextual, and tone-aware. Implementation should prioritize core functionality first, then expand based on user needs and learning effectiveness.*