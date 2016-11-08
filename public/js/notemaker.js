var noteLibrary = [];
var counter = 1;

var createNote = function(){
  var note = document.getElementById('note').value;
  noteLibrary.push(note);
  var list = document.createElement('li');
  var btn = document.createElement('input');
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', counter);
  btn.setAttribute('onclick', 'showNote(this.id)');
  btn.setAttribute('value', note.substring(0,20) + "...");
  list.appendChild(btn);
  document.getElementById('listed_notes').appendChild(list);
  var para = document.createElement('p');
  para.setAttribute('id', "full_" + counter);
  para.innerHTML = note;
  document.getElementById('full_notes').appendChild(para);
  counter++;
  console.log(document);
};

var showNote = function(id) {
  document.body.style.visibility = "hidden";
  full_note = document.getElementById("full_" + id);
  full_note.style.visibility = "visible";
};
