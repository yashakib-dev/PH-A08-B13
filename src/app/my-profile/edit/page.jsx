"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";

const EditProfilePage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await authClient.getSession();
      const user = data?.user;

      if (user) {
        setName(user.name || "");
        setImage(user.photo || "");
      }
    };

    getUser();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        console.error(error);
        return;
      }
      router.push("/my-profile");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto my-20 border border-black/20 p-16 rounded-2xl shadow-xl w-[90%] lg:w-[40%]">
      <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          className="input input-bordered w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button className="btn w-full bg-[#2A1508] text-white">
          Update Information
        </button>
      </form>
    </div>
  );
};

export default EditProfilePage;