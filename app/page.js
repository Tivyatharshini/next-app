"use client";

import Link from 'next/link';
import styles from "./page.module.css";
import {signIn,signOut,useSession} from 'next-auth/react';



export default function Home() {

  const {data:session}=useSession();
  
  
  if(session){
    console.log(session.user.name);
        return(
          <>
          
          {/* <a href='/dashboard' email={session.user.email}>Dashboard</a> */}
          <h2>you are logged in as {session.user.email}</h2>
          <button onClick={()=>{signOut()}}>SignOut</button>
          </>
        )
      }

  return (
    <div className={styles.page}>
      <p>Please! SignIn</p>
      <button onClick={()=>{signIn()}}>SignIn</button>
      {/* <Link href='/home'>DashBoard</Link> */}
      {/* <img src={session.user.image} alt="userImage"></img> */}
    </div>
  );
}



 