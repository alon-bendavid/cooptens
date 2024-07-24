import { Job } from "@/types";

// Details component
export default function Details({
  onClose,
  jobTitle,
  jobDescription,
  profil,
  jobType,
  salary,
  active,
  location,
  mission,
}: Job) {
  return (
    // <div className=" fixed top-0 left-0 w-full h-full bg-slate-600 bg-opacity-90 flex justify-center items-center z-50 overflow-auto">
    //   <div className="bg-white p-10 md:p-44 rounded-xl absolute z-50 flex flex-col gap-5 mx-1 md:mx-40">
    <div className="absolute  z-50 bg-slate-500 ">
      <div className="bg-white md:p-44 rounded-xl flex flex-col gap-5 mx-1 md:mx-40">
        <h1>{jobTitle}</h1>
        <div>
          <p>COOPTENS recherche pour l’un de ses clients, un(e): </p>
          <strong>
            {" "}
            {jobTitle} en {jobType} en {location}
          </strong>
        </div>
        <div>
          <h2>Descriptif de poste:</h2>
          <p>{jobDescription}</p>
        </div>
        <div>
          <h2>Vos missions seront les suivantes:</h2>
          <p>{mission}</p>
        </div>
        <div>
          <h2>Profil recherché:</h2>
          <p>{profil}</p>
        </div>

        <h2>
          Vous vous reconnaissez à travers cette opportunité et souhaitez
          relever un nouveau challenge, envoyez-nous votre candidature !
        </h2>

        <ul>
          <li>
            <strong>-Type de poste: </strong>
            {jobType}
          </li>
          <li>
            <strong>-Localisation: </strong> {location}
          </li>
          <li>
            <strong>-Salaire: </strong>
            {salary}
          </li>
        </ul>

        <button
          onClick={onClose}
          className="bg-slate-400 w-28 py-1 rounded-md text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
