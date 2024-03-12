import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AccountProvider from "./Context";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProtectedRoutes } from "./Utils/ProtectedRoutes";

import GoogleOAuth from "./Components/Accounts/Login/GoogleOAuth";
import Home from "./Components/Home/Home";

const clientId =
  "444151734077-h3hel53b297bg3hgt19ftptl400ob5rh.apps.googleusercontent.com";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AccountProvider />}>
      <Route
        path="/login"
        element={
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleOAuth />
          </GoogleOAuthProvider>
        }
      />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Route>
  )
);
