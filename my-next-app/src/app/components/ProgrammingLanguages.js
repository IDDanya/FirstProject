export default function ProgrammingLanguages() {
	const items = ["JS", "Python", "C++", "PHP", "Java", "C#"]
	return (
		<div>
			<label>What programming languages do you know?</label><br/>
			<div className="text-left content-center grid grid-cols-2 gap-1 mt-1 px-2 py-2 italic">
				{items.map(item => (
					<div className="px-10">
						<input type="checkbox" value="prog_lan" />
						<label className="px-2">{item}</label>
					</div>
				))}
			</div>
		</div>
	);
}