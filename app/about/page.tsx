
"use client";
import {useTheme} from "../components/theme";

export default function About() {
	const {theme} = useTheme();
	return (
		<div>
		<h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${theme.text}`}>
			About Me
		</h2>
		<p className={`mt-4 ${theme.subText}`} style={{textAlign: "center"}}>
			Who am I?!?!
		</p>
		</div>
	);
}
