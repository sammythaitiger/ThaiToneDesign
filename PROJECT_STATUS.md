# Thai Tone Trainer - Project Status
*Week 1 of 2 Design Phase | Last Updated: 2024-03-25*

## ✅ Что сделано (Week 1):

### 1. **Репозиторий настроен**
- GitHub репозиторий: `https://github.com/sammythaitiger/ThaiToneDesign.git`
- Git настроен, первые коммиты отправлены
- Структура проекта создана

### 2. **Документация создана:**
- ✅ `QUICKSTART.md` - Быстрый старт
- ✅ `GIT_WORKFLOW.md` - Инструкции по Git
- ✅ `DESIGN_SPECIFICATION_SIMPLE.md` - Упрощенная техническая спецификация
- ✅ `project/ROADMAP.md` - Упрощенный роадмап на 4 месяца
- ✅ `project/VISION.md` - Видение продукта

### 3. **Упрощенные User Flows:**
Все флоу теперь сфокусированы на core functionality:

#### **Tone Practice (Syllable-Aware):**
- ✅ `docs/user-flows/tone-practice-syllable-aware.md`
- **Фокус:** Сравнение по слогам с нормализацией pitch
- **Ключевое:** Слова → слоги → тональность каждого слога
- **Сравнение:** Нормализованные pitch contours (не raw F0)

#### **Shadowing Practice:**
- ✅ `docs/user-flows/shadowing-simple.md`  
- **Фокус:** YouTube + Whisper субтитры
- **Анализ:** Сравнение по слогам (как в tone practice)
- **Процесс:** Выбор фразы → запись → syllable-by-syllable сравнение

#### **Dictionary:**
- ✅ `docs/user-flows/dictionary-simple.md`
- **Упрощено:** Поиск слов + tone информация
- **Без:** Сложных фильтров, категорий, уровней сложности
- **Фокус:** Thai script → тональность слогов → аудио → пример

#### **Flashcards:**
- ✅ `docs/user-flows/flashcards-simple.md`
- **Как Anki:** Spaced repetition
- **Типы карточек:** Thai→English, English→Thai, Tone recognition
- **Просто:** Создание/редактирование/обзор

#### **Dashboard:**
- ✅ `docs/user-flows/dashboard-simple.md`
- **Обзор:** Прогресс по тонам, словарь, активность
- **Быстрые действия:** Practice weakest tone, review flashcards
- **Рекомендации:** Что практиковать дальше

### 4. **Удалено/Упрощено:**
- ❌ Сложные API спецификации (пользователь сказал сконцентрироваться на интерфейсе)
- ❌ Множество уровней сложности
- ❌ Геймификация/социальные фичи
- ❌ Мобильное приложение (начально web only)
- ❌ Монетизация (на старте)

## 🎯 Core Technical Approach:

### **Анализ Pitch (Критически важно):**
1. **Нормализация, не raw F0:**
   - Разные голоса → разные базовые частоты
   - Сравниваем shape контура, не абсолютные значения
   - Справедливое сравнение для всех голосов

2. **Syllable-Level анализ:**
   - Слова делятся на слоги
   - Каждый слог имеет свой тон
   - Сравниваем pitch contour для каждого слога отдельно
   - Dynamic Time Warping (DTW) для временного выравнивания

3. **Для Tone Practice:**
   - Слова с разным количеством слогов
   - Односложные слова для изоляции тонов
   - Многосложные слова для tone patterns

4. **Для Shadowing:**
   - YouTube видео → Whisper субтитры
   - Выбор фразы → syllable segmentation
   - Запись пользователя → то же segmentation
   - Сравнение по слогам

## 🚀 Что дальше (Week 2):

### **Design Tasks:**
1. **Wireframes для всех core screens (8-10):**
   - Tone selection screen
   - Word practice with syllable breakdown
   - Recording interface with real-time feedback
   - Syllable-by-syllable comparison results
   - YouTube video browser
   - Shadowing practice interface
   - Dictionary search and word details
   - Flashcard review interface
   - Dashboard

2. **Компонентная система:**
   - Recording controls (крупная кнопка, waveform)
   - Pitch graph visualization (D3.js)
   - Syllable visualization (цвета по тонам)
   - Card flip компонент для flashcards

3. **Мобильный дизайн:**
   - Вертикальные layouts
   - Крупные touch targets
   - Упрощенные взаимодействия

### **Technical Planning:**
1. **Database schema:** Упрощенная структура данных
2. **API endpoints:** Минимальные эндпоинты для core functionality
3. **Интеграции:** YouTube API, Whisper, Librosa pitch extraction
4. **Разработка environment:** Next.js + Python FastAPI setup

## 📅 Timeline (4 месяца):

### **Month 1: Tone Practice MVP**
- User authentication (простая)
- Tone selection interface
- Audio recording and playback
- Pitch visualization (normalized)
- Basic comparison and scoring

### **Month 2: Dictionary & Flashcards**
- Word search and database (500+ слов)
- Word details with syllable breakdown
- Flashcard system (spaced repetition)
- User word lists

### **Month 3: Shadowing Module**
- YouTube video integration
- Whisper subtitle generation
- Shadowing recording interface
- Syllable-level comparison

### **Month 4: Polish & Launch**
- Dashboard with progress tracking
- UI polish and responsiveness
- Testing and bug fixes
- Launch preparation

## 🔧 Tech Stack (Упрощенный):

### **Frontend:**
- Next.js 14 (TypeScript)
- Tailwind CSS
- D3.js для графиков
- Web Audio API

### **Backend:**
- Python FastAPI
- Librosa для pitch extraction
- Whisper для Thai transcription
- PostgreSQL для данных

### **Интеграции:**
- YouTube Data API v3
- Custom audio processing API

## ✅ Критерии успеха MVP:

### **После Month 2 (Launch Ready):**
1. Пользователи могут практиковать 5 Thai tones с визуальной обратной связью
2. Dictionary с 500+ словами, поиск, tone информация
3. Basic flashcard система для повторения
4. User accounts и прогресс трекинг
5. Responsive web интерфейс

### **После Month 4 (Complete):**
1. YouTube shadowing функциональность
2. Syllable-by-syllable сравнение
3. Улучшенный dashboard и рекомендации
4. Polished UI/UX
5. Готово к публичному использованию

---

## 📞 Контакты и Ссылки:

- **GitHub:** https://github.com/sammythaitiger/ThaiToneDesign
- **Статус:** Design Phase, Week 1 завершен
- **Документы:** Все упрощенные флоу созданы
- **Фокус:** Syllable-aware tone analysis with normalized pitch comparison

## 🎯 Следующие шаги:

1. **Создать wireframes** для core screens (начать с tone practice)
2. **Определить exact data structures** для syllable-aware анализа
3. **Спланировать development sprints** на Month 1
4. **Начать implementation planning** для pitch analysis алгоритмов

---

*Проект сфокусирован на core functionality: syllable-aware Thai tone learning через normalized pitch comparison. Все сложные фичи удалены для MVP.*