import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { useState } from "react";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';

initializeAuthentication();

const auth = getAuth();

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isloggedIn, userIsLoggedIn] = useState(false);
const googleProvider = new GoogleAuthProvider();
const githubProvdier = new GithubAuthProvider();
const handleGoogleSignIn = ()=>{
   signInWithPopup(auth, googleProvider)
   .then(result=>{
     const user = result.user;
     console.log(user);
   })
}
const handleGithubSignIn = () =>{
  signInWithPopup(auth, githubProvdier)
  .then(result=>{
    const user = result.user;
    console.log(user);
    
  })
}
const handleSignUp = e =>{
  e.preventDefault();
  console.log(email, password);
  isloggedIn? isProcessLogin(email, password):createNewUser(email, password)
  
}
const isProcessLogin = (email, password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then(result=>{
    const user = result.user;
    console.log(user);
  })
}
const createNewUser = (email,password) =>{
  createUserWithEmailAndPassword(auth, email, password)
  .then(result=>{
    const signUpUser = result.user;
    console.log(signUpUser)
  })
  .catch(error=>{
    const errorCode = error.message;
    setError(errorCode);
  })
}
const handelEmail = e =>{
  setEmail(e.target.value);
  return;
}
const handlePassword = e =>{
  setPassword(e.target.value);
  return;
}
const togleChange = e =>{
  userIsLoggedIn(e.target.checked);
}
  return (
    <div className="App mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">

          </div>
          <div className="col-md-4">
            <h1>{isloggedIn? 'Login' : 'Register'} Form</h1>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" onBlur={handelEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
            
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" onBlur = {handlePassword} id="exampleInputPassword1" placeholder="Password" required/>
            </div>
            <div className="form-check">
              <input type="checkbox" onChange={togleChange} className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label"  htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div>{error}</div>
            <button type="submit" className="btn btn-primary" >{isloggedIn? 'Login': 'Register'}</button>
          </form>
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <div>---------------------------------------------</div>
      <button className='btn btn-danger' onClick={handleGoogleSignIn}>Google Sign In</button>
      <button className='btn btn-primary ms-2' onClick={handleGithubSignIn}>Github Sign In</button>
    </div>
  );
}

export default App;
