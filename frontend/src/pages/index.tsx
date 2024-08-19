// import RecentAds from "@/components/RecentAds";
import Layout from "@/components/Layout";
import art01 from "../assets/undraw_absorbed_in_re_ymd6.svg";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout pageTitle="Acceuil">
        <div className="flex justify-center ">
          <video
            className="relative"
            src="/images/vid.mp4"
            autoPlay={true}
            muted={true}
            loop
          ></video>

          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="max-w-md text-center  absolute  text-white top-24">
            <h1 className="mb-5 text-2xl font-bold">
              Cooptens, créateur d'opportunités
            </h1>
            <p className="mb-5 hidden md:flex">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className=" flex justify-evenly">
              <Link href={"/candidants"}>
                <button className="bg-primary p-1 px-3 rounded-lg ">
                  Candidants
                </button>
              </Link>
              <Link href={"/expertise"}>
                <button className="bg-primary p-1 px-3 rounded-lg ">
                  Entreprises
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Bienvenue ! Trouvez les meilleurs talents ou découvrez des
                opportunités professionnelles passionnantes. Explorez nos offres
                et connectez-vous dès aujourd'hui!
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
