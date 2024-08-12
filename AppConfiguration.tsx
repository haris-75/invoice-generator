
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://sse-frontend-assessment-api-823449bb66ac.herokuapp.com/graphql', // Replace with your GraphQL API URL
  cache: new InMemoryCache(),
});


export default function AppConfiguration({children}: React.PropsWithChildren) {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
  )
}
