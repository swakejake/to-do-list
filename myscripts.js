function addNote() {
    let noteTemplate = document.getElementById("note-template");
    let noteList = document.getElementById("noteList");
    let clone = noteTemplate.cloneNode(true);

    clone.classList.remove("hidden");
    clone.removeAttribute("id");
    clone.classList.add("note");
    noteList.appendChild(clone);
}

function removeNote(button) {
    button.parentElement.remove();
}