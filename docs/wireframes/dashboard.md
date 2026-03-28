# Dashboard Screen - Вариант A (Минималистичный MVP)
*Экран статистики и быстрого доступа к практике*

## 📱 Общая структура экрана

### Состояние 1: NORMAL (данные загружены)
```
┌─────────────────────────────────────────────────────┐
│  Dashboard                     ⚙️ 👤                │ ← AppBar
├─────────────────────────────────────────────────────┤
│  Welcome back, Samir!                               │
│  5-day streak 🔥                                    │ ← Streak
│                                                    │
│  Quick Stats:                                      │
│  ┌─────────────┬─────────────┬─────────────┐      │
│  │  Words      │  Time Today │  Accuracy   │      │ ← 3 главные метрики
│  │  42         │  15 min     │  78%        │      │
│  └─────────────┴─────────────┴─────────────┘      │
│                                                    │
│  Tone Progress:                                   │
│  Mid:     ████████░░ 80%                          │ ← Прогресс-бары
│  Low:     ██████░░░░ 60%                          │
│  Falling: ████░░░░░░ 40%                          │
│  High:    █████░░░░░ 50%                          │
│  Rising:  ██░░░░░░░░ 20%                          │
│                                                    │
│  Today's Recommendation:                          │
│  • Practice Rising tone (20% accuracy)            │ ← Главная рекомендация
│  • Review 5 flashcards due                        │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ PRACTICE NOW ]               │  │ ← Главная кнопка
│  │           Start your practice session       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Recent Activity:                                 │ ← Недавняя активность
│  • 10 min ago: Practiced Falling tone            │
│  • 1 hour ago: Learned 3 new words               │
│  • Yesterday: Shadowing practice                 │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

### Состояние 2: LOADING (загрузка данных)
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

### Состояние 3: EMPTY (нет данных)
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

### Состояние 4: ERROR (ошибка загрузки)
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

## 🎨 Компоненты React Native Paper

### 1. AppBar (верхняя панель)
```javascript
<Appbar.Header>
  <Appbar.Content title="Dashboard" />
  <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
  <Appbar.Action icon="account" onPress={() => navigation.navigate('Profile')} />
</Appbar.Header>
```

### 2. Quick Stats Cards (3 метрики)
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

### 3. Tone Progress Bars
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

### 4. Main Action Button
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

### 5. Recent Activity List
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

## 📊 Данные и структура

### Типы данных:
```typescript
interface DashboardStats {
  // Главные метрики
  wordsLearned: number;          // Слов изучено
  timeToday: number;            // Время сегодня (минуты)
  overallAccuracy: number;      // Точность в среднем (%)
  streakDays: number;           // Серия дней
  
  // Прогресс по тонам
  toneProgress: {
    mid: { accuracy: number; practiceCount: number };
    low: { accuracy: number; practiceCount: number };
    falling: { accuracy: number; practiceCount: number };
    high: { accuracy: number; practiceCount: number };
    rising: { accuracy: number; practiceCount: number };
  };
  
  // Рекомендации
  recommendations: {
    weakestTone: string;        // Самый слабый тон
    weakestToneAccuracy: number; // Точность слабого тона
    dueFlashcards: number;      // Карточек для повторения
  };
  
  // Недавняя активность
  recentActivity: Activity[];
}

interface Activity {
  type: 'tone_practice' | 'word_learned' | 'flashcard_review' | 'shadowing';
  description: string;
  timestamp: Date;
  details?: any;
}
```

### Расчет метрик:
```javascript
// Точность в среднем
const overallAccuracy = Math.round(
  (stats.toneProgress.mid.accuracy +
   stats.toneProgress.low.accuracy +
   stats.toneProgress.falling.accuracy +
   stats.toneProgress.high.accuracy +
   stats.toneProgress.rising.accuracy) / 5
);

// Самый слабый тон
const weakestTone = Object.entries(stats.toneProgress)
  .reduce((weakest, [tone, data]) => 
    data.accuracy < weakest.accuracy ? { tone, accuracy: data.accuracy } : weakest,
    { tone: 'mid', accuracy: 100 }
  );
```

## 🎮 Интерактивность и состояния

### Кликабельные элементы:
1. **Прогресс-бары тонов** → Практика конкретного тона
   ```javascript
   onPress={() => navigation.navigate('WordSelection', { 
     toneFilter: [tone] 
   })}
   ```

2. **Карточки статистики** → Подробная статистика
   ```javascript
   onPress={() => navigation.navigate('StatisticsDetail', { 
     metric: 'words' 
   })}
   ```

3. **Активность в списке** → Детали сессии
   ```javascript
   onPress={() => showActivityDetails(activity)}
   ```

4. **Кнопка PRACTICE NOW** → Word Selection Screen
   ```javascript
   onPress={() => navigation.navigate('WordSelection')}
   ```

### Pull to Refresh:
```javascript
<ScrollView
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  }
>
  {/* Контент Dashboard */}
</ScrollView>
```

## 🔗 Навигация

### Из Dashboard можно перейти:
1. **Word Selection Screen** (PRACTICE NOW кнопка)
2. **Word Selection с фильтром тона** (тап на прогресс-баре)
3. **Statistics Detail Screen** (тап на карточке статистики)
4. **Settings Screen** (⚙️ иконка)
5. **Profile Screen** (👤 иконка)

### Навигация на Dashboard:
- **Bottom Tab:** 📊 (Dashboard tab)
- **Из любого экрана:** Hardware back button если Dashboard в stack
- **После завершения практики:** Автоматический возврат

## 📱 Адаптация под разные экраны

### Mobile (вертикальный):
```
[AppBar]
[Welcome + Streak]
[Quick Stats - 3 в ряд]
[Tone Progress - вертикально]
[Recommendation]
[PRACTICE NOW Button]
[Recent Activity]
[Bottom Navigation]
```

### Tablet (горизонтальный):
```
[AppBar]
[Left Panel: Quick Stats вертикально]
[Right Panel: Tone Progress + Recommendation]
[PRACTICE NOW Button по центру]
[Recent Activity полная ширина]
[Bottom Navigation]
```

## 🚀 Производительность

### Оптимизации:
1. **Кэширование данных:** Сохранять статистику локально
2. **Lazy loading:** Загружать данные постепенно
3. **Skeleton screens:** Показывать во время загрузки
4. **Debounced refresh:** Обновлять не чаще чем раз в 30 секунд

### Лимиты:
- Показывать последние 5 активностей
- Обновлять статистику каждые 5 минут
- Кэшировать на 1 час

## 🧪 Тестовые сценарии

### Тест 1: Первое использование
```
1. Открыть Dashboard (Empty State)
2. Проверить сообщение "No practice data yet"
3. Нажать START PRACTICING
4. Проверить переход на Word Selection
```

### Тест 2: Нормальное использование
```
1. Открыть Dashboard (Normal State)
2. Проверить загрузку всех метрик
3. Нажать на прогресс-бар Rising tone
4. Проверить переход с фильтром тона
5. Нажать PRACTICE NOW
6. Проверить переход без фильтров
```

### Тест 3: Оффлайн режим
```
1. Отключить интернет
2. Открыть Dashboard
3. Проверить показ кэшированных данных
4. Проверить сообщение об ошибке если нет кэша
5. Проверить кнопку Practice Offline
```

### Тест 4: Pull to Refresh
```
1. Потянуть список вниз
2. Проверить индикатор обновления
3. Проверить обновление данных
4. Проверить Snackbar "Data updated"
```

## 🔧 Логика обновления данных

### Источники данных:
```javascript
// 1. Локальное хранилище (AsyncStorage)
const cachedStats = await AsyncStorage.getItem('dashboard_stats');

// 2. Загрузка с сервера
const response = await fetch('https://api.thaitone.com/dashboard');
const serverStats = await response.json();

// 3. Объединение данных
const stats = mergeStats(cachedStats, serverStats);

// 4. Кэширование
await AsyncStorage.setItem('dashboard_stats', JSON.stringify(stats));
```

### Частота обновления:
- **При открытии экрана:** Всегда
- **После практики:** Автоматически
- **В фоне:** Каждые 5 минут если экран открыт
- **Pull to refresh:** По запросу пользователя

---

## 🔗 Связанные экраны

**← Назад:** Любой экран через Bottom Navigation  
**→ Вперед:** [Word Selection Screen](../word-selection.md) (через PRACTICE NOW)

---

*Последнее обновление: 2024-03-28*
*Статус: ASCII wireframe - Minimalist MVP Version*