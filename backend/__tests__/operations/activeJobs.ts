import gql from "graphql-tag";

export default gql`
  query ActiveJobs {
    ActiveJobs {
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
