import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.body.classList.add("dark-mode");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const body = document.body;

    body.classList.add("disable-transitions");

    requestAnimationFrame(() => {
      const nextIsDark = !isDark;

      if (nextIsDark) {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }

      setIsDark(nextIsDark);

      requestAnimationFrame(() => {
        body.classList.remove("disable-transitions");
      });
    });
  };

  return (
    <div className="darkmode-topbar">
      <button
        className="darkmode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}

export default DarkModeToggle;
