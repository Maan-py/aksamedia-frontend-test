import { useState } from "react";
import { saveToLocalStorage } from "../utils";

interface Props {
  user: { name: string; username: string };
  setUser: (user: { name: string; username: string }) => void;
}

export default function EditProfile({ user, setUser }: Props) {
  const [newName, setNewName] = useState(user.name);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newName.trim() !== "") {
      setUser({
        ...user,
        name: newName,
      });
      saveToLocalStorage(user);
    } else {
      setError("Please fill the new name!");
    }
  }

  return (
    <div className="bg-[#eff3fa] flex p-5 items-center min-h-[calc(100vh-150px)] justify-center">
      <form onSubmit={handleSubmit} className="bg-white border w-full  md:w-[700px] rounded-lg flex flex-col p-10 border-[#E5E5E5] gap-5">
        <h1 className="font-bold text-3xl font-sans">Edit Profile</h1>
        <p className="text-red-600">{error}</p>
        <div className="flex flex-col gap-5 mt-2 w-full">
          <div className="relative">
            <img className="absolute left-3 top-3" src="/sms.svg" alt="username" />
            <input className="border border-[#E5E5E5] rounded-3xl p-3 pl-12 w-full" type="text" placeholder="Write your new name" value={newName} onChange={(e) => setNewName(e.target.value)} />
          </div>
        </div>
        <div className="flex">
          <button className="bg-[#0d5cd7] p-3 rounded-full justify-center w-full text-white font-bold text-xl font-sans cursor-pointer hover:opacity-80 mt-15">Change Name</button>
        </div>
      </form>
    </div>
  );
}
