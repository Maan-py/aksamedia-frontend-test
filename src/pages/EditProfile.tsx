import { useState } from "react";

interface Props {
  user: { name: string; username: string };
  setUser: (user: { name: string; username: string }) => void;
}

export default function EditProfile({ user, setUser }: Props) {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();

    if (newName.trim() !== "") {
      setUser({
        ...user,
        name: newName,
      });
    } else {
      setError("Nama baru tidak boleh kosong");
    }
  }

  return (
    <div className="bg-[#eff3fa] flex w-screen min-h-screen p-5 items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white border w-full h-full md:w-[700px] rounded-lg flex flex-col p-10 border-[#E5E5E5] gap-5">
        <h1 className="font-bold text-3xl font-sans">Change Name</h1>
        <p className="text-red-600">{error}</p>
        <div className="flex flex-col gap-5 mt-2 w-full">
          <div className="relative">
            <img className="absolute left-3 top-3" src="/sms.svg" alt="username" />
            <input className="border border-[#E5E5E5] rounded-3xl p-3 pl-12 w-full" type="text" placeholder="Write your new name" value={user.name} onChange={(e) => setNewName(e.target.value)} />
          </div>
        </div>
        <div className="flex">
          <button className="bg-[#0d5cd7] p-3 rounded-full justify-center w-full text-white font-bold text-xl font-sans cursor-pointer hover:opacity-80 mt-15" onClick={handleSubmit}>
            Change Name
          </button>
        </div>
      </form>
    </div>
  );
}
