import React from "react";
import LeftTitle from "../../../LeftTitle/LeftTitle";
import LeftMenuCss from "./LeftMenu.module.css";
import ListItems from "../../../LeftListItems/ListItems";
import {opportunity} from '../../../Utilities/listMenu'

function LeftMenu() {
    return (
        <div className={LeftMenuCss.left}>
           <LeftTitle  title = "Job Categories"/> 
           <ListItems list={opportunity}  />
    </div>
  );
}

export default LeftMenu;
