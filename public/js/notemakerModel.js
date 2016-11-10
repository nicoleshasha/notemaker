(function (exports) {
  function NotemakerModel() {
    this.noteLibrary = []
    this.count = 0
  };

  NotemakerModel.prototype = {
    saveNote: function (note_text) {
      this.noteLibrary.push(note_text);
    },

    addCount: function () {
      this.count++;
    },

    getNote: function (index) {
      return this.noteLibrary[index];
    }

  };

  exports.NotemakerModel = NotemakerModel;

})(this);
