import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/SignUp.module.css";
import Image from "next/image";


export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>

        <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.outbox_details}>
          <div className={styles.details}>
            <h1>Outbox Edu Linkages</h1>
            <p>Sign up to manage your Outbox Edu Linkages</p>
           
          </div>
        </div>
        <div className={styles.signup_details}>
          <div className={styles.signup}>
            <h1>Signed In as {session.user.name}</h1>
            <img src={session.user.image}/>
            <div className={styles.form}>
              <button onClick={() => signOut()}>Sign Out</button>
              


            </div>
          </div>
        </div>
      </div>
    </div>

      </>
    )
  }
  return (
    <>
      <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.outbox_details}>
          <div className={styles.details}>
            <h1>Outbox Edu Linkages</h1>
            <p>Sign up to manage your Outbox Edu Linkages</p>
           
          </div>
        </div>
        <div className={styles.signup_details}>
          <div className={styles.signup}>
            <h1>Not Signed In</h1>
            <div className={styles.form}>

              <button onClick={() => signIn()}>Sign Up</button>
              


            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}