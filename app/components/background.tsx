// define and export components used for basic layout ex. background, etc
"use client";
import React from "react";
import { useTheme } from './theme';
import Particles from "app/components/particles";

export const  Background = ({particles, children} : {particles : Boolean, children: React.ReactNode}) => {
    const { theme } = useTheme();
    const classinfo = `flex flex-col items-center justify-center w-screen h-screen overflow-hidden ${theme.bg} ${theme.text}`;

    return(
        <div className={classinfo} style={{textAlign:"center"}}>
            {particles ? 
                  <Particles
                  className="absolute inset-0 -z-10 animate-fade-in"
                  quantity={100}
                />
            : null}
            <div>
                {children}
            </div>
        </div>
    )
};
