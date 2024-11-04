import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "../components/article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import { Project } from "../../types/types";

const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
    const keys = ["project"];

    let projects: Project[] = [];
    
    let views: Record<string, number> = {};
    
    if (keys.length > 0) {
      const res = await redis.mget<string[]>(...keys);
      console.log("res: ", res);

      const proj_res = res
        .filter((project) => project !== null) // Remove nulls
        .map((project) => JSON.parse(project as string)); // Parse JSON strings

      projects = proj_res[0];

      console.log("values");
      console.log(projects);
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
    <div className="relative pb-16">
      <Navigation />
      <div className="lg:px-8 md:space-y-16 md:pt-24 lg:pt-32"
          /*style={{maxWidth: "80%"}}*/>
        <div className="lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-zinc-400" style={{textAlign: "center"}}>
            Both during my undergraduate degree, as well as after graduation, I worked for a variety of companies.
            Below you'll find some information about these experiences. To download my full resume please click <a href="/resume/Anna Kis Resume.pdf" download="Anna Kis Resume.pdf" style={{color: "white"}}> here </a>.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100" >
                  {featured.start ? (
                    <div>
                        <time dateTime={new Date(featured.start).toISOString()}>
                        {Intl.DateTimeFormat("hu-HU", {
                            dateStyle: "medium",
                        }).format(new Date(featured.start))}
                        </time>
                        {" - "}
                        {featured.end ? (
                        <time dateTime={new Date(featured.end).toISOString()}>
                            {Intl.DateTimeFormat("hu-HU", {
                            dateStyle: "medium",
                            }).format(new Date(featured.end))}
                        </time>
                        ) : (
                        <span>ongoing</span>
                        )}
                    </div>
                    ) : (
                    <span>SOON</span>
                    )}

                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.name}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.content}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={views[project.slug] ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_: any, i: number) => i % 3 === 0)
              .map((project : Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_: any, i: number) => i % 3 === 1)
              .map((project: Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {others
              .filter((_: any, i: number) => i % 3 === 2)
              .map((project: Project) => (
                <Card key={project.slug}>
                  <Article project={project} views={views[project.slug] ?? 0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}