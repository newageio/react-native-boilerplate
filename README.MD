### React native boilerplate

#### includes:

1. react-native.
2. redux.
3. relay.
4. basic examples of registration/authentication (redux) ,
basic examples of GraphQL data fetching (relay).

#### requirements:
Relay requires GraphQL [schema](https://facebook.github.io/relay/docs/guides-babel-plugin.html) in `json` format. Put
the `schema.json` file into `src/relay/graphql`.

#### configuration:
Specify it in `src/config/default.js`.

#### renaming project:
Simpliest way is to run `react-native init appname`
 and move all app-specific files to new folder