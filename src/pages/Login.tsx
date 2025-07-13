import React, { useState } from "react";
import { useNavigate } from "react-router";
import type User from "../types";
import { getFromLocalStorage, saveToLocalStorage } from "../utils";

const storedUser = getFromLocalStorage();

const STATIC_USER: User = {
  name: storedUser?.name || "Luqmaan",
  username: "admin",
  password: "admin123",
};

interface Props {
  setUser: (user: { username: string; name: string }) => void;
}

export default function Login({ setUser }: Props) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.username === STATIC_USER.username && form.password === STATIC_USER.password) {
      const user = {
        name: STATIC_USER.name,
        username: STATIC_USER.username,
      };
      setUser(user);
      saveToLocalStorage(user);
      navigate("/");
    } else {
      setError("Username or password is not correct!");
      setForm({
        username: "",
        password: "",
      });
    }
  }
  return (
    <div className="bg-[#eff3fa] flex w-screen min-h-screen p-5 items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white border w-full h-full md:w-[700px] rounded-lg flex flex-col p-10 border-[#E5E5E5] gap-5">
        <h1 className="font-bold text-3xl font-sans">Login</h1>
        <p className="text-red-600">{error}</p>
        <div className="flex flex-col gap-5 mt-2 w-full">
          <div className="relative">
            <img className="absolute left-3 top-3" src="/sms.svg" alt="username" />
            <input className="border border-[#E5E5E5] rounded-3xl p-3 pl-12 w-full" type="text" placeholder="Write your username" value={form.username} onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))} />
          </div>
          <div className="relative">
            <img className="absolute left-3 top-3" src="/lock.svg" alt="username" />
            <input
              className="border border-[#E5E5E5] rounded-3xl p-3 pl-12 w-full"
              type={isVisible ? "text" : "password"}
              value={form.password}
              placeholder="Write your password"
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            />
            <img className="absolute right-3 top-3 cursor-pointer" src="/eye.svg" alt="username" onClick={() => setIsVisible(!isVisible)} />
          </div>
        </div>
        {/* <a href="#" className="text-gray-500 underline w-fit">
          Forgot Password
        </a> */}
        <div className="flex">
          <button className="bg-[#0d5cd7] p-3 rounded-full justify-center w-full text-white font-bold text-xl font-sans cursor-pointer hover:opacity-80 mt-15">Login to My Account</button>
        </div>
      </form>
    </div>
  );
}
