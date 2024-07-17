import { FormEvent, useState } from "react";
import { NewJobInput, useCreateJobMutation, useJobQuery} from "@/graphql/generated/schema";
import Header from "@/components/Header";


export default function AddJobAdmin({}: NewJobInput) {


  const {data } = useJobQuery({
    errorPolicy: "ignore",
  });
// console.log(data);
const jobs = data?.Job || [];
  const [error, setError] = useState("");
  const [CreateJob] = useCreateJobMutation();
 
//  console.log(jobs);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//  jobs.push()
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.active = formJSON.active ==='true' ? true : false;

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


    <Header>
      
    </Header>
    <div className="flex flex-col  justify-center gap-20 mt-8">


    <div className=" flex justify-center ">



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

<label className="inline-flex items-center cursor-pointer">
  <input name="active" type="checkbox"  className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">activate post</span>
</label>


<button type="submit" className="btn-primary bg-lime-300 text-slate-900 p-2 rounded-md">Add Job</button>

    </form>
    </div>
    <div className="flex flex-wrap p-7 gap-4 ">

    {
           jobs.map((job,idx) =>{
               return (
                <div className="p-3 bg-slate-400 rounded-md">

                <div key={job.id}>

                    <p>{job.jobTitle}</p>
                  <p>{  job.active == true ? <p>active</p> : <p>down</p> }</p>  


                    
                    
                </div>
                </div>

               )

            })
        }      
    </div>
    </div>
                    




    
    </>
 
  );
}
