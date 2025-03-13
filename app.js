$(document).ready(() => {
    
    let characterName;    
    let characterUniverse;
    let characterDescription;
    let characterPicture;
  

    
   
$('button').click((e)=>{
    e.preventDefault();
    checker();
    $('#chname').val('');
    $('#ficapp').val('')
    $('#chardesc').val('');
    $('#charurl').val('')
})    

function checker () {
    characterName = $('#chname').val();
    characterUniverse= $('#ficapp').val();
    characterDescription = $('#chardesc').val();
    characterPicture=  $('#charurl').val();
    alert( `${characterName}, ${characterUniverse}, ${characterDescription}, ${characterPicture}`)
} 
});
