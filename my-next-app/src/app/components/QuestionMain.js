import text from "./text"

export default function DefaultQuestionGrid() {
	return (
		<div className="grid grid-cols-2 gap-4 mt-2 p-2">
			<label>{text[0].name}</label>
			<input className="input_custom" type="text" name="first_name" placeholder="Ivan" required />
			<label>{text[0].last_name}</label>
			<input className="input_custom" type="text" name="last_name" placeholder="Ivanov" required />
			<label>{text[0].old}</label>
			<input className="input_custom" type="number" min="16" max="77" name="old" placeholder="21" required />
			<label>{text[0].gender}</label>
			<select className="input_custom" name="gender" required>
				<option value="">boy or girl</option>
				<option value="boy">boy</option>
				<option value="girl">girl</option>
			</select>
			<label>{text[0].portfolio}</label>
			<input className="input_custom" type="url" name="portfolio" placeholder="https://github.com/" />
			<label>{text[0].email}</label>
			<input className="input_custom" type="email" name="email" placeholder="ivanov@gmail.com" required />
		</div>
	);
}