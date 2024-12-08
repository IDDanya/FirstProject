export default function ConfirmationPromotional({text}) {
	return (
		<div>
			<input type="checkbox" name="confirmation" required />
			<label>{text.personal_data}<a 
				className="font-bold
				hover:text-gray-500
				transition-colors 
				duration-300 ease-in-out"
				target="_blank"
				href="https://en.wikipedia.org/wiki/Personal_data"
				>{text.person_data_question}</a>
			</label>
			<br/>
			<input type="checkbox" name="promotional" defaultChecked />
			<label>{text.promotional}</label>
		</div>
	);
}