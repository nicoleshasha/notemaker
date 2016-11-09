
(function() {
  console.log("1");
  window.addEventListener("load", function() {
    console.log("3");
    var full_note = document.getElementById('full_note');
    var note = document.getElementById('note');
    var listed_notes = document.getElementById('listed_notes');
    var create_note = document.getElementById('create_note');
    new NotemakerController(full_note,
                        note,
                        listed_notes,
                        create_note,
                        new NotemakerModel(),
                        new NotemakerView(note));
  });
  console.log("2");
})();
