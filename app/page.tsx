"use client";
import React from "react";
import "../global.css"


export default function Home() {
  return (
    <>
      <div className="w-full h-px bg-zinc-800" />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className={`py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text`} style={{color: "var(--text-color)"}}>
        Anna Kis
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="w-full h-px bg-zinc-800" />

      <div className="my-16 text-center animate-fade-in">
        <h2 className={`text-sm`} style={{color: "var(--sub-text-color)"}}>
        Math Grad Student at the University of Ohio
        </h2>
      </div>
    </>
  );

}
