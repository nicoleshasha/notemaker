(function(exports) {

function NotemakerView(){

};

NotemakerView.prototype = {
  invisible: function(id) {
    var element = document.getElementById(id);
    element.style.display = "none";
  },
  show: function(id) {
    var element = document.getElementById(id);
    element.style.display = "block";
  },
  noteReset: function(noteElement) {
    noteElement.value = null;
  },
  createButton: function(id, noteElement) {
    var list = document.createElement('li');
    var btn = document.createElement('input');
    var note = noteElement.value;
    btn.setAttribute('type', 'button');
    btn.setAttribute('id', id);
    btn.setAttribute('class', 'link');
    if  (note.length > 20) {
    btn.setAttribute('value', note.substring(0,20) + "...");
    } else {
    btn.setAttribute('value', note);
    }
    list.appendChild(btn);
    document.getElementById('listed_notes').appendChild(list);
  },
  showFullNote: function(fullNote) {
    full_note = document.getElementById('full_note');
    full_note.innerHTML = fullNote;
    this.show("full_note");
  },

}

  exports.NotemakerView = NotemakerView;

  })(this);
