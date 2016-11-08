var noteLibrary = [];

var createNote = function(){
  var note = document.getElementById('note').value;
  noteLibrary.push(note);
  var list = document.createElement('li');
  var txt = document.createTextNode(note.substring(0,20) + "...");
  list.appendChild(txt);
  document.getElementById('listed_notes').appendChild(list);
};
