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

  tagToContain: function(expectedContents, elementTagName, index) {
    var documentContent = document.getElementsByTagName(elementTagName)[index];
    if (!documentContent.innerText.includes(expectedContents)) {
      throw new Error("Expected " + documentContent.innerText + " to contain " + expectedContents);
    }
  },

  elementIdToContain: function(expectedContents, elementId) {
    var listItemContent = document.getElementById(elementId);
    console.log(listItemContent);
    if (!listItemContent.value.includes(expectedContents)) {
      throw new Error("Expected " + listItemContent.innerText + " to contain " + expectedContents);
    }
  }


};
