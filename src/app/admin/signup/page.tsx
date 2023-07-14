'use client'
import { supabase } from "@/app/page";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {};
function signUp({}: Props) {
    const router = useRouter();
    const [ userEmail, setUserEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function signUp(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
       const {data, error} = await supabase.auth.signInWithPassword({email: userEmail, password: password})
       if(data) {
        console.log(data);
        router.push("/blog")


       }
       if(error) {
        console.log(error);
       }

    }
  return <div className=" py-20">
    <form onSubmit={signUp} className=" flex space-y-3 flex-col items-center">
        <h1 className=" font-bold ">Sign Up</h1>
        <input type="email" onChange={(e) => setUserEmail(e.target.value)} placeholder="Email Address" className=" outline-none border p-4 w-[320px]" required ></input>
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" minLength={8} className=" outline-none border p-4 w-[320px]" required ></input>
    <button type="submit" className=" bg-orange text-white p-4"> Sign Up </button>
    </form>

    
  </div>;
}
export default signUp;
