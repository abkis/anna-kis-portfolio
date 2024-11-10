import type { Project } from "../../types/types";
import Link from "next/link";
import { Eye, View } from "lucide-react";
import "../../global.css";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={project.slug.startsWith("http") ? project.slug : `/projects/${project.slug}`} target={project.slug == "" ? "_self" : "_blank"}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange" style={{color: "var(--text-color)"}}>
					{project.start ? (
                    <div>
                        <time dateTime={new Date(project.start).toISOString()}>
                        {Intl.DateTimeFormat("hu-HU", {
                            dateStyle: "medium",
                        }).format(new Date(project.start))}
                        </time>
                        {" - "}
                        {project.end ? (
                        <time dateTime={new Date(project.end).toISOString()}>
                            {Intl.DateTimeFormat("hu-HU", {
                            dateStyle: "medium",
                            }).format(new Date(project.end))}
                        </time>
                        ) : (
                        <span>ongoing</span>
                        )}
                    </div>
                    ) : (
                    <span>SOON</span>
                    )}
					</span>
					<span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl group-hover:text-white font-display" style={{color: "var(--text-color)"}}>
					{project.name}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 group-hover:text-zinc-200" style={{color: "var(--sub-text-color)"}}>
					{project.content}
				</p>
			</article>
		</Link>
	);
};