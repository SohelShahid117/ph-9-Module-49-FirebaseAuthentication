import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";

//49-4 Open Google Login Popup And Recap Google Popup Sign

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log("google mama is coming");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
        // console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("err-", errorMessage);
      });
  };
  console.log(user);

  const handleSignedOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubSignIn = () => {
    console.log("hi");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* {user?logout:login} */}
      {user ? (
        <button onClick={handleSignedOut}>Signed Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      )}

      {user && (
        <div>
          <h2>User:{user.displayName}</h2>
          <p>Email:{user.email}</p>
          <img src={user.photoURL} alt="" srcset="" />
        </div>
      )}
    </div>
  );
};

export default Login;
