(function(exports) {

var noteLibrary = [];
var counter = 0;

var createNote = function(){
  saveIntoArray();
  createButton();
  noteReset();
};

var showNote = function(id) {
  invisible('input_note');
  invisible('note_links');
  showFullNote(id);
};

var showFullNote = function(id) {
  full_note = document.getElementById('full_note');
  full_note.innerHTML = noteLibrary[id];
  show("full_note");
};

var invisible = function(id) {
  var element = document.getElementById(id);
  element.style.visibility = "hidden";
};

var show = function(id) {
  var element = document.getElementById(id);
  element.style.visibility = "visible";
};

var noteReset = function() {
  document.getElementById('note').value = null;
  counter++;
};

var saveIntoArray = function() {
  var note = document.getElementById('note').value;
  noteLibrary.push(note);
};

var createButton = function() {
  var list = document.createElement('li');
  var btn = document.createElement('input');
  var note = document.getElementById('note').value;
  btn.setAttribute('type', 'button');
  btn.setAttribute('id', counter);
  btn.setAttribute('class', 'link');
  btn.setAttribute('onclick', 'showNote(this.id)');
  btn.setAttribute('value', note.substring(0,20) + "...");
  list.appendChild(btn);
  document.getElementById('listed_notes').appendChild(list);
};

exports.createNote = createNote;
exports.showNote = showNote;

})(this);
