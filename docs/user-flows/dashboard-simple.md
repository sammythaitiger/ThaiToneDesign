# Dashboard - Simplified
*Version 2.0 | Progress Overview & Quick Access*

## 🎯 Goal
See learning progress at a glance and quickly access practice modules.

## 📊 Dashboard Content

### 1. Progress Overview
- Tone mastery (5 tones)
- Vocabulary count
- Recent activity
- Streak (consecutive days)

### 2. Quick Actions
- Continue last practice
- Practice weakest tone
- Review due flashcards
- Quick shadowing session

### 3. Recommendations
- What to practice next
- Suggested videos for shadowing
- Words to review

## 🎨 Screens

### Screen: Main Dashboard
**Clean overview layout:**
```
Thai Tone Trainer

Welcome back, [User]!
5-day streak 🔥

QUICK STATS
┌─────────────┬─────────────┬─────────────┐
│ Tones       │ Vocabulary  │ Time Today  │
│ 3/5 mastered│ 42 words    │ 15 min      │
└─────────────┴─────────────┴─────────────┘

TONE PROGRESS
Mid:     ████████░░ 80%
Low:     ██████░░░░ 60%
Falling: ████░░░░░░ 40%
High:    █████░░░░░ 50%
Rising:  ██░░░░░░░░ 20%

PRACTICE NOW
[ Practice Tones ]     [ Shadowing ]
[ Review Flashcards ]  [ Dictionary ]

RECOMMENDATIONS
• Practice Rising tone (weakest)
• 5 flashcards due for review
• Try shadowing: Thai news clip
• Learn: อาหาร (food)

RECENT ACTIVITY
• 10 min ago: Practiced Falling tone
• 1 hour ago: Learned 3 new words
• Yesterday: Shadowing practice
```

## 📈 Data Display

### Tone Progress:
- **Visual bars:** Progress bars for each tone
- **Accuracy %:** Current accuracy score
- **Trend arrows:** Up/down since last week
- **Practice count:** Times practiced

### Vocabulary:
- **Word count:** Total words saved/learned
- **New today:** Words added today
- **Mastery rate:** % of words mastered

### Activity Feed:
- **Recent sessions:** Last 5-10 activities
- **Time stamps:** When activities occurred
- **Module icons:** Visual indicators for each module

## 🎯 Quick Actions

### 1. Continue Last Session
- Button to resume where you left off
- Shows: "Continue tone practice" or "Review flashcards"

### 2. Practice Weakest Area
- Automatically identifies weakest tone
- One-click access to practice it
- Shows improvement needed

### 3. Due Reviews
- Flashcards due for review
- Quick start review session
- Shows count and estimated time

### 4. Quick Shadowing
- Suggested video for short practice
- 3-5 minute session
- Based on current level

## 🔄 User Flow from Dashboard

### Flow A: Quick Practice (2-3 minutes)
```
Dashboard → "Practice weakest tone" → Tone practice → Done
```

### Flow B: Daily Review (5-10 minutes)
```
Dashboard → "Review flashcards" → Card review → "Shadowing" → Done
```

### Flow C: Learning Session (15-20 minutes)
```
Dashboard → "Practice tones" → "Dictionary" → "Shadowing" → Done
```

## 📱 Mobile Dashboard

### Vertical Layout:
```
[ Header with streak ]
[ Quick stats - horizontal scroll ]
[ Tone progress - vertical bars ]
[ Practice buttons - 2x2 grid ]
[ Recommendations - list ]
[ Activity - collapsible ]
```

### Touch Optimized:
- Large buttons
- Easy scrolling
- Quick tap actions

## 🛠️ Technical Details

### Data to Track:
```typescript
interface UserProgress {
  // Tone mastery
  tones: {
    mid: { accuracy: number; practice_count: number; last_practiced: Date };
    low: { accuracy: number; practice_count: number; last_practiced: Date };
    falling: { accuracy: number; practice_count: number; last_practiced: Date };
    high: { accuracy: number; practice_count: number; last_practiced: Date };
    rising: { accuracy: number; practice_count: number; last_practiced: Date };
  };
  
  // Vocabulary
  vocabulary: {
    total_words: number;
    words_mastered: number;
    words_added_today: number;
  };
  
  // Activity
  streak_days: number;
  time_today: number; // minutes
  last_session: {
    module: string;
    time: Date;
    duration: number;
  };
  
  // Due items
  due_flashcards: number;
  recommended_practice: string;
}
```

### Calculations:
- **Weakest tone:** Lowest accuracy with sufficient practice data
- **Streak:** Consecutive days with any practice
- **Progress:** Comparison with previous week/month
- **Recommendations:** Based on recent performance and goals

## 🎨 Design Principles

### Clean & Glanceable:
- Key metrics at top
- Visual progress indicators
- Clear hierarchy of information

### Action-Oriented:
- Prominent practice buttons
- Clear next steps
- Minimal navigation needed

### Personalized:
- Shows your specific progress
- Recommendations based on your data
- Adapts to your learning patterns

## 🔗 Module Integration

### From Tone Practice:
- Update tone accuracy scores
- Log practice sessions
- Identify weakest tones

### From Flashcards:
- Count due cards
- Track review accuracy
- Log review sessions

### From Shadowing:
- Track time spent
- Log videos practiced
- Update tone recognition from context

### From Dictionary:
- Count words saved/learned
- Track word mastery
- Log lookups

## ✅ Success Criteria

### For Users:
- See progress at a glance
- Know what to practice next
- Quickly access needed modules
- Feel motivated by progress

### Technical:
- Dashboard loads quickly (< 2 seconds)
- Data updates in real-time
- Accurate progress calculations
- Mobile-responsive

## 🚀 Implementation Plan

### Phase 1: Basic Dashboard
1. Display tone progress bars
2. Show basic statistics
3. Quick access buttons
4. Recent activity feed

### Phase 2: Enhanced Dashboard
1. Personalized recommendations
2. Progress trends over time
3. Achievement notifications
4. More detailed statistics

### Phase 3: Advanced Features
1. Learning path suggestions
2. Goal setting and tracking
3. Social features (optional)
4. Advanced analytics

## 📋 Next Steps

### Design Tasks:
1. Create dashboard layout
2. Design progress visualizations
3. Plan mobile responsive design
4. Create notification system

### Development Tasks:
1. Build progress tracking backend
2. Create dashboard API endpoints
3. Implement real-time updates
4. Add recommendation engine

---

*This simplified dashboard provides a clear overview of learning progress and quick access to practice modules, helping users stay motivated and focused on improving their Thai tones.*