import styles from "../styles/SignUp.module.css";
import Image from "next/image";
// import logo from "../../public/outboxedu logo.png";

const signup = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.outbox_details}>
          <div className={styles.details}>
            <h1>Outbox Edu Linkages</h1>
            <p>Sign up to manage your Outbox Edu Linkages</p>
            {/* <Link href="/" className={styles.logo}>
                         <a>
                          <Image
                         loader={({ src, width, quality }) => {
                        return `${src}`;
                         }}
                         src={logo}
                         alt="logo"
                         width={80}
                         height={80}
                         />
                        </a>
                        </Link> */}
          </div>
        </div>
        <div className={styles.signup_details}>
          <div className={styles.signup}>
            <h1>Sign Up</h1>
            <div className={styles.form}>
              <input placeholder="Enter your Email"></input>
              <input placeholder="Enter your Password"></input>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
