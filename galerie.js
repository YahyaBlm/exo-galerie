
let url = document.getElementById('imageUrlInput');
//on declre une variable image ou on va stocker la valeur de url
let image = url.value;

// Afficher l'image dans la div gallery
function afficherImg() {
    let image = url.value;
    //declarer une nouvelle var div pour recuperer la div d'affichage
    let div = document.getElementById('gallery');
    //ajouter image a la div gallery
    div.innerHTML += '<div class="gallery-item"><img src="' + image + '" onclick="afficherLightBox(this)"></div>';     
    //--- 'text' +image+ 'text' --- c'est pour rajouter la variable image au milieu de 2 chaines de car
}

//recuperer l ID de la balise image class=lightbox
let divLight = document.getElementById('lightboxImage');

//recuperer la div lightbox grace a son ID
let div = document.getElementById('lightbox');

function afficherLightBox(img) {
    //supprimer la class "hidden" de la div lightbox
    div.classList.remove('hidden');
    //affecter la source de la balise image"galery-item" a la source de la balise image"lightbox" 
    divLight.src = img.src;
}

function fermerLightbox() {
    //je rajoute la classe "hidden" a la div LightBox
    div.classList.add('hidden');
}





