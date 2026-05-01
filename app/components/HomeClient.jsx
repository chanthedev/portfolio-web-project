'use client'

import Header from "./Header";
import ChatWidget from "./ChatWidget";
import { useTheme } from "./ThemeProvider";

export default function HomeClient() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Header />
      <ChatWidget isDarkMode={isDarkMode} />
    </>
  );
}
