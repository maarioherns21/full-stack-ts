import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../../database/conn'
import Users from "../../../../model/user"
import { compare } from 'bcryptjs';


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
    CredentialsProvider({
      name : "Credentials",
      async authorize(credentials, req){
          connectMongo().catch( error => { error: "Connection Failed...!"})

          // check user existance
          const result = await Users.findOne( { email : credentials.email})
          if(!result){
              throw new Error("No user Found with Email Please Sign Up...!")
          }

          // compare()
          const checkPassword = await compare(credentials.password, result.password);
          
          // incorrect password
          if(!checkPassword || result.email !== credentials.email){
              throw new Error("Username or Password doesn't match");
          }
          return result;

      }
  })
    
    // ...add more providers here
  ],
  secret: process.env.CLIENT_ID_JWT_SECRET,
  session: {
      strategy: 'jwt',
  }
};
export default NextAuth(authOptions);
