let bocks ;
function looping (number) {
    bocks = number;
      for(let i = 0; i <16; i++) {
          console.log(i);
        $('#bocksContainer').append('<div class = grid> </div>');
    bocks = bocks + i
    
      }  
  }
looping(5);



const click = document.getElementById('#bocksContainer');

$('#bocksContainer').on('click', '.grid', function() {

    $(this).toggleClass('darkMode');

});






