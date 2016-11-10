(function () {

  window.addEventListener("load", function () {
    function seeIfPageContainsHeading() {
      expect.tagToContain("Notemaker", "a", 0);
    }

    function seeIfNewNoteIsPrinted() {
      console.log(document.getElementById("create_note"))
      document.getElementById("note").value = "Hello";
      console.log(document.getElementById("note"))
      document.getElementById("create_note").click();
      console.log(document)
      expect.elementIdToContain("Hello", "0");
      var element = document.getElementById("0");
      element.parentElement.remove();
    }

    function checkMaxCharactersIs20() {
      document.getElementById("note").value = "Hello I am here to test the length of the button";
      document.getElementById("create_note").click();
      var element = document.getElementById("1");
      expect.toBeEqual(element.value.length, 23);
      element.parentElement.remove();
    }

    function checkHiddenIsNotShown() {
      document.getElementById("note").value = "Testing hidden notes";
      document.getElementById("create_note").click();
      document.getElementById("note").value = "Another test for hidden notes another time";
      document.getElementById("create_note").click();
      var home = document.getElementById("home");
      var link_note2 = document.getElementById("2");
      var link_note3 = document.getElementById("3");
      link_note3.click();
      expect.isHidden("note_links");
      expect.elementIdToContainInnerText("Another test for hidden notes another time", "full_note");
      link_note2.parentElement.remove();
      link_note3.parentElement.remove();
      // home.click();
    }
    // testExpectedTrueTest();
    // testExpectedFalseTest();
    seeIfPageContainsHeading();
    seeIfNewNoteIsPrinted();
    checkMaxCharactersIs20();
    checkHiddenIsNotShown();
  })



})();
