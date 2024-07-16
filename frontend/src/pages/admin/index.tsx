import { FormEvent, useState } from "react";


import { NewJobInput, useCreateJobMutation, useJobQuery} from "@/graphql/generated/schema";


export default function AddJobAdmin({}: NewJobInput) {
  const {data } = useJobQuery({
    errorPolicy: "ignore",
  });
console.log(data);
const jobs = data?.Job || [];
  const [error, setError] = useState("");
  const [CreateJob] = useCreateJobMutation();
 
 console.log(jobs);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//  jobs.push()
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    console.log(formJSON);



    try {
      const res = await CreateJob({ variables: { data: formJSON  } });
      console.log({ res });
      alert("job added!");
    } catch (e: any) {
      console.log(e.message);
        setError(e.message);
    }
  };
      
      

  return (
    <>
    <div className="flex flex-col justify-center ">
<h1>Admin panel</h1>
<h2>Add Job</h2>


    <form action="" onSubmit={handleSubmit} className="flex flex-col bg-slate-200 p-7 w-1/2 gap-3 rounded-md">

    <label className="label" htmlFor="jobTitlee">
              <span className="label-text">Job Title</span>
            </label>
<input type="text" name="jobTitle" placeholder="jobTitle"/>

<label className="label" htmlFor="jobDescription">
              <span className="label-text">Job Description</span>
            </label>
<input type="text" name="jobDescription" placeholder="jobDescription"/>

<label className="label" htmlFor="location">
              <span className="label-text">Job Location</span>
            </label>
<input type="text" name="location" id="location"  placeholder="location"/>

<button type="submit" className="btn-primary bg-lime-300 text-slate-900 p-2 rounded-md">Add Job</button>

    </form>
    </div>
    {
           jobs.map((job,idx) =>{
               return (
                <div key={job.id}>

                    <div>{job.jobTitle}</div>
                    

                    <div>{job.jobDescription}</div>
                    
                    
                </div>

               )

            })
        }      
                    
           
    
    </>
 
  );
}
