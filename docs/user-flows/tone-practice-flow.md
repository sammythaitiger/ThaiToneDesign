# User Flow: Tone Practice Module
*Version 1.0 | Primary Learning Flow*

## 🎯 Overview
Complete path for user practicing Thai tones with recording and AI analysis.

## 👤 Primary User Persona
- **Name:** Alex, 28-year-old professional
- **Goal:** Improve Thai tone pronunciation for business meetings
- **Current Level:** Beginner (can read Thai script, struggles with tones)
- **Motivation:** Objective feedback on pronunciation accuracy

## 📋 Flow Entry Points
1. **Main Dashboard** → "Practice Tones" button
2. **Tones Overview** → Click on specific tone
3. **Daily Goals** → "Complete tone practice" reminder
4. **Progress Dashboard** → "Weakest tone: Falling" recommendation

## 🔄 Complete Flow Diagram

```
Start
  ↓
[Entry Point] → Landing on Tone Practice Screen
  ↓
1. Tone Selection Phase
  ├── Option A: Select from 5 tone cards
  ├── Option B: Use "Recommended for you"
  └── Option C: Continue from last session
  ↓
2. Preparation Phase
  ├── Listen to native pronunciation (auto-play)
  ├── View pitch contour visualization
  ├── Read pronunciation tips
  └── Adjust microphone settings if needed
  ↓
3. Recording Phase
  ├── Click "Start Recording" button
  ├── Real-time waveform visualization
  ├── Visual feedback on volume/quality
  ├── Automatic stop after 5 seconds
  └── Manual stop option
  ↓
4. Analysis Phase
  ├── Upload recording to server
  ├── Show loading animation with estimated time
  ├── Compare pitch contours (user vs native)
  ├── Calculate accuracy scores
  └── Generate personalized feedback
  ↓
5. Feedback Phase
  ├── Display overall accuracy (0-100%)
  ├── Show breakdown (tone, pronunciation, timing)
  ├── Provide specific improvement suggestions
  ├── Offer "Try Again" or "Next Exercise"
  └── Update progress metrics
  ↓
[Decision Point]
  ├── If accuracy < 70% → Suggest "Try Again"
  ├── If accuracy 70-85% → Suggest "Good, try next"
  ├── If accuracy > 85% → Suggest "Mastered, move on"
  └── If user frustrated → Suggest "Take a break"
  ↓
6. Progression Phase
  ├── Update tone mastery level
  ├── Add to practice history
  ├── Adjust difficulty if needed
  └── Show progress toward daily/weekly goals
  ↓
End/Next Action
```

## 🎨 Screen-by-Screen Breakdown

### Screen 1: Tone Selection Dashboard
**Purpose:** Choose which tone to practice

**UI Elements:**
- Header: "Tone Practice" with back button
- 5 tone cards (Mid, Low, Falling, High, Rising)
  - Each card: tone name, symbol, current accuracy, recommended badge
- "Recommended for you" section (AI-powered)
- "Continue where you left off" button
- "Practice all tones" quick start button
- Progress indicators for each tone

**User Actions:**
1. Browse tone cards (hover effects, tooltips)
2. Click card to select tone
3. Click "Recommended" for AI suggestion
4. Click "Continue" to resume previous session

**System Responses:**
- Highlight selected tone card
- Show brief description of selected tone
- Play subtle tone sound on hover (optional)
- Update "last practiced" timestamp

### Screen 2: Tone Practice Interface
**Purpose:** Main recording and practice screen

**Layout:** Three-column design
```
┌─────────────────┬─────────────────┬─────────────────┐
│   Left Column   │  Center Column  │  Right Column   │
│   Tone Info     │   Recording     │   Analysis      │
└─────────────────┴─────────────────┴─────────────────┘
```

**Left Column - Tone Information:**
- Selected tone: Large symbol + name
- Pronunciation guide: "Start mid, rise slightly"
- Example word: Thai script + translation
- Native audio: Play button with waveform
- Difficulty level: 1-5 stars
- Previous attempts: Mini accuracy graph

**Center Column - Recording Controls:**
- Large circular record button (prominent)
- Real-time waveform visualization
- Recording timer (0:00 - 5:00)
- Volume meter (visual feedback)
- Controls: Play/Stop/Re-record
- Instructions: "Try to match the native tone"

**Right Column - Analysis Preview:**
- Placeholder for comparison visualization
- Accuracy target: "Aim for 80%+"
- Tips: "Focus on the rising contour"
- Quick stats: Best score, attempts today

### Screen 3: Recording in Progress
**Purpose:** User is actively recording pronunciation

**Visual Changes:**
- Record button turns red with pulsing animation
- Timer starts counting up
- Real-time waveform shows incoming audio
- Volume meter actively responds
- "Recording..." status indicator
- Auto-stop countdown appears at 4 seconds

**User Actions During Recording:**
- Speak the example word clearly
- Watch waveform for feedback
- Can manually stop anytime
- Can cancel recording (discard)

**System Monitoring:**
- Check audio quality (clarity, volume)
- Detect background noise
- Ensure minimum volume threshold
- Validate recording length (1-5 seconds)

### Screen 4: Analysis Processing
**Purpose:** Show progress while analyzing recording

**UI Elements:**
- Animated loading spinner
- Progress bar with estimated time
- Status messages:
  - "Uploading recording..."
  - "Analyzing pitch contour..."
  - "Comparing with native speaker..."
  - "Generating feedback..."
- Fun facts about Thai tones (while waiting)
- Cancel analysis button (optional)

**Technical Process:**
1. Upload audio blob to server (2-3 sec)
2. Server processes with Librosa (3-4 sec)
3. Compare with reference database (1-2 sec)
4. Generate feedback and scores (1-2 sec)
5. Return results to frontend

**Total Time:** 7-11 seconds target

### Screen 5: Results & Feedback
**Purpose:** Show analysis results and improvement suggestions

**Layout:** Two main sections

**Top Section - Accuracy Scores:**
- Large overall accuracy percentage (e.g., "78%")
- Circular progress indicators for:
  - Tone Accuracy (primary metric)
  - Pronunciation (vowel/consonant clarity)
  - Timing (duration matching)
- Comparison to previous attempts
- "Personal best!" badge if applicable

**Bottom Section - Detailed Feedback:**
- Pitch contour comparison visualization
  - Two lines: Native (blue) vs User (green)
  - Areas of divergence highlighted in red
- Specific feedback points:
  - "Your tone starts 15% too high"
  - "The falling contour happens too quickly"
  - "Vowel duration is good"
- Actionable suggestions:
  - "Try starting from a lower pitch"
  - "Practice saying it slower first"
  - "Listen to the native audio 2 more times"

**Action Buttons:**
- Primary: "Try Again" (most common)
- Secondary: "Next Exercise"
- Tertiary: "Save to Practice Later"
- Additional: "Share Result" (social)

### Screen 6: Progression & Next Steps
**Purpose:** Guide user to what to do next

**UI Elements:**
- Progress update: "Tone mastery increased from 65% to 72%"
- Daily goal status: "2/5 tone practices completed"
- Next recommendation:
  - "Practice the same tone again"
  - "Try a word with this tone in context"
  - "Move to next tone: Low Tone"
  - "Take a 5-minute break"
- Quick stats:
  - Time spent today
  - Accuracy trend (graph)
  - Streak maintenance

**Navigation Options:**
- Return to tone selection
- Go to dashboard
- Start next practice session
- Review practice history
- Adjust settings

## ⚠️ Error States & Edge Cases

### Error 1: Microphone Permission Denied
**User sees:** "Microphone access required" modal
**Options:**
- "Grant Permission" (opens browser settings)
- "Practice without recording" (text-only mode)
- "Watch tutorial" (how to enable microphone)

### Error 2: Poor Audio Quality
**Detection:** Low volume, too much noise, clipped audio
**User sees:** "We had trouble analyzing your recording"
**Suggestions:**
- "Move to a quieter place"
- "Speak closer to microphone"
- "Check microphone settings"
- "Try again with clearer audio"

### Error 3: Analysis Failed
**Detection:** Server error, timeout, processing failure
**User sees:** "Analysis didn't complete"
**Options:**
- "Try analysis again"
- "Save recording for later analysis"
- "Skip to next exercise"
- "Report problem"

### Error 4: No Internet Connection
**User sees:** "Offline mode activated"
**Capabilities:**
- Can still record (stores locally)
- Limited analysis (client-side only)
- Sync when connection restored
- Practice pre-downloaded content

## 📊 Success Metrics for This Flow

### Engagement Metrics
- **Completion rate:** % of users who finish full practice session
- **Time per session:** Average minutes spent in tone practice
- **Return rate:** % who come back to practice same tone
- **Satisfaction:** Post-session feedback score

### Learning Metrics
- **Accuracy improvement:** Score change from first to last attempt
- **Retention:** Ability to reproduce tone correctly later
- **Progress rate:** How quickly users advance through difficulty levels
- **Error reduction:** Decrease in specific mistakes over time

### Technical Metrics
- **Recording success rate:** % of recordings that process successfully
- **Analysis time:** Average seconds for full analysis
- **Error rate:** % of sessions with technical issues
- **Load time:** Time to interactive for practice screen

## 🔄 Alternative Flows

### Flow A: Quick Practice Mode
**For:** Users with limited time
**Path:** Dashboard → Quick Practice → Single recording → Basic feedback → Done
**Time:** 2-3 minutes total

### Flow B: Deep Practice Mode  
**For:** Serious learners, struggling with specific tone
**Path:** Select tone → Multiple attempts → Compare all attempts → Detailed analysis → Create practice plan
**Time:** 10-15 minutes

### Flow C: Guided Tutorial Mode
**For:** Complete beginners
**Path:** Step-by-step tutorial → Visual guides → Slow practice → Gradual difficulty increase
**Time:** 15-20 minutes

## 🎮 Gamification Elements

### During Practice:
- **Streak counter:** Days in a row practicing
- **Accuracy milestones:** 70%, 80%, 90% badges
- **Challenge prompts:** "Can you beat 85%?"
- **Progress animations:** Visual rewards for improvement

### After Practice:
- **Achievements:** "Tone Master", "Perfect Pitch", "Consistent Practice"
- **Level progression:** Unlock new difficulty levels
- **Shareable results:** Social sharing with progress
- **Leaderboards:** Compare with friends/community

## 🛠️ Technical Requirements

### Frontend Requirements:
- Web Audio API support
- Real-time waveform visualization
- Audio recording and playback
- WebSocket for progress updates
- Local storage for offline recording

### Backend Requirements:
- Audio file processing pipeline
- Pitch extraction algorithms (Librosa)
- Reference audio database
- Analysis result caching
- User progress tracking

### Performance Requirements:
- Recording start: < 500ms
- Analysis completion: < 10 seconds
- UI responsiveness: 60fps during recording
- Memory usage: < 100MB for audio processing

## 📱 Responsive Behavior

### Desktop (1024px+):
- Three-column layout
- Large recording controls
- Detailed visualization side-by-side

### Tablet (768px-1024px):
- Two-column layout (info + recording)
- Analysis moves below
- Slightly smaller controls

### Mobile (320px-768px):
- Single column vertical flow
- Full-screen recording interface
- Simplified visualizations
- Larger touch targets

## ♿ Accessibility Considerations

### Visual:
- High contrast mode support
- Text size adjustable up to 200%
- Screen reader compatibility
- Color-blind friendly visualizations

### Motor:
- Keyboard navigation support
- Voice command compatibility
- Large click/touch targets
- No time pressure for actions

### Cognitive:
- Clear step-by-step instructions
- Consistent navigation patterns
- Error prevention and clear recovery
- Option to disable animations

## 🔄 Iteration Plan

### Version 1.0 (Launch):
- Basic recording and analysis
- Simple accuracy scoring
- Text-based feedback
- Core practice flow

### Version 1.1 (Month 2):
- Advanced visualization (pitch contours)
- Multiple feedback categories
- Comparison with previous attempts
- Personal best tracking

### Version 2.0 (Month 4):
- AI-generated personalized tips
- Real-time feedback during recording
- Social comparison features
- Advanced difficulty adaptation

## 📝 Next Steps for Implementation

1. **Wireframe creation** for each screen
2. **Component breakdown** for UI elements
3. **API specification** for audio analysis endpoints
4. **Database design** for user progress tracking
5. **Test scenarios** for each user action

---

*This user flow serves as the foundation for the Tone Practice module. All design and development should align with this flow while allowing for iterative improvements based on user feedback.*