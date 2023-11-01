import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";

import { account, ID } from "../../components/lib/Appwrite";
import { useAlert } from "../../components/lib/context/AlertProvider";

import Logo from "../../components/Logo";

export default function Login() {
  const { t } = useTranslation();
  const { showAlert } = useAlert();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

 async function login(email, password) {
  try {
    await account.createEmailSession(email, password);
    const user = await account.get();
    if (user && user.$id) {
      setLoggedInUser(user);
      console.log("Login successful:", user);
      showAlert(t("loginSuccess"), "success"); // Successful login with success as type
    } else {
      console.log("Login failed: User not found.");
      showAlert(t("userNotFound"), "error"); // User not found error with error as type
    }
  } catch (error) {
    showAlert(t("tooManyRequests"), "warning"); // Too many requests warning with warning as type
    console.error("Login failed:", error);
  }
}

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <p>
          {loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"}
        </p>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <div className="w-24">
            <Logo />
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {t("signInToYourAccount")}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {t("name")}
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("name")}
                  //required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ocean-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {t("email")}
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={"email"}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ocean-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {t("password")}
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-ocean-400 hover:text-ocean-400"
                  >
                    {t("forgotPassword")}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder={t("password")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ocean-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => login(email, password)}
                className="flex w-full justify-center rounded-md bg-ocean-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-ocean-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-400"
              >
                {t("login")}
              </button>
              <button
                type="button"
                onClick={async () => {
                  await account.deleteSession("current");
                  setLoggedInUser(null);
                }}
              >
                {t("logout")}
              </button>
              <button
                type="button"
                onClick={async () => {
                  await account.create(ID.unique(), email, password, name);
                  login(email, password);
                }}
              >
                {t("register")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
