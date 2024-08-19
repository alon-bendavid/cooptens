import Header from "@/components/Header";
import Box from "@/components/Box";
import Layout from "@/components/Layout";
import { useActiveJobsQuery, useJobQuery } from "@/graphql/generated/schema";
import { Job } from "@/types";

// import JobsData from "../componenets/jobs";
// import { Job01 } from "../componenets/job-data";
// import React, { useState } from 'react';

// import Header from "../componenets/Header";
const colors = ["blue", "green", "red", "gray", "yellow", "sky"];
// const colors = {blue:'blue',green:'green',red:'red',gray:'gray',yellow:'yellow',sky:'sky'};

export default function Jobs() {
  const { data, error, loading } = useActiveJobsQuery({
    errorPolicy: "ignore",
  });
  console.log(data || error);
  const jobs = data?.ActiveJobs || [];

  return (
    <Layout pageTitle={"opportunities"}>
      {loading ? <h1>Loading...</h1> : []}

      <div className="flex justify-center py-16">
        <div className=" max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold  animate-fade-down  animate-duration-[2000ms] ">
              OPPORTUNITÉS
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Explorer les postes récents.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mx-5">
            {jobs.map((j, idx) => {
              return (
                <Box
                  location={j.location}
                  jobTitle={j.jobTitle}
                  jobDescription={j.jobDescription}
                  color={colors[Math.floor(Math.random() * colors.length)]}
                  active={false}
                  mission={j.mission}
                  profil={j.profil}
                  salary={j.salary}
                  jobType={j.jobType}
                  onClose={undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
