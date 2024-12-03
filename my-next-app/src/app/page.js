import "./style.css";

export default function Home() {
	return (
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<script type="text/javascript" src="/_next/static/chunks/polyfills.js" />
			<link rel="stylesheet" type="text/css" href="style.css" />
		</head>
		<body>
			<main>
				<div className="header">
					<h1>Application for developer</h1>
					<p>Fill out a simple application to become a developer</p>
				</div>
				<div className="main">
					<form>
						<fieldset>
							<legend>
								<div className="text_form">
									<b>
										Form
									</b>
								</div>
							</legend>
							<div className="main_question">
								<div className="question">
									<label id="question" htmlFor="first_name">Your name:</label>
									<input type="text" name="first_name" placeholder="Ivan" required></input><br/>
								</div>
								<div className="question">
									<label id="question" htmlFor="last_name">Your last name:</label>
									<input type="text" name="last_name" placeholder="Ivanov" required /><br/>
								</div>
								<div className="question">
									<label id="question" htmlFor="old">How old are you:</label>
									<input type="number" min="16" max="77" name="old" placeholder="21" required /><br/>
								</div>
								<div className="question">
									<label id="question" htmlFor="gender">Your gender:</label>
									<select name="gender" required>
										<option value="" id="gender">boy or girl</option>
										<option value="boy">boy</option>
										<option value="girl">girl</option>
									</select><br/>
								</div>
								<div className="question">
									<label id="question" htmlFor="portfolio">Show off your portfolio:</label>
									<input type="url" name="portfolio" placeholder="https://github.com/" /><br/>
								</div>
								<div className="question">
									<label id="question" htmlFor="email">Your email:</label>
									<input type="email" name="email" placeholder="ivanov@gmail.com" required /><br/>
								</div>
								<div className="question_class_two">
									<label id="question_two">What programming languages do you know?</label><br/>
									<div className="container_prog_lan">
										<div className="prog_lan">
											<input type="checkbox" value="JS" />
											<label id="prog_lan" htmlFor="programming_languages">JS</label><br/>
											<input type="checkbox" value="Python" />
											<label id="prog_lan" htmlFor="programming_languages">Python</label><br/>
										</div>
										<div className="prog_lan">
											<input type="checkbox" value="C#" />
											<label id="prog_lan" htmlFor="programming_languages">C#</label><br/>
											<input type="checkbox" value="PHP" />
											<label id="prog_lan" htmlFor="programming_languages">PHP</label>
										</div>
									</div>
								</div>
								<div className="question">
									<label id="question" htmlFor="avatar">Attach your photo</label>
									<input id="photo" type="file" name="photo" multiple accept="image/*,image/jpeg" /><br/>
								</div>
								<div className="question_class_two">
									<input id="question_two" type="checkbox" name="confirmation" required />
									<label id="question_two" htmlFor="confirmation">Do you agree with the processing of <a className= "link" target="_blank" href="https://en.wikipedia.org/wiki/Personal_data"><strong>personal data</strong></a>?</label><br/>
								</div>
								<div className="question_class_two">
									<input id="question_two" type="checkbox" name="promotional" defaultChecked />
									<label id="question_two" htmlFor="promotional">Do you agree to receive promotional messages?</label>
								</div>
								<div className="question_class_two">
									<div className="button">
										<button className="btn" type="reset">Reset</button>
										<button className="btn" type="submit">Submit</button>
									</div>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
				<footer>
					<div>
						<h3>Danya production 2024</h3>
					</div>
				</footer>
			</main>
		</body>
	</html>
	);
}
