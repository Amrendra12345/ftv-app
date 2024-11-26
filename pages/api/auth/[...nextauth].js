import { useUserInfo } from "@/context/loginContext";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials: {},
            async authorize(credentials, req){               
             const loginDetail = { provider_id:credentials.provider_id, provider:credentials.provider, name:credentials.name, email:credentials.email, phone:credentials.phone };            
               try {
                const res = await fetch(`${process.env.BASE_URL}/api/${credentials.ce_name}/user-login`,{
                    method: 'POST',
                    body: JSON.stringify(loginDetail),
                    headers: {
                       'Content-Type': 'application/json',
                     },
                  })
                  const user = await res.json()
                    const userData = {
                        id:user.data.id,                       
                        name: user.data.name_of_agency || 'Hi User',
                        email: user.data.email,
                        phone: user.data.mobile_number,
                        provider:user.data.provider,
                        provider_id:user.data.provider_id,
                        

                    }
                  if (res.ok && user) {                   
                    return userData;
                  }
               } catch (error) {
                   //throw new Error(error)
                 return null
               }
            }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: "light",
  },
  pages: {
    signIn: '/login/login',
},
session:{
    strategy:"jwt"
},
callbacks:{
    async signIn({ user, account, profile, email, credentials }) {       
        let loginDetail;
        if (account?.provider === "credentials" && user !== undefined) {
            loginDetail = {
                provider_id:'',
                provider:'',
                name:user.name,
               email:user.email, 
               phone:''
            }
        }else{
            loginDetail = {
                provider_id:account.providerAccountId,
                provider:account.provider,
                name:user.name,
               email:user.email, 
               phone:''
            }
        }
        const res = await fetch(`${process.env.BASE_URL}/api/user-login`,{
            method: 'POST',
            body: JSON.stringify(loginDetail),
            headers: {
               'Content-Type': 'application/json',
             },
          })
          const result = await res.json();
         
        return true
      },
      async jwt({ token }) {
        token.userRole = "admin"
        return token
      },
      async session({ session, token, user }) {
        if(token){
           session.user.id = token.id
           session.user.phone = token.phone
           session.user.provider = token.provider
           session.user.provider_id = token.provider_id
        }
     return session
     },
    
    }
}

export default NextAuth(authOptions)
