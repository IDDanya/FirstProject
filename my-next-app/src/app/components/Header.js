export default function Header({text}) {
	return (
		<header className="p-2">
			<h1 className="text-3xl font-bold">{text?.title}</h1>
			<label>{text?.description}</label>
		</header>
	);
}