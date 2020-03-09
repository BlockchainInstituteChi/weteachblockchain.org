console.log('search initialized');

function initSearch () {

    console.log('initSearch Ran')

    $.getJSON('/map.json', function(data){

        console.log('got map data', data)

    })
    .done(function(result) {
        console.log( "second success", result );
      })
    .fail(function(error) {
        console.log( "error", error );
    })
    .always(function() {
        console.log( "complete" );
    });
}


function toggleDisplaySearchLightbox () {
    if ( document.getElementById('searchLightbox').className.split('d-none').length > 1 ) {

        if ( typeof ( window.searchData ) === "undefined" ) {
            console.log('found window.searchData uninitialized, initializing now')
            initSearch();
        }

        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className.split('d-none').join('')

    } else {
        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className + ' d-none'
    }
     
}

function refreshSearchResults () {
    console.log( window.searchData )
}