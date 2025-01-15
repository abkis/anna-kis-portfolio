'use client';
import type { Project } from "../../types/types";
import Link from "next/link";
import "../../global.css";
import { useState } from "react";
import ProjectModal from "./projectModal";

export const Article: React.FC<{project : Project, large : boolean}> = ({ project, large }) => {
	// set up modal functions to open new modal on click
	const [modalOpen, setModalOpen] = useState(false); // handles open/close of modal

	// open modal on click of image
	const openModal = (): void =>{
		setModalOpen(true);
	}
	
	const closeModal = (): void=>{
		setModalOpen(false);
	}  
	return (
		<div>
		{ modalOpen ? (
			<ProjectModal closeModal={closeModal} open={openModal} project={project}/>
			) :
			(<Link href="#" onClick={(e) => {
			e.preventDefault(); // Prevents navigation
			openModal();
		  }}>
			<article className={large ? "relative w-full h-full p-4 md:p-8" : "p-4 md:p-8"}>
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange" style={{color: "var(--text-color)"}}>
					{project.start ? (
                    <div>
						<time dateTime={new Date(project.start).toISOString()}>
						{new Date(project.start).getFullYear()}/
						{(new Date(project.start).getMonth() + 1).toString().padStart(2, '0')}
						</time>
						{" – "}
						{project.end ? (
						<time dateTime={new Date(project.end).toISOString()}>
							{new Date(project.end).getFullYear()}/
							{(new Date(project.end).getMonth() + 1).toString().padStart(2, '0')}
						</time>
                        ) : (
                        <span>ongoing</span>
                        )}
                    </div>
                    ) : (
                    <span>SOON</span>
                    )}
					</span>
				</div>
				<h2 className={large ? "mt-4 text-3xl font-bold group-hover:text-white sm:text-4xl font-display" : "z-20 text-xl font-medium duration-1000 lg:text-3xl group-hover:text-white font-display"} 
					style={{color: "var(--text-color)"}}>
					{project.name}
				</h2>
				<p className={large ? "mt-4 text-md leading-8 duration-150 group-hover:text-zinc-300" : "z-20 mt-4 text-sm  duration-1000 group-hover:text-zinc-200"}
					style={{color: "var(--sub-text-color)"}}>
					{project.content}
				</p>
			</article>
		</Link>)}
		</div>
	);
};