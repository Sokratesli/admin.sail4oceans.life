import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PageNotFound from "./pages/utility/PageNotFound";
import { LoadingBar } from "./components/LoadingBar";

const AuthWrapper = ({ component: Component, role, ...props }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("jwt");
        if (!token) {
          throw new Error("No token found in localStorage");
        }

        const response = await axios.get(
          `${import.meta.env.VITE_STRAPI_URL}/api/users/me?populate=role`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (err) {
        localStorage.removeItem("jwt");
        navigate("/signin", { state: { logout: true } });
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <LoadingBar/>
    );

  if (data && data.role.name !== role) {
    return (
      <PageNotFound setAlert="You do not have the required permissions to access this page." />
    );
  }

  return <Component {...props} />;
};

export default AuthWrapper;
