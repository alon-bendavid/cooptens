import client from "@/graphql/client";
import { useLoginMutation } from "@/graphql/generated/schema";
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
    
  const [login]  = useLoginMutation();



  const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   const formData =new FormData(e.target as HTMLFormElement)
   const formJSON:any = Object.fromEntries(formData.entries());

//    const formJSON: any = Object.fromEntries(formData.entries());
try {
    const res = await login({ variables: { data: formJSON } });
    console.log({ res });
} catch (error:any) {
  console.log(error);  
}finally{
    client.resetStore();
}
    console.log(formJSON);
  }
    return(
<>
<div className="flex justify-center mt-72">
    <h1>Welcome user!</h1>
<form onSubmit={handleSubmit} className="bg-slate-200 p-3 flex flex-col gap-5 max-w-xs ">
<input type="text" name="email" placeholder="Your Email" />
<input type="text" name="password" placeholder="Your password"/>
<button >Submit</button>

</form>
</div>
</>
    );
}