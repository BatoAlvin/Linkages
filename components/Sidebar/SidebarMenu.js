import React, { useState } from "react";
// import SidebarTitle from "./SidebarTitle";
import { lms } from "./SidebarUtilities";
import styles from "../../styles/Sidebar.module.css";
import Image from "next/image";
import logo from "../../public/outboxedu logo.png";
import SidebarItems from "./SidebarItems";

function SidebarMenu({ menu }) {
  return (
    <div className={styles.left}>
      <div className = {styles.Logo}>
      <Image src = {logo} width = {100} height = {90} alt = "edu logo"/>
      </div>
      <SidebarItems list={lms} />
    </div>
  );
}

export default SidebarMenu;
