"use client";

import Link from 'next/link';
import styles from "./page.module.css";
import {signIn,signOut,useSession} from 'next-auth/react';



export default function Home() {

  const {data: session}=useSession();
  console.log(session);
  if(session){
        return(
          <>
          <p>You are signed in as {session.user.email}</p>
          <Link href='/dashboard' email={session.user.email}>Dashboard</Link>
          <button onClick={()=>{signOut()}}>SignOut</button>
          </>
        )
      }

  return (
    <div className={styles.page}>
      <p>Please ! SignIn</p>
      <button onClick={()=>{signIn()}}>SignIn</button>
      <Link href='/home'>home</Link>
      {/* <img src={session.user.image} alt="userImage"></img> */}
    </div>
  );
}



 