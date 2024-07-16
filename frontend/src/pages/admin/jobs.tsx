
  import AdminLayout from "@/components/admin/AdminLayout";
import { useJobQuery} from "@/graphql/generated/schema";


export default function AdminUsers(){
    const {data } = useJobQuery({
        errorPolicy: "ignore",
      });
  console.log(data);
    const jobs = data?.Job || [];
    // console.log(users);
    return (
        <>
        <div>
            test
        </div>
        {
           jobs.map((job,idx) =>{
               return (
                <div key={job.id}>

                    <div>{job.jobTitle}</div>
                    <div>{job.profil}</div>

                    <div>{job.jobDescription}</div>
                    <div>{job.jobType}</div>
                    <div>{job.salaire}</div>
                </div>

               )

            })
        }

        </>
    );
}