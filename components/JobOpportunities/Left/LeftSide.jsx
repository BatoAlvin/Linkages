import React from "react";
import Logo from "../../Logo/Logo";
import LeftMenu from "./LeftMenu/LeftMenu";
import leftCss from "../../../styles/body/LeftSide.module.css";

function LeftSide() {
  return (
    <section className={leftCss.left}>
      <Logo />
      <LeftMenu />
      <div className={leftCss.left_box}></div>
    </section>
  );
}

export default LeftSide;
