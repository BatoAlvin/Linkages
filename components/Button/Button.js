import React from 'react'
import ButtonModalCss from "../../styles/Button.module.css";
import Link from 'next/link';



export function SimplerButton(props) {
    return (
        <button type="submit" style={{ backgroundColor: '#04739B' }} className="btn  rounded-0 border-0 w-100 text-light my-2" onClick={props.onClick}>{props.text}</button>
    )
}

export function ButtonFilled(props) {
    return (
        <div className={ButtonModalCss.buttonfilled} onClick={props.onClick}>
            <button>{props.text}</button>
        </div>
    )
}
export function ButtonOutlined(props) {
    return (
        <div className={ButtonModalCss.buttonOutlined} onClick={props.onClick}>
             {/* <Link href="https://drive.google.com/file/d/18jt5lv_GNfFr_oBAGb_5kC42KmRYkAEn/view">
                <a target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>  */}
                <button>
          
                {props.text}
                </button>
                {/* </a>
            </Link> */}
        </div>
    )
} 