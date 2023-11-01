import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function HCaptchaWrapper({ children }) {
  const [token, setToken] = useState(null);

  const onVerify = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <HCaptcha
        sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
        onVerify={onVerify}
        size="invisible"
      />
      {children}
    </>
  );
}

export default HCaptchaWrapper;