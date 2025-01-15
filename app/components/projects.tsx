'use client';
import { Card } from "../components/card";
import { Article } from "../components/article";
import Link from "next/link";
import { Project } from "../../types/types";
import "../../global.css";
import { Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export const Projects = ({featured, top2, top3, others} : {featured : Project, top2 : Project, top3 : Project, others : Project[]}) => {
    
  return( 
      <div>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        { featured ? 
        (<Card key={featured.slug}>
          <Article project={featured} large={true}/>
          <div className="absolute bottom-4 right-4 md:bottom-15 md:right-8">
          {
              featured.filename ?
            
            (<Button
              className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
            >
              <a href={`/project_files/${featured.filename}.pdf`} download={`${featured.filename}.pdf`}>
              <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
              </a>
            </Button>) : null   
            }                   
            </div>
        </Card>) : null
        }

        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
          {[top2, top3].map((project) =>  project ? (
            <Card key={project.slug}>
              <Article project={project} large={false}/>
              <div className="absolute bottom-4 right-4 md:bottom-15 md:right-8">
              {
                  project.filename ?
                
                (<Button
                  className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
                >
                  <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  </a>
                </Button>) : null   
                }                   
                </div>
            </Card>
          ) : null )}
        </div>
      </div>
      {
        (featured || top2 || top3) ? (
          <>
            <div style={{paddingTop: "5%"}}/>
            <div className="w-full h-px bg-zinc-800" />
            <div style={{paddingTop: "5%"}}/>
          </>
        ) : null
      }
      
      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {others
            .filter((_: any, i: number) => i % 3 === 0)
            .map((project : Project) => (
              <Card key={project.slug}>
                <Article project={project} large={false}/>
                <div className="absolute bottom-4 right-4 md:bottom-15 md:right-8">
                {
                  project.filename ?
                
                (<Button
                  className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
                >
                  <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  </a>
                </Button>) : null   
                }                
                </div>                
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {others
            .filter((_: any, i: number) => i % 3 === 1)
            .map((project: Project) => (
              <Card key={project.slug}>
                <Article project={project} large={false}/>
                <div className="absolute bottom-4 right-4 md:bottom-15 md:right-8">
                {
                  project.filename ?
                
                (<Button
                  className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
                >
                  <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  </a>
                </Button>) : null   
                }    
                </div>                
              </Card>
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {others
            .filter((_: any, i: number) => i % 3 === 2)
            .map((project: Project) => (
              <Card key={project.slug}>
                <Article project={project} large={false}/>
                <div className="absolute bottom-4 right-4 md:bottom-10 md:right-8">
                {
                  project.filename ?
                
                (<Button
                  className="text-[var(--sub-text-color)] hover:text-[var(--hover-color)]"
                >
                  <a href={`/project_files/${project.filename}.pdf`} download={`${project.filename}.pdf`}>
                  <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                  </a>
                </Button>) : null   
                }    
                </div>                
              </Card>
            ))}
        </div>
      </div>
      </div>
  )
};