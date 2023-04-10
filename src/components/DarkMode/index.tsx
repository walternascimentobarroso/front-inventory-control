import { useEffect, useState } from "react";
import { MdBrightness3, MdSunny } from "react-icons/md";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    window.onload = function () {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) setDarkMode(JSON.parse(savedMode));
      if (darkMode) document.documentElement.classList.toggle("dark");
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      type="button"
      aria-label="Color Mode"
      onClick={() => setDarkMode(!darkMode)}
      className="flex justify-center custom--btn"
    >
      {darkMode ? (
        <MdSunny className="w-5 h-5" />
      ) : (
        <MdBrightness3 className="w-5 h-5" />
      )}
    </button>
  );
};

export default DarkMode;
