export default function ProgrammingLanguages({prog_languages, text_prog}) {
	return (
		<div>
			<label>{text_prog}</label><br/>
			<div className="text-left content-center grid grid-cols-2 gap-1 mt-1 p-2 italic">
				{prog_languages.map(item => (
					<div className="px-10">
						<input type="checkbox" value="prog_lan" />
						<label className="px-2">{item}</label>
					</div>
				))}
			</div>
		</div>
	);
}