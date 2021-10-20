import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navbar.module.css";
import logo from "../../public/outboxedu logo.png";
// import profilePic from "../images/user.png";

export default function Navbar(userProfile) {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a>
            <div className={styles.brand}>
              <Image src={logo} width={100} height={90} alt="edu logo" />
            </div>
          </a>
        </Link>
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/" passHref={true}>
              Jobs
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/createprofile" passHref={true}>
              Create profile
            </Link>
          </li>
          <li className={`${styles.navlink} ${styles.active}`}>
            <Link href="View Profile" passHref={true}>
              My profile
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
