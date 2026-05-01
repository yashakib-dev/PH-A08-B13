import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className="  bg-[#FFF8F1]  ">
      <div className="flex lg:w-full w-[90%]  container mx-auto justify-center min-h-screen  items-center">
        <fieldset className="fieldset space-y-3 bg-base-100 shadow-2xl border-[#D4924A]/50  rounded-3xl w-120 h-155 border p-15">
        
            <h2 className="text-5xl font-semibold text-center">Welcome Back</h2>
            <p className="text-lg text-center text-[#D4924A]">Sign in to your SunCart account</p>
        

        <div>
            <label className="label  text-[16px]">Email</label>
        <input type="email" className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full" placeholder="Enter Your Email" />
        </div>

        <div>
            <label className="label  text-[16px]">Password</label>
        <input type="password" className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full" placeholder="Enter Your Password" />
        </div>

        <button className="btn py-6 text-lg rounded-3xl bg-linear-to-r from-[#D4924A] to-[#B07232] mt-4 hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e]">Login</button>
        <div className="divider">OR</div>
        <button className="btn bg-transparent py-6 rounded-3xl"><FcGoogle className="w-5 h-5"></FcGoogle>Continue with Google</button>
        <p className="text-center text-sm text-[#D4924A]">Don't have an account? <Link href={'/register'} className="text-[#B07232] underline " >Register now</Link> </p>
      </fieldset>
      </div>
    </div>
  );
};

export default LoginPage;
