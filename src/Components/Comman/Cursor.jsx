/** @format */

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
	const cursor = useRef(null);
	const follower = useRef(null);
	useEffect(() => {
		const moveCursor = (e) => {
			if (window.innerWidth < 768) return;

			gsap.to(cursor.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0,
			});

			gsap.to(follower.current, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.25,
				ease: "power2.out",
			});
		};

		window.addEventListener("mousemove", moveCursor);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, []);

	useEffect(() => {
		const targets = document.querySelectorAll("a, button");

		const enter = () => {
			gsap.to(follower.current, {
				scale: 1.8,
				duration: 0.3,
			});
		};

		const leave = () => {
			gsap.to(follower.current, {
				scale: 1,
				duration: 0.3,
			});
		};

		targets.forEach((item) => {
			item.addEventListener("mouseenter", enter);
			item.addEventListener("mouseleave", leave);
		});

		return () => {
			targets.forEach((item) => {
				item.removeEventListener("mouseenter", enter);
				item.removeEventListener("mouseleave", leave);
			});
		};
	}, []);

	return (
		<>
			<div
				ref={cursor}
				className="fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-amber-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
			/>

			<div
				ref={follower}
				className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-amber-500 pointer-events-none -translate-x-1/2 -translate-y-1/2"
			/>
		</>
	);
};

export default Cursor;
