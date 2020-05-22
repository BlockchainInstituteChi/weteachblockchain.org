
/* 2️⃣ Initialize Magic Instance */
const magic = new Magic("pk_live_EA466C1563BC5CFF");

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
    html = `
      <h1>Logged in as ${userMetadata.email}</h1>
      <button onclick="handleLogout()">Logout</button>
    `;
    toggleAccountImage();
  }

  document.getElementById("app").innerHTML = html;
};

/* 4️⃣ Implement Login Handler */
const handleLogin = async e => {
  e.preventDefault();
  const email = new FormData(e.target).get("email");
  if (email) {
    /* One-liner login 🤯 */
    await magic.auth.loginWithMagicLink({ email });
    renderMagic();
  }
};

/* 5️⃣ Implement Logout Handler */
const handleLogout = async () => {
  await magic.user.logout();
  renderMagic();
  toggleDisplayAccountBox();
  toggleAccountImage();
};


function toggleAccountImage () {
  // console.log('toggle displayNavbOX TRIGGERED')
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