
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Processing(){
  const r=useRouter();
  useEffect(()=>{setTimeout(()=>r.push("/result"),2000)},[]);
  return <main className="min-h-screen flex items-center justify-center">
    <p className="animate-pulse">Reading your patterns…</p>
  </main>;
}
