(function(exports) {

function NotemakerController (full_note, note, listed_notes, create_note, notemakerModel, notemakerView) {
  this.full_note = full_note;
  this.note = note;
  this.listed_notes = listed_notes;
  this.notemakerModel = notemakerModel;
  this.notemakerView = notemakerView;
  this.create_note = create_note;
  this.setupButton();
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
  setupButton: function(){
    console.log("setting up button");
    var self = this;
    this.create_note.addEventListener('click', function(){
      console.log("hello");
    self.createNote();
    self.setupLink();
    });
  },
  setupLink: function() {
    var self = this;
    this.listed_notes.addEventListener('click', function(){
    self.showNote(event.target.id);
    //console.log(this.id)
    });
  }
}

// var seeList = function () {
//   show('input_note');
//   show('note_links');
//   invisible('full_note');
// };


// exports.createNote = this.createNote;
// exports.showNote = this.showNote;
// exports.seeList = seeList;
exports.NotemakerController = NotemakerController;

})(this);
