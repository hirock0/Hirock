import { ConnectionToDB } from "@/connectionDB/connectiondb";
ConnectionToDB();
import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { SignUpSchema } from "@/lib/SchemaDB/schemaModel";
export const authOptions: AuthOptions = {
  pages: {
    signIn: "/user/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      await ConnectionToDB();
      try {
        const findUser = await SignUpSchema.findOne({
          emailOrnumber: user?.email,
        });

        if (findUser) {
          return findUser;
        } else {
          const presavedata = await new SignUpSchema({
            name: user.name,
            image: user.image,
            emailOrnumber: user.email,
          });
          const savedata = await presavedata.save();

          
          return savedata;
        }
      } catch (error: any) {
        console.log("the error is", error);
        return false;
      }
    },
  },
};
