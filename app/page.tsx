
"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen flex items-center justify-center">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}
        className="text-center max-w-xl px-6">
        <h1 className="text-4xl font-serif mb-4">Discover the instinct that guides you</h1>
        <p className="text-lg mb-8 text-gray-600">A reflective journey into your dominant archetype</p>
        <button onClick={()=>router.push("/intro")}
          className="px-8 py-3 rounded-full bg-[#6B7F6A] text-white">
          Begin
        </button>
      </motion.div>
    </main>
  );
}
