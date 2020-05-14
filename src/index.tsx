import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();

const typeDefs = gql`
  extend type Message {
    author: String!
    content: String!
  }
  
  extend type Query {
    messages: [Message]
  }

  extend type Mutation {
    addMessage(author: String!, content: String!): Message
  }
`;

const resolvers = {
  Mutation: {
    addMessages: (a: any, { author, content }: Message, { cache }: any) => {
      const query = gql`
        query GetMessage {
          messages @client {
            author
            content
          }
        }
      `;
      const previous = cache.readQuery({ query });
      const newMessage = {
        author: author,
        content: content,
        __typename: 'Message'
      };
      const data = {
        messages: previous.messages.concat([newMessage])
      };
      cache.writeData({ data });
      return newMessage;
    },
  },
};

const client = new ApolloClient({
  link: new HttpLink(),
  cache: cache,
  typeDefs: typeDefs,
  resolvers: resolvers
});

const data = {
  messages: [{ author: 'f', content: 'fse', __typename: 'Message' }],
};

cache.writeData({ data });

client.onResetStore(async () => cache.writeData({ data }));

export type Message = {
  author: string
  content: string
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
