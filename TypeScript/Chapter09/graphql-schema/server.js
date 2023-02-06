"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schema_1 = require("@graphql-tools/schema");
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs_1 = __importDefault(require("./typeDefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://studio.apollographql.com");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
const schema = (0, schema_1.makeExecutableSchema)({ typeDefs: typeDefs_1.default, resolvers: resolvers_1.default });
let apolloServer = null;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
            context: ({ req, res }) => ({ req, res }),
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app });
    });
}
startServer();
app.listen({ port: 8000 }, () => {
    console.log('GraphQL server is running on port 8000');
});
