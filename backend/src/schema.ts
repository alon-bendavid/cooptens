import { buildSchema } from "type-graphql";
import UserResolver from "./resolvers/UserResolver";
import { authChecker } from "./auth";
import JobResolver from "./resolvers/JobResolver";

export default buildSchema({
  resolvers: [ UserResolver,JobResolver],
  authChecker,
});
