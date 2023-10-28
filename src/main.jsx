import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./components/lib/context/UserProvider";
import { AlertProvider } from "./components/lib/context/AlertProvider";
import AlertNotification from "./components/ui/AlertNotification";

import App from "./App.jsx";

//import HCaptchaWrapper from "./HCaptchaWrapper";
//import CookieConsentModal from "./pages/settings/CookieConsentModal";

//import { LoadingProvider } from "./components/LoadingContext";
//import { NotificationDataProvider } from "./components/NotificationDataContext";
//import { FollowingProvider } from "./components/FollowingContext";

import "../src/style/styles.css/";

import "./i18n";

const root = createRoot(document.getElementById("root"));
const isLoginPage = window.location.pathname === "/login";

root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <AlertProvider>
        <AlertNotification />
          <App />
        </AlertProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
