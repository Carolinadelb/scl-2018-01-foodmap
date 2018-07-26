window.onload = (() => {
  /* Para esconder la pantalla de inicio*/
   setTimeout(function hide() { $('#startPage').hide('fast');
   document.getElementById('foodPage').style.display = 'block'; }, 4000);
   
   
   initMap();
 
 });