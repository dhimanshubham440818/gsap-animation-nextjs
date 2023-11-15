import React, {useRef, useLayoutEffect} from 'react'
import gsap from "gsap";
import style from './style.module.css'
export default function CmpMountAnimation() {
   const myref= useRef();
    useLayoutEffect(()=>{
        gsap.to(myref.current,{
            x:800,
            duration:5,
        })
   },[])
    return (
        <React.Fragment>
            <div className={style.body}>
                <div className="">
                    <h1 className={style.heading}>Animation When Componet Mount</h1>
                    <div className={style.container}>
                        <div className={style.box} ref={myref}></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}