 а# Thai Tone Trainer - React Native Mobile App Roadmap

## 🚀 Overall Timeline: 4 Months Total
- **Weeks 1-2:** Design & React Native Architecture Planning
- **Month 1:** MVP on React Native Web (Expo)
- **Month 2:** Core Mobile Features & Offline Support
- **Month 3:** Premium Features & Store Preparation
- **Month 4:** App Store Launch & Monetization Activation

## 📱 Platforms Strategy
- **Month 1-2:** Develop on Expo Web (browser)
- **Month 3:** Test on iOS/Android simulators & real devices
- **Month 4:** Launch on App Store + Google Play + Web PWA

## 💰 Monetization Timeline
- **Month 1-3:** Free features only (user acquisition)
- **Month 4:** Premium subscriptions activated
- **Store Launch:** End of Month 4

## 📅 Phase 1: React Native Architecture & Design (Weeks 1-2)
**Goal:** Design mobile-first interfaces and plan React Native architecture

### Week 1: Mobile Design & React Native Setup
- [x] Create GitHub repository
- [x] Complete project vision and scope
- [ ] Set up Expo development environment with React Native Paper
- [ ] Design React Native Paper component architecture
- [ ] Create mobile user flow diagrams:
  - Tone practice with touch gestures and haptic feedback
  - Shadowing with mobile video player and gesture controls
  - Dictionary with mobile search and autocomplete
  - Flashcards with swipe gestures and card flip animations
  - Dashboard with mobile stats and progress visualization
- [ ] Wireframe mobile screens using React Native Paper components (8-10 screens)
- [ ] Create React Native Paper design system with Thai tone colors
- [ ] Plan navigation structure (React Navigation with bottom tabs)

### Week 2: Technical Planning & Backend Architecture
- [ ] Define TypeScript data structures for React Native Paper components
- [ ] Plan Python FastAPI backend endpoints for pitch analysis
- [ ] Set up Expo project with TypeScript and React Native Paper
- [ ] Create React Native Paper component specifications and theme
- [ ] Finalize mobile design mockups with Material Design patterns
- [ ] Plan audio recording strategy (expo-av with cross-platform support)
- [ ] Design pitch visualization with react-native-svg and victory-native
- [ ] Plan subscription system (RevenueCat integration with feature gating)
- [ ] Set up CI/CD pipeline for Expo EAS builds

## 📅 Phase 2: MVP on React Native Web (Month 1)
**Goal:** Build core tone practice MVP using Expo Web

### Week 3-4: React Native Foundation with React Native Paper
- [ ] Set up Expo project with TypeScript and React Native Paper
- [ ] Configure React Navigation with Material Design bottom tabs
- [ ] Create mobile-first layout system with SafeAreaView
- [ ] Implement user authentication (Firebase/backend)
- [ ] Set up audio recording with expo-av (web compatible)
- [ ] Create React Native Paper theme with Thai tone colors
- [ ] Set up state management (Zustand) with persistent storage

### Week 5-6: Tone Practice Mobile Interface with React Native Paper
- [ ] Build tone selection screen with React Native Paper Cards and touch feedback
- [ ] Create word selection with syllable visualization using Chips
- [ ] Implement recording interface with large circular Button and haptic feedback
- [ ] Build waveform visualization during recording with react-native-svg
- [ ] Create pitch graph visualization with react-native-svg and victory-native
- [ ] Implement native audio playback with expo-av and ProgressBar
- [ ] Add mobile gestures (swipe between tones) with gesture handlers

### Week 7-8: Mobile Analysis & Backend Integration
- [ ] Implement audio upload to Python backend
- [ ] Create pitch analysis API with normalization
- [ ] Implement syllable segmentation for multi-syllable words
- [ ] Build syllable-by-syllable comparison interface
- [ ] Implement accuracy scoring with mobile animations
- [ ] Create progress tracking with local storage
- [ ] Add offline recording capability
- [ ] Test on Expo Web and mobile simulators

## 📅 Phase 3: Mobile Features & Offline Support (Month 2)
**Goal:** Add mobile-optimized features and offline capability

### Week 9-10: Mobile Dictionary & Audio with React Native Paper
- [ ] Build word database (500+ free words, 2000+ premium)
- [ ] Create mobile search with TextInput autocomplete
- [ ] Implement word detail view with React Native Paper components:
  - Syllable breakdown with colored Chips for tones
  - Audio playback with Slider and Button controls
  - Example sentence with Card and tap-to-practice
  - Save to lists with IconButton and swipe gestures
- [ ] Add audio caching for offline playback with expo-av
- [ ] Implement dictionary download for premium users
- [ ] Create "My Words" list with List.Accordion and cloud sync

### Week 11-12: Mobile Flashcards & Gestures with React Native Paper
- [ ] Create flashcard system with swipe gestures using PanResponder
- [ ] Implement card types using React Native Paper Cards:
  - Tone recognition cards with Button audio playback
  - Thai → English cards with Card flip animation
  - English → Thai cards
  - Minimal pair cards with RadioButton selection
- [ ] Build review interface with spaced repetition algorithm
- [ ] Add local notifications for review reminders
- [ ] Implement offline review capability with AsyncStorage
- [ ] Add haptic feedback for card ratings using react-native-haptic-feedback
- [ ] Create card management with FAB and Dialog for bulk operations

## 📅 Phase 4: Premium Features & Store Prep (Month 3)
**Goal:** Add premium features and prepare for store submission

### Week 13-14: YouTube Shadowing & Premium Features
- [ ] Implement YouTube video search with mobile UI
- [ ] Create mobile video player with gesture controls
- [ ] Set up Whisper transcription service
- [ ] Generate Thai subtitles with syllable segmentation
- [ ] Build shadowing interface with recording
- [ ] Implement syllable-by-syllable comparison
- [ ] Add premium feature gating
- [ ] Create subscription check system

### Week 15-16: Store Preparation & Monetization
- [ ] Integrate RevenueCat for subscription management
- [ ] Implement in-app purchase flows
- [ ] Create premium feature unlock system
- [ ] Build subscription management screen
- [ ] Implement receipt validation
- [ ] Prepare app store assets:
  - App icons (all sizes)
  - Screenshots (iOS & Android)
  - App preview video
  - App description & keywords
- [ ] Set up app store developer accounts
- [ ] Create privacy policy & terms of service

## 📅 Phase 5: App Store Launch & Growth (Month 4)
**Goal:** Launch on app stores and activate monetization

### Week 17-18: Final Polish & Testing with React Native Paper
- [ ] Create mobile dashboard with React Native Paper components:
  - Tone progress visualization with ProgressBar and Card
  - Vocabulary statistics with DataTable and Avatar
  - Activity feed with List and gesture interactions
  - Personalized recommendations with Chip filters
- [ ] Polish mobile UI/UX using React Native Paper theme system
- [ ] Implement dark/light theme with system detection using useColorScheme
- [ ] Add accessibility features (VoiceOver/TalkBack) to all components
- [ ] Beta testing on real iOS/Android devices with Expo Dev Client
- [ ] Performance optimization for older devices (Hermes engine)
- [ ] Battery usage optimization (background audio processing)
- [ ] Memory leak testing with React Native debug tools

### Week 19-20: Store Launch & Monetization
- [ ] Submit to Apple App Store
- [ ] Submit to Google Play Store
- [ ] Prepare web PWA version
- [ ] Activate premium subscriptions
- [ ] Set up analytics and tracking
- [ ] Create launch marketing materials
- [ ] Plan ASO (App Store Optimization)
- [ ] Prepare customer support system
- [ ] Launch across all platforms
- [ ] Monitor initial user feedback
- [ ] Hotfix any critical issues

## 🎯 Mobile-First MVP Scope
**Core Features for Launch (All Platforms):**
1. **Tone Practice:** 5 tones, syllable-by-syllable analysis, normalized pitch comparison
2. **Dictionary:** 500+ free words (2000+ premium), mobile search, audio playback
3. **Flashcards:** Swipe-based review, spaced repetition, offline capability
4. **Shadowing:** YouTube integration, Whisper subtitles, syllable comparison
5. **Dashboard:** Progress tracking, personalized recommendations
6. **Monetization:** Freemium model, in-app subscriptions via RevenueCat

**Platform Strategy:**
- **iOS:** Native app via App Store
- **Android:** Native app via Google Play
- **Web:** Progressive Web App via Expo Web

**Monetization Model:**
- **Free Tier:** Daily limits, basic features, 300 words
- **Premium Tier:** Unlimited access, advanced features, 2000+ words
- **Pricing:** $9.99/month, $79.99/year, $199.99 lifetime









