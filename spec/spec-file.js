// function testExpectedTrueTest() {
//   expect.toBeTrue(1+1 === 2);
// }
//
// function testExpectedFalseTest() {
//   expect.toBeFalse(1+1 === 3);
// }
//
// function testToBeEqual() {
//   expect.toBeEqual(1+1, 3);
// }

function seeIfPageContainsHeading() {
  expect.tagToContain("Notemaker", "h1", 0)
}

function seeIfNewNoteIsPrinted() {
  document.getElementById("note").value = "Hello";
  document.getElementById("create_note").click();
  expect.elementIdToContain("Hello...", "1");
  var element = document.getElementById("1");
  element.parentElement.remove();
}

function checkMaxCharactersIs20() {
  document.getElementById("note").value = "Hello I am here to test the length of the button";
  document.getElementById("create_note").click();
  var element = document.getElementById("2");
  expect.toBeEqual(element.value.length, 23);
  element.parentElement.remove();
}

function checkHiddenIsNotShown() {
  document.getElementById("note").value = "Testing hidden notes";
  document.getElementById("create_note").click();
  document.getElementById("note").value = "Another test for hidden notes another time";
  document.getElementById("create_note").click();
  var element = document.getElementById("4");
  element.click();
  expect.
  element.parentElement.remove();
}
// testExpectedTrueTest();
// testExpectedFalseTest();
seeIfPageContainsHeading();
seeIfNewNoteIsPrinted();
checkMaxCharactersIs20();
