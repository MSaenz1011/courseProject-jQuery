$(document).ready(() => {
  let key = "153f121535dbe6ce35020b5a19d9c198";

  apicaller();
  characterCaller();

  function apicaller() { 
    let id = Math.floor(Math.random() * 731) + 1;
    let url = `https://superheroapi.com/api/${key}/${id}`;
    let proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      url
    )}`;
   
  
    $.ajax({
      url: proxyUrl,
      method: "GET",
      success: function (data) {
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

  function characterCaller() {
    $.ajax({
      url: "http://localhost:3000/api/characters",
      method: "GET",
      success: function (data) {
        console.log(data);
        if (data.length === 0) {
          $(".noUser").text("No characters submitted yet");
        } else {
          data.forEach((character) => {
            const card = `
  <div class="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 max-w-md w-full mx-auto mb-6">
    <div class="aspect-w-16 aspect-h-9">
      <img src="${character.image}" alt="${character.name}" class="object-cover w-full h-full" />
    </div>
    <div class="p-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-1">${character.name}</h2>
      <p class="text-sm text-gray-600 mb-1"><span class="font-semibold">Universe:</span> ${character.universe}</p>
      <p class="text-sm text-gray-600"><span class="font-semibold">Description:</span> ${character.description}</p>
    </div>
  </div>
`;
            $(".heroTable").append(card);
          });
        }
      },
    });
  }

  $("#apiButton").on("click", () => {
    apicaller();
  });
});
