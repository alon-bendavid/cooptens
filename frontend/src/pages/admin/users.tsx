import AdminLayout from "@/components/admin/AdminLayout";
import { useUsersQuery } from "@/graphql/generated/schema";


// console.log( useUsersQuery );
export default function AdminUsers(){
    const { data, refetch } = useUsersQuery();
    const users = data?.users || [];
    console.log(users);
    return (

        <h1>test</h1>
);
}