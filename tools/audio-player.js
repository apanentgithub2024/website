const audioPlaceholder = document.getElementById("audio1").cloneNode(true)
const addButton = document.createElement("button")

let audio_number = 1

addButton.innerText = "+"
document.body.appendChild(addButton)

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

addButton.onclick = function() {
	const clone = audioPlaceholder.cloneNode(true)
	clone.querySelector("#audio_file" + audio_number).id = "audio_file" + String(audio_number + 1)
	clone.querySelector("#audio_url" + audio_number).id = "audio_url" + String(audio_number + 1)
	clone.id = "audio" + String(audio_number + 1)
	document.body.appendChild(clone)
	audio_number += 1
	addButton.remove()
	document.body.appendChild(addButton)
	addConnections(String(audio_number))
}

addConnections("1")
