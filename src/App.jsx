import { getAuth, TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase";


const auth = getAuth(app);

function App() {

  const twitterProvider = new TwitterAuthProvider();

  const handlegSign = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log('Token:', token)
        const user = result.user;
        console.log('User:', user)
      }).catch((error) => {
        const errorCode = error.code;
        console.log('errorCode', errorCode)
        const errorMessage = error.message;
        console.log('errorMessage', errorMessage)
        const email = error.customData.email;
        console.log('email', email)
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log('credential', credential)
      });
  }

  return (
    <>

      <h1>Login by github</h1>

      <button onClick={handlegSign}> login with twitter </button>



    </>
  )
}

export default App
