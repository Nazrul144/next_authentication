const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials";

const handler = async()=> NextAuth({
    session:{
        strategy: 'jwt',
        maxAge: 30 * 24 * 30 * 30
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials){
                return true
            }
        })
    ],
    callbacks:{},
    pages:{
        signIn: '/login'
    }
})

export {handler as GET, handler as POST}