import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [
  CredentialsProvider({
    name: "Gwap Secret Credentials",
    credentials: {
      state: { label: "State", type: "text" },
      code: { label: "Code", type: "text" },
    },
    async authorize(credentials: any, req) {
      const { state, code } = credentials;
      console.log(credentials);

      try {
        const res = await fetch(
          `${process.env.GWAP_CMS_BASE_URL}/issue-token?state=${state}&code=${code}&client_id=${process.env.GWAP_CLIENT_ID}&redirect_uri=${process.env.GWAP_REDIRECT_URI}&client_secret=${process.env.GWAP_CLIENT_SECRET}`,
          {
            method: "POST",
            body: JSON.stringify({ state, code }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log({ res });
        return {
          id: "1",
          phone: "+597",
        };
      } catch (error) {
        console.log(error);
      }
      return null;
    },
  }),
];

export const authOptions: NextAuthOptions = {
  providers,
  secret: process.env.NEXTAUTH_SECRET,
};
