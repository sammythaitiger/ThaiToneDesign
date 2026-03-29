import React from "react";
import { PaperProvider } from "react-native-paper";

import { TonePracticeScreen } from "./src/screens/TonePracticeScreen";
import { appTheme } from "./src/theme/theme";

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <TonePracticeScreen />
    </PaperProvider>
  );
}
