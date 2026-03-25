# User Flow: Shadowing Practice Module
*Version 1.0 | Fluency Development through Imitation*

## 🎯 Overview
Complete path for users practicing pronunciation and fluency by imitating native speakers using YouTube content.

## 👤 Primary User Persona
- **Name:** Sarah, 32-year-old language enthusiast
- **Goal:** Improve speaking fluency and natural intonation
- **Current Level:** Intermediate (knows tones, needs conversation practice)
- **Motivation:** Practice with real Thai content, not textbook examples

## 📋 Flow Entry Points
1. **Main Dashboard** → "Practice Shadowing" button
2. **Video Library** → Browse and select video
3. **Progress Dashboard** → "Recommended video" based on level
4. **Dictionary** → "Practice this word in context" from word detail
5. **Social Feed** → See what others are practicing

## 🔄 Complete Flow Diagram

```
Start
  ↓
[Entry Point] → Landing on Video Library
  ↓
1. Content Discovery Phase
  ├── Browse video categories (News, Conversations, Drama, Education)
  ├── Use search/filters (difficulty, duration, tone focus)
  ├── View recommendations (AI-powered, trending, for you)
  └── Select video based on thumbnail + metadata
  ↓
2. Video Preparation Phase
  ├── Load video player with Thai subtitles
  ├── Auto-generate phrase segmentation (Whisper)
  ├── Analyze tone patterns in video
  ├── Preview difficulty assessment
  └── Set practice preferences (speed, repeats)
  ↓
3. Practice Session Setup
  ├── Choose practice mode: Full video or specific phrases
  ├── Select phrases to practice (click on subtitle segments)
  ├── Adjust settings: speed, auto-pause, loop
  ├── Review selected phrases list
  └── Start practice session
  ↓
4. Phrase Practice Loop (Repeat for each phrase)
  ├── Listen to native audio (auto-play)
  ├── View subtitles with tone highlighting
  ├── Record own pronunciation
  ├── Compare with native (waveform + pitch)
  ├── Receive accuracy feedback
  └── Decide: Repeat or Next phrase
  ↓
5. Session Completion
  ├── Overall session statistics
  ├── Progress update (phrases mastered)
  ├── Difficulty adjustment recommendations
  ├── Next practice suggestions
  └── Option to save session for later
  ↓
[Decision Point]
  ├── Continue with same video (next phrases)
  ├── Try different video (similar difficulty)
  ├── Review mastered phrases
  └── Return to dashboard
  ↓
End/Next Action
```

## 🎨 Screen-by-Screen Breakdown

### Screen 1: Video Library / Discovery
**Purpose:** Browse and select Thai content for practice

**UI Elements:**
- Header: "Shadowing Practice" + Search bar
- Category tabs: News, Conversations, Drama, Education, Favorites
- Video grid with cards showing:
  - Thumbnail + Play button overlay
  - Title (Thai + English translation)
  - Metadata: Duration, Difficulty (1-5 stars), Tone complexity
  - Progress indicator: "You practiced 3/15 phrases"
- Filter panel:
  - Difficulty: Beginner, Intermediate, Advanced
  - Duration: Short (<3min), Medium (3-10min), Long (>10min)
  - Tone focus: Specific tones present
  - Has subtitles: Thai, English, Both
- "Recommended for you" section (personalized)
- "Trending now" (community popularity)

**User Actions:**
1. Browse video cards (hover for preview)
2. Use search (Thai or English keywords)
3. Apply filters to narrow selection
4. Click video to open detail/preview
5. Save to favorites for later

### Screen 2: Video Detail & Preparation
**Purpose:** Preview video and set up practice session

**Layout:** Two-column design
```
┌─────────────────┬─────────────────┐
│   Video Player  │   Video Info    │
│   + Controls    │   + Setup       │
└─────────────────┴─────────────────┘
```

**Left Column - Video Player:**
- Embedded YouTube player (or custom)
- Custom controls overlay:
  - Speed control (0.5x, 0.75x, 1x, 1.25x, 1.5x)
  - Auto-pause after phrases
  - Loop current phrase
  - Subtitle toggle (Thai, English, Both, None)
- Interactive subtitles:
  - Color-coded by tone
  - Click to jump to timestamp
  - Hover for translation
  - Select phrases for practice

**Right Column - Practice Setup:**
- Video metadata:
  - Title, channel, upload date
  - Difficulty assessment breakdown
  - Tone pattern analysis
  - Estimated practice time
- Practice mode selection:
  - **Full video:** Practice all phrases
  - **Selected phrases:** Choose specific segments
  - **Challenge mode:** No pausing, continuous
- Selected phrases list (if choosing specific):
  - Each phrase with timestamp
  - Difficulty indicator
  - Option to remove
- Settings:
  - Target accuracy (70%, 80%, 90%)
  - Repeats per phrase (1, 2, 3, 5)
  - Break between phrases (0s, 3s, 5s)
  - Show/hide visual feedback

### Screen 3: Shadowing Practice Interface
**Purpose:** Active practice session with recording and feedback

**Layout:** Three main areas
```
┌─────────────────────────────────────┐
│          Video Player Area          │
│  (Smaller, focused on current phrase)│
├─────────────────────────────────────┤
│        Current Phrase Display       │
│   Thai text + Translation + Controls │
├─────────────────────────────────────┤
│      Recording & Comparison Area    │
│   Record button + Waveforms + Feedback│
└─────────────────────────────────────┘
```

**Top Area - Video Player:**
- Mini player showing current segment
- Current phrase highlighted in subtitles
- Progress bar for phrase duration
- Auto-pauses at end of phrase
- Loop controls for current phrase

**Middle Area - Current Phrase:**
- Large Thai text (with tone coloring)
- Phonetic transcription below
- English translation
- Tone pattern visualization (simple graph)
- Native audio: Play button + waveform
- Play count: "Listen 1/3 times"

**Bottom Area - Recording & Feedback:**
- **Recording controls:**
  - Large circular record button
  - Recording timer
  - Volume meter
  - Cancel/retry button
- **Comparison visualization:**
  - Dual waveform: Native (top) vs User (bottom)
  - Pitch contour overlay (if available)
  - Areas of mismatch highlighted
- **Accuracy feedback:**
  - Overall score (0-100%)
  - Breakdown: Pronunciation, Timing, Tone
  - Specific feedback: "Vowel length good, tone starts too low"
  - Improvement suggestions

### Screen 4: Practice Loop Controls
**Purpose:** Manage progression through phrases

**UI Elements (sidebar or bottom bar):**
- Session progress: "Phrase 3/8"
- List of all phrases in session:
  - Each with status: Not started, In progress, Completed
  - Accuracy score for completed phrases
  - Option to re-practice specific phrases
- Session controls:
  - Pause/Resume session
  - Skip current phrase
  - Replay native audio
  - Adjust speed (on the fly)
- Timer: Total session time elapsed
- Quick stats: Average accuracy, phrases mastered

### Screen 5: Session Results & Progress
**Purpose:** Review performance and plan next steps

**Layout:** Summary + Details

**Summary Section:**
- Session completion badge
- Overall accuracy score
- Time spent practicing
- Phrases attempted vs mastered
- Personal best achievements

**Detailed Analysis:**
- Accuracy trend during session (graph)
- Weakest areas: Specific tones or sounds
- Comparison to previous sessions
- Difficulty assessment: Ready for harder content?

**Recommendations:**
- "You excelled with mid tone, try more falling tone practice"
- "Next video suggestion: Thai news about technology"
- "Consider practicing at 1.25x speed for challenge"
- "Review these 3 phrases tomorrow for retention"

**Action Buttons:**
- Primary: "Continue with next video"
- Secondary: "Practice weak phrases again"
- Tertiary: "Save session summary"
- Additional: "Share results" (social)

## ⚠️ Error States & Edge Cases

### Error 1: YouTube Video Unavailable
**Detection:** Video removed, private, or region-blocked
**User sees:** "This video is no longer available"
**Options:**
- "Try another video" (suggest alternatives)
- "Report unavailable video"
- "Use saved audio" (if previously downloaded)
- "Search for similar content"

### Error 2: Transcription Failed
**Detection:** Whisper returns poor/no transcription
**User sees:** "Automatic subtitles unavailable"
**Options:**
- "Try manual phrase selection"
- "Use community-created subtitles"
- "Practice without subtitles"
- "Skip to next video"

### Error 3: Poor Audio Quality in Video
**Detection:** Low volume, background noise, multiple speakers
**User sees:** "Audio quality may affect practice"
**Suggestions:**
- "Try videos marked 'High Audio Quality'"
- "Adjust volume normalization"
- "Use headphones for better clarity"
- "Select clearer segments only"

### Error 4: Internet Connection Lost
**User sees:** "Working offline with available content"
**Capabilities:**
- Practice pre-downloaded videos/phrases
- Record locally (sync later)
- Access cached transcriptions
- Limited to downloaded content

## 📊 Success Metrics for This Flow

### Engagement Metrics
- **Session completion rate:** % who finish full practice sessions
- **Average phrases per session:** Number of phrases practiced
- **Return rate:** % who use shadowing multiple times per week
- **Content diversity:** Variety of video types used

### Learning Metrics
- **Accuracy improvement:** Score increase over multiple sessions
- **Speed adaptation:** Ability to practice at faster speeds
- **Phrase retention:** Mastery of phrases over time
- **Comprehension improvement:** Understanding of practiced content

### Technical Metrics
- **Transcription accuracy:** % of phrases correctly segmented
- **Processing time:** Video to practice-ready time
- **Recording success rate:** % of usable recordings
- **Load performance:** Time to start practice session

## 🔄 Alternative Flows

### Flow A: Quick Shadowing (5-minute session)
**For:** Busy users, daily practice habit
**Path:** Dashboard → Quick Shadowing → 3 random phrases → Basic feedback → Done
**Time:** 5-7 minutes total

### Flow B: Focused Tone Practice
**For:** Users targeting specific tone improvement
**Path:** Select tone → Filter videos with that tone → Practice phrases → Tone-specific feedback
**Time:** 10-15 minutes

### Flow C: Content Creation Flow
**For:** Advanced users, teachers
**Path:** Upload own content → Generate subtitles → Create practice segments → Share with community
**Time:** Variable

## 🎮 Gamification Elements

### During Session:
- **Phrase mastery:** Stars for accuracy levels
- **Speed challenges:** Unlock faster speed achievements
- **Consistency rewards:** Daily streak for shadowing
- **Progressive difficulty:** Unlock harder content

### After Session:
- **Video completion badges:** For finishing full videos
- **Tone specialist:** Master specific tone in multiple contexts
- **Content explorer:** Try different video categories
- **Community contributor:** Help improve subtitles

## 🛠️ Technical Requirements

### YouTube Integration:
- YouTube Data API v3 for search/metadata
- YouTube IFrame Player API for embedding
- Custom controls overlay
- Region/content availability handling

### Audio Processing:
- Audio extraction from video
- Whisper AI transcription service
- Phrase segmentation algorithm
- Audio comparison for feedback

### Frontend Requirements:
- Video player with custom controls
- Interactive subtitle rendering
- Real-time recording visualization
- Progress tracking during session

### Backend Requirements:
- Video processing pipeline
- Transcription storage and caching
- User progress and session history
- Content recommendation engine

## 📱 Responsive Behavior

### Desktop (1024px+):
- Multi-column layout
- Video player + controls + practice interface
- Sidebar for phrase list and progress

### Tablet (768px-1024px):
- Simplified two-column layout
- Video player above, practice below
- Collapsible controls

### Mobile (320px-768px):
- Single column, full-screen practice
- Simplified interface for touch
- Larger recording controls
- Vertical scrolling for phrase list

## ♿ Accessibility Considerations

### For Hearing Impaired:
- Visual waveform representations
- Text-based feedback (not just audio)
- Vibration cues for recording timing
- Caption customization options

### For Motor Impairments:
- Voice commands for controls
- Keyboard shortcuts for all actions
- No time pressure for responses
- Large, spaced touch targets

### For Cognitive Needs:
- Clear step indicators
- Consistent interface patterns
- Option to disable distractions
- Practice without time limits

## 🔄 Iteration Plan

### Version 1.0 (Launch):
- Basic YouTube integration
- Manual phrase selection
- Simple recording and playback
- Text-based accuracy feedback

### Version 1.1 (Month 2):
- Automated phrase segmentation
- Advanced comparison visualizations
- Speed control and looping
- Session history and progress

### Version 2.0 (Month 4):
- AI-powered difficulty adaptation
- Social features (share, compete)
- Content creation tools
- Offline mode with download

## 📝 Implementation Priorities

### Phase 1 (Core):
1. YouTube video embedding with custom controls
2. Basic recording and comparison interface
3. Manual phrase selection from subtitles
4. Simple accuracy scoring

### Phase 2 (Enhanced):
1. Automated phrase segmentation (Whisper)
2. Advanced visualization (waveforms, pitch)
3. Speed control and practice settings
4. Progress tracking and recommendations

### Phase 3 (Advanced):
1. Content recommendation engine
2. Social and community features
3. Offline capability
4. Content creation tools

## 🔗 Integration Points

### With Tone Practice Module:
- "Practice this tone in context" links
- Shared recording and analysis components
- Unified progress tracking
- Cross-module recommendations

### With Dictionary Module:
- Click words in subtitles to see definitions
- Save phrases to vocabulary lists
- Practice words in context from dictionary
- Link example sentences to videos

### With Progress Dashboard:
- Shadowing time and accuracy tracking
- Video completion achievements
- Difficulty progression milestones
- Personalized content recommendations

---

*This user flow defines the complete shadowing practice experience. It should be implemented incrementally, starting with core functionality and expanding based on user feedback and technical capabilities.*