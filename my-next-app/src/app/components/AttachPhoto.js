export default function AttachPhoto({text_photo}) {
	return (
		<div>
			<label>{text_photo}</label>
			<input type="file" multiple accept="image/*,image/jpeg" /><br/>
		</div>
	);
}