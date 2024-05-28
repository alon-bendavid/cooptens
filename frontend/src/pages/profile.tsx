import Layout from "@/components/Layout";
import { useProfileQuery, useSignupMutation } from "@/graphql/generated/schema";
import { FormEvent, useState } from "react";



export default function Profile() {
  const [error, setError] = useState("");
//   const [updateProfile] = useSignupMutation();

const { data: currentUser, client } = useProfileQuery({
    errorPolicy: "ignore",
  }); 
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    try {
    //   const res = await createUser({ variables: { data: formJSON } });
    //   console.log({ res });
    //   alert("Vous etes bien enregistré.e. Merci !");
    } catch (e: any) {
     
      setError("une erreur est survenue");
    }
  };

  if(!currentUser) return 'chargement...'
 
  return (
    <Layout pageTitle="Mon Profil">
      <h1 className="pt-6 pb-6 text-2xl">Mon Profil</h1>

      <form onSubmit={handleSubmit} className="pb-12">
        <div className="flex flex-wrap gap-6 mb-3">


          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="nickname">
              <span className="label-text">Pseudo</span>
            </label>
            <input
              type="text"
              name="nickname"
              id="nickname"
              defaultValue={currentUser.profile.nickname}
              minLength={2}
              maxLength={30}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="avatar">
              <span className="label-text">Avatar</span>
            </label>
            <input
              type="url"
              name="avatar"
              id="avatar"
              defaultValue={currentUser.profile.avatar}

              minLength={2}
              maxLength={30}
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

 

        {error !== "" && <pre className="text-red-700">{error}</pre>}
        <button className="btn btn-primary text-white mt-12 w-full">
 Miss a jour
        </button>
      </form>
    </Layout>
  );
}

