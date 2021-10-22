import React from "react";
import { Link } from 'react-router-dom';
import {
    Navbar
} from './../../components';
import FirebaseApp from './../../config/firebase';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();
class Home extends React.Component {
    constructor() {
        super();
        this.state = ({
            email: "",
            password: "",
            error: ""
        })
    }
    render() {
        let { email, password, error } = this.state



        let googleSignin = ()=>{
            signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              console.log(user)
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

            console.log(userObj)
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
                    console.log(errorMessage);
                    this.setState({
                        error: errorMessage
                    })
                    // ..
                });
        }


        return (
            <div>
                <h1>Home Page</h1>
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ol>

                <ul>
                    <li>
                        <button onClick={() => this.props.history.push("/")}>Home</button>
                    </li>
                    <li>
                        <button onClick={() => this.props.history.push("/about")}>About</button>
                    </li>
                </ul>
                <input
                    type="email"
                    onChange={e => {
                        this.setState({
                            email: e.target.value
                        })
                    }}
                />
                <input
                    type="password"
                    onChange={e => {
                        this.setState({
                            password: e.target.value
                        })
                    }}
                />

                <p>{email}</p>
                <p>{password}</p>
                <h3 style={{ color: "red" }}>{error}</h3>
                <button onClick={signUp}>Sign Up</button>

                <Navbar history={this.props.history} />




                <button onClick={googleSignin}>Google Sign In</button>

            </div>
        )
    }
}

export default Home;