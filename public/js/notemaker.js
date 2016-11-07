var form = document.createElement('form');
var createNote = function(){
  console.log("Hello")
};
form.setAttribute('action', function(){createNote()});

console.log(document);
