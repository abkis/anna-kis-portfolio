import React from "react";
import { Redis } from "@upstash/redis";
import { Project } from "../../types/types";
import "../../global.css";
import {Projects} from "../components/projects";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const keys = ["work"];

    let projects: Project[] = [];
        
    if (keys.length > 0) {
      const res = await redis.mget<string[]>(...keys);
      console.log("res: ", res);

      const proj_res = res
        .filter((project) => project !== null) // Remove nulls
        .map((project) => 
          typeof project === "string" ? JSON.parse(project) : project
        );

      projects = proj_res[0];

      console.log("values");
      console.log(typeof(projects), typeof(projects[0]));
    } else {
      console.warn("No keys to fetch with mget.");
    }   

  const featured = projects.find((project: Project) => project.priority === 1)!;
  console.log(featured);
  const top2 = projects.find((project: Project) => project.priority === 2)!;
  const top3 = projects.find((project: Project) => project.priority === 3)!;

  const others = projects.filter((p: Project) => p.priority >= 4);

  return (
    <div className="relative pb-16" style={{paddingTop: "45rem"}}>
      <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
            Work Experience
          </h2>
          <p className="sub-text" style={{textAlign: "center"}}>
            Both during my undergraduate degree, as well as after graduation, I worked for a variety of companies.
            Below you'll find some information about these experiences. To download my full resume please click <a href="/resume/Anna Kis Resume.pdf" download="Anna Kis Resume.pdf" style={{color: "white"}}> here </a>.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <Projects featured={featured} top2={top2} top3={top3} others={others}/>
      </div>
    </div>
  );
}