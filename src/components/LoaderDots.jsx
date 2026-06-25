export default function LoaderDots() {
	return (
		<div className="flex gap-2 justify-center items-center py-8">
			<span className="loading-dot"></span>
			<span className="loading-dot delay-150"></span>
			<span className="loading-dot delay-300"></span>
		</div>
	);
}