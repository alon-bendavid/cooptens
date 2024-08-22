import { useState } from "react";
import Details from "./Details";
import { Job } from "@/types";
import Logo from "../../public/favicon.png";
import Image from "next/image";
import router from "next/router";

// jobTitle: string;
// jobDescription: string;
// location: string;
// active: boolean;
// mission: string;
// profil: string;
// salary: string;
// jobType: string;
export default function Box({
  jobTitle,
  jobDescription,
  color,
  location,
  active,
  mission,
  profil,
  salary,
  jobType,
}: Job) {
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle details view
  const toggleDetails = () => {
    setShowDetails(!showDetails);
    router.push("#jump");
  };
  return (
    <>
      <div
        onClick={toggleDetails}
        className=" cursor-pointer relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900 animate-fade-right animate-once animate-duration-[2000ms] animate-ease-out"
      >
        {/* <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div> */}
        <div
          aria-hidden="true"
          className={`inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-${color}-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10`}
        ></div>

        <div className="relative" data-testid="box">
          <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
            <h2 className="text-gray-700 dark:text-gray-300">{jobTitle}</h2>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="border border-blue-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
            <Image
              priority={true}
              src={Logo}
              className="w-6 max-w-lg"
              alt="logo"
            />
          </div>

          <h3>location: {location}</h3>
        </div>
      </div>

      {showDetails ? (
        <Details
          jobTitle={jobTitle}
          jobDescription={jobDescription}
          onClose={toggleDetails}
          color={""}
          location={location}
          active={false}
          mission={mission}
          profil={profil}
          salary={salary}
          jobType={jobType}
        />
      ) : null}
      {/* {showDetails && <Details jobTitle={jobTitle} description={jobDescription} onClose={toggleDetails} />} */}
    </>
  );
}
