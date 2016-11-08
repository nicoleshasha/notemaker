var expect = {

  toBeTrue: function(conditionToCheck) {
    if (!conditionToCheck) {
      throw new Error("Expected " + conditionToCheck + " to be true but got false");
    }
  },

  toBeFalse: function(conditionToCheck) {
    if (conditionToCheck) {
      throw new Error("Expected " + conditionToCheck + " to be false but got true");
    }
  },

  toBeEqual: function(conditionToCheck, expectedResult) {
    if (conditionToCheck !== expectedResult) {
      throw new Error("Expected " + conditionToCheck + " to be " + expectedResult);
    }
  },

  toContain: function(expectedContents, element) {
    var documentContent = document.getElementsByTagName(element)[0];
      console.log(documentContent.innerText)
    if (!documentContent.innerText.includes(expectedContents)) {
      throw new Error("Expected " + documentContent.innerText + " to contain " + expectedContents);
    }
  },

  listToContain: function(expectedContents, elementId, listItem) {
    var listItemContent = document.getElementById(elementId).children[listItem];
    if (!listItemContent.innerText.includes(expectedContents)) {
      throw new Error("Expected " + listItemContent.innerText + " to contain " + expectedContents);
    }
  }


};
