import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import style from './style.module.css'
export default function Stagger() {
    const rootRef =useRef();
    useLayoutEffect(() => {
        gsap.to('.box',{
            y:-50,
            duration:3,
            delay:1,
            stagger:1
        })
    }, [])
    return (
        <React.Fragment>
            <div className={style.body} ref={rootRef}>
                <div className="">
                    <h1 className={style.heading}>Stagger helps to controll multi selected element animated one by one</h1>
                    <div className={style.container}>
                        <div className={`${style.box} box`} >
                        <p>1</p>
                        </div>
                        <div className={`${style.box} box`}>2</div>
                        <div className={`${style.box} box`}>
                            <p>3</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}