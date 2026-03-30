# Quick Start: Thai Tone Trainer Design Repository

## ✅ Current Status
✅ **GitHub Repository:** Connected to `https://github.com/sammythaitiger/ThaiToneDesign.git`  
✅ **First Commit:** Pushed successfully  
✅ **Project Structure:** Created with documentation framework  
✅ **VS Code:** Ready for design work  

## 📁 What's Been Created

### Repository Structure
```
Thai Tone Designer/
├── .gitignore           # Files to exclude from Git
├── README.md           # Project overview
├── GIT_WORKFLOW.md     # Complete Git instructions
├── QUICKSTART.md       # This file
├── docs/               # Documentation
│   ├── architecture/   # System diagrams
│   ├── user-flows/     # User journey maps
│   ├── wireframes/     # UI mockups
│   └── api-specs/      # API specifications
├── design/             # Design assets
│   ├── components/     # Reusable components
│   ├── screens/        # Screen designs
│   └── style-guide.md  # Design system (to create)
├── project/            # Project management
│   ├── VISION.md       # Product vision ✓
│   └── ROADMAP.md      # Development roadmap ✓
└── specs/              # Technical specifications
    ├── data-models/    # Database schemas
    ├── api-endpoints/  # API endpoints
    └── integrations/   # Third-party integrations
```

## 🚀 Next Steps for Design Phase

### Step 1: Define Mobile User Flows
Create files in `docs/user-flows/`:
- `tone-practice-syllable-aware.md` - Syllable-by-syllable tone practice flow
- `shadowing-simple.md` - Curated video shadowing with syllable comparison
- `dictionary-simple.md` - Word lookup with tone information
- `flashcards-simple.md` - Anki-like spaced repetition system
- `dashboard-simple.md` - Progress tracking and recommendations

### Step 2: Create Mobile Wireframes
Add to `docs/wireframes/`:
- `homepage-mobile.md` - Mobile landing screen
- `tone-practice-mobile.md` - Tone practice interface for touch
- `shadowing-mobile.md` - Lesson player + cues (if you add this file)
- `dictionary-mobile.md` - Mobile search and word details

### Step 3: React Native Paper Design System
Create `design/style-guide.md`:
- **Theme Configuration:** React Native Paper theme with tone colors
- **Color Palette:** Thai-inspired colors with tone-specific coding
- **Typography:** Inter font for English, Noto Sans Thai for Thai script
- **Component Library:** React Native Paper components (Cards, Buttons, Inputs, etc.)
- **Touch Targets:** 44x44px minimum for all interactive elements
- **Gesture Patterns:** Swipe, tap, pinch interactions optimized for mobile

### Step 4: Technical Specifications
Create in `specs/`:
- `data-models/user-progress.md` - How to track learning
- `api-endpoints/audio-analysis.md` - Audio processing API
- `docs/curated-shadowing-content.md` - Lesson manifest, video URLs, cue JSON (no YouTube)

## 🔄 Daily Workflow Commands

### When you open VS Code:
```bash
# Pull latest changes from GitHub
git pull origin main
```

### After making changes:
```bash
# Add changed files
git add .

# Commit with descriptive message
git commit -m "docs: add user flow for tone practice"

# Push to GitHub
git push origin main
```

### Check status anytime:
```bash
git status
git log --oneline -3  # See last 3 commits
```

## 💡 Pro Tips for React Native Paper Design

### 1. React Native Paper Component-First Design
- Design using React Native Paper components (Cards, Buttons, Dialogs)
- Follow Material Design guidelines for mobile interfaces
- Use theme provider for consistent styling across screens
- Reference the MODULES_SPEC.md for detailed component specifications

### 2. Mobile-First Wireframing
- Design for touch interfaces first (44x44px touch targets)
- Plan gesture interactions (swipe for flashcards, pull-to-refresh)
- Consider safe areas (notches, home indicators on modern phones)
- Design for both portrait and landscape orientations where applicable

### 3. React Native Paper Theme Development
- Define color scheme with tone-specific colors
- Configure typography for English and Thai scripts
- Set up consistent spacing and roundness
- Create reusable component variants using theme

### 4. Tools for React Native Design
- **Figma/Adobe XD:** Design screens with React Native Paper components
- **React Native Paper Documentation:** Reference for component APIs
- **Expo Snack:** Quick prototyping of React Native components
- **React Native Web:** Test designs in browser during development

## 🛠️ VS Code Setup Recommendations

### Extensions for Design Work:
- **Markdown All in One** - Better markdown editing
- **Draw.io Integration** - Create diagrams in VS Code
- **GitLens** - Enhanced Git visualization
- **Prettier** - Code formatting
- **Todo Tree** - Track TODO comments

### Workspace Settings:
Create `.vscode/settings.json`:
```json
{
  "files.exclude": {
    "**/.git": true,
    "**/.next": true,
    "**/node_modules": true
  },
  "editor.formatOnSave": true,
  "markdown.preview.fontSize": 14
}
```

## 🔗 Useful Resources

### For React Native Paper Design:
- **React Native Paper Documentation:** Component library and theming
- **Material Design Guidelines:** Design principles for mobile interfaces
- **Expo Documentation:** Setup and development with Expo
- **React Navigation:** Navigation patterns for mobile apps

### For Technical Implementation:
- **expo-av:** Cross-platform audio recording and playback
- **react-native-svg:** Vector graphics for pitch visualization
- **RevenueCat Documentation:** Subscription management for mobile apps
- **React Native Reanimated:** High-performance animations

### For Language Learning Inspiration:
- **Duolingo:** Gamified language learning interfaces
- **Anki:** Spaced repetition system patterns
- **Speechling:** Pronunciation feedback mechanisms
- **HelloTalk:** Community and language exchange features

## 🆘 Getting Help

### Common Issues:

#### "Git says my branch is ahead"
```bash
git pull origin main --rebase
git push origin main
```

#### "I want to see what's on GitHub"
Visit: https://github.com/sammythaitiger/ThaiToneDesign

#### "I made a mistake in my commit"
```bash
# Undo last commit (keeps changes)
git reset --soft HEAD~1

# Or amend last commit
git commit --amend -m "new message"
git push origin main --force  # Careful!
```

## 🎯 Ready to Start?

Begin with:
1. Review `MODULES_SPEC.md` for detailed module specifications
2. Open `docs/user-flows/` folder and review existing flows
3. Create mobile wireframes using React Native Paper components
4. Set up React Native Paper theme with Thai tone colors
5. Commit and push:
```bash
git add design/style-guide.md docs/wireframes/*.md
git commit -m "design: React Native Paper wireframes and theme"
git push origin main
```

Happy designing with React Native Paper! 🎨

## 🧪 MVP Development Setup

The repository now includes a starter app shell in [`mobile`](/Users/samir/Thai%20Tones/mobile) and a FastAPI MVP in [`backend`](/Users/samir/Thai%20Tones/backend).

### Mobile
```bash
cd mobile
npm install
npm run start
```

### Backend
```bash
pip install -r backend/requirements.txt
uvicorn app.main:app --reload --app-dir backend
```

### First development loop
1. Open the mobile MVP and choose a sample word.
2. Call `POST /api/analyze` from the app once recording is wired in.
3. Replace mocked analysis with MFA + pitch extraction.
