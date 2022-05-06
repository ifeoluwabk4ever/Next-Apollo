import "../styles/globals.css";
import { setContext } from "@apollo/client/link/context";
import "tachyons/css/tachyons.min.css";
import { Layout } from "../Components";
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { AUTH_TOKEN } from "../constant";
import { split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

if (typeof window !== "undefined") {
	// Perform localStorage action
	var item = localStorage.getItem(AUTH_TOKEN);
}

const authLink = setContext((_, { headers }) => {
	const token = item;
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const httpLink = createHttpLink({
	uri: "http://localhost:4000",
});

const wsLink = process.browser
	? new WebSocketLink({
			uri: `ws://localhost:4000/graphql`,
			options: {
				reconnect: true,
			},
	  })
	: null;

const link = process.browser
	? split(
			({ query }) => {
				const { kind, operation } = getMainDefinition(query);
				return (
					kind === "OperationDefinition" && operation === "subscription"
				);
			},
			wsLink,
			authLink.concat(httpLink)
	  )
	: authLink.concat(httpLink);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
}

export default MyApp;
