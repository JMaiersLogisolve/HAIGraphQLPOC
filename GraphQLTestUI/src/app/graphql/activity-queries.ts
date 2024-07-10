import { gql } from 'apollo-angular';

export const GET_ALL_ACTIVITIES = gql`
    query GetAllActivities($orderField: [ActivitySortInput!]) {
        allActivities(order: $orderField) {
            id
            desc
            meas
            stkflw
            sort
        }
    }
`;