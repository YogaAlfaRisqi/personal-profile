import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Icon sun & moon dari lucide-react

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-md border hover:bg-accent flex items-center gap-2"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        <span className="text-sm">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </header>
  );
}
