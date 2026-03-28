# Гайд по компонентам (React Native Paper + навигация)
*Краткая шпаргалка для согласования экранов из wireframes с реализацией*

См. также [README](./README.md) — общая навигация и принципы layout.

## Цвета тонов

Использовать **один источник правды** в коде (например `theme/toneColors.ts`), те же HEX что в README:

| Тон     | HEX     |
|---------|---------|
| Mid     | #2196F3 |
| Low     | #4CAF50 |
| Falling | #9C27B0 |
| High    | #FF9800 |
| Rising  | #F44336 |

**Chip / Badge:** `backgroundColor: getToneColor(tone)`, `textStyle={{ color: '#fff' }}` для контраста.

## Паттерны по типам экранов

| Задача | Компоненты |
|--------|------------|
| Заголовок + действия | `Appbar.Header`, `Appbar.Content`, `Appbar.Action` |
| Списки слов / уроков | `FlatList` + `Card` или `List.Item` |
| Фильтры тонов | `Chip` в `ScrollView horizontal` |
| Поиск | `TextInput` `mode="outlined"` + иконка `magnify` |
| Главное действие | `Button mode="contained"` или `FAB` |
| Прогресс | `ProgressBar`, `CircularProgress` |
| Сообщения | `Snackbar`, диалоги — `Dialog` / `Portal` |

## Навигация

- **Корень таба** (Home, Dictionary, Flashcards, Shadowing, Dashboard): обычно **без** `BackAction`.
- **Вложенные экраны** стека: `BackAction` или кастомная стрелка.
- **Полноэкранные режимы** (запись, shadowing fullscreen): нижние табы **скрыть**, чтобы не прерывать фокус.

## Доступность

- Минимальная область тапа **44×44** для иконок.
- Подписи у `IconButton` через `accessibilityLabel`.
- Не полагаться только на цвет тона — дублировать буквой (M/L/F/H/R) или полным названием в `accessibilityState`.

## Связь wireframes ↔ файлы

| Экран | Документ |
|-------|----------|
| Выбор слова | [word-selection.md](./word-selection.md) |
| Практика | [word-practice.md](./word-practice.md) |
| Словарь | [dictionary.md](./dictionary.md) |
| Карточки | [flashcards.md](./flashcards.md) |
| Shadowing | [shadowing.md](./shadowing.md) |
| Статистика | [dashboard.md](./dashboard.md) |

---

*Последнее обновление: 2026-03-28*
