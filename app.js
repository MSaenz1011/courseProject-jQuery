$(document).ready(() => {
  let characterName;
  let characterUniverse;
  let characterDescription;
  let characterPicture;
  const imageUrlRegex =
    /^https?:\/\/[^?#]+\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;

  $("button").click((e) => {
    e.preventDefault();
    checker();
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
    }

    if (characterUniverse.trim() === "") {
      $(".second-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Enter the first apperance of the character or its universe");
      error = false;
    }

    if (
      characterDescription.trim() === "" ||
      characterDescription.length < 15
    ) {
      $(".third-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Provide more info on this, it is your favorite character");
      error = false;
    } else if (characterDescription.length > 150) {
      $(".third-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("We get it, be more precise next time");
    }

    if (
      !imageUrlRegex.test(characterPicture) ||
      characterPicture.trim() === ""
    ) {
      $(".fourth-one")
        .addClass("text-sm text-red-600 dark:text-red-500 font-medium ")
        .text("Not a valid url or not a real url");
      error = false;
    }

    petionApi(error);
  }

  function petionApi(error) {
    if (error === false) {
      console.log("Fill the data....");
    } else {
      $.ajax({
        url: "http://localhost:3000/api/characters",
        method: "POST",
        contentType: "application/json",
        processData: false,
        data: JSON.stringify({
          name: characterName,
          universe: characterUniverse,
          description: characterDescription,
          image: characterPicture,
        }),
        success: function (response) {
          console.log("Character added:", response);
        },
        error: function (err) {
          console.error("Error saving character:", err);
        },
      });
      Swal.fire({
        title: "Submitted",
        text: "Character added",
        icon: "success",
        confirmButtonText: "OK",
      });

      $("#characterName").val("");
      $("#characterUniverse").val("");
      $("#characterDescription").val("");
      $("#characterPicture").val("");
    }
  }
});
