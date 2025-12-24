
"use client";
import animals from "../../utils/animals";
import { calculateTotem } from "../../utils/scoringEngine";
import { generatePDF } from "../../utils/pdfGenerator";
export default function Result(){
  const answers=JSON.parse(localStorage.getItem("answers")||"[]");
  const key=calculateTotem(answers);
  const a=animals.find(x=>x.name===key);
  if(!a) return null;
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div id="result-content" className="text-center max-w-2xl">
        <img src={a.image} className="mx-auto mb-6 rounded-2xl"/>
        <h1 className="text-4xl font-serif">{a.name}</h1>
        <p className="italic mb-4">{a.title}</p>
        <p>{a.description}</p>
        <button onClick={generatePDF}
          className="mt-8 px-6 py-3 rounded-full bg-[#6B7F6A] text-white">
          Download Your Totem Report
        </button>
      </div>
    </main>
  );
}
