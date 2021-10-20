import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import logo from "../../public/outboxedu logo.png";
import Link from "next/link";
import { FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Join the community</h2>
      <div className={styles.flex1}>
        <button className={styles.button1}>Receive News</button>
        <button className={styles.button2}>Join Here</button>
      </div>
      <div className={styles.flex2}>
        <div > 
          <h4>NAVIGATION</h4>
          <li>
            <Link href="#home">Enrollment</Link>
          </li>
          <li>
            <Link href="#about">Linkages</Link>
          </li>

          <li>
            <Link href="#home">What we do</Link>
          </li>
          <li>
            <Link href="#contact">Events</Link>
          </li>
          <li>
            <Link href="#contact">Learning</Link>
          </li>
        </div>
        <div>
          <h4>WHAT WE DO</h4>
        </div>
        <div>
          <h4>LEGAL</h4>
          <li>
            <Link href="#home">General info</Link>
          </li>
          <li>
            <Link href="#about">Terms of Use</Link>
          </li>
          <li>
            <Link href="#about">Privacy policy</Link>
          </li>
        </div>
        <div>
          <h4>TALK TO US</h4>
          <li>
            <Link href="#home">support@outbox.co.ug</Link>
          </li>
          <li>
            <Link href="#about">Facebook</Link>
          </li>
          <li>
            <Link href="#about">LinkedIn</Link>
          </li>
          <li>
            <Link href="#about">Twitter</Link>
          </li>
        </div>
      </div>
      <div className={styles.copysection}>
        <Link href="/" className={styles.logo}>
          <a>
            <Image
              loader={({ src, width, quality }) => {
                return `${src}`;
              }}
              src={logo}
              alt="logo"
              width={100}
              height={60}
            />
          </a>
        </Link>
        <div>
          <p style={{ fontSize: "1rem" }}>
            © 2021 OutBox EDU. All Rights Reserved.{" "}
          </p>
        </div>
        <div className={styles.social}>
          <a href="https://facebook.com/OutboxEdu">
            <FiFacebook />
          </a>
          <a href="https://linkedin.com/company/outboxuganda/">
            <FiLinkedin />
          </a>
          <a href="https://twitter.com/EduOutbox">
            <FiTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;