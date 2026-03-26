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
- **Frontend:** React Native + Expo + TypeScript
- **Backend:** Python FastAPI + Librosa + Whisper
- **Platforms:** iOS, Android, Web (single codebase)
- **Monetization:** RevenueCat for subscription management

### Key Design Documents:
- **[DESIGN_SPECIFICATION_SIMPLE.md](./DESIGN_SPECIFICATION_SIMPLE.md)** - Mobile-first technical specification
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
├── docs/user-flows/        # Mobile user flows (syllable-aware)
│   ├── tone-practice-syllable-aware.md
│   ├── shadowing-simple.md
│   ├── dictionary-simple.md
│   ├── flashcards-simple.md
│   └── dashboard-simple.md
├── project/               # Project management
│   ├── VISION.md         # Product vision
│   ├── ROADMAP.md        # 4-month React Native roadmap
│   └── ROADMAP_ORIGINAL.md  # Original detailed roadmap
├── DESIGN_SPECIFICATION_SIMPLE.md # Mobile-first technical specification
├── PROJECT_STATUS.md     # Current project status & progress
├── QUICKSTART.md         # Getting started guide
├── GIT_WORKFLOW.md       # Git instructions
└── README.md            # This file
```

## 🚀 Getting Started

**Start here:** Read [QUICKSTART.md](./QUICKSTART.md) for complete setup instructions.

### For Design Team
1. Review mobile user flows in `docs/user-flows/`
2. Focus on touch interfaces and mobile gestures
3. Create mobile wireframes for React Native components
4. Design pitch visualization for mobile screens
5. Plan haptic feedback and gesture interactions

### For Development Team  
1. Review `DESIGN_SPECIFICATION_SIMPLE.md` for React Native architecture
2. Focus on syllable segmentation and normalized pitch comparison
3. Plan Python backend (Librosa) + React Native frontend
4. Check `project/ROADMAP.md` for 4-month mobile development timeline
5. Set up Expo development environment

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