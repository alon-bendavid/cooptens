import { execute } from "../jest.setup";
import Job from "../src/entities/Job";
import getAdminContext from "./helpers/getAdminContext";
import activeJobs from "./operations/activeJobs";
import addJob from "./operations/addJob";

describe("Jobs Resolver", () => {
  it("should read Jobs", async () => {
    const testJob = new Job();

    const active = true;
    const jobTitle = "test-job";
    const jobDescription = "test-desc";
    const mission = "test-miss";
    const profil = "test";
    const salary = "test";
    const jobType = "test";
    const location = "test";

    testJob.active = active;
    testJob.jobTitle = jobTitle;
    testJob.jobDescription = jobDescription;
    testJob.mission = mission;
    testJob.profil = profil;
    testJob.salary = salary;
    testJob.jobType = jobType;
    testJob.location = location;

    await testJob.save();

    const res = await execute(activeJobs);
    expect(res).toMatchInlineSnapshot(`
{
  "data": {
    "ActiveJobs": [
      {
        "active": true-,
        "id": 1,
        "jobDescription": "test-desc",
        "jobTitle": "test-job",
        "jobType": "test",
        "location": "test",
        "mission": "test-miss",
        "profil": "test",
        "salary": "test",
      },
    ],
  },
}
`);
  });
  it("should create a job only if autorised admin", async () => {
    const res = await execute(
      addJob,
      {
        data: {
          jobTitle: "jobTest as admin",
          jobDescription: "jobTest as admin",
          location: "jobTest as admin",
          active: true,
          mission: "jobTest as admin",
          profil: "jobTest as admin",
          salary: "jobTest as admin",
          jobType: "jobTest as admin",
        },
      },
      await getAdminContext()
    );
    expect(res).toMatchInlineSnapshot(`
{
  "data": {
    "createJob": {
      "active": true,
      "id": 1,
      "jobDescription": "jobTest as admin",
      "jobTitle": "jobTest as admin",
      "jobType": "jobTest as admin",
      "location": "jobTest as admin",
      "mission": "jobTest as admin",
      "profil": "jobTest as admin",
      "salary": "jobTest as admin",
    },
  },
}
`);
    const jobInDb = await Job.findOneBy({ jobTitle: "jobTest as admin" });
    expect(jobInDb).toMatchInlineSnapshot(`
Job {
  "active": true,
  "id": 1,
  "jobDescription": "jobTest as admin",
  "jobTitle": "jobTest as admin",
  "jobType": "jobTest as admin",
  "location": "jobTest as admin",
  "mission": "jobTest as admin",
  "profil": "jobTest as admin",
  "salary": "jobTest as admin",
}
`);
  });
});
