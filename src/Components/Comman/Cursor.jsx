/** @format */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MOBILE_BREAKPOINT = 768;

const Cursor = () => {
	const cursor = useRef(null);
	const follower = useRef(null);
	const visibleRef = useRef(false);
	const [isDesktop, setIsDesktop] = useState(
		() => typeof window !== "undefined" && window.innerWidth >= MOBILE_BREAKPOINT,
	);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= MOBILE_BREAKPOINT);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!isDesktop) return;

		const cursorEl = cursor.current;
		const followerEl = follower.current;
		if (!cursorEl || !followerEl) return;

		gsap.set([cursorEl, followerEl], { xPercent: -50, yPercent: -50, opacity: 0 });

		const setVisible = (show) => {
			if (visibleRef.current === show) return;
			visibleRef.current = show;
			gsap.to([cursorEl, followerEl], {
				opacity: show ? 1 : 0,
				duration: 0.15,
			});
		};

		const moveCursor = (e) => {
			setVisible(true);

			gsap.to(cursorEl, {
				x: e.clientX,
				y: e.clientY,
				duration: 0,
				overwrite: "auto",
			});

			gsap.to(followerEl, {
				x: e.clientX,
				y: e.clientY,
				duration: 0.25,
				ease: "power2.out",
				overwrite: "auto",
			});
		};

		const hideCursor = () => setVisible(false);

		window.addEventListener("mousemove", moveCursor);
		window.addEventListener("mouseleave", hideCursor);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
			window.removeEventListener("mouseleave", hideCursor);
			visibleRef.current = false;
		};
	}, [isDesktop]);

	useEffect(() => {
		if (!isDesktop) return;

		const followerEl = follower.current;
		if (!followerEl) return;

		const enter = () => {
			gsap.to(followerEl, { scale: 1.8, duration: 0.3 });
		};

		const leave = () => {
			gsap.to(followerEl, { scale: 1, duration: 0.3 });
		};

		const bound = new WeakSet();

		const bindTargets = () => {
			const targets = document.querySelectorAll(
				"a, button, [role='button'], input, select, textarea, label",
			);
			targets.forEach((item) => {
				if (bound.has(item)) return;
				bound.add(item);
				item.addEventListener("mouseenter", enter);
				item.addEventListener("mouseleave", leave);
			});
		};

		bindTargets();

		const observer = new MutationObserver(bindTargets);
		observer.observe(document.body, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			document
				.querySelectorAll("a, button, [role='button'], input, select, textarea, label")
				.forEach((item) => {
					item.removeEventListener("mouseenter", enter);
					item.removeEventListener("mouseleave", leave);
				});
		};
	}, [isDesktop]);

	if (!isDesktop) return null;

	return (
		<>
			<div
				ref={cursor}
				className="custom-cursor-dot fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-amber-500 pointer-events-none"
			/>

			<div
				ref={follower}
				className="custom-cursor-ring fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2 border-amber-500/80 pointer-events-none"
			/>
		</>
	);
};

export default Cursor;
