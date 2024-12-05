export default function AttachPhoto() {
	return (
		<div>
			<label>Attach your photo</label>
			<input type="file" name="photo" multiple accept="image/*,image/jpeg" /><br/>
		</div>
	);
}