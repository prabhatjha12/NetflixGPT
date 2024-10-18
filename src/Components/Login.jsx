import Header from "./Header";
import { useRef, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Validate } from "./Validate";
import {auth} from "./firebase";

const Login = () => {
    const[isSignInForm,setSignInFrom]=useState(true);
    const[errorMessage,setErrorMessage]=useState();
    const email=useRef(null);
    const password=useRef(null);

    const handleClick=()=>{

      const message=Validate(email.current.value,password.current.value);
      setErrorMessage(message);
      if(message) return;

      //sign in and sign up logic
      if(!isSignInForm){
        //signup logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" "+errorMessage);
    // ..
  });

      }
      else{
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" "+errorMessage);
  });

      }

      
      
      
    }
    const toggleSignInForm=()=>{
        setSignInFrom(!isSignInForm);

    }

  return (
    <div>
        <Header/>
<div className="absolute">
<img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg" 
          alt="bgImage"
          className="object-cover w-full h-full"
        />
</div>
<form onSubmit={(e)=>{e.preventDefault()}}className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white opacity-90">
    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In": "Sign Up"}</h1>
    {!isSignInForm &&(<input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>)}
    <input ref ={email} type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-700 rounded-lg"/>
    <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
    <p className="text-red-500 font-bold ">{errorMessage}</p>
    <button onClick={handleClick} className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In": "Sign Up"}</button>
    <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now.": "Already a member ? Sign In"}</p>
</form>
       </div>


  )
}

export default Login
