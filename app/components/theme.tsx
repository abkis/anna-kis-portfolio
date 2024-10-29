// define and export theme
"use client";
import React, { createContext, useContext, useEffect, useState }  from "react";

// define theme type
type Theme = {
  name: string;
  bg: string;
  text: string;
  subText: string;
  subHover: string;
};

// themes supported by app
export const modes : Theme[] = [
  {
    name: "dark",
    bg: "bg-gradient-to-tl from-black via-zinc-600/20 to-black",
    text: "text-white",
    subText: "text-zinc-500",
    subHover: "hover:text-zinc-300"
  },
{
  name: "blue",
  bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
  text: "text-black",
  subText: "text-black",
  subHover: "hover:text-zinc-300"
},
  {
    name: "sunset",
    bg: "bg-gradient-to-r from-yellow-400 to-red-500",
    text: "text-gray-900",
    subText: " text-black",
    subHover: "hover:text-zinc-300"
  },
  {
    name: "forest",
    bg: "bg-gradient-to-r from-green-500 to-teal-600",
    text: "text-zinc-300",
    subText: " text-black ",
    subHover: "hover:text-zinc-300"
  },
{
  name: "pink",
  bg: "bg-gradient-to-tl from-white via-grey to-magenta",
  text: "text-zinc-300",
  subText: " text-black ",
  subHover: "hover:text-zinc-300"
},
{
  name: "ocean",
  bg: "bg-gradient-to-r from-blue-500 to-cyan-600",
  text: "text-zinc-300",
  subText: " text-black ",
  subHover: "hover:text-zinc-300"
}
];

const ThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(modes[0]); // default is dark mode

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
