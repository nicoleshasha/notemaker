var noteLibrary = [];
var counter = 1;

var createNote = function(){
  var note = document.getElementById('note').value;
  noteLibrary.push(note);
  var list = document.createElement('li');
  var btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', counter);
  btn.setAttribute('class', 'link');
  btn.setAttribute('onclick', 'showNote(this.id)');
  btn.setAttribute('value', note.substring(0,20) + "...");
  list.appendChild(btn);
  document.getElementById('listed_notes').appendChild(list);
  var para = document.createElement('p');
  para.setAttribute('id', "full_" + counter);
  para.innerHTML = note;
  document.getElementById('full_notes').appendChild(para);
  document.getElementById('note').value = null;
  counter++;
  console.log(document);
};

var showNote = function(id) {
  var input = document.getElementById('input_note');
  input.style.visibility = "hidden";
  var links = document.getElementById('note_links');
  links.style.visibility = "hidden";
  var full_note = document.getElementById("full_" + id);
  full_note.style.visibility = "visible";
};
