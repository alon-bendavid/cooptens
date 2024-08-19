import { FormEvent, useEffect, useState } from "react";
import {
  NewJobInput,
  useCreateJobMutation,
  useJobQuery,
} from "@/graphql/generated/schema";
import Header from "@/components/Header";
import React from "react";
import Layout from "@/components/Layout";

export default function AddJobAdmin({}: NewJobInput) {
  const { data } = useJobQuery({
    errorPolicy: "ignore",
  });
  // console.log(data);
  const jobs = data?.Job || [];

  const [error, setError] = useState("");
  const [CreateJob] = useCreateJobMutation();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //  jobs.push()
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.active = formJSON.active === "true" ? true : false;
    // console.log( );

    console.log(formJSON);

    try {
      const res = await CreateJob({ variables: { data: formJSON } });
      console.log({ res });
      alert("job added!");
    } catch (e: any) {
      console.log(e.jobDescription);
      setError(e.jobDescription);
    }
  };

  return (
    <>
      <Layout pageTitle={"Admin panel"}>
        <div className="flex justify-center">
          <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12 lg:w-1/2 ">
            <h1 className="mb-7">Craete a new job ouprtunity!</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="jobTitle">
                  Job Title
                </label>
                <h4>Job Title</h4>{" "}
                <input
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="Job Title"
                  type="text"
                  name="jobTitle"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="jobDescription">
                  jobDescription
                </label>
                <h4>Job Description</h4>
                <textarea
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="Job Description"
                  rows={8}
                  name="jobDescription"
                ></textarea>
              </div>{" "}
              <div>
                <label className="sr-only" htmlFor="mission">
                  mission
                </label>
                <h4>Mission</h4>

                <textarea
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="mission"
                  rows={8}
                  name="mission"
                ></textarea>
              </div>
              <div>
                <label className="sr-only" htmlFor="profil">
                  profil
                </label>
                <h4>Profil</h4>

                <textarea
                  className="w-full rounded-lg p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="Profil"
                  rows={8}
                  name="profil"
                ></textarea>
              </div>
              <div>
                <label className="sr-only" htmlFor="salary">
                  salary
                </label>
                <h4>Salray</h4>

                <input
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="salary"
                  type="text"
                  name="salary"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="jobType">
                  jobType
                </label>
                <h4>Job Type</h4>

                <input
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="Job Type"
                  type="text"
                  name="jobType"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="location">
                  location
                </label>
                <h4>Location</h4>

                <input
                  className="w-full rounded-lg  p-3 text-sm border-solid border-2 border-blue-950"
                  placeholder="location"
                  type="text"
                  name="location"
                />
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  name="active"
                  type="checkbox"
                  value="true"
                  className="sr-only peer "
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  activate post
                </span>
              </label>
              <div className="mt-4">
                <button
                  type="submit"
                  // className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  className="btn btn-accent"
                >
                  Register Job
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col  justify-center gap-20 mt-8">
          <div className="flex flex-col gap-7">
            {jobs.map((job, idx) => {
              return <div className="">{job.mission}</div>;
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
