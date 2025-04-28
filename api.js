$(document).ready(()=>{
   
    $(document).ready(() => {
        let corsProxy = "https://cors-anywhere.herokuapp.com/"; 
        let key = "153f121535dbe6ce35020b5a19d9c198";
        let id = 609;
        let url = `https://superheroapi.com/api/${key}/${id}`;
        
        
      
        $.ajax({
          url: corsProxy + url, // Use CORS proxy to avoid CORS error
          method: "GET",
          success: function (data) {
            console.log(data);
            console.log(data.name)
            console.log(data.image) // Check the data structure in the console
            
            const tass = `
            <img src= "${data.image.url}" alt="" class="my-5 h-48 w-96" />
            <h2>${data.name}</h2>
            <p>${data.biography.alignment}</p>
            <p>${data.biography.aliases[0]}</p>
            `
            $(".myTable").html(tass)

            },
          error: function (err) {
            // Handle error (if any)
            console.log('Error:', err);
            $('#superhero-info').html('<p>Failed to load superhero data.</p>');
          }
        });
      });
      
})

