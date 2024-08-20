import gql from "graphql-tag";

export default gql`
  mutation CreateJob($data: NewJobInput!) {
    createJob(data: $data) {
      id
      active
      jobTitle
      jobDescription
      mission
      profil
      salary
      jobType
      location
    }
  }
`;
