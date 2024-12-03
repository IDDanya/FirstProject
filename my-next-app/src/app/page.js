export default function Home() {
	return (
		<div className="justify-center text-center">
			<header className="mt-4 gap-4">
				<h1 className="text-2xl font-bold">Application for developer</h1>
				<label>Fill out a simple application to become a developer</label>
			</header>
			<div>
				<div className="text-xl font-bold mt-4 gap-4">
					<label>Form</label>
				</div>
				<div className="inline-block max-w-96 gap-4 p-2 mt-2 border-solid border-2 rounded-lg border-gray-600">
					<div className="grid grid-cols-2 gap-4 mt-2 p-2">
						<label>Your name:</label>
						<input className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="text" name="first_name" placeholder="Ivan" required></input>
						<label>Your  last name:</label>
						<input className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="text" name="last_name" placeholder="Ivanov" required />
						<label>How old are you:</label>
						<input className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="number" min="16" max="77" name="old" placeholder="21" required />
						<label>Your gender:</label>
						<select className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" name="gender" required>
							<option value="">boy or girl</option>
							<option value="boy">boy</option>
							<option value="girl">girl</option>
						</select>
						<label>Show off your portfolio:</label>
						<input className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="url" name="portfolio" placeholder="https://github.com/" />
						<label>Your email:</label>
						<input className="px-2 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="email" name="email" placeholder="ivanov@gmail.com" required />
					</div>
					<div className="p-2 gap-4">
						<label>What programming languages do you know?</label><br/>
						<div className="text-left content-center grid grid-cols-2 gap-1 mt-1 px-5 py-2">
							<div>
								<input type="checkbox" value="JS" />
								<label className="p-2">JS</label><br/>
								<input type="checkbox" value="Python" />
								<label className="p-2">Python</label><br/>
							</div>
							<div>
								<input type="checkbox" value="C#" />
								<label className="p-2">C#</label><br/>
								<input type="checkbox" value="PHP" />
								<label className="p-2">PHP</label>
							</div>
						</div>
						<label>Attach your photo</label>
						<input type="file" name="photo" multiple accept="image/*,image/jpeg" /><br/>
						<input type="checkbox" name="confirmation" required />
						<label>Do you agree with the processing of <a className= "link" target="_blank" href="https://en.wikipedia.org/wiki/Personal_data"><strong>personal data</strong></a>?</label><br/>
						<input type="checkbox" name="promotional" defaultChecked />
						<label>Do you agree to receive promotional messages?</label>
						<div className="p-2">
							<button className="p-1 m-5 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="reset">Reset</button>
							<button className="p-1 m-5 border-solid border-2 rounded-lg border-gray-400 hover:border-gray-600 transition-colors duration-300 ease-in-out" type="submit">Submit</button>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<div className="mt-4 gap-4">
					<label>Danya production 2024</label>
				</div>
			</footer>
		</div>
	);
}
