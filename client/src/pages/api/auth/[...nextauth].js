import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// const CLIENT_ID = "162420244181-kko3h7tvomskdt4ok267cnmcs27cijk9.apps.googleusercontent.com"
// const CLIENT_SECRET = "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"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.CLIENT_ID_GIT,
      clientSecret: process.env.CLIENT_SECRET_GIT,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
