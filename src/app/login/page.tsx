"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { supabase } from "../../../components/supabase/supabaseclient";
import { useAppDispatch } from "../../../redux/hooks";
import { signInUser, singOutUser } from "../../../redux/userSlice";

type Props = {};
function Login({}: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function signIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: userEmail,
      password: password,
    });
    if (user) {
       dispatch(signInUser({
        email: user.email!,
        id: user.id!,
       }))
      router.push("/admin");
    }
    if (error) {
      window.alert(error.message);
    }
  }
  return (
    <>
      <form
        onSubmit={signIn}
        className=" py-20 flex space-y-3 flex-col items-center"
      >
        <h1 className=" text-3xl font-bold ">Sign in to your account</h1>
        <input
          type="email"
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Email Address"
          className=" outline-none border p-4 w-[320px]"
          required
        ></input>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          minLength={8}
          className=" outline-none border p-4 w-[320px]"
          required
        ></input>
        <button type="submit" className=" bg-orange text-white p-4">
          {" "}
          Sign In{" "}
        </button>
      </form>
    </>
  );
}
export default Login;
