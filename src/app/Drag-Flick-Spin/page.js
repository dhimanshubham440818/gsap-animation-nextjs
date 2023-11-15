import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import style from './style.module.css'
import { Draggable } from "gsap/Draggable";
export default function DragFlickSpin() {
    gsap.registerPlugin(Draggable);
    useLayoutEffect(() => {        
        Draggable.create(".box111", { bounds: ".container" });
        Draggable.create(".box22", { inertia: true, bounds: ".container" });
        Draggable.create(".box33", { inertia: true, type: "rotation", bounds: ".container" });
    }, [])
    return (
        <React.Fragment>
            <div className={`${style.body} container`}>
                <div className="">
                    <h1 className={style.heading}>Element Drag Flick And Spin</h1>
                    <div className={style.container}>
                        <div className={`${style.box} box111`} >
                            Drag Me
                        </div>
                        <div className={`${style.box} box22`} >
                            Flick Me
                        </div>
                        <div className={`${style.box} box33`}>
                            Spin
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}