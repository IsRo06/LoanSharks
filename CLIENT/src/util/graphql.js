import gql from 'graphql-tag';

export const FETCH_USER_QUERY = gql`   
    query
    getUserEmail($userEmail: String!) {
        getUserEmail(user_email: $userEmail){
                id
                email
                username
                type
        }        
    }        
`