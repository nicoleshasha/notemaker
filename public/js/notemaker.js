console.log(document);

var noteLibrary = [];

var createNote = function(){
  note = document.getElementById('note').value
  noteLibrary.push(note)
  console.log(noteLibrary);
  txt = document.createTextNode(note.substring(0,20) + "...");
  document.body.appendChild(txt);
};
