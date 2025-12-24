
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Intro() {
  const router = useRouter();
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const submit=()=>{
    localStorage.setItem("user",JSON.stringify({name,age}));
    router.push("/test");
  };
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full">
        <h2 className="text-2xl font-serif mb-6">Before we begin</h2>
        <input placeholder="Your name" value={name}
          onChange={e=>setName(e.target.value)}
          className="w-full mb-4 p-3 rounded border"/>
        <input placeholder="Your age" type="number" value={age}
          onChange={e=>setAge(e.target.value)}
          className="w-full mb-6 p-3 rounded border"/>
        <button disabled={!name||!age} onClick={submit}
          className="w-full py-3 rounded-full bg-[#6B7F6A] text-white">
          Continue
        </button>
      </div>
    </main>
  );
}
