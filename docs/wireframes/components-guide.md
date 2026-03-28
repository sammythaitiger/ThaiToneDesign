# Components guide (React Native Paper + navigation)
*Short reference to align wireframes with implementation*

See also [README](./README.md) for overall navigation and layout principles.

## Tone colors

Use a **single source of truth** in code (e.g. `theme/toneColors.ts`), same HEX as in the README:

| Tone     | HEX     |
|----------|---------|
| Mid      | #2196F3 |
| Low      | #4CAF50 |
| Falling  | #9C27B0 |
| High     | #FF9800 |
| Rising   | #F44336 |

**Chip / Badge:** `backgroundColor: getToneColor(tone)`, `textStyle={{ color: '#fff' }}` for contrast.

## Patterns by screen type

| Need | Components |
|------|------------|
| Title + actions | `Appbar.Header`, `Appbar.Content`, `Appbar.Action` |
| Word / lesson lists | `FlatList` + `Card` or `List.Item` |
| Tone filters | `Chip` in horizontal `ScrollView` |
| Search | `TextInput` `mode="outlined"` + `magnify` icon |
| Primary action | `Button mode="contained"` or `FAB` |
| Progress | `ProgressBar`, `CircularProgress` |
| Messaging | `Snackbar`, dialogs — `Dialog` / `Portal` |

## Navigation

- **Tab root** (Home, Dictionary, Flashcards, Shadowing, Dashboard): usually **no** `BackAction`.
- **Stack** screens: `BackAction` or custom back affordance.
- **Fullscreen modes** (recording, shadowing fullscreen): **hide** bottom tabs to avoid breaking focus.

## Accessibility

- Minimum tap target **44×44** for icon buttons.
- `IconButton` labels via `accessibilityLabel`.
- Do not rely on tone color alone — duplicate with letter (M/L/F/H/R) or full name in `accessibilityState`.

## Wireframes ↔ files

| Screen | Document |
|--------|----------|
| Word selection | [word-selection.md](./word-selection.md) |
| Word practice | [word-practice.md](./word-practice.md) |
| Dictionary | [dictionary.md](./dictionary.md) |
| Flashcards | [flashcards.md](./flashcards.md) |
| Shadowing | [shadowing.md](./shadowing.md) |
| Dashboard | [dashboard.md](./dashboard.md) |

---

*Last updated: 2026-03-28*
