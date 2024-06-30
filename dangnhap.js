import {auth} from './config.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const emailInput=document.querySelector('.email')
const passwordInput=document.querySelector('.pass-btn')
const btn=document.querySelector('.btn1')
const button=document.querySelector('.google')
const xulydangky=(e)=>{
    e.preventDefault()
    const emailValue=emailInput.value
    const passwordValue=passwordInput.value
    console.log(emailValue,passwordValue)
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('dang nhap thanh cong')
    window.location='./index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
const provider = new GoogleAuthProvider();
const xulydangkygg=(e)=>{
    e.preventDefault()
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    localStorage.setItem('user4',user.displayName)
    window.location='./index.html'
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
btn.addEventListener('click',xulydangky)
button.addEventListener('click',xulydangkygg)