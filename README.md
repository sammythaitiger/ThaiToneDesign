# Thai Tone Trainer - Design & Architecture

## 🎯 Project Vision
Professional Thai language learning platform focused on tone mastery through AI-powered pronunciation analysis.

## 📋 Current Phase: Design & Planning (Week 1 of 2)

### Core Mobile Modules:
1. **Tone Practice** - Syllable-aware tone analysis with normalized pitch comparison
2. **Shadowing** - YouTube video practice with syllable-level feedback
3. **Dictionary** - Word lookup with syllable-level tone information
4. **Flashcards** - Anki-like spaced repetition with swipe gestures
5. **Dashboard** - Progress tracking and recommendations
6. **Monetization** - Freemium subscriptions via App Store/Google Play

### Tech Stack:
- **Frontend:** React Native + Expo + TypeScript + React Native Paper
- **UI Library:** React Native Paper (Material Design components)
- **Backend:** Python FastAPI + Librosa + Whisper
- **Platforms:** iOS, Android, Web (single codebase)
- **Monetization:** RevenueCat for subscription management
- **Visualization:** react-native-svg + victory-native for pitch graphs

### Key Design Documents:
- **[DESIGN_SPECIFICATION_SIMPLE.md](./DESIGN_SPECIFICATION_SIMPLE.md)** - Mobile-first technical specification with React Native Paper
- **[docs/MODULES_SPEC.md](./docs/MODULES_SPEC.md)** - Detailed module specifications for wireframing
- **[project/ROADMAP.md](./project/ROADMAP.md)** - 4-month React Native development plan
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Current project status & progress

### User Flows (Simplified):
- **Tone Practice:** `docs/user-flows/tone-practice-syllable-aware.md`
- **Shadowing:** `docs/user-flows/shadowing-simple.md`
- **Dictionary:** `docs/user-flows/dictionary-simple.md`
- **Flashcards:** `docs/user-flows/flashcards-simple.md`
- **Dashboard:** `docs/user-flows/dashboard-simple.md`

### Repository Structure:
```
ThaiToneDesign/
├── docs/
│   ├── MODULES_SPEC.md           # Detailed module specifications for wireframing
│   ├── user-flows/               # Mobile user flows (syllable-aware)
│   │   ├── tone-practice-syllable-aware.md
│   │   ├── shadowing-simple.md
│   │   ├── dictionary-simple.md
│   │   ├── flashcards-simple.md
│   │   └── dashboard-simple.md
│   ├── architecture/             # System diagrams (to create)
│   ├── wireframes/              # UI mockups (to create)
│   └── api-specs/               # API specifications (to create)
├── project/                     # Project management
│   ├── VISION.md                # Product vision
│   ├── ROADMAP.md               # 4-month React Native roadmap
│   └── ROADMAP_ORIGINAL.md     # Original detailed roadmap
├── design/                      # Design assets (to create)
│   ├── components/              # Reusable components
│   ├── screens/                 # Screen designs
│   └── style-guide.md          # React Native Paper design system
├── DESIGN_SPECIFICATION_SIMPLE.md # Mobile-first technical specification
├── PROJECT_STATUS.md           # Current project status & progress
├── QUICKSTART.md               # Getting started guide
├── GIT_WORKFLOW.md             # Git instructions
└── README.md                   # This file
```

## 🚀 Getting Started

**Start here:** Read [QUICKSTART.md](./QUICKSTART.md) for complete setup instructions.

### For Design Team
1. Review `docs/MODULES_SPEC.md` for detailed module specifications
2. Study React Native Paper component system and theme configuration
3. Create mobile wireframes using Material Design patterns
4. Design pitch visualization with react-native-svg and victory-native
5. Plan haptic feedback and gesture interactions for mobile
6. Develop React Native Paper theme with Thai tone colors

### For Development Team  
1. Review `DESIGN_SPECIFICATION_SIMPLE.md` for React Native architecture
2. Study `docs/MODULES_SPEC.md` for component specifications
3. Set up Expo with React Native Paper, TypeScript, and required dependencies
4. Implement React Native Paper theme with Thai tone colors
5. Check `project/ROADMAP.md` for 4-month mobile development timeline
6. Configure expo-av for cross-platform audio recording and playback

## 🔄 Git Workflow

### Daily Workflow
```bash
# Start working
git pull origin main

# Make changes
# Add files
git add .

# Commit changes  
git commit -m "feat: [module] description of changes"

# Push to GitHub
git push origin main
```

### Branch Strategy (for later development)
- `main` - stable design documentation
- `design/[feature]` - new design features
- `docs/[topic]` - documentation updates

## 📞 Contact
- Repository: https://github.com/sammythaitiger/ThaiToneDesign
- Status: Active design phase