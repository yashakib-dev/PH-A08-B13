"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "../lib/auth-client";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { email, name, image, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Registration successful");
    }
  };

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    
  };

  return (
    <div className="  bg-[#FFF8F1]  ">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="flex lg:w-full w-[90%]  container mx-auto justify-center min-h-screen  items-center"
      >
        <fieldset className="fieldset space-y-3 bg-base-100 shadow-2xl border-[#D4924A]/50  rounded-3xl w-120 h-200 border p-15">
          <h2 className="lg:text-5xl text-3xl font-semibold text-center">
            Create Account
          </h2>
          <p className="lg:text-lg text-[14px] text-center text-[#D4924A]">
            Join SunCart and start your summer
          </p>
          <div>
            <label className="label text-[16px]">Full Name</label>
            <input
              type="text"
              className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
              placeholder="Enter your full name"
              {...register("name", { required: "Your name is required" })}
            />
            {errors.name && (
              <span className="text-red-500  ">{errors.name.message}</span>
            )}
          </div>

          <div>
            <label className="label  text-[16px]">Email</label>
            <input
              type="email"
              className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500  ">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="label  text-[16px]">Photo URL (optional)</label>
            <input
              type="text"
              className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
              placeholder="Enter your photo URL"
              {...register("url")}
            />
          </div>

          <div>
            <label className="label  text-[16px]">Password</label>
            <input
              type="password"
              className="input text-[#2A1508] bg-[#FFF8F1] border-[#D4924A]/50 border rounded-2xl py-6 font-medium w-full"
              placeholder="Enter your Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-500  ">{errors.password.message}</span>
            )}
          </div>

          <button className="btn py-6 text-lg rounded-3xl bg-linear-to-r from-[#D4924A] to-[#B07232] mt-4 hover:bg-linear-to-r hover:from-[#d4914abe] hover:to-[#b071326e]">
            Create Account
          </button>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-transparent py-6 rounded-3xl"
          >
            <FcGoogle className="w-5 h-5"></FcGoogle>Continue with Google
          </button>
          <p className="text-center text-sm text-[#D4924A]">
            Already have an account?{" "}
            <Link href={"/login"} className="text-[#B07232] underline ">
              Login
            </Link>{" "}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
