export default function QuestionMain({question}) {
	return (
		<div className="grid grid-cols-2 gap-4 mt-2 p-2">
			<label>{question?.name}</label>
			<input className="input_custom" type="text" name="first_name" placeholder="Ivan" required />
			<label>{question?.last_name}</label>
			<input className="input_custom" type="text" name="last_name" placeholder="Ivanov" required />
			<label>{question?.old}</label>
			<input className="input_custom" type="number" min="16" max="77" name="old" placeholder="21" required />
			<label>{question?.gender}</label>
			<select className="input_custom" name="gender" required>
				{question?.gender_input.map(GenderItems => (
					<option value={GenderItems}>{GenderItems}</option>
				))}
			</select>
			<label>{question?.portfolio}</label>
			<input className="input_custom" type="url" name="portfolio" placeholder="https://github.com/" />
			<label>{question?.email}</label>
			<input className="input_custom" type="email" name="email" placeholder="ivanov@gmail.com" required />
		</div>
	);
}