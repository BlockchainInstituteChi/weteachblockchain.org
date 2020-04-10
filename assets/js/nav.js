function toggleDisplayNavBox () {

    if ( document.getElementById('navBox').className.split('d-none').length > 1 ) {
        closeOtherLightboxBeforeOpening () 
        document.getElementById('navBox').className = document.getElementById('navBox').className.split('d-none').join('')
    } else {
        document.getElementById('navBox').className = document.getElementById('navBox').className + ' d-none'
    }  
}

function toggleDisplayAccountBox () {

    console.log('toggle displayNavbOX TRIGGERED')
    var accountBox = document.getElementById('accountDropdown');

    if ( accountBox.className.split('d-none').length > 1 ) {
        closeOtherLightboxBeforeOpening () 
        document.getElementById('accountDropdown').className = accountBox.className.split('d-none').join('')
    } else {
        document.getElementById('accountDropdown').className = accountBox.className + ' d-none'
    }  

}

function closeOtherLightboxBeforeOpening () {

    var boxes = [
        document.getElementById('navBox'),
        document.getElementById('accountDropdown'),
        document.getElementById('searchLightbox')
    ]

    for ( box of boxes ) {
        if ( !box.className.includes('d-none') ) {
            box.className += 'd-none'
        }
    }

}