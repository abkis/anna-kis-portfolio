// define and export components used for basic layout ex. background, etc
import Particles from "app/components/particles";
import React from "react";

export const  Background = ({particles, color, children} : {particles : Boolean, color? : String, children: React.ReactNode}) => {
    var grad = "bg-gradient-to-tl from-black via-zinc-600/20 to-black"; // default grad to use, may be overwritten
    var classinfo = "flex flex-col items-center justify-center w-screen h-screen overflow-hidden ";
    
    if (color?.toLowerCase() == "light"){
        grad = "bg-gradient-to-tl from-white via-grey to-magenta";
    } 
    if (color?.toLowerCase() == "blue"){
        grad = "bg-gradient-to-tl from-blue via-sky to-black";
    }

    classinfo = classinfo.concat(grad);

    return(
        <div className={classinfo}>
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
