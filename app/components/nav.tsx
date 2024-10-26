"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';
import { FaCircle } from "react-icons/fa"; 
import { Button, Icon } from "@chakra-ui/react";

export const nav = [
    { name: "About", href: "/about" },
    {name: "Research", href: "/research"},
    {name: "Work Experience", href: "/work"},
    { name: "Contact", href: "/contact" }
];

const modes = [
    {
      name: "dark",
      bg: "bg-gradient-to-tl from-black via-zinc-600/20 to-black",
      text: "text-white",
    },
	{
		name: "blue",
		bg: "bg-gradient-to-r from-blue-400 to-indigo-500",
		text: "text-white",
	},
    {
      name: "sunset",
      bg: "bg-gradient-to-r from-yellow-400 to-red-500",
      text: "text-gray-900",
    },
    {
      name: "forest",
      bg: "bg-gradient-to-r from-green-500 to-teal-600",
      text: "text-white",
    },
	{
		name: "pink",
		bg: "bg-gradient-to-tl from-white via-grey to-magenta",
		text: "text-white",
	},
	{
		name: "ocean",
		bg: "bg-gradient-to-r from-blue-500 to-cyan-600",
		text: "text-white",
	}
  ];


export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [arrow, setArrow] = useState(false);
	const pathname = usePathname();
	const [currentModeIndex, setCurrentModeIndex] = useState(0);

	// toggle display mode 
	const toggleMode = () => {
	  setCurrentModeIndex((prevIndex) => (prevIndex + 1) % modes.length);
	};
  
	const currentMode = modes[currentModeIndex];
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
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{nav.map((item) => (
							<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
							>
							{item.name}
							</Link>
						))}
						<Button
							onClick={toggleMode}
							className={buttonMode.bg.concat("rounded-full text-white focus:outline-none transform transition-transform duration-300 hover:scale-110 active:scale-90")}
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
