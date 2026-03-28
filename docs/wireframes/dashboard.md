# Dashboard Screen - Option A (Minimalist MVP)
*Stats and quick access to practice*

## Overall screen structure

### State 1: NORMAL (data loaded)
```
┌─────────────────────────────────────────────────────┐
│  Dashboard                     ⚙️ 👤                │ ← AppBar
├─────────────────────────────────────────────────────┤
│  Welcome back, Samir!                               │
│  5-day streak 🔥                                    │ ← Streak
│                                                    │
│  Quick Stats:                                      │
│  ┌─────────────┬─────────────┬─────────────┐      │
│  │  Words      │  Time Today │  Accuracy   │      │ ← 3 primary metrics
│  │  42         │  15 min     │  78%        │      │
│  └─────────────┴─────────────┴─────────────┘      │
│                                                    │
│  Tone Progress:                                   │
│  Mid:     ████████░░ 80%                          │ ← Progress bars
│  Low:     ██████░░░░ 60%                          │
│  Falling: ████░░░░░░ 40%                          │
│  High:    █████░░░░░ 50%                          │
│  Rising:  ██░░░░░░░░ 20%                          │
│                                                    │
│  Today's Recommendation:                          │
│  • Practice Rising tone (20% accuracy)            │ ← Main recommendation
│  • Review 5 flashcards due                        │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ PRACTICE NOW ]               │  │ ← Primary CTA
│  │           Start your practice session       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Recent Activity:                                 │ ← Recent activity
│  • 10 min ago: Practiced Falling tone            │
│  • 1 hour ago: Learned 3 new words               │
│  • Yesterday: Shadowing practice                 │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

### State 2: LOADING
```
┌─────────────────────────────────────────────────────┐
│  Dashboard                     ⚙️ 👤                │
├─────────────────────────────────────────────────────┤
│  Loading your progress...                          │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Welcome message]                │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Quick Stats]                    │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Tone Progress]                  │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  [Skeleton: Button]                         │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 3: EMPTY (no data)
```
┌─────────────────────────────────────────────────────┐
│  Dashboard                     ⚙️ 👤                │
├─────────────────────────────────────────────────────┤
│  Welcome to Thai Tone Trainer!                     │
│                                                    │
│  No practice data yet.                             │
│  Start practicing to see your progress here.       │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  What you'll see here:                      │  │
│  │  • Your tone accuracy progress              │  │
│  │  • Words learned count                      │  │
│  │  • Practice time                            │  │
│  │  • Daily streak                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ START PRACTICING ]           │  │
│  │           Begin your Thai tone journey      │  │
│  └─────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### State 4: ERROR (load failure)
```
┌─────────────────────────────────────────────────────┐
│  Dashboard                     ⚙️ 👤                │
├─────────────────────────────────────────────────────┤
│  ⚠️ Could not load progress data                  │
│                                                    │
│  There was an error loading your statistics.       │
│  Please check your internet connection and         │
│  try again.                                        │
│                                                    │
│  [Retry]                                           │
│                                                    │
│  Working offline?                                  │
│  You can still practice without statistics.        │
│  [Practice Offline]                                │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

## React Native Paper components

### 1. AppBar (top bar)
```javascript
<Appbar.Header>
  <Appbar.Content title="Dashboard" />
  <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
  <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
</Appbar.Header>
```

### 2. Quick stats cards (3 metrics)
```javascript
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16 }}>
  {/* Words Card */}
  <Card style={{ flex: 1, marginHorizontal: 4 }}>
    <Card.Content style={{ alignItems: 'center' }}>
      <Title style={{ fontSize: 24 }}>{stats.wordsLearned}</Title>
      <Caption>Words</Caption>
    </Card.Content>
  </Card>

  {/* Time Today Card */}
  <Card style={{ flex: 1, marginHorizontal: 4 }}>
    <Card.Content style={{ alignItems: 'center' }}>
      <Title style={{ fontSize: 24 }}>{stats.timeToday}m</Title>
      <Caption>Time Today</Caption>
    </Card.Content>
  </Card>

  {/* Accuracy Card */}
  <Card style={{ flex: 1, marginHorizontal: 4 }}>
    <Card.Content style={{ alignItems: 'center' }}>
      <Title style={{ fontSize: 24 }}>{stats.overallAccuracy}%</Title>
      <Caption>Accuracy</Caption>
    </Card.Content>
  </Card>
</View>
```

### 3. Tone progress bars
```javascript
<Card>
  <Card.Content>
    <Title>Tone Progress</Title>
    
    {Object.entries(stats.toneProgress).map(([tone, data]) => (
      <View key={tone} style={{ marginVertical: 8 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ textTransform: 'capitalize' }}>{tone}</Text>
          <Text>{data.accuracy}%</Text>
        </View>
        <ProgressBar 
          progress={data.accuracy / 100}
          color={getToneColor(tone)}
          style={{ height: 8, borderRadius: 4 }}
        />
      </View>
    ))}
  </Card.Content>
</Card>
```

### 4. Main action button
```javascript
<Button
  mode="contained"
  icon="play-circle"
  onPress={() => navigation.navigate('WordSelection')}
  style={{ marginVertical: 16, paddingVertical: 12 }}
  contentStyle={{ height: 48 }}
  labelStyle={{ fontSize: 18 }}
>
  PRACTICE NOW
</Button>
```

### 5. Recent activity list
```javascript
<Card>
  <Card.Content>
    <Title>Recent Activity</Title>
    
    {recentActivity.map((activity, index) => (
      <List.Item
        key={index}
        title={activity.description}
        description={formatTimeAgo(activity.timestamp)}
        left={props => <List.Icon {...props} icon={getActivityIcon(activity.type)} />}
      />
    ))}
    
    {recentActivity.length === 0 && (
      <Paragraph style={{ textAlign: 'center', color: '#666' }}>
        No recent activity
      </Paragraph>
    )}
  </Card.Content>
</Card>
```

## Data and structure

### Types:
```typescript
interface DashboardStats {
  // Primary metrics
  wordsLearned: number;
  timeToday: number;            // minutes today
  overallAccuracy: number;     // average accuracy (%)
  streakDays: number;
  
  toneProgress: {
    mid: { accuracy: number; practiceCount: number };
    low: { accuracy: number; practiceCount: number };
    falling: { accuracy: number; practiceCount: number };
    high: { accuracy: number; practiceCount: number };
    rising: { accuracy: number; practiceCount: number };
  };
  
  recommendations: {
    weakestTone: string;
    weakestToneAccuracy: number;
    dueFlashcards: number;
  };
  
  recentActivity: Activity[];
}

interface Activity {
  type: 'tone_practice' | 'word_learned' | 'flashcard_review' | 'shadowing';
  description: string;
  timestamp: Date;
  details?: any;
}
```

### Metric calculation:
```javascript
const overallAccuracy = Math.round(
  (stats.toneProgress.mid.accuracy +
   stats.toneProgress.low.accuracy +
   stats.toneProgress.falling.accuracy +
   stats.toneProgress.high.accuracy +
   stats.toneProgress.rising.accuracy) / 5
);

const weakestTone = Object.entries(stats.toneProgress)
  .reduce((weakest, [tone, data]) => 
    data.accuracy < weakest.accuracy ? { tone, accuracy: data.accuracy } : weakest,
    { tone: 'mid', accuracy: 100 }
  );
```

## Interactivity and states

### Tappable elements:
1. **Tone progress bars** → Practice with tone filter
   ```javascript
   onPress={() => navigation.navigate('WordSelection', { 
     toneFilter: [tone] 
   })}
   ```

2. **Stat cards** → Detail stats
   ```javascript
   onPress={() => navigation.navigate('StatisticsDetail', { 
     metric: 'words' 
   })}
   ```

3. **Activity rows** → Session detail
   ```javascript
   onPress={() => showActivityDetails(activity)}
   ```

4. **PRACTICE NOW** → Word Selection
   ```javascript
   onPress={() => navigation.navigate('WordSelection')}
   ```

### Pull to refresh:
```javascript
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  }
>
  {/* Dashboard content */}
</ScrollView>
```

## Navigation

### From Dashboard:
1. **Word Selection** (PRACTICE NOW)
2. **Word Selection with tone filter** (tap progress bar)
3. **Statistics detail** (tap stat card)
4. **Settings** (⚙️)
5. **Profile** (👤)

### To Dashboard:
- **Bottom tab:** 📊
- **From other screens:** hardware back if Dashboard is in stack
- **After practice:** optional auto-return

## Responsive layout

### Mobile (portrait):
```
[AppBar]
[Welcome + Streak]
[Quick Stats - row of 3]
[Tone Progress - vertical]
[Recommendation]
[PRACTICE NOW]
[Recent Activity]
[Bottom Navigation]
```

### Tablet (landscape):
```
[AppBar]
[Left: Quick Stats vertical]
[Right: Tone Progress + Recommendation]
[PRACTICE NOW centered]
[Recent Activity full width]
[Bottom Navigation]
```

## Performance

### Optimizations:
1. **Cache** stats locally
2. **Lazy load** sections if needed
3. **Skeleton** while loading
4. **Debounce refresh** (e.g. max once per 30s)

### Limits:
- Show last 5 activities
- Refresh stats every 5 minutes when focused
- Cache 1 hour

## Test cases

### Test 1: First use
```
1. Open Dashboard (Empty)
2. Verify "No practice data yet"
3. Tap START PRACTICING
4. Verify navigation to Word Selection
```

### Test 2: Normal use
```
1. Open Dashboard (Normal)
2. Verify all metrics load
3. Tap Rising tone progress bar
4. Verify Word Selection opens with tone filter
5. Tap PRACTICE NOW
6. Verify navigation without filters
```

### Test 3: Offline
```
1. Disable network
2. Open Dashboard
3. Verify cached stats if any
4. Error state if no cache
5. Practice Offline button
```

### Test 4: Pull to refresh
```
1. Pull down
2. Verify refresh indicator
3. Data updates
4. Snackbar "Data updated"
```

## Data refresh logic

### Sources:
```javascript
const cachedStats = await AsyncStorage.getItem('dashboard_stats');
const response = await fetch('https://api.thaitone.com/dashboard');
const serverStats = await response.json();
const stats = mergeStats(cachedStats, serverStats);
await AsyncStorage.setItem('dashboard_stats', JSON.stringify(stats));
```

### Frequency:
- **On screen open:** always try
- **After practice:** refresh
- **Background:** every 5 min while open
- **Pull to refresh:** on demand

---

## Related screens

**← Back:** any tab via Bottom Navigation  
**→ Next:** [Word Selection Screen](./word-selection.md) (via PRACTICE NOW)

---

*Last updated: 2026-03-28*  
*Status: ASCII wireframe — minimalist MVP*
