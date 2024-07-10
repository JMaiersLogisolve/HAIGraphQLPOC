import { GraphQLError } from "graphql";

export interface DeleteActivityResult {
    deleteActivity: { boolean: boolean, errors: [GraphQLError] }
}