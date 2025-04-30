$(document).ready(() => {
  let characterName;
  let characterUniverse;
  let characterDescription;
  let characterPicture;
  const imageRegex = /\.(jpeg|jpg|gif|png|webp|bmp|svg)(\?.*)?$/i; //Thanks... Old Stackoverflow

  $("button").click((e) => {
    e.preventDefault();
    checker();
    $("#characterName").val("");
    $("#characterUniverse").val("");
    $("#characterDescription").val("");
    $("#characterPicture").val("");
    alert("click");
  });

  function checker() {
    characterName = $("#characterName").val();
    characterUniverse = $("#characterUniverse").val();
    characterDescription = $("#characterDescription").val();
    characterPicture = $("#characterPicture").val();

    let error = true;

    $("span")
      .removeClass("text-sm text-red-600 dark:text-red-500 font-medium")
      .text("");

    if (characterName.trim() === "") {
      $(".first-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Enter a name");
      error = false;
      return;
    }

    if (characterUniverse.trim() === "") {
      $(".second-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Enter the first apperance of the character or its universe");
      error = false;
      return;
    }

    if (
      characterDescription.trim() === "" ||
      characterDescription.length < 15
    ) {
      $(".third-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Provide more info on this, it is your favorite character");
      error = false;
      return;
    } else if (characterDescription.length > 70) {
      $(".third-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("We get it, be more precise");
    }

    if (!imageRegex.test(characterPicture) || characterPicture.trim() === "") {
      $(".fourth-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Not a valid url or not a real url");
      error = false;
      return;
    }
  }
});
