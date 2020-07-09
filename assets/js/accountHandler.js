
/* 2️⃣ Initialize Magic Instance */
const magic = new Magic("pk_test_203D0BB15B42A4C8");
const serverUrl = "http://localhost:8888/user"

/* 3️⃣ Implement Render Function */
const renderMagic = async () => {
  // console.log('magic render triggered')

  const isLoggedIn = await magic.user.isLoggedIn();
  /* Show login form if user is not logged in */
  let html = `
    <form onsubmit="handleLogin(event)">
      <span>Enter your email below to log in.</span>
      <input class="emailInput" type="email" name="email" required="required" placeholder="Enter your email" />
      <button  class="logout"  type="submit">Send</button>
    </form>
  `;
  if (isLoggedIn) {
    /* Get user metadata including email */
    const userMetadata = await magic.user.getMetadata();
    // console.log(userMetadata)
    handlePageNotification()
    // getUserData()
    html = `
      <h1>Logged in as ${userMetadata.email}</h1>
      <button onclick="handleLogout()">Logout</button>
    `;
    toggleAccountImage();
  }

  document.getElementById("app").innerHTML = html;
};

const handleLogin = async e => {
  e.preventDefault();
  const email = new FormData(e.target).get("email");
  if (email) {
    const didToken = await magic.auth.loginWithMagicLink({ email });
    // console.log('didToken', didToken)
    window.localStorage.setItem('didToken', didToken); // we actually don't need to pass this token except for login. Magic does the rest :) 
    await fetch(`${serverUrl}/login`, {
      headers: new Headers({
        Authorization: "Bearer " + didToken
      }),
      method: "POST"
    });
    renderMagic();
  }
};

const handleLogout = async () => {
  await magic.user.logout();
  renderMagic();
  toggleDisplayAccountBox();
  toggleAccountImage();
};

// const getUserData = async () =>{
//   console.log('fetching user data')

//   try {
//     await fetch(`${serverUrl}/data`, {
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
      slug : courseDetails.slug,
      title : courseDetails.title,
      course : courseDetails.course
    }
  }

  // console.log('payload', payload)

  try {
    await fetch(`${serverUrl}/updateCurrentPage`, {
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
      // console.log(responseJSON);
      window.userData = responseJSON[0]
      console.log( 'set userdata', window.userData, new Date () )
    })
    
  } catch (err) {
    console.log('uncaught exception in update call', err)
    // handleBadPageStatusNotification()
  }
  
};

function getCoursePageDetails ( ) {
  
  var path = window.location.pathname
  // console.log('path', path)
  for ( module of window.lessonMap.modules ) {
    for ( lesson of module.lessons ) {
      if ( lesson.link === path )
      return {
        slug : lesson.slug,
        title : lesson.title,
        course : window.lessonMap.slug
      }
    }
  }
  return {
    slug : 'course-directory',
    title : 'course-directory',
    course : window.lessonMap.slug
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
  handleLogout()
  // console.log('could not authenticate the user')
  alert('Your login session has expired. Please log in again!')
}
