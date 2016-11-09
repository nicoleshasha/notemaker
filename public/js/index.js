
(function() {
  window.addEventListener("load", function() {
    var full_note = document.getElementById('full_note');
    var note = document.getElementById('note');
    var listed_notes = document.getElementById('listed_notes');

    new NotemakerController(full_note,
                        note,
                        listed_notes,
                        new NotemakerModel(),
                        new NotemakerView(note));
  });
})();
