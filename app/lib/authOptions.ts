import Google from "next-auth/providers/google";
import axios from "axios";
export const authOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({user}: {user: any}) {
      axios
        .post(`${process.env.NEXTAUTH_URL}/api/sheets`, {
          values: [user?.name, user?.email, new Date().toISOString()],
          sheetName: "Users",
        })
        .catch((e) => console.error(e));
      return true;
    },
  },
};
