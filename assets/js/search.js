
function initSearch () {

    console.log('initSearch Ran')

    $.getJSON('/map.json', function(data){

        console.log('got map data', data)

        window.searchData = data;
       
        for ( let i = 0; i < 10; i++ ) {
            setTimeout(
                function () { 
                    console.log('lunr' + i)
                    return setSearchIndex (data) 
                },
                i*500
            )
        }
        
    })
    .done(function(result) {
        // console.log( "second success", result );
      })
    .fail(function(error) {
        // console.log( "error", error );
    })
    .always(function() {
        // console.log( "complete" );
    });
}

function setSearchIndex ( data ) {
    console.log('setSearchIndex ran', data)
    if ( lunr ) {
        console.log('lunr is set')
        window.searchIndex = lunr(function () {
            // console.log('initializing lunr')

            this.ref('id')
            this.field('summary')
            this.metadataWhitelist = ['title', 'summary', 'permalink']
            // this.field('title')
            
            p = 0
            data.faq.forEach(function (doc) {
                doc.id = 'faq-' + p
                this.add(doc)
                p++
            }, this)     
        
            y = 0
            data.courses.forEach(function (doc) {
                doc.id = 'courses-' + y
                this.add(doc)
                y++
            }, this)

            z = 0;
            data.lessons.forEach(function (doc) {
                doc.id = 'lessons-' + z
                this.add(doc)
                z++
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
    }

}

function toggleDisplaySearchLightbox () {

    if ( document.getElementById('searchLightbox').className.split('d-none').length > 1 ) {

        if ( typeof ( window.searchData ) === "undefined" ) {
            // console.log('found window.searchData uninitialized, initializing now')
            initSearch();
        }

        closeOtherLightboxBeforeOpening () 
        showLightboxShadow()
        addLunr()
        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className.split('d-none').join('')

    } else {
        document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className + ' d-none'
    }
     
}

function addLunr () {
    console.log('adding Lunr')
    var lunr = document.createElement('script')
        lunr.src = "https://unpkg.com/lunr/lunr.js"
    document.head.appendChild(lunr)    
}

function displayNoResultsMessage ( searchContainer, searchTerm ) {
    
    var container = document.getElementById(searchContainer)
    deleteAllSearchResults(container)
    var span = document.createElement('span')
        span.textContent = "No results for '" + searchTerm + "' "
        span.className = "loading"

    document.getElementById(searchContainer).appendChild(span)
}

function refreshSearchResults (searchResultsContainer, searchInput) {
    
    if ( typeof (window.searchData) != "undefined") {
        var searchTerm = document.getElementById(searchInput).value;
        // console.log('about to search', searchTerm + " faq^10")
        var searchResult = window.searchIndex.search(searchTerm)

        if ( 1 > searchResult.length ) {
            displayNoResultsMessage ( searchResultsContainer, searchTerm )
        } else {
            displaySearchResults(searchResult, searchResultsContainer);
        }
        
    } else {
        alert('Error fetching search index. Please contact support.')
    }
}

function displaySearchResults (results, container) {

    var resultsContainer = document.getElementById(container);

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

    var img = document.createElement('img')
        
    if ( typeof(data.image) != "undefined" ) {
        img.src = "/assets/img/" + data.image
    } else {
        img.src = "/assets/img/logo.jpg"
    }

    var summary = document.createElement('span')
        summary.className = "summary"
        summary.textContent = data.summary
        // summary.textContent = removeHTMLEntities(data.summary)

    var row = document.createElement('div')
        row.className = "row"

    var infoContainer = document.createElement('div')
        infoContainer.className = "infoContainer"

    var title = document.createElement('span')
        title.className = "title"
        title.textContent = data.title
        // title.textContent = removeHTMLEntities(data.title)

    // var score = document.createElement('span')
    //     score.className = "score"
    //     score.textContent = data.score

    row.appendChild(img)
    infoContainer.appendChild(title)
    infoContainer.appendChild(summary)
    // infoContainer.appendChild(score)
    row.appendChild(infoContainer)
    link.appendChild(row)
    container.appendChild(link)

}

function lookupResultRecord (searchResult) {

    var sp = searchResult.ref.split('-');

    record = window.searchData[sp[0]][sp[1]]
    record.score = searchResult.score

    return record;

}

function cancelSearch () {
    document.getElementById('searchLightbox').className = document.getElementById('searchLightbox').className + " d-none"
}

function removeHTMLEntities (string) {
    console.log('removing HTML entitites from ', string)
    return decodeURI(string.replace('&amp;','&'));
}