function testExpectedTrueTest() {
  expect.toBeTrue(1+1 === 2);
}

function testExpectedFalseTest() {
  expect.toBeFalse(1+1 === 3);
}

function testToBeEqual() {
  expect.toBeEqual(1+1, 3);
}

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

testExpectedTrueTest();
testExpectedFalseTest();
seeIfPageContainsHeading();
seeIfNewNoteIsPrinted();
