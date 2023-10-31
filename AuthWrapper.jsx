import { useTranslation, Trans } from "react-i18next";
import React, { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PageNotFound from "./pages/utility/PageNotFound";
import { LoadingBar } from "./components/LoadingBar";
import { LoadingContext } from "./components/lib/context/LoadingProvider";
import { account, ID, databases } from "./components/lib/Appwrite";

const AuthWrapper = ({ component: Component, auth, ...props }) => {
  const { t } = useTranslation();
  const { loading, setLoading } = useContext(LoadingContext);

  const [userPrivateId, setUserPrivateId] = useState(null);
  const [userPublicId, setUserPublicId] = useState(null);
  const [followTeamId, setFollowTeamId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userAuth, setUserAuth] = useState(false);
  const [settings, setSettings] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await account.get();
      if (response) {
        console.log(response)
        setUserId(response.$id);

        const [
          userPrivateResponse,
          userPublicResponse,
          settingsResponse
        ] = await Promise.all([
          databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB,
            import.meta.env.VITE_APPWRITE_COLL_USER_PRIVATE
          ),
          databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB,
            import.meta.env.VITE_APPWRITE_COLL_USER_PUBLIC
          ),
          databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DB,
            import.meta.env.VITE_APPWRITE_COLL_SETTINGS
          )
        ]);

        setUserPrivateId(userPrivateResponse?.documents[0]?.$id);
        setFollowTeamId(userPrivateResponse?.documents[0]?.followTeamId);

        setUserPublicId(userPublicResponse?.documents[0]?.$id);

        setSettings(settingsResponse?.documents[0]);

        setUserAuth(true);
      }
      setLoading(false);
    } catch (error) {
      // console.log(error); // Failure
      navigate("/signin", { state: { logout: true } });
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingBar />;
  if (!loading && userPublicId && userPrivateId && userId && userAuth === auth && settings) {
    return (
      <Component
        {...props}
        userId={userId}
        followTeamId={followTeamId}
        userPublicId={userPublicId}
        userPrivateId={userPrivateId}
        settings={settings}
      />
    );
  }

  return null;
};

export default AuthWrapper;
