function addConnections(audioId) {
	const url = document.getElementById("audio_url" + audioId)
	const fileInput = document.getElementById("audio_file" + audioId)
	fileInput.addEventListener("input", function(event) {
		const file = event.target.files[0]
		const reader = new FileReader()
		reader.onload = function(event) {
			document.getElementById("audio_audio" + audioId).src = event.target.result
		}
		fileInput.disabled = true
		url.disabled = true
		reader.readAsDataURL(file)
	})
	url.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			document.getElementById("audio_audio" + audioId).src = event.target.value
			fileInput.disabled = true
			url.disabled = true
		}
	})
}

addConnections("1")
