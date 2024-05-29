import AdminLayout from "@/components/admin/AdminLayout";
import { useUsersQuery } from "@/graphql/generated/schema";

export default function AdminUsers(){
    const { data } = useUsersQuery();
    const users = data?.users || [];
    // console.log(users);
    return (
        <>
        {
            users.map((e ,index) =>{
                // console.log(e);
               return <div key={e.id}>
                 {e.nickname} 
                <h1>Nickname:</h1>
                <h4> 
                User id:
                </h4>
            {e.id} 
            <h4>
            User id:
            </h4>
                 {e.email} 


                </div>
            })
        }
            {/* {users.map((e, index) => {
                console.log(e);
                return <div key={index}>{e.email}</div>; // Adjust the key and rendering as needed
            })} */}
        </>
    );
}