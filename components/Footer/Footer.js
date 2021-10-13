import React from "react";
import styles from "../../styles/Footer.module.css";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Join the community</h2>
      <div className={styles.flex1}>
        <button className={styles.button1}>RECEIVE NEWS</button>
        <button className={styles.button2}>JOIN HERE</button>
      </div>
      <div className={styles.flex2}>
        <div>
          <h4>NAVIGATION</h4>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About us</Link>
          </li>

          <li>
            <Link href="#home">Events</Link>
          </li>
          <li>
            <Link href="#contact">contact us</Link>
          </li>
        </div>
        <div>
          <h4>WHAT WE DO</h4>
          <li>
            <Link href="#home">Teach</Link>
          </li>
          <li>
            <Link href="#about">Mentor</Link>
          </li>
          <li>
            <Link href="#about">Develop</Link>
          </li>
        </div>
        <div>
          <h4>LEGAL</h4>
          <li>
            <Link href="#home">General info</Link>
          </li>
          <li>
            <Link href="#about">Privacy policy</Link>
          </li>
        </div>
        <div>
          <h4>TALK TO US</h4>
          <li>
            <Link href="#home">General info</Link>
          </li>
          <li>
            <Link href="#about">Privacy policy</Link>
          </li>
        </div>
      </div>
      <div className={styles.copysection}>
        <Link href="/" className={styles.logo}>
          <a>
             {/* <Image src={logo} alt="logo" width={100} height={40} /> */}
          </a>
        </Link>
        <div>
          <p style={{ fontSize: "14px" }}>
            © 2021 OutBox EDU. All Rights Reserved.{" "}
          </p>
        </div>
        <div className={styles.social}>
          <a href="https://facebook.com/">
            <FiFacebook />
          </a>
          <a href="https://linkedin.com/">
            <FiLinkedin />
          </a>
          <a href="https://linkedin.com/">
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;