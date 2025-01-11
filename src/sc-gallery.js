document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        let galleries = document.querySelectorAll('.sc-gallery');
        galleries.forEach(gallery => {
            const images = gallery.querySelectorAll('img');
            if (images[0]) {
                images[0].classList.add('active')
            }

            let currentIndex = 0;
            gallery.addEventListener('click', () => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            });
        })


    }, 0);

});
