export default function Footer({text}) {
	return (
		<footer>
			<div className="mt-6 p-10 bg-gray-600 text-gray-200">
				<label>{text?.title}</label>
			</div>
		</footer>
	);
}