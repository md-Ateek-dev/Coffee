/** @format */

import { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({ children, className = "", ...props }) => {
	const buttonRef = useRef(null);

	const handleMouseMove = (e) => {
		const button = buttonRef.current;

		const { left, top, width, height } = button.getBoundingClientRect();

		const x = e.clientX - (left + width / 2);
		const y = e.clientY - (top + height / 2);

		gsap.to(button, {
			x: x * 0.3,
			y: y * 0.3,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseLeave = () => {
		gsap.to(buttonRef.current, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: "elastic.out(1,0.4)",
		});
	};

	return (
		<button
			ref={buttonRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className={className}
			{...props}>
			{children}
		</button>
	);
};

export default MagneticButton;
