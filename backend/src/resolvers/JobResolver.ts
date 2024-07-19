import {
  Arg,
  Authorized,
  Ctx,
  ID,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import Job, { NewJobInput } from "../entities/Job";
import { GraphQLError } from "graphql";
import { verify } from "argon2";
import jwt from "jsonwebtoken";
import env from "../env";
import { Context } from "../types";
import User, { UserRole } from "../entities/User";

@Resolver()
class JobResolver {
  @Authorized([UserRole.Admin])
  @Mutation(() => Job)
  async createJob(@Arg("data", { validate: true }) data: NewJobInput) {
    const existingJob = await Job.findOneBy({ jobTitle: data.jobTitle });
    if (existingJob !== null) throw new GraphQLError("JOB_ALREADY_TAKEN");

    const newJob = new Job();
    Object.assign(newJob, data);
    const newJobWithId = await newJob.save();
    return newJobWithId;
  }
  // @Authorized([UserRole.Admin])
  @Query(() => [Job])
  async Job(): Promise<Job[]> {
    return Job.find();
  }
}

export default JobResolver;
