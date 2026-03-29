# Thai Tone Trainer - ASCII Wireframes 🇹🇭

## Screen navigation

```
        [TABS NAVIGATION - Bottom Tabs]
┌─────┬─────┬─────┬─────┬─────┐
│ Home│Dict │Cards│Video│Stats│  ← React Navigation Bottom Tabs
└─────┴─────┴─────┴─────┴─────┘
    │     │     │     │     │
    ▼     ▼     ▼     ▼     ▼
 Word   Dict-  Flash- Shad- Dash-
Select  onary cards owing board
```

## Tone color scheme

| Tone | Color | HEX | Usage |
|------|-------|-----|--------|
| Mid | Blue | #2196F3 | Mid tone, neutral |
| Low | Green | #4CAF50 | Low tone |
| Falling | Purple | #9C27B0 | Falling tone |
| High | Orange | #FF9800 | High tone |
| Rising | Red | #F44336 | Rising tone |

## Screen list

1. **[Word Selection Screen](./word-selection.md)** - Pick a word to practice (tone and syllable filters)
2. **[Word Practice Screen](./word-practice.md)** - Practice a word (recording, per-syllable tone analysis)
3. **[Dictionary Screen](./dictionary.md)** - Search and browse words
4. **[Flashcards Screen](./flashcards.md)** - Memorization cards
5. **[Shadowing Screen](./shadowing.md)** - Repeat along with video
6. **[Dashboard Screen](./dashboard.md)** - Stats and progress

**Also:** **[Components guide](./components-guide.md)** — tones, patterns, mapping to screens.
Implementation source of truth for app and tone colors: `mobile/src/theme/colors.ts`.

## React Native Paper components

### Core components for all screens:
- **AppBar** - Top bar with title
- **BottomNavigation** - Bottom nav (5 tabs)
- **Card** - Content cards
- **Button** / **FAB** - Actions
- **Chip** - Tags for tones/syllables
- **ProgressBar** / **CircularProgress** - Progress
- **List** / **List.Accordion** - Lists with detail
- **TextInput** - Input fields
- **Dialog** / **Snackbar** - Modals and toasts
- **Avatar** / **IconButton** - Icons and avatars

### Navigation:
- **React Navigation** for routing
- **Bottom Tabs** for main sections
- **Stack Navigation** inside sections
- **Drawer** optional for menu

## Layout principles

### Screen layout:
```
┌─────────────────────────────────┐
│ AppBar (Title + Actions)        │ ← SafeAreaView top
├─────────────────────────────────┤
│ Content Area (ScrollView)       │ ← Main content
│                                 │
│ [Card / Component 1]            │
│                                 │
│ [Card / Component 2]            │
│                                 │
│ ...                             │
├─────────────────────────────────┤
│ Bottom Navigation (5 tabs)      │ ← SafeAreaView bottom
└─────────────────────────────────┘
```

### Spacing:
- **SafeArea**: 20px top/bottom
- **Padding**: 16px horizontal
- **Component spacing**: 8px between components
- **Section spacing**: 24px between sections

## Screen states

Each screen has four states:

### 1. **Normal State**
- Data loaded
- User can interact
- No active blocking processes

### 2. **Loading State**
- Skeleton loading for content
- ActivityIndicator centered
- Buttons disabled

### 3. **Error State**
- Error message
- "Retry" button
- Option to go back

### 4. **Empty State**
- Empty-state illustration
- "No data" message
- Primary action (add, refresh)

## Interactions

### Types:
1. **Tap** - Single press
2. **Long Press** - Long press
3. **Swipe** - Horizontal swipe
4. **Pull to Refresh** - List refresh
5. **Scroll** - Content scroll

### Feedback:
- **Haptic Feedback** for important actions
- **Visual Feedback** (color, animation)
- **Sound Feedback** for audio actions

## Transitions between screens

### Main patterns:
1. **Tabs** ↔ **Tabs** - Horizontal animation
2. **List** → **Detail** - Vertical animation
3. **Modal** → **Parent** - Fade in/out
4. **Deep Links** - URL navigation

### Animations:
- **Slide Horizontal** for tabs
- **Slide Vertical** for detail
- **Fade** for modals
- **Scale** for FAB

## Settings and configuration

### Global settings:
- UI language (EN/TH)
- Theme (Light/Dark/System)
- Font size
- Auto-play audio
- Haptic feedback on/off

### User preferences:
- Target tones for practice
- Word difficulty
- Repetition count
- Reminder notifications

---

## File structure

```
docs/wireframes/
├── README.md                    # This file
├── word-selection.md           # Word picker for practice
├── word-practice.md            # Single-word practice
├── dictionary.md               # Dictionary
├── flashcards.md               # Flashcards
├── shadowing.md                # Shadowing
├── dashboard.md                # Dashboard / stats
└── components-guide.md         # Component patterns
```

---

*Last updated: 2026-03-29*  
*Status: main ASCII wireframes done; refine as MVP evolves*
