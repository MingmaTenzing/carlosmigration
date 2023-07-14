
'use client'

import { useEffect } from "react";
import { supabase } from "../page";

type Props = {}
function admin({}: Props) {

    useEffect(() => {
        async function checkUser(){
          const {data : {user}} = await supabase.auth.getUser();
          if (user) {
            console.log(user)
          }
          else{
            console.log('user not logged in')
          }
    
        }
        checkUser();
    
      },[])


  return (
    <div>page</div>
  )
}
export default admin;