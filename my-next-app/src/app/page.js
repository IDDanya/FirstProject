import "./globals.css";

const Header = () => {
	return (
		<header className="p-2">
			<h1 className="text-3xl font-bold">Application for developer</h1>
			<label>Fill out a simple application to become a developer</label>
		</header>
	);
}

const DefaultQuestionGrid = () => {
	return (
		<div className="grid grid-cols-2 gap-4 mt-2 p-2">
			<label>Your name:</label>
			<input className="input_custom" type="text" name="first_name" placeholder="Ivan" required></input>
			<label>Your  last name:</label>
			<input className="input_custom" type="text" name="last_name" placeholder="Ivanov" required />
			<label>How old are you:</label>
			<input className="input_custom" type="number" min="16" max="77" name="old" placeholder="21" required />
			<label>Your gender:</label>
			<select className="input_custom" name="gender" required>
				<option value="">boy or girl</option>
				<option value="boy">boy</option>
				<option value="girl">girl</option>
			</select>
			<label>Show off your portfolio:</label>
			<input className="input_custom" type="url" name="portfolio" placeholder="https://github.com/" />
			<label>Your email:</label>
			<input className="input_custom" type="email" name="email" placeholder="ivanov@gmail.com" required />
		</div>
	);
}

const ProgrammingLanguages = () => {
	return (
		<div>
			<label>What programming languages do you know?</label><br/>
			<div className="text-left content-center grid grid-cols-2 gap-1 mt-1 px-5 py-2">
				<div className="italic">
					<input type="checkbox" value="JS" />
					<label className="p-2">JS</label><br/>
					<input type="checkbox" value="Python" />
					<label className="p-2">Python</label><br/>
				</div>
				<div className="italic">
					<input type="checkbox" value="C#" />
					<label className="p-2">C#</label><br/>
					<input type="checkbox" value="PHP" />
					<label className="p-2">PHP</label>
				</div>
			</div>
		</div>
	);
}

const AttachPhoto = () => {
	return (
		<div>
			<label>Attach your photo</label>
			<input type="file" name="photo" multiple accept="image/*,image/jpeg" /><br/>
		</div>
	);
}

const ConfirmationPromotional = () => {
	return (
		<div>
			<input type="checkbox" name="confirmation" required />
			<label>Do you agree with the processing of <a className="font-bold hover:text-gray-500 transition-colors duration-300 ease-in-out" target="_blank" href="https://en.wikipedia.org/wiki/Personal_data">personal data</a>?</label><br/>
			<input type="checkbox" name="promotional" defaultChecked />
			<label>Do you agree to receive promotional messages?</label>
		</div>
	);
}

const Button = () => {
	return (
		<div>
			<button className="button_custom" type="reset">Reset</button>
			<button className="button_custom" type="submit">Submit</button>
		</div>
	);
}

const Footer = () => {
	return (
		<footer>
			<div className="p-4 bg-gray-600 text-gray-200">
				<label>Danya production 2024</label>
			</div>
		</footer>
	);
}

export default function Home() {
	return (
		<div className="justify-center text-center bg-gray-300">
			<Header />
			<div>
				<div className="text-2xl font-bold mt-5">
					<label>Form</label>
				</div>
				<div className="block_form">
					<DefaultQuestionGrid />
					<div className="p-2 gap-4">
						<ProgrammingLanguages />
						<AttachPhoto />
					</div>
					<div className="p-2">
						<ConfirmationPromotional />
					</div>
					<div className="p-2">
						<Button />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
