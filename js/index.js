var lightbox = document.getElementById('lightbox_container');

function showTheLightBox(){
  lightbox.style.display = 'block';
}

function hideTheLightBox(){
  lightbox.style.display = 'none';
}
document.getElementById('overlay').onclick = hideTheLightBox; 

document.getElementById('hide').onclick = hideTheLightBox;

document.getElementById('show').onclick = showTheLightBox;