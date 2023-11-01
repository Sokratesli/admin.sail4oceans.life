import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { LoadingContext } from "./components/lib/context/LoadingProvider";
import { LoadingBar } from "./components/ui/LoadingBar";
import AuthWrapper from "./AuthWrapper";

import Dashboard from "../src/pages/dashboard/Dashboard";
import Settings from "../src/pages/settings/Settings";

import System from "../src/pages/system/System";
import Analytics from "../src/pages/analytics/Analytics";

import Posts from "../src/pages/posts/Posts";
import Users from "../src/pages/users/Users";
import TheRoutes from "../src/pages/routes/Routes";
import Yachts from "../src/pages/yachts/Yachts";
import Media from "../src/pages/media/Media";
import Groups from "../src/pages/groups/Groups";
import Donations from "../src/pages/donations/Donations";


import PageNotFound from "../src/components/ui/404";
import Login from "./pages/login/Login";


function App() {
  const { loading } = useContext(LoadingContext);
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
          {loading && <LoadingBar />}

      <Routes>
        {/*}
      <Route
          path="/"
          element={<AuthWrapper component={FeedHome} role="Authenticated" />}
  /> */}
        <Route path="/login" element={<Login />} />
        {/* Protected */}
        <Route path="/" element={<AuthWrapper component={Dashboard} auth={true} />}  />
        <Route path="/settings" element={<AuthWrapper component={Settings} auth={true} />} />

        <Route path="/posts" element={<AuthWrapper component={Posts} auth={true} />} />
        <Route path="/yachts" element={<AuthWrapper component={Yachts} auth={true} />} />
        <Route path="/routes" element={<AuthWrapper component={TheRoutes} auth={true} />} />
        <Route path="/media" element={<AuthWrapper component={Media} auth={true} />} />
        <Route path="/groups" element={<AuthWrapper component={Groups} auth={true} />} />
        <Route path="/donations" element={<AuthWrapper component={Donations} auth={true} />} />
        <Route path="/users" element={<AuthWrapper component={Users} auth={true} />} />

        {/* System */}
        <Route path="/system" element={<AuthWrapper component={System} auth={true} />} />
        <Route path="/analytics" element={<AuthWrapper component={Analytics} auth={true} />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
