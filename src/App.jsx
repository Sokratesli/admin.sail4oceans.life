import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//import AuthWrapper from "./AuthWrapper";

import Dashboard from "../src/pages/dashboard/Dashboard";
import Settings from "../src/pages/settings/Settings";

import Cases from "../src/pages/cases/Case";
import Mandates from "../src/pages/mandates/Mandates";
import AddressBook from "../src/pages/addressbook/AddressBook";
import Calendar from "../src/pages/calendar/Calendar";
import Documents from "../src/pages/documents/Documents";
import Records from "../src/pages/records/Records";

import Invoices from "../src/pages/invoices/Invoices";
import Analytics from "../src/pages/analytics/Analytics";

import Admin from "../src/pages/admin/Admin";

import PageNotFound from "../src/components/ui/404";
import Login from "./pages/login/Login";


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  /*
  useEffect(() => {
    var _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = import.meta.env.VITE_MATOMO_ANALYTICS_PATH;
    s.parentNode.insertBefore(g, s);
  }, []);
*/

  return (
    <>
      <Routes>
        {/*}
      <Route
          path="/"
          element={<AuthWrapper component={FeedHome} role="Authenticated" />}
  /> */}
        <Route path="/login" element={<Login />} />
        {/* Protected */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/cases" element={<Cases />} />
        <Route path="/mandates" element={<Mandates />} />
        <Route path="/addressbook" element={<AddressBook />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/records" element={<Records />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
