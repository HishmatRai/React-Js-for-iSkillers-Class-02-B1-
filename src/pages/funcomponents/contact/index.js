import React, { useState } from "react";
import { Link } from 'react-router-dom';
import FunNavbar from './../../../components/funcom/funnavbar';
import FirebaseApp from './../../../config/firebase'
import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const auth = getAuth();
function Contact(props) {
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [error ,setError] = useState()


    let googleLogin = ()=>{
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    let signUp = () => {
        let userObj = {
            email: email,
            password: password
        }
        console.log(userObj);
        createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)   
                // ..
            });
    }

    return (
        <div>
            <h1>Contact</h1>
            <ol>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/webd">Web Development</Link>
                </li>
            </ol>

            <ul>
                <li>
                    <button onClick={() => props.history.push("/contact")}>Contact</button>
                </li>
                <li>
                    <button onClick={() => props.history.push("/webd")}>Web Development</button>
                </li>
            </ul>

            <FunNavbar history={props.history} />

            <input
                type="email"
                onChange={e => {
                    setEmail(e.target.value)
                }}
            />
            <input
                type="password"
                onChange={e => {
                    setPassword(e.target.value)
                }}
            />
            <p>{email}</p>
            <p>{password}</p>
            <h1 style={{ color: "red" }}>{error}</h1>
            <button onClick={signUp}>Sign Up</button>
            <button onClick={googleLogin}>Google Login</button>
        </div>
    )
}
export default Contact