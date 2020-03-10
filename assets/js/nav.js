function toggleDisplayNavBox () {
    if ( document.getElementById('navBox').className.split('d-none').length > 1 ) {

        document.getElementById('navBox').className = document.getElementById('navBox').className.split('d-none').join('')

    } else {
        document.getElementById('navBox').className = document.getElementById('navBox').className + ' d-none'
    }
     
}
