"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "../lib/auth-client";

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const handleLogin = async(data) => {
    const { email, password } = data;
    const { data:res, error } = await authClient.signIn.email({
    email:email,
    password: password,
    rememberMe: true,
    callbackURL: "/",
});
    if (error) {
      toast.error(error.message);
    }
    if(res){
      toast.success("Login successful")
    }
  };

    const handleGoogleLogin = async () => {
    const {data:res, error} = await authClient.signIn.social({
      provider: "google",
    });
        if (error) {
      toast.error(error.message);
    }
    if(res){
      toast.success("Login successful")
    }
    
  };

  return (
    <div className="  bg-[#FFF8F1]  ">
        <form className="flex lg:w-full w-[90%]  container mx-auto justify-center min-h-screen  items-center" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset space-y-2 bg-base-100 shadow-2xl border-[#D4924A]/50  rounded-3xl w-120 h-160 border p-15">
            <h2 className="lg:text-5xl text-3xl font-semibold text-center">Login</h2>
            <p className="lg:text-lg text-[16px] text-center text-[#D4924A]">
              Login to your SunCart account
            </p>

            <div>
              <label className="label  text-[16px]">Enter your email</label>
              <input
                type="email"
                className="input text-[#2A1508] mt-2 bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
                placeholder="Enter Your Email"
                {...register("email",{ required:'Email is required' })}
              />
               {errors.email && <span className="text-red-500  ">{errors.email.message}</span>}
            </div>

            <div>
              <label className="label  text-[16px]">Enter your password</label>
              <input
                type="password"
                className="input text-[#2A1508] mt-2 bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
                placeholder="Enter Your Password"
                {...register("password", { required:'Password is required' })}
              />
              {errors.password && <span className="text-red-500  ">{errors.password.message}</span>}
            </div>

            <button className="btn py-6 text-lg rounded-3xl bg-linear-to-r from-[#D4924A] to-[#B07232] mt-4 hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e]">
              Login
            </button>
            <div className="divider">OR</div>
            <button
            onClick={handleGoogleLogin}
             className="btn bg-transparent py-6 rounded-3xl">
              <FcGoogle className="w-5 h-5"></FcGoogle>Continue with Google
            </button>
            <p className="text-center text-sm text-[#D4924A]">
              Don't have an account?{" "}
              <Link href={"/register"} className="text-[#B07232] underline ">
                Register now
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>

  );
};

export default LoginPage;
