"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

function CallbackPage() {
  const [signingIn, setSigningIn] = useState(false);

  useEffect(() => {
    const handleSignIn = async () => {
      try {
        setSigningIn(true);
        const result = await signIn("credentials", {
          redirect: false,
          state: "1",
          code: "123",
        });
        setSigningIn(false);
        console.log({ result });
      } catch (error) {
        console.error(error);
      }
    };

    handleSignIn();
  }, []);

  return <div>CallbackPage</div>;
}

export default CallbackPage;
