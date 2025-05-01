$(document).ready(() => {
  let corsProxy = "https://cors-anywhere.herokuapp.com/";
  let key = "153f121535dbe6ce35020b5a19d9c198";

  apicaller();

  function apicaller() {
    let id = Math.floor(Math.random() * 731) + 1; 
    let url = `https://superheroapi.com/api.php/${key}/${id}`; 

    $.ajax({
      url: corsProxy + url,
      method: "GET",
      success: function (data) {
        console.log(data);

        const tass = `
          <div class="bg-gray-300 shadow-lg rounded-lg p-6 max-w-3xl w-full text-center">
            <img src="${data.image.url}" alt="${data.name}" class="my-5 h-48 w-96 mx-auto rounded-lg shadow-md"/>
            <h2 class="italic text-decoration-underline text-black font-bold text-2xl mb-4">${data.name}</h2>
            <p class="text-lg font-semibold text-gray-700 mb-2">Alignment: <span class="font-normal">${data.biography.alignment}</span></p>
            <p class="text-lg font-semibold text-gray-700 mb-2">Alias: <span class="font-normal">${data.biography.aliases[0]}</span></p>
            <p class="text-lg font-semibold text-gray-700">First Appearance: <span class="font-normal">${data.biography["first-appearance"]}</span></p> 
          </div>
        `;
        $(".myTable").html(tass);
      },
      error: function (err) {
        console.log("Error:", err);
        $(".myTable").html("<p>Failed to load superhero data.</p>");
      },
    });
  }

  $("#apiButton").on("click", () => {
    apicaller(); 
  });
});
