import { gql } from "apollo-angular";

export const DELETE_ACTIVITY = gql`
    mutation DeleteActivity($id: Int!) {
        deleteActivity(input: { id: $id }) {
            boolean
            errors {
                ... on KeyNotFoundError {
                    message
                }
            }
        }
    }
`;