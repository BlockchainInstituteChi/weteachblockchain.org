console.log('search initialized');

var searchIndex;

function initSearch () {

    console.log('initSearch Ran')

    $.getJSON('/map.json', function(data){

        console.log('got map data', data)

        window.searchData = data;

        searchIndex = lunr(function () {
            console.log('initializing lunr')

            this.ref('id')
            this.field('summary')
            this.metadataWhitelist = ['title', 'summary', 'permalink']
            // this.field('title')
            
            z = 0;
            data.lessons.forEach(function (doc) {
              doc.id = 'lessons-' + z
              this.add(doc)
              z++
            }, this)

            y = 0
            data.courses.forEach(function (doc) {
                doc.id = 'courses-' + y
                this.add(doc)
                y++
              }, this)

            x = 0
            data.modules.forEach(function (doc) {
                doc.id = 'modules-' + x
                this.add(doc)
                x++
              }, this)

            r = 0
            data.events.forEach(function (doc) {
                doc.id = 'events-' + r
                this.add(doc)
                r++
              }, this)
  
          })

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
    if ( typeof (window.searchData) != "undefined") {
        var searchTerm = document.getElementById('searchInput').value;
        var searchResult = searchIndex.search(searchTerm)

        console.log("found search result: ", searchResult)
        
        displaySearchResults(searchResult);

    } else {
        alert('Error fetching search index. Please contact support.')
    }
}

function displaySearchResults (results) {

    var resultsContainer = document.getElementById('searchResults');

    deleteAllSearchResults(resultsContainer)

    for ( var i = 0; i < results.length; i++ ) {

        var record = lookupResultRecord(results[i])
        addResultToResultsContainer (resultsContainer, record)

    }

}

function deleteAllSearchResults (container) {
    var child = container.lastElementChild;  
    while (child) { 
        container.removeChild(child); 
        child = container.lastElementChild; 
    } 
}

function addResultToResultsContainer (container, data) {

    var link = document.createElement('a')
        link.className = "searchResultLink"
        link.target = "_blank"
        link.href = data.link

    var row = document.createElement('div')
        row.classname = "searchResultInfo"

    var title = document.createElement('span')
        title.className = "title"
        title.textContent = data.title

    var score = document.createElement('span')
        score.className = "score"
        score.textContent = data.score

    row.appendChild(title)
    row.appendChild(score)
    link.appendChild(row)
    container.appendChild(link)

}

function lookupResultRecord (searchResult) {

    var sp = searchResult.ref.split('-');

    record = window.searchData[sp[0]][sp[1]]
    record.score = searchResult.score

    return record;

}