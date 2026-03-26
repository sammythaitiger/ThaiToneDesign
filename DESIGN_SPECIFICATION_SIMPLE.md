# Thai Tone Trainer - Mobile-First Design Specification
*Version 3.0 | React Native + Expo | Last Updated: 2024-03-25*

## 📋 Project Overview
**Thai Tone Trainer** - Cross-platform mobile application for learning Thai tones through scientific pronunciation analysis. Built with React Native + Expo for iOS, Android, and Web.

**Monetization:** Freemium model with in-app subscriptions via App Store/Google Play.

**Core Focus Areas:**
1. **Tone Practice** - Record and compare pitch contours for 5 Thai tones
2. **Shadowing** - Practice with YouTube videos using Whisper subtitles  
3. **Dictionary** - Simple word lookup with tone information
4. **Flashcards** - Anki-like system for tones and vocabulary
5. **Dashboard** - Progress tracking and recommendations

**Timeline:** 4 months total
- **Weeks 1-2:** Design & Planning
- **Months 1-2:** MVP on React Native Web
- **Months 3-4:** Mobile App Development & Store Launch

**Monetization Timeline:**
- Month 1-3: Free features only
- Month 4: Premium subscriptions activated
- Store launch: Month 4 (iOS App Store + Google Play)

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
- **expo-av** for cross-platform audio recording
- **Python/Librosa** for pitch extraction and normalization
- **Syllable segmentation algorithm** (server-side)
- **Dynamic Time Warping (DTW)** for time alignment
- **Normalized pitch comparison** (shape comparison, not raw F0)
- **Haptic feedback** during recording (react-native-haptics)
- **Offline recording cache** for poor connections

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
- **YouTube Data API v3** for video search
- **Whisper** for Thai transcription (server-side)
- **Same syllable segmentation** as tone module
- **Per-syllable normalized pitch comparison**
- **Video caching** for offline practice
- **Adaptive bitrate** for different connection speeds

### Module 3: Simple Dictionary
**Purpose:** Look up Thai words with syllable-level tone information

**Key Features:**
- Search words (Thai script, English, or transcription)
- View syllable breakdown with tone for each syllable
- Listen to native pronunciation (whole word)
- Save words to personal list
- See example sentence in context
- Quick actions: Practice word, Create flashcard

**Screens:**
1. **Search** - Find words with autocomplete
2. **Word Details** - Syllable breakdown, audio, translation
3. **My Words** - Saved vocabulary list

**Technical:**
- **Word database** with syllable segmentation (500+ free, 2000+ premium)
- **Audio playback** using expo-av
- **Tone determination** from Thai orthography
- **User word lists** with cloud sync
- **Offline dictionary** download for premium users

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
- **Simple spaced repetition algorithm** (SM-2 variant)
- **Card database** with cloud sync
- **Review scheduling** with local notifications
- **Swipe gestures** for card rating (left=hard, right=easy)
- **Offline review capability**

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

## 🏗️ Technical Stack (React Native + Expo)

### Frontend (Cross-Platform)
- **Framework:** React Native with TypeScript
- **Development:** Expo SDK 50+
- **Navigation:** React Navigation 6+
- **State Management:** Zustand (lightweight)
- **Styling:** React Native StyleSheet + Custom Design System
- **Audio Recording:** expo-av (cross-platform audio)
- **Graph Visualization:** react-native-svg + custom charts
- **Monetization:** RevenueCat for subscription management
- **Animation:** Lottie React Native

### Platforms:
- **iOS:** Native build via Expo EAS
- **Android:** Native build via Expo EAS  
- **Web:** Progressive Web App via Expo Web

### Backend Services
- **API Framework:** Python FastAPI
- **Audio Processing:** Librosa for pitch extraction & normalization
- **Transcription:** Whisper for Thai subtitle generation
- **Database:** PostgreSQL with SQLAlchemy ORM
- **Hosting:** Cloud platform (AWS/Railway/Render)
- **Caching:** Redis (optional for scaling)

### Key Integrations
- **YouTube Data API v3:** Video search and metadata
- **RevenueCat API:** Subscription management & validation
- **App Store Connect API:** iOS app management
- **Google Play Console API:** Android app management
- **Analytics:** Optional (Amplitude, Mixpanel)

### Development Tools
- **Expo EAS:** Cloud builds for iOS/Android
- **Expo Dev Client:** Development on physical devices
- **TypeScript:** Full type safety
- **Jest/Testing Library:** Unit & integration tests
- **GitHub Actions:** CI/CD pipeline

---

## 🎨 Mobile-First UI/UX Design

### Design Philosophy
- **Mobile-First:** Designed for touch interfaces first
- **Native Feel:** Follows iOS Human Interface & Material Design guidelines
- **Gesture-Friendly:** Swipe, tap, pinch gestures optimized
- **Offline-Capable:** Core functionality works without internet
- **Accessibility:** VoiceOver/TalkBack support, adjustable text sizes

### Mobile-Specific Considerations
- **Touch Targets:** Minimum 44x44px for all interactive elements
- **Gesture Navigation:** Swipe back, pull to refresh
- **Haptic Feedback:** Subtile vibrations for key interactions
- **Keyboard Avoidance:** Automatic view adjustment when keyboard appears
- **Battery Efficiency:** Optimized audio processing to conserve battery

### Core Mobile Components
- **Recording Interface:** Large circular record button with haptic feedback
- **Pitch Graph Visualization:** Touch-interactive zoomable graphs
- **Video Player:** Custom controls with gesture support (seek, volume)
- **Card Interface:** Swipe gestures for flashcards (left=hard, right=easy)
- **Bottom Navigation:** Standard mobile navigation pattern
- **Pull-to-Refresh:** For updating content

### Color Scheme (Mobile Optimized)
- **Primary:** Thai Blue (#3B82F6)
- **Secondary:** Thai Green (#10B981)
- **Tone Colors:**
  - Mid: Blue (#3B82F6)
  - Low: Green (#10B981)
  - Falling: Orange (#F59E0B)
  - High: Red (#EF4444)
  - Rising: Purple (#8B5CF6)
- **Background:** System-aware light/dark themes
- **Safe Areas:** Respects notches and home indicators

### Typography (Mobile Optimized)
- **English:** SF Pro (iOS) / Roboto (Android) / Inter (Web)
- **Thai:** Noto Sans Thai (system fallbacks)
- **Dynamic Type:** Supports system text size adjustments
- **Line Heights:** Optimized for mobile reading

### Iconography
- **Standard Icons:** Tab bar, buttons use platform-appropriate icons
- **Custom Icons:** Tone symbols, recording indicators
- **Adaptive Icons:** Changes between light/dark mode

### Animation Principles
- **Purposeful Animation:** Guides user attention
- **Performance First:** 60fps animations, avoid jank
- **Native Driver:** Use React Native's native animation driver
- **Gesture Responder:** Smooth interactive feedback

---

## 💰 Monetization & Subscription Model

### Freemium Strategy
**Goal:** Maximize user acquisition while generating sustainable revenue

#### Free Tier (User Acquisition)
- **Daily Limits:** 5 tone practices, 3 dictionary lookups, 10 flashcards per day
- **Content Access:** Basic word database (300 most common words)
- **Features:** Basic pitch comparison, no syllable-by-syllable analysis
- **YouTube Shadowing:** Limited to 2 minutes per day
- **Ads:** Optional rewarded video ads for extra practice

#### Premium Tier (Revenue Generation)
**Pricing:**
- **Monthly:** $9.99/month
- **Yearly:** $79.99/year (33% discount)
- **Lifetime:** $199.99 (one-time payment)

**Premium Features:**
- **Unlimited Practice:** No daily limits on any module
- **Advanced Analysis:** Syllable-by-syllable pitch comparison
- **Full Dictionary:** Access to 2000+ words with detailed examples
- **YouTube Shadowing:** Unlimited video practice
- **Personalized Learning:** AI-powered recommendations
- **Offline Mode:** Download content for offline use
- **Export Data:** Export progress and vocabulary lists
- **Priority Support:** Faster customer support

### Technical Implementation

#### Subscription Management
```typescript
// RevenueCat integration for cross-platform subscriptions
interface Subscription {
  id: string;
  user_id: string;
  product_id: 'monthly' | 'yearly' | 'lifetime';
  platform: 'ios' | 'android' | 'web';
  status: 'active' | 'expired' | 'cancelled';
  purchase_date: Date;
  expiration_date?: Date;
  receipt_data: string; // Platform-specific receipt
}

// Frontend subscription check
const checkSubscription = async (): Promise<boolean> => {
  // 1. Check RevenueCat for local subscription status
  // 2. Validate with backend for security
  // 3. Cache result for performance
  // 4. Grace period for subscription issues
};
```

#### Feature Gating
```typescript
// Example: Feature gate based on subscription status
const canUseFeature = (feature: string, user: User): boolean => {
  switch (feature) {
    case 'unlimited_practice':
      return user.subscription?.status === 'active';
    case 'syllable_analysis':
      return user.subscription?.status === 'active';
    case 'dictionary_full':
      return user.subscription?.status === 'active' || 
             user.free_daily_uses < USER_LIMITS.dictionary;
    default:
      return true;
  }
};
```

#### Payment Flow
```
1. User taps "Upgrade" button
2. Show subscription options (Monthly/Yearly/Lifetime)
3. User selects option → RevenueCat purchase flow
4. Platform-native payment sheet appears
5. Purchase confirmed → RevenueCat webhook to backend
6. Backend validates receipt & activates premium features
7. UI updates instantly with premium features
```

### App Store Optimization
#### Keywords for App Store:
- Thai language learning
- Thai tones practice
- Pronunciation coach
- Language tutor
- Speech analysis
- Thai speaking practice

#### Screenshots & Preview Video:
- Before/After pitch comparison
- Real-time recording visualization
- YouTube shadowing demo
- Progress dashboard
- Premium features highlight

### User Retention Strategies
1. **Daily Streaks:** Visual progress tracking
2. **Achievements:** Badges for milestones
3. **Weekly Challenges:** Community events
4. **Personalized Reminders:** Practice notifications
5. **Progress Sharing:** Social media integration

### Revenue Projections (Conservative)
| Month | Users | Conversion | Monthly Revenue |
|-------|-------|------------|-----------------|
| 1     | 1,000 | 2%         | $200           |
| 3     | 5,000 | 3%         | $1,500         |
| 6     | 15,000| 4%         | $6,000         |
| 12    | 50,000| 5%         | $25,000        |

**Assumptions:**
- 30% yearly retention rate
- Average subscription value: $10/month
- Organic growth + basic ASO

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
// User with subscription info
interface User {
  id: string;
  email: string;
  name: string;
  created_at: Date;
  subscription?: Subscription;
  free_limits: FreeLimits;
  settings: UserSettings;
}

// Subscription model
interface Subscription {
  id: string;
  user_id: string;
  product_id: 'monthly' | 'yearly' | 'lifetime';
  platform: 'ios' | 'android' | 'web';
  status: 'active' | 'expired' | 'cancelled' | 'grace_period';
  purchase_date: Date;
  expiration_date?: Date;
  original_transaction_id: string;
  receipt_data: string; // Platform-specific receipt
  is_trial?: boolean;
  trial_end_date?: Date;
}

// Free tier limits
interface FreeLimits {
  daily: {
    tone_practice: number; // e.g., 5 per day
    dictionary_lookups: number; // e.g., 3 per day
    flashcard_reviews: number; // e.g., 10 per day
    shadowing_minutes: number; // e.g., 2 minutes per day
  };
  total_words: number; // e.g., 300 words in free dictionary
  reset_time: Date; // When daily limits reset
}

// User settings
interface UserSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    daily_reminder: boolean;
    streak_reminder: boolean;
    practice_reminders: boolean;
  };
  audio_quality: 'low' | 'medium' | 'high';
  download_over_wifi_only: boolean;
  haptic_feedback: boolean;
}

// Tone Practice Progress
interface ToneProgress {
  user_id: string;
  tone: 'mid' | 'low' | 'falling' | 'high' | 'rising';
  accuracy: number; // 0-100
  practice_count: number;
  last_practiced: Date;
  best_accuracy: number;
  improvement_rate: number; // % improvement per week
}

// Word (Dictionary with syllables)
interface Word {
  id: string;
  thai: string;                    // Thai script
  transcription: string;           // Phonetic transcription
  english: string;                 // English meaning
  syllables: SyllableInfo[];       // Syllable breakdown
  audio_url: string;               // Native pronunciation audio
  example_sentence: string;        // Example usage
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  is_premium: boolean;             // Requires subscription
  category: string[];              // e.g., ['food', 'travel']
}

interface SyllableInfo {
  thai: string;                    // Thai character(s) for this syllable
  transcription: string;           // Phonetic transcription of syllable
  tone: ThaiTone;                  // 'mid' | 'low' | 'falling' | 'high' | 'rising'
  start_time?: number;             // Start time in audio (seconds)
  end_time?: number;               // End time in audio (seconds)
}

// Reference audio for tone practice (more detailed)
interface PracticeWord extends Word {
  reference_audio_url: string;     // High-quality audio for practice
  syllable_audio_urls?: string[];  // Optional: separate audio per syllable
  pitch_contours?: number[][];     // Pre-extracted normalized pitch contours
  difficulty_score: number;        // 1-5 difficulty rating
}

// Flashcard
interface Flashcard {
  id: string;
  user_id: string;
  front: string;
  back: string;
  card_type: 'thai_english' | 'english_thai' | 'tone_recognition';
  difficulty: number; // 1-5 (ease factor)
  next_review: Date;
  interval: number;   // Days until next review
  review_count: number;
  correct_count: number;
  tags: string[];
  is_premium: boolean; // Requires subscription for certain card types
}

// Practice Session
interface PracticeSession {
  id: string;
  user_id: string;
  module: 'tone' | 'shadowing' | 'flashcards' | 'dictionary';
  duration: number; // seconds
  accuracy?: number;
  created_at: Date;
  data: Record<string, any>; // Module-specific data
}

// User streak and achievements
interface UserAchievements {
  user_id: string;
  current_streak: number; // Consecutive days
  longest_streak: number;
  total_practice_days: number;
  total_practice_time: number; // minutes
  achievements: Achievement[];
  badges: Badge[];
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked_at: Date;
  progress?: number; // For progressive achievements
  target?: number;   // Target value
}

interface Badge {
  id: string;
  name: string;
  icon_url: string;
  unlocked_at: Date;
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