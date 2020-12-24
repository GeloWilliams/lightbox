// Lightbox Custom Caption 

if(document.querySelector('.gallery-item') !== null) {
    var galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item){
        item.addEventListener('click', function() {
            if(document.querySelector('.im-dsrp') !== null) {
            } else {
                var lbContainer = document.querySelector('.lb-container');
                lbContainer.innerHTML += '<div class="im-dsrp"></div>';
            }
            var imDsrp = document.querySelector('.im-dsrp');
            imDsrp.innerHTML = "";
            for(var i = 0; i < galleryItems.length; i++) {
                galleryItems[i].classList.remove('clicked');
            }
            item.classList.add('clicked');
            var description = document.querySelector('.clicked .image-description').innerText;
            var artist = document.querySelector('.clicked .image-artist').innerText;
            if(artist.length !== 0) {
                imDsrp.innerHTML += '<p>' + description + '</p>';
            } else {
                imDsrp.innerHTML += '<p>' + description + '<span class="image-artist"> | By: ' + artist + '</span></p>';
            }


            var container = document.querySelector('.lb-outerContainer');
            if(container.classList.contains('close-button-added') !== true) {
                container.classList.add('close-button-added');
                container.innerHTML += '<div class="close-button"><div>X</div></div>';
            }
            
            if(document.querySelector('.close-button')) {
                var closeButton = document.querySelector('.close-button');
                closeButton.addEventListener('click',function(){closeModal();});
        
                function closeModal() {
                    var lightboxOverlay = document.querySelector('#lightboxOverlay');
                    var lightbox = document.querySelector('#lightbox');
                    lightboxOverlay.classList.add('reduce-opacity');
                    lightbox.classList.add('reduce-opacity');
                    lightbox.classList.add('shrink-down');
        
                    setTimeout(function(){
                        lightboxOverlay.style.display = "none";
                        lightboxOverlay.classList.remove('reduce-opacity');
                        lightbox.style.display = "none";
                        lightbox.classList.remove('reduce-opacity');
                        lightbox.classList.remove('shrink-down');
                    },400);
                }
            }
        });
    });
}
