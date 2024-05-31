import Layout from "@/components/Layout";
import client from "@/graphql/client";
import { useLoginMutation, useProfileQuery } from "@/graphql/generated/schema";
import { FormEvent, useState } from "react";


function validatePassword(p: string) {
    let errors = [];
    if (p.length < 8)
      errors.push("Le mot de passe doit faire minimum 8 caractères");
    if (p.search(/[a-z]/) < 0)
      errors.push("Le mot de passe doit contenir une minuscule");
    if (p.search(/[A-Z]/) < 0)
      errors.push("Le mot de passe doit contenir une majuscule");
    if (p.search(/[0-9]/) < 0)
      errors.push("Le mot de passe doit contenir un chiffre");
  
    return errors;
  }


export default function Login(){
  const [error, setError] = useState("");
  const [login]  = useLoginMutation();
  const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  });

// console.log(currentUser?.profile.email);
  const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
    setError("");

    e.preventDefault();
   const formData =new FormData(e.target as HTMLFormElement)
   const formJSON:any = Object.fromEntries(formData.entries());
   const errors = validatePassword(formJSON.password);
   if (errors.length > 0) return setError(errors.join("\n"));
//    const formJSON: any = Object.fromEntries(formData.entries());
try {
    const res = await login({ variables: { data: formJSON } });
    
    console.log({ res });
} catch (err:any) {
  setError(err);  
  // setError("Identifiants incorrects");
  console.log(err);

}finally{
    client.resetStore();
}
    console.log(formJSON);
  }
    return(
<Layout pageTitle="Login page">

<div className="">
    <h1>Welcome user!</h1>
<form onSubmit={handleSubmit} className="bg-slate-200 p-3 flex flex-col gap-5 max-w-xs rounded-lg">
<input type="email" name="email" placeholder="Your Email" />
<input type="password" name="password" placeholder="Your password"/>
<button  >Submit</button>
{/* {error !== "" && <pre className="text-red-700">{error}</pre>} */}
</form>
</div>
    
</Layout>  
    );
}