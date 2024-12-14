"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import { Button, Icon } from "@chakra-ui/react";
import {modes, useTheme} from "./theme";

export const nav = [
    { name: "About", href: "/about" },
    {name: "Research", href: "/research"},
    {name: "Work Experience", href: "/work"},
	{name: "Projects", href:"/projects"},
    { name: "Contact", href: "/contact" }
];


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [arrow, setArrow] = useState(false);
	const pathname = usePathname();
	const [currentModeIndex, setCurrentModeIndex] = useState(0);
	const {theme, setTheme} = useTheme();

	// toggle display mode 
	const toggleMode = () => {
		setCurrentModeIndex((prevIndex) => {
		  const newIndex = (prevIndex + 1) % modes.length;
		  setTheme(modes[newIndex]);  // current theme always one index behind
		  return newIndex;
		});
	};
  
	const buttonMode = modes[(currentModeIndex + 1) % modes.length];

	// display back arrow only if on non-home page
	useEffect(() => {
	  	setArrow(pathname !== '/');
	}, [pathname]);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
				style={{height: "5rcm"}}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between items-center gap-8">
						{nav.map((item) => (
							<Link
							key={item.href}
							href={item.href}
							className = "text-sm duration-500 text-[var(--navbar-text-color)] hover:text-[var(--hover-color)]"
							>
							{item.name}
							</Link>
						))}
						<Button
							onClick={toggleMode}
							className={buttonMode.bg.concat("rounded-full text-white focus:outline-none transform transition-transform duration-300 hover:scale-110 active:scale-90")}
							style={{ width: '30px', height: '30px' }}
							/>
					</div>
					{
						arrow?
						<Link
							href="/"
							className="duration-200 text-zinc-300 hover:text-zinc-100"
						>
							<ArrowLeft className="w-6 h-6 " />
						</Link> :
						null
					}
				</div>
			</div>
		</header>
	);
};
