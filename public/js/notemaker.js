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

var seeList = function () {
  show('input_note');
  show('note_links');
  invisible('full_note');
};

var showFullNote = function(id) {
  full_note = document.getElementById('full_note');
  full_note.innerHTML = noteLibrary[id];
  show("full_note");
};

var invisible = function(id) {
  var element = document.getElementById(id);
  element.style.display = "none";
};

var show = function(id) {
  var element = document.getElementById(id);
  element.style.display = "block";
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
  if  (note.length > 20) {
  btn.setAttribute('value', note.substring(0,20) + "...");
  } else {
  btn.setAttribute('value', note);
  }
  list.appendChild(btn);
  document.getElementById('listed_notes').appendChild(list);
};

exports.createNote = createNote;
exports.showNote = showNote;
exports.seeList = seeList;

})(this);
