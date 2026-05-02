"use client";
import { useEffect, useState } from "react";
import { authClient } from "../lib/auth-client";
import Image from "next/image";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";;

const MyProfilePage = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getSession = async () => {
      const { data } = await authClient.getSession();
      setUser(data?.user || null);
    };
    getSession();
  }, []);
const router = useRouter();
  return (
    <div className="bg-linear-to-r from-[#D4924A] to-[#b0713298]">
      <div className="my-10 container lg:w-full w-[90%] mx-auto space-y-6">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Image
              src={user?.photo || "https://i.ibb.co.com/xqykWXq5/avatar-15.png"}
              width={100}
              alt="Profile picture"
              height={100}
              className="border border-black rounded-full"
            ></Image>
            <div>
              <p className="text-xl font-bold">{user?.name}</p>
              <p className="text-[#2A1508]">{user?.email}</p>
            </div>
          </div>
          <div>
            <button
             onClick={() => router.push("/my-profile/edit")}
             className="btn rounded-3xl  lg:w-25 lg:h-10 font-bold bg-transparent hover:border border-[#2A1508] hover:border-white  hover:text-white "><FaEdit></FaEdit>Edit</button>
          </div>
        </div>

        <div>
            <h2 className="text-2xl mb-4 font-bold">Account Details</h2>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Image URL: {user?.image}</p>
            
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
