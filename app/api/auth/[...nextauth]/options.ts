import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          name: "email",
          label: "Username",
          type: "text",
        },
        password: { name: "password", label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const url: string = "http://localhost:3000/api/signin";
        const res = await fetch(url, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (user) {
          return {
            ...user,
            name: user.data.name,
            id: user.data._id,
            email: user.data.email,
            plan: user.data.plan,
          };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async redirect() {
      return "/dashboard";
    },

    async jwt({ user, token }: any) {
      if (user) token.plan = user.plan;
      if (user) token.id = user.id;

      return token;
    },

    async session({ session, token }: any) {
      if (session) session.user.plan = token.plan;
      if (session) session.user.id = token.id;

      return session;
    },
  },
};
