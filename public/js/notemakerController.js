(function(exports) {

function NotemakerController (full_note, note, listed_notes, notemakerModel, notemakerView) {
  this.full_note = full_note;
  this.note = note;
  this.listed_notes = listed_notes;
  this.notemakerModel = notemakerModel;
  this.notemakerView = notemakerView;
}

NotemakerController.prototype = {
  createNote: function(){
    this.notemakerModel.saveNote(this.note.value);
    this.notemakerView.createButton(this.notemakerModel.count, this.note);
    this.notemakerModel.addCount();
    this.notemakerView.noteReset(this.note);
  },
  showNote: function(id){
    this.notemakerView.invisible('input_note');
    this.notemakerView.invisible('note_links');
    var full_note = this.notemakerModel.getNote(id);
    this.notemakerView.showFullNote(full_note);
  },
}

// var seeList = function () {
//   show('input_note');
//   show('note_links');
//   invisible('full_note');
// };


exports.createNote = createNote;
exports.showNote = showNote;
exports.seeList = seeList;
exports.NotemakerController = NotemakerController;

})(this);
