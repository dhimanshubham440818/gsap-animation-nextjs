import React, { useRef, useEffect } from 'react'
import gsap from "gsap";
import style from './style.module.css'
export default function TimeLine() {
    const rootRef =useRef();
    useEffect(() => {
        let tl = gsap.timeline();
        tl.to('.box1',{
            scale:0,
            duration:3,
            repeat:-1,
            yoyo:true
        },0)
        .to('.box2',{
            scale:0,
            duration:3,
            repeat:-1,
            yoyo:true
        },3)
    }, [])

    return (
        <React.Fragment>
            <div className={style.body} ref={rootRef}>
                <div className="">
                    <h1 className={style.heading}>timeline helps to controll Multiple animation in synchronized way</h1>
                    <div className={style.container}>
                        <div className={`${style.box} box1`}>
                        <p>1</p>
                        </div>
                        <div className={`${style.box} box2`}>2</div>
                            <p>3</p>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}