import React, {useState} from "react";
import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";
import YouTubeIcon from '@material-ui/icons/YouTube';

function SidebarItems(props) {
  const [color,setColor] = useState({black:false});
  const changeStyle = () =>{
    setColor({black:true})
  }
  let linkClass = color.black ? "activeLink" : "notActive";
  return (
   
    <div className={styles.list}>
      <ul> {props.list.map((menuItem, index)=> (
          <li key ={index} className = {linkClass}>
          <Link   href={menuItem.link} >
            <a  onClick = {changeStyle}>{menuItem.icon}    {menuItem.list}</a>
            </Link>
        </li>
         )
        )} 
      </ul>
      <div className = {styles.eduYoutubeChannel}>
        <h4>Subscribe to our Youtube Channel</h4>
        <Link href='https://www.youtube.com/c/OutboxCoUg/' passHref={true}>
        <YouTubeIcon style= {{fill: '#A82E2E',fontSize: '40px'}}/>
        </Link>
      </div>
    </div>
  );
}

export default SidebarItems;