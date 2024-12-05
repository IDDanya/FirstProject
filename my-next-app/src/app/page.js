import { DefaultQuestionGrid, ProgrammingLanguages, Header, AttachPhoto, ConfirmationPromotional, Button, Footer} from './components/.';
import "./globals.css";

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
				</form>
			</div>
			<Footer />
		</div>
	);
}
