# Thai Tone Trainer - Design & Architecture

## 🎯 Project Vision
Professional Thai language learning platform focused on tone mastery through AI-powered pronunciation analysis.

## 📋 Current Phase: Design & Planning (Week 1 of 2)

### Simplified Core Modules:
1. **Tone Practice** - Syllable-aware tone analysis with normalized pitch comparison
2. **Shadowing** - YouTube video practice with syllable-level feedback
3. **Dictionary** - Simple word lookup with tone patterns
4. **Flashcards** - Anki-like spaced repetition system
5. **Dashboard** - Progress tracking and recommendations

### Key Design Documents:
- **[DESIGN_SPECIFICATION_SIMPLE.md](./DESIGN_SPECIFICATION_SIMPLE.md)** - Simplified technical spec
- **[project/ROADMAP.md](./project/ROADMAP.md)** - 4-month development plan

### User Flows (Simplified):
- **Tone Practice:** `docs/user-flows/tone-practice-syllable-aware.md`
- **Shadowing:** `docs/user-flows/shadowing-simple.md`
- **Dictionary:** `docs/user-flows/dictionary-simple.md`
- **Flashcards:** `docs/user-flows/flashcards-simple.md`
- **Dashboard:** `docs/user-flows/dashboard-simple.md`

### Repository Structure:
```
ThaiToneDesign/
├── docs/user-flows/        # Simplified user flows (syllable-aware)
│   ├── tone-practice-syllable-aware.md
│   ├── shadowing-simple.md
│   ├── dictionary-simple.md
│   ├── flashcards-simple.md
│   └── dashboard-simple.md
├── project/               # Project management
│   ├── VISION.md         # Product vision
│   ├── ROADMAP.md        # 4-month simplified roadmap
│   └── ROADMAP_ORIGINAL.md  # Original detailed roadmap
├── DESIGN_SPECIFICATION.md       # Original detailed spec
├── DESIGN_SPECIFICATION_SIMPLE.md # Simplified focused spec
├── QUICKSTART.md         # Getting started guide
├── GIT_WORKFLOW.md       # Git instructions
└── README.md            # This file
```

## 🚀 Getting Started

**Start here:** Read [QUICKSTART.md](./QUICKSTART.md) for complete setup instructions.

### For Design Team
1. Review simplified user flows in `docs/user-flows/`
2. Focus on syllable-aware interfaces for tone practice
3. Create wireframes focusing on core functionality
4. Design normalized pitch comparison visualizations

### For Development Team  
1. Review `DESIGN_SPECIFICATION_SIMPLE.md` for core requirements
2. Focus on syllable segmentation and normalized pitch comparison
3. Plan for Python backend (Librosa) + Next.js frontend
4. Check `project/ROADMAP.md` for 4-month timeline

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