import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './userSlice';
import {useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      navigate("/browse");
      
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }
  }),[])
  return (
    <div className="absolute top-6 left-20 z-10">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    </div>
  );
};
export default Header;