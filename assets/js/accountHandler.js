
/* 2️⃣ Initialize Magic Instance */
const magic = new Magic("pk_test_203D0BB15B42A4C8");
// window.serverUrl = "http://localhost:8888/user"
window.serverUrl = "https://app-staging.weteachblockchain.org/user"

/* 3️⃣ Implement Render Function */
const renderMagic = async () => {
  // console.log('magic render triggered')

  const isLoggedIn = await magic.user.isLoggedIn();
  /* Show login form if user is not logged in */
  let html = `
    <form onsubmit="handleLogin(event)">
      <span>Enter your email below to log in.</span>
      <input class="emailInput" type="email" name="email" required="required" placeholder="Enter your email" />
      <button  class="logout"  type="submit">Log In</button>
    </form>
  `;
  if (isLoggedIn) {
    /* Get user metadata including email */
    const userMetadata = await magic.user.getMetadata();
    setGravatarImageUrl(userMetadata.email)
    // console.log(userMetadata)
    handlePageNotification()
    // hideUserLoginPrompt()
    // getUserData()
    html = `
      <h1>Logged in as ${userMetadata.email}</h1>
      <a href="/userProfile.html">My Account</a>
      <button onclick="window.handleLogout()">Logout</button>

    `;
    toggleAccountImage();
  } else {
    showUserLoginPrompt()
  }
  if ( window.innerWidth > 992 ) {
    console.log('displaying desktop login')
    document.getElementById("app").innerHTML = html;
  } else {
    console.log('displaying mobile login')
    document.getElementById("mobileApp").innerHTML = html;
  }
};


// this function hides a prompt for the user to log in if user data is available
// some pages do not have messages, but for those that do, they will be hidden
// function hideUserLoginPrompt ( ) {
//   console.log ( 'please log in to track progress' )
//   for ( div of document.getElementsByClassName('userLoginPrompt') ) {
//     div.className += ' d-none';
//   }
// }
function showUserLoginPrompt ( ) {
  console.log ( 'please log in to track progress' )
  
  for ( div of document.getElementsByClassName('userLoginPrompt') ) {
    if ( !div.className.includes('shown') ) {
      console.log('showing user login prompt')
      div.className += ' shown';

      // the line below hides the loader when the login box has been displayed
      if ( window.toggleLoader ) window.toggleLoader()

    } else {
      console.log('already showing user login prompt')
    }
  }
}

const handleLogin = async e => {
  e.preventDefault();
  const email = new FormData(e.target).get("email");
  if (email) {
    const didToken = await magic.auth.loginWithMagicLink({ email });
    // console.log('didToken', didToken)
    window.localStorage.setItem('didToken', didToken); // we actually don't need to pass this token except for login. Magic does the rest :) 
    await fetch(`${window.serverUrl}/login`, {
      headers: new Headers({
        Authorization: "Bearer " + didToken
      }),
      method: "POST"
    });
    renderMagic();
    location.reload();
  }
};

window.handleLogout = async () => {
  await magic.user.logout();
  renderMagic();
  toggleDisplayAccountBox();
  toggleAccountImage();
  location.reload();
};

// const getUserData = async () =>{
//   console.log('fetching user data')

//   try {
//     await fetch(`${window.serverUrl}/data`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' +  window.localStorage.didToken,
//       },
//       method: "GET"
//     }).then(handleAuthErrors).then( response => console.log('response from user data request', response))
    
//   } catch (err) {
//     console.log('uncaught exception in get user data call', err)
//     // handleBadPageStatusNotification()
//   }
// }
 
function toggleAccountImage () {
  var images = document.getElementsByClassName('accountLight');

  for ( var img of images) {
    var imageRef = document.getElementsByClassName(img.className)[0]
    if ( img.className.split('d-none').length > 1 ) {
      document.getElementsByClassName(img.className)[0].className = imageRef.className.split('d-none').join('')
    } else {
      document.getElementsByClassName(img.className)[0].className = imageRef.className + ' d-none'
    }  
  }
}

const handlePageNotification = async () => {
  // console.log('ran page load notification')

  if ( !window.lessonMap ) {
    var payload = { 
      currentPage: window.location.href 
    }
  } else {
    var courseDetails = getCoursePageDetails ( )
    
    var payload = {
      currentPage : window.location.href,
      isCoursePage : true,
      page : courseDetails.slug,
      title : courseDetails.title,
      course : courseDetails.course,
      totalLessons : courseDetails.totalLessons
    }
  }

  console.log('payload', payload)

  try {
    await fetch(`${window.serverUrl}/updateCurrentPage`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  window.localStorage.didToken,
      },
      body: JSON.stringify(payload),
      method: "POST"
    })
    .then( handleAuthErrors )
    .then( response => response.json() )
    .then((responseJSON) => {
      // do stuff with responseJSON here...
      // console.log('got user data w/ current page', responseJSON);
      window.userData = responseJSON
      // console.log( 'set userdata', window.userData, new Date () )

      // if this is a course directory page - populate progress 
      if ( typeof ( populateCourseProgress ) != 'undefined' ) {
        populateCourseProgress()
      }
      // console.log('trying to displayUserData', displayUserData)
      if ( typeof ( displayUserData ) != 'undefined' ) {
        console.log('triggering display User data')
        displayUserData()
      }      
    })
    
  } catch (err) {
    // console.log('uncaught exception in update call', err)
    // handleBadPageStatusNotification()
  }
  
};

function getTotalLessonsCount ( ) {
  var totalCount = 0;
  for ( module of window.lessonMap.modules ) {
    totalCount += module.lessons.length
  }
  return totalCount
}

function getCoursePageDetails ( ) {
  
  var path = window.location.pathname
  // console.log('path', path)
  for ( module of window.lessonMap.modules ) {
    for ( lesson of module.lessons ) {
      if ( lesson.link === path )
      return {
        slug : lesson.slug,
        title : lesson.title,
        course : window.lessonMap.slug,
        totalLessons : getTotalLessonsCount()
      }
    }
  }
  return {
    slug : 'course-directory',
    title : 'course-directory',
    course : window.lessonMap.slug,
    totalLessons : getTotalLessonsCount()
  }
  
}

function handleAuthErrors(response) {
  // console.log('handleAuthErrors received', response)
  if (!response.ok) {
      handleBadPageStatusNotification();
      throw Error(response.statusText);
  }
  return response;
}

function handleBadPageStatusNotification() {
  window.handleLogout()
  // console.log('could not authenticate the user')
  alert('Your login session has expired. Please log in again!')
}

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

function setGravatarImageUrl ( email ) {
  var gravatarUrl = "https://www.gravatar.com/avatar/" + MD5(email);
  var userImg = document.getElementsByClassName('greyswirl')[0];
  userImg.className += " gravatar"
  userImg.src = gravatarUrl

  // then, hide the icon and replace with avatar
  document.getElementsByClassName('fa-user-circle')[0].remove()

  if ( !document.getElementById('accountImg') ) {

    var accountIcon = document.createElement('img')
      accountIcon.src = gravatarUrl
      accountIcon.id = "accountImg"
    document.getElementById('accountIcon').append(accountIcon)

  } else {

    console.log('tried to append second account icon but failed')

  }

}