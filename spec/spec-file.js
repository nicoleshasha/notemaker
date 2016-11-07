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
  expect.toContain("Shopping List", "newNote")
}

function seeIfShoppingListIsPrinted() {
  expect.listToContain("Meat, Veg, Salt", "noteList", 2);
}

testExpectedTrueTest();
testExpectedFalseTest();
seeIfPageContainsSomething();
seeIfShoppingListIsPrinted();
