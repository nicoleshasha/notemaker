function testExpectedTrueTest() {
  expect.toBeTrue(1+1 === 2);
}

function testExpectedFalseTest() {
  expect.toBeFalse(1+1 === 3);
}

function testToBeEqual() {
  expect.toBeEqual(1+1, 3);
}

function seeIfPageContainsSomething() {
  expect.toContain("Notemaker", "h1")
}

function seeIfShoppingListIsPrinted() {
  expect.listToContain("Meat, Veg, Salt", "listed_notes", 0);
}

testExpectedTrueTest();
testExpectedFalseTest();
seeIfPageContainsSomething();
seeIfShoppingListIsPrinted();
