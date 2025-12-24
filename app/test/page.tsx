
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../../utils/questions";
export default function Test() {
  const router=useRouter();
  const [i,setI]=useState(0);
  const [answers,setAnswers]=useState([]);
  const select=(v)=>{
    const a=[...answers,v];
    setAnswers(a);
    if(i===questions.length-1){
      localStorage.setItem("answers",JSON.stringify(a));
      router.push("/processing");
    } else setI(i+1);
  };
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full">
        <p className="mb-4 text-sm text-gray-500">Question {i+1} of {questions.length}</p>
        <h2 className="text-2xl font-serif mb-6">{questions[i].q}</h2>
        {questions[i].options.map(o=>(
          <button key={o} onClick={()=>select(o)}
            className="w-full p-4 mb-3 rounded-xl bg-white shadow">{o}</button>
        ))}
      </div>
    </main>
  );
}
