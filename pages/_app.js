//import header
import React from "react"
import "../styles/page.module.css"

// import { ApolloProvider,ApolloClient,InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri:`https://graphql-pokemon2.vercel.app/pokemon`,
//     cache: new InMemoryCache()
// })

export default function App ({Component,pageProps}){
    return(
        // <ApolloProvider client={client}>
            <Component {...pageProps} />
        // </ApolloProvider>
    )
}