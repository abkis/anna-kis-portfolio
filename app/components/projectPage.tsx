import { Project } from "../../types/types";
import "../../global.css";
import { Redis } from "@upstash/redis";
import { FourOFour } from "./fourofour";

const redis = Redis.fromEnv();

export const revalidate = 60;
export const ProjectPage = async ({page, index, slug} : {page:string, index: number, slug: string}) => {
  
    let projects: Project[] = [];
        
    const res = await redis.mget<string[]>(page);
  
    const proj_res = res
    .filter((project) => project !== null) // Remove nulls
    .map((project) => 
        typeof project === "string" ? JSON.parse(project) : project
    );
    projects = proj_res[0];

    if (index < 0 || index >= projects.length){
        return (<FourOFour/>);
    }
    let project: Project = projects[index];
    if (project.name != slug){
        projects.forEach(p => {
            if (p.name == slug){
                project = p;
                index = p.index;
            }
        })
    }
  
    return (
    <div className="relative pb-16" style={{paddingTop: "25rem"}}>
    <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tightsm:text-4xl main-text" style={{color: "var(--text-color)"}}>
            {project.name}
        </h2>
        <p className="sub-text" style={{textAlign: "center"}}>
            {project.abstract}
        </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        {
            project.filename ?
        
        (
        <p className="sub-text" style={{textAlign: "center"}}>
        You can download a related research report <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`} style={{color: "white"}}> here </a>.
        </p>) : null   
        }    
        <p>

        </p>
    </div>
    </div>
    );
}