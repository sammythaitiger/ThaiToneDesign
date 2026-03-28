# Word Practice Screen
*Экран практики конкретного слова (тональный анализ по слогам)*

## 📱 Общая структура экрана

### Состояние 1: BEFORE RECORDING (до записи)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        สวัสดี           ⏹️ 🔊          │ ← AppBar с кнопками
├─────────────────────────────────────────────────────┤
│  Word: สวัสดี (sà-wàt-dii) - hello                 │
│                                                    │
│  Syllable Breakdown:                               │
│  ┌─────────────┬─────────────┬─────────────┐      │
│  │    ส        │    วัส      │    ดี       │      │ ← Syllable Cards
│  │   (sà)      │   (wàt)     │   (dii)     │      │
│  │  Tone: Mid  │  Tone: Low  │  Tone: Mid  │      │
│  │   0.2s      │    0.3s     │    0.25s    │      │
│  └─────────────┴─────────────┴─────────────┘      │
│                                                    │
│  Listen to Native Pronunciation:                  │
│  [▶ Play Whole Word]  [▶ Syllable 1] [2] [3]      │ ← Audio Controls
│                                                    │
│  Visual Timeline (Reference):                      │
│  [=== ส ===][=== วัส ===][=== ดี ===]             │ ← Timeline
│   0.2s        0.3s        0.25s                   │
│                                                    │
│  Recording Instructions:                          │
│  1. Press the record button below                 │
│  2. Pronounce each syllable clearly               │
│  3. Try to match the tone pattern                 │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │                                             │  │
│  │              [ ● RECORD ]                   │  │ ← Record FAB
│  │                                             │  │
│  │                                             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Back to Word List ]                            │ ← Navigation
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

### Состояние 2: DURING RECORDING (во время записи)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Recording...    ⏱️ 00:03        │ ← Таймер
├─────────────────────────────────────────────────────┤
│  Recording สวัสดี...                              │
│                                                    │
│  Real-time Analysis:                              │
│  ┌─────────────────────────────────────────────┐  │
│  │  Waveform with Live Visualization          │  │ ← Live Waveform
│  │  [===●=======][===●=======][===●========]  │  │
│  │  Syllable detection in real-time          │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Detected Syllables:                              │
│  ┌─────────────────────────────────────────────┐  │
│  │ 1. ส - ✓ Detected (Mid tone estimated)     │  │ ← Real-time Feedback
│  │ 2. วัส - ● Recording in progress...        │  │
│  │ 3. ดี - ⏳ Waiting...                       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Tips for better recording:                       │
│  • Speak clearly and naturally                    │
│  • Don't rush between syllables                   │
│  • Focus on tone contours                         │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ ■ STOP ]                     │  │ ← Stop Button
│  │              (Tap to finish)                │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [ Cancel Recording ]                             │ ← Cancel Button
├─────────────────────────────────────────────────────┤
│  (Bottom Navigation hidden during recording)       │
└─────────────────────────────────────────────────────┘
```

### Состояние 3: AFTER RECORDING - ANALYSIS (анализ - цель: 2-3 секунды)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Analyzing...    ⏱️ 2s           │ ← Быстрый анализ (2-3 секунды)
├─────────────────────────────────────────────────────┤
│  Processing your recording...                      │
│  (This usually takes 2-3 seconds)                 │ ← Подсказка о времени
│                                                    │
│  Steps:                                           │
│  ┌─────────────────────────────────────────────┐  │
│  │ 1. Syllable segmentation ✓                 │  │ ← Progress Steps
│  │ 2. Pitch extraction for each syllable ✓    │  │
│  │ 3. Tone comparison ● In progress...        │  │
│  │ 4. Generating feedback ○ Waiting...        │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Estimated time remaining: 2 seconds              │
│                                                    │
│  What's happening:                                │
│  • Your audio is being split into syllables       │
│  • Pitch contours are extracted (Pitch анализ)    │
│  • Comparing with native pronunciation            │
│  • Generating personalized feedback               │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │              [ 🔄 Processing ]              │  │ ← Disabled Button
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  [Cancel Analysis]                                │
├─────────────────────────────────────────────────────┤
│  (Bottom Navigation hidden during analysis)        │
└─────────────────────────────────────────────────────┘
```

**Цель производительности:** Анализ должен занимать 2-3 секунды для обеспечения плавного пользовательского опыта.

### Состояние 4: RESULTS (результаты)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Results          🎯 82%         │ ← Overall Score
├─────────────────────────────────────────────────────┤
│  Word: สวัสดี - Overall Accuracy: 82%             │
│                                                    │
│  Syllable-by-Syllable Results:                    │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  ส (Mid Tone) - 90% ✓                      │  │ ← Syllable Result 1
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ────────               │   │  │ ← Pitch Graph
│  │  │  Native:     ──────────             │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Excellent mid tone!"           │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  วัส (Low Tone) - 65% ⚠                    │  │ ← Syllable Result 2
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ──────────             │   │  │
│  │  │  Native:     ────────               │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Your low tone starts too high" │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  │  [Practice This Syllable]                   │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │  ดี (Mid Tone) - 92% ✓                      │  │ ← Syllable Result 3
│  │  ┌─────────────────────────────────────┐   │  │
│  │  │  Your pitch: ──────────             │   │  │
│  │  │  Native:     ──────────             │   │  │
│  │  └─────────────────────────────────────┘   │  │
│  │  Feedback: "Perfect match!"                │  │
│  │  [▶ Play Your] [▶ Play Native]             │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Summary:                                         │
│  • Tone Pattern Accuracy: 85%                     │
│  • Timing Accuracy: 78%                           │
│  • Fluency Score: 71%                             │
│                                                    │
│  [Try Again] [Practice Problem Syllable] [Next Word]
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │ ← Bottom Navigation
└─────────────────────────────────────────────────────┘
```

**Ключевой элемент результатов:** Каждый слог показывает график Pitch контура - сравнение вашего тона (синяя линия) с нативным произношением (зеленая линия). Это позволяет визуально понять разницу в тональных контурах.

### Состояние 5: ERROR PERMISSION (нет доступа к микрофону)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Microphone Access                │
├─────────────────────────────────────────────────────┤
│  ⚠️ Microphone Permission Required                 │
│                                                    │
│  To record your pronunciation, we need            │
│  access to your microphone.                       │
│                                                    │
│  Please grant microphone permission:              │
│                                                    │
│  [Grant Permission]                               │ ← Открывает настройки
│                                                    │
│  How to enable manually:                          │
│  1. Go to Settings > Privacy > Microphone         │
│  2. Find "Thai Tone Trainer"                      │
│  3. Turn on microphone access                     │
│                                                    │
│  [Back to Word List]                              │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 6: ERROR RECORDING (ошибка записи)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Recording Error                 │
├─────────────────────────────────────────────────────┤
│  ⚠️ Recording Failed                              │
│                                                    │
│  We couldn't record your audio.                    │
│  Possible reasons:                                 │
│  • Microphone is busy with another app            │
│  • Audio input level too low (too quiet)          │
│  • Technical issue with microphone                │
│                                                    │
│  Please try again:                                │
│                                                    │
│  [Try Again]                                      │
│                                                    │
│  Or return to word selection:                     │
│  [Back to Word List]                              │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 7: ERROR ANALYSIS (ошибка анализа)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        Analysis Error                  │
├─────────────────────────────────────────────────────┤
│  ⚠️ Analysis Failed                               │
│                                                    │
│  We couldn't analyze your recording.               │
│  This might be because:                           │
│  • Recording is too short or too long             │
│  • Too much background noise                      │
│  • Server is temporarily unavailable              │
│                                                    │
│  You can:                                         │
│                                                    │
│  [Try Recording Again]                            │
│  [Back to Word List]                              │
│                                                    │
│  If this persists, please contact support.        │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

### Состояние 8: ERROR NETWORK (нет интернета)
```
┌─────────────────────────────────────────────────────┐
│  ← Practice        No Connection                  │
├─────────────────────────────────────────────────────┤
│  🌐 No Internet Connection                         │
│                                                    │
│  You need an internet connection to analyze        │
│  your recording.                                   │
│                                                    │
│  Options:                                         │
│                                                    │
│  [Retry Connection]                               │
│  [Save Recording for Later]                       │
│  [Practice Offline - Tone Recognition Only]       │
│                                                    │
│  Working offline?                                 │
│  You can still practice without analysis.         │
│  [Practice Offline]                               │
├─────────────────────────────────────────────────────┤
│  🏠  📚  🎴  🎥  📊                                │
└─────────────────────────────────────────────────────┘
```

## 🔗 Навигация

### Навигация между экранами:
1. **Из Word Selection → Word Practice:** Нажатие на кнопку "Practice" на карточке слова
2. **Возврат из Word Practice → Word Selection:**
   - Кнопка "←" в AppBar (BackAction)
   - Кнопка "Back to Word List" внизу экрана (только в состоянии BEFORE_RECORDING)
   - Hardware back button на Android
   - Swipe back gesture на iOS

### Навигация внутри экрана:
- **BEFORE_RECORDING → RECORDING:** Нажатие на красную кнопку RECORD
- **RECORDING → PROCESSING:** Нажатие на оранжевую кнопку STOP
- **PROCESSING → RESULTS:** Автоматически после завершения анализа
- **RESULTS → BEFORE_RECORDING:** Нажатие "Try Again"
- **Любое состояние → Word Selection:** Кнопка Back в AppBar

### Обработка ошибок навигации:
- При ошибке записи/анализа → остаемся на текущем экране с сообщением об ошибке
- При отсутствии интернета → предлагаем оффлайн альтернативы
- При проблемах с permissions → направляем в настройки устройства

## 🎨 Компоненты React Native Paper

### 1. AppBar с состоянием
```javascript
// Состояние: Before Recording
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="สวัสดี" />
  <Appbar.Action icon="stop-circle" disabled /> // Для будущего
  <Appbar.Action icon="volume-high" onPress={playNativeAudio} />
</Appbar.Header>

// Состояние: During Recording
<Appbar.Header>
  <Appbar.BackAction disabled />
  <Appbar.Content title="Recording..." />
  <Appbar.Action icon="timer" />
  <View style={{ paddingRight: 16 }}>
    <Text>00:{seconds.toString().padStart(2, '0')}</Text>
  </View>
</Appbar.Header>

// Состояние: Results
<Appbar.Header>
  <Appbar.BackAction onPress={() => navigation.goBack()} />
  <Appbar.Content title="Results" />
  <Appbar.Action 
    icon="trophy" 
    onPress={() => showAchievement(overallScore)}
  />
  <Badge visible={overallScore > 80} size={24}>
    {overallScore}%
  </Badge>
</Appbar.Header>
```

### 2. Syllable Cards (до записи)
```javascript
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {word.syllables.map((syllable, index) => (
    <Card key={index} style={{ width: 100, margin: 8 }}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Title style={{ fontSize: 24 }}>{syllable.thai}</Title>
        <Paragraph>({syllable.transcription})</Paragraph>
        <Chip 
          style={{ backgroundColor: getToneColor(syllable.tone) }}
          textStyle={{ color: 'white' }}
        >
          {syllable.tone}
        </Chip>
        <Caption>{syllable.duration}s</Caption>
      </Card.Content>
      <Card.Actions>
        <Button 
          compact 
          icon="play" 
          onPress={() => playSyllableAudio(index)}
        >
          Play
        </Button>
      </Card.Actions>
    </Card>
  ))}
</ScrollView>
```

### 3. Record Button (FAB)
```javascript
// Before Recording
<FAB
  style={{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#F44336', // Красный
  }}
  icon="microphone"
  label="RECORD"
  onPress={startRecording}
  color="white"
  size="large"
/>

// During Recording
<FAB
  style={{
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FF9800', // Оранжевый
  }}
  icon="stop"
  label="STOP"
  onPress={stopRecording}
  color="white"
  size="large"
  loading={isProcessing} // Если обрабатывается
/>
```

### 4. Live Waveform Component
```javascript
<Surface style={{ height: 100, margin: 16, borderRadius: 8 }}>
  <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
    {waveformData.map((value, index) => {
      const isCurrentSyllable = currentSyllableIndex === 
        Math.floor(index / (waveformData.length / word.syllables.length));
      
      return (
        <View
          key={index}
          style={{
            width: 2,
            height: Math.max(10, value * 80),
            backgroundColor: isCurrentSyllable ? '#2196F3' : '#BDBDBD',
            marginHorizontal: 1,
          }}
        />
      );
    })}
    
    // Syllable markers
    {word.syllables.map((_, index) => (
      <View
        key={`marker-${index}`}
        style={{
          position: 'absolute',
          left: `${(index / word.syllables.length) * 100}%`,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: '#4CAF50',
        }}
      />
    ))}
  </View>
</Surface>
```

### 5. Results Cards (после анализа)
```javascript
<List.AccordionGroup>
  {results.syllableResults.map((result, index) => (
    <List.Accordion
      key={index}
      title={`${word.syllables[index].thai} (${word.syllables[index].tone})`}
      description={`Accuracy: ${result.accuracy}%`}
      left={props => (
        <Avatar.Text 
          size={40} 
          label={`${result.accuracy}%`}
          style={{ 
            backgroundColor: getAccuracyColor(result.accuracy) 
          }}
        />
      )}
      id={index.toString()}
    >
      <Card>
        <Card.Content>
          {/* Pitch Graph */}
          <VictoryLine
            data={result.yourPitch}
            style={{ data: { stroke: "#2196F3" } }}
          />
          <VictoryLine
            data={result.nativePitch}
            style={{ data: { stroke: "#4CAF50" } }}
          />
          
          <Paragraph>{result.feedback}</Paragraph>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button 
              icon="play" 
              mode="outlined"
              onPress={() => playYourSyllable(index)}
            >
              Your
            </Button>
            <Button 
              icon="play" 
              mode="outlined"
              onPress={() => playNativeSyllable(index)}
            >
              Native
            </Button>
            {result.accuracy < 70 && (
              <Button 
                icon="repeat" 
                mode="contained"
                onPress={() => practiceSyllable(index)}
              >
                Practice
              </Button>
            )}
          </View>
        </Card.Content>
      </Card>
    </List.Accordion>
  ))}
</List.AccordionGroup>
```

## 🎮 Интерактивность и состояния

### Состояния экрана:
```
1. STATE_BEFORE_RECORDING
   • Показываем слово и слоги
   • Кнопка записи активна
   • Можно прослушивать нативное аудио

2. STATE_RECORDING
   • Таймер работает
   • Показываем live waveform
   • Real-time syllable detection
   • Кнопка STOP активна

3. STATE_PROCESSING
   • Показываем прогресс анализа
   • Кнопки неактивны
   • Можно отменить
   • Цель: 2-3 секунды анализа

4. STATE_RESULTS
   • Показываем результаты
   • Графики сравнения pitch контуров
   • Кнопки действий

5. STATE_ERROR_PERMISSION
   • Ошибка доступа к микрофону
   • Кнопка "Grant Permission"
   • Инструкции как включить

6. STATE_ERROR_RECORDING
   • Ошибка записи (шум, тишина, техническая)
   • Сообщение об ошибке
   • Кнопка "Try Again"

7. STATE_ERROR_ANALYSIS
   • Ошибка анализа на бэкенде
   • Сообщение "Analysis failed"
   • Кнопки "Retry" и "Back to Word List"

8. STATE_ERROR_NETWORK
   • Нет соединения с сервером
   • Оффлайн режим
   • Кнопка "Use Cached Data" или "Retry"
```

### Обработка нажатий:

#### 1. Нажатие RECORD:
```
1. Проверка permissions (микрофон)
2. Если нет permission → запросить
3. Запуск таймера
4. Начало записи через expo-av
5. Переход в STATE_RECORDING
6. Haptic feedback (успешное начало)
```

#### 2. Нажатие STOP:
```
1. Остановка записи
2. Сохранение аудиофайла
3. Отправка на бэкенд для анализа
4. Переход в STATE_PROCESSING
5. Показ индикатора прогресса
```

#### 3. Нажатие Play Audio:
```
1. Проверка: есть ли аудио (нативное/пользовательское)
2. Воспроизведение через expo-av
3. Визуальная обратная связь (кнопка меняется на паузу)
4. Если воспроизводится слог → подсветка соответствующего слога
```

#### 4. Нажатие Practice This Syllable:
```
1. Переход на экран практики конкретного слога
2. Параметры: syllableIndex, wordId, targetTone
3. Экран фокусируется только на одном слоге
4. Упрощенная запись и анализ
```

## 🔧 Логика анализа

### Поток данных:
```javascript
// 1. Запись завершена → получаем audio URI
const recording = await Audio.Recording.createAsync(...);
const audioUri = recording.getURI();

// 2. Отправка на бэкенд
const formData = new FormData();
formData.append('audio', {
  uri: audioUri,
  type: 'audio/m4a',
  name: 'recording.m4a',
});
formData.append('wordId', word.id);
formData.append('userId', currentUser.id);

// 3. Отправка запроса
const response = await fetch('https://api.thaitone.com/analyze', {
  method: 'POST',
  body: formData,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 4. Обработка ответа
if (response.ok) {
  const results = await response.json();
  // results содержит:
  // - overallAccuracy
  // - syllableResults[]
  // - pitchContours
  // - feedback
  setAnalysisResults(results);
  setScreenState('STATE_RESULTS');
} else {
  setScreenState('STATE_ERROR_ANALYSIS');
}
```

### Время анализа:
- **Цель:** 2-3 секунды
- **Факторы влияющие на время:**
  - Длина записи (обычно 1-3 секунды на слово)
  - Количество слогов (1-4+)
  - Загрузка сервера
  - Скорость интернета пользователя

### Обработка ошибок:
```javascript
try {
  // Запись и анализ
} catch (error) {
  if (error.code === 'PERMISSION_DENIED') {
    setScreenState('STATE_ERROR_PERMISSION');
  } else if (error.message.includes('network')) {
    setScreenState('STATE_ERROR_NETWORK');
  } else if (error.message.includes('recording')) {
    setScreenState('STATE_ERROR_RECORDING');
  } else {
    setScreenState('STATE_ERROR_ANALYSIS');
  }
}
```

---

## 🔗 Связанные экраны

**← Назад:** [Word Selection Screen](../word-selection.md)  
**→ Вперед:** Syllable Practice Screen (при нажатии "Practice This Syllable")

---

*Последнее обновление: 2024-03-28*  
*Статус: ASCII wireframe - Complete с состояниями ошибок и навигацией*