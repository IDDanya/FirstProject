export default function ConfirmationPromotional() {
	return (
		<div>
			<input type="checkbox" name="confirmation" required />
			<label>Do you agree with the processing of <a className="font-bold hover:text-gray-500 transition-colors duration-300 ease-in-out" target="_blank" href="https://en.wikipedia.org/wiki/Personal_data">personal data</a>?</label><br/>
			<input type="checkbox" name="promotional" defaultChecked />
			<label>Do you agree to receive promotional messages?</label>
		</div>
	);
}