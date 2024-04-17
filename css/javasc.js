
'use strict';


document.querySelector('.fa-bars').addEventListener('click', function () {
 document.getElementById('LINKS').style.display='block';
 document.querySelector('.fa-bars').style.display='none';

})

document.querySelector('.fa-times').addEventListener('click', function () {
    document.getElementById('LINKS').style.display='none';
    document.querySelector('.fa-bars').style.display='block';
   
   })
