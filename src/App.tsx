import React, { useEffect, useState } from "react";
import { DemoContent } from "./demo-content";
import appStyles from "./app.module.css";

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [noAnimations, setNoAnimations] = useState<boolean>(false);

  // Initialise with the user's theme and motion preferences
  useEffect(() => {
    const defaultDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkTheme(defaultDark);

    const defaultNoAnimations = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setNoAnimations(defaultNoAnimations);
  }, []);

  return (
    <div
      className={appStyles.app}
      data-theme={darkTheme ? "dark" : "light"}
      data-animations={noAnimations ? "none" : "standard"}
    >
      <nav className={appStyles.nav}>
        <span>Theme demo</span>
        <div className={appStyles.navOptions}>
          <button
            className={appStyles.button}
            onClick={() => setNoAnimations(!noAnimations)}
          >
            Toggle animations
          </button>
          <button
            className={appStyles.button}
            onClick={() => setDarkTheme(!darkTheme)}
          >
            Toggle theme
          </button>
        </div>
      </nav>
      <DemoContent />
    </div>
  );
}

export default App;
