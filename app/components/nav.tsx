"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const nav = [
    { name: "About", href: "/about" },
    {name: "Research", href: "/research"},
    {name: "Work Experience", href: "/work"},
    { name: "Contact", href: "/contact" }
];

export const Navigation: React.FC = ({back}:{back?: Boolean}) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [arrow, setArrow] = useState(false);
	
	// display back arrow only if on non-home page
	useEffect(() => {
	  if (typeof window !== 'undefined') {
		setArrow(window.location.pathname !== '/');
	  }
	}, []);

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
