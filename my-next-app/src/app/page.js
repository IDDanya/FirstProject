import { DefaultQuestionGrid, ProgrammingLanguages, Header, AttachPhoto, ConfirmationPromotional, Button, Footer} from './components/.';
import "./globals.css";

const name = "Your name:"
const last_name = "Your last name:"
const old = "How old are you:"
const gender = "Your gender:"
const portfolio = "Show off your portfolio:"
const email = "Your email:"
export default function Main() {
	return (
		<div className="justify-center text-center bg-gray-300">
			<Header />
			<div>
				<form>
					<div className="text-2xl font-bold mt-5">
						<label>Form</label>
					</div>
					<div className="block_form">
						<DefaultQuestionGrid name={name} last_name={last_name} old={old} gender={gender} portfolio={portfolio} email={email}/>
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
				</form>
			</div>
			<Footer />
		</div>
	);
}
