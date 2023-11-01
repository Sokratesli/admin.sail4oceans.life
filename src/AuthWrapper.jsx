import { useTranslation, Trans } from "react-i18next";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingBar } from "./components/ui/LoadingBar";
import { LoadingContext } from "./components/lib/context/LoadingProvider";
import { account, ID, databases, storage } from "./components/lib/Appwrite";

const AuthWrapper = ({ component: Component, auth, ...props }) => {
  const { t } = useTranslation();
  const { loading, setLoading } = useContext(LoadingContext);

  const [userPrivateId, setUserPrivateId] = useState(null);
  const [userPublicId, setUserPublicId] = useState(null);
  const [followTeamId, setFollowTeamId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userPublicData, setUserPublicData] = useState(null);
  const [userPrivateData, setUserPrivateData] = useState(null);
  const [userPrivateAvatarUrl, setUserPrivateAvatarUrl] = useState(null);
  const [userPublicAvatarUrl, setUserPublicAvatarUrl] = useState(null);
  const [userAuth, setUserAuth] = useState(false);
  const [settings, setSettings] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await account.get();
      if (response) {
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
        const [
          privateAvatarResponse,
          publicAvatarResponse
        ] = await Promise.all([
          storage.getFilePreview(
            import.meta.env.VITE_APPWRITE_BUCKET_USER_PRIVATE_AVATAR,
            userPublicResponse?.documents[0]?.privateAvatarId
          ),
          storage.getFilePreview(
            import.meta.env.VITE_APPWRITE_BUCKET_USER_PUBLIC_AVATAR,
            userPublicResponse?.documents[0]?.publicAvatarId
          )
        ]);
        setUserPrivateId(userPrivateResponse?.documents[0]?.$id);
        setFollowTeamId(userPrivateResponse?.documents[0]?.followTeamId);
        setUserPublicId(userPublicResponse?.documents[0]?.$id);
        setUserPublicData(userPublicResponse?.documents[0]);
        setUserPrivateData(userPrivateResponse?.documents[0]);
        setUserPrivateAvatarUrl(privateAvatarResponse.href);
        setUserPublicAvatarUrl(publicAvatarResponse.href);
        setSettings(settingsResponse?.documents[0]);
        setUserAuth(true);
      }
      setLoading(false);
    } catch (error) {
      navigate("/login");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <LoadingBar />;
  if (!loading && userPublicId && userPublicData && userPrivateData && userPrivateAvatarUrl && userPrivateId && userId && userAuth === auth && settings) {
    return (
      <Component
        {...props}
        userId={userId}
        followTeamId={followTeamId}
        userPublicId={userPublicId}
        userPrivateId={userPrivateId}
        userPublicData={userPrivateData}
        userPublicAvatarUrl={userPublicAvatarUrl}
        userPrivateAvatarUrl={userPrivateAvatarUrl}
        settings={settings}
      />
    );
  }

  return null;
};

export default AuthWrapper;
