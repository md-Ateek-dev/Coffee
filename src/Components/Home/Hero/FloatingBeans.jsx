/** @format */

const FloatingBeans = () => {
	return (
		<>
			<img
				src="/beans/bean-1.png"
				alt=""
				className="absolute top-10 left-10 w-10"
			/>

			<img
				src="/beans/bean-2.png"
				alt=""
				className="absolute bottom-20 right-16 w-8"
			/>

			<img
				src="/beans/bean-3.png"
				alt=""
				className="absolute top-1/2 right-0 w-12"
			/>
			<div
				data-speed="4"
				className="absolute top-8 left-10 w-5 h-5 rounded-full bg-amber-500"
			/>

			<div
				data-speed="5"
				className="absolute bottom-10 left-5 w-4 h-4 rounded-full bg-yellow-700"
			/>

			<div
				data-speed="6"
				className="absolute top-1/2 -right-2 w-6 h-6 rounded-full bg-amber-700"
			/>

			<div
				data-speed="4"
				className="absolute top-20 right-12 w-3 h-3 rounded-full bg-orange-500"
			/>
		</>
	);
};

export default FloatingBeans;
