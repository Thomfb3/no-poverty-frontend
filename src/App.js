import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./common/Footer";
import NoPovertyApi from "./api/api";
import UserContext from "./auth/UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import { decodeToken } from "react-jwt";
import Navigation from "./routes/Navigation";
import CssBaseline from '@mui/material/CssBaseline';
import LoadingSpinner from "./common/LoadingSpinner";
import './scss/App.scss';

export const TOKEN_STORAGE_ID = "user_token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAdvocate, setIsAdvocate] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [modalOn, setModalOn] = useState(false)
  const [modalIsSignup, setModalIsSignup] = useState(false)

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { userId } = decodeToken(token)
          NoPovertyApi.token = token;
          let currentUser = await NoPovertyApi.getCurrentUser(userId)

          setCurrentUser(currentUser);
          setIsAdvocate(currentUser.role === "advocate");

        } catch (e) {
          console.error("App loadUserInfo: problem loading", e);
          setCurrentUser(null);
          setIsAdvocate(null);
        }
      }
      setInfoLoaded(true)
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


  function logout() {
    console.log("logout")
    setCurrentUser(null);
    setIsAdvocate(null);
    setToken(null);
  };

  function updateCurrentUser(userData) {
    setCurrentUser(userData);
  };

  async function signup(signupData) {
    try {
      let token = await NoPovertyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Signup Failed", errors)
      return { success: false, errors };
    };
  };

  async function login(loginData) {
    try {
      let token = await NoPovertyApi.login(loginData);
      setToken(token);
      console.log("token : ", token)
      return { success: true };
    } catch (errors) {
      console.error("Login Failed", errors)
      return { success: false, errors };
    };
  };

  function toggleModal() {
    const toggle = !modalOn ? true : false;
    setModalOn(toggle);
    setModalIsSignup(false);
  }

  function toggleModalSignup() {
    const toggle = !modalOn ? true : false;
    setModalOn(toggle);
    setModalIsSignup(true);
  }


  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          isAdvocate,
          setIsAdvocate
        }}>

          <React.Fragment>
            <CssBaseline />
            <Navigation
              logout={logout}
              toggleModal={toggleModal}
              toggleModalSignup={toggleModalSignup}
            />
            <AppRoutes
              login={login}
              signup={signup}
              updateCurrentUser={updateCurrentUser}
              toggleModal={toggleModal}
              modalOn={modalOn}
              modalIsSignup={modalIsSignup}
            />
            <Footer />
          </React.Fragment>

        </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
