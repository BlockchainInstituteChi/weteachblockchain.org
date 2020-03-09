console.log('search initialized');

function toggleDisplaySearchLightbox () {
    if ( document.getElementById('searchLightbox').className.split('d-none').length > 1 ) {
        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className.split('d-none').join('')
    } else {
        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className + ' d-none'
    }
     
}