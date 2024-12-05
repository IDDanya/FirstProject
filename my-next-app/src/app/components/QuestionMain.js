export default function DefaultQuestionGrid({name, last_name, old, gender, portfolio, email}) {
	return (
		<div className="grid grid-cols-2 gap-4 mt-2 p-2">
			<label>{name}</label>
			<input className="input_custom" type="text" name="first_name" placeholder="Ivan" required />
			<label>{last_name}</label>
			<input className="input_custom" type="text" name="last_name" placeholder="Ivanov" required />
			<label>{old}</label>
			<input className="input_custom" type="number" min="16" max="77" name="old" placeholder="21" required />
			<label>{gender}</label>
			<select className="input_custom" name="gender" required>
				<option value="">boy or girl</option>
				<option value="boy">boy</option>
				<option value="girl">girl</option>
			</select>
			<label>{portfolio}</label>
			<input className="input_custom" type="url" name="portfolio" placeholder="https://github.com/" />
			<label>{email}</label>
			<input className="input_custom" type="email" name="email" placeholder="ivanov@gmail.com" required />
		</div>
	);
}