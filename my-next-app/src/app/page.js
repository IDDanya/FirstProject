import { 
	QuestionMain, 
	ProgrammingLanguages, 
	Header, 
	AttachPhoto, 
	ConfirmationPromotional, 
	Button, 
	Footer} from './components/.';
import "./globals.css";

export default function Main() {
	const header = {
		title: "Application for developer",
		description: "Fill out a simple application to become a developer"
	}

	const question = {
		name: "Your name:",
        last_name: "Your last name:",
        old: "How old are you:",
        gender: "Your gender:",
        portfolio: "Show off your portfolio:",
        email: "Your email:",
		gender_input: [
			"",
			"boy",
			"girl"],
		text_prog: "What programming languages do you know?",
		prog_languages: [
			"JS", 
			"Python", 
			"C++", 
			"PHP", 
			"Java", 
			"C#"],
		text_photo: "Attach your photo"
	}
	
	const text = {
		form: "Form",
		button: "Submit",
		question: {
			personal_data: "Do you agree with the processing of ",
			person_data_question: "personal data?",
			promotional: "Do you agree to receive promotional messages?"
		}
	}
	
	const footer = {
		title: "Danya production 2024"
	}

	return (
		<div className="justify-center text-center bg-gray-300">
			<Header text={header} />
			<form>
				<div className="text-2xl font-bold mt-5">
					<label>{text?.form}</label>
				</div>
				<div className="block_form">
					<QuestionMain question={question} />
					<div className="p-2 gap-4">
						<ProgrammingLanguages prog_languages={question?.prog_languages} text_prog={question?.text_prog} />
						<AttachPhoto text_photo={question?.text_photo}/>
					</div>
					<div className="p-2">
						<ConfirmationPromotional text={text?.question} />
					</div>
					<div className="p-2">
						<Button text_btn={text?.button} />
					</div>
				</div>
			</form>
			<Footer text={footer} />
		</div>
	);
}
