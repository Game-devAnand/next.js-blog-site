import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        GithubProvider({
        // clientId: process.env.GITHUB_ID as string,
        // clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
              const user = { id: "20", name: "Anand", password: "nextauth" };
              if (
                credentials?.username === user.name &&
                credentials?.password === user.password
              ) {
                return user;
              } else {
                return null;
              }
            },
          }),
        
    ],
})

export { handler as GET, handler as POST }