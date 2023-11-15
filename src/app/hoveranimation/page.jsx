import React from 'react'
import gsap from "gsap";
import style from './style.module.css'
export default function HoverGsap() {
    function enter(e){
        gsap.to(e.target, { backgroundColor: 'rgb(241, 241, 97)', rotate: 360, borderRadius:100, cursor:"pointer", duration:3 });  
      }
      function out(e){
        gsap.to(e.target , { backgroundColor: "#28a92b", rotate: -360, borderRadius:0,duration:3});
      }
    return (
        <React.Fragment>
            <div className={style.body}>
                <div className="">
                    <h1 className={style.heading}>Animation on Hover And out</h1>
                    <div className={style.container}>
                        <div className={style.box} onMouseEnter={enter} onMouseLeave={out} ></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}