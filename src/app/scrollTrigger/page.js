import React, { useRef, useEffect } from 'react'
import gsap from "gsap";
import style from './style.module.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function ScrollTriggerAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        // gsap.from  works only when when user scroll down...
        gsap.to(".box123", {
            duration: 1,
            x:100,
            borderRadius:100,
            rotation: 360,
            scrollTrigger: {
                trigger: '.box123',
                scrub: 0.1,
                start: "top 70%", // when the top of the trigger hits the top of the viewport
                end: "top 20%",
                markers: true,
            }
        });
    }, [])

    return (
        <React.Fragment>
            <div className={style.body}>
                <div className="">
                    <h1 className={style.heading}>Scroll Trigger Event</h1>
                    <div className={style.container}>
                        <div className={`${style.box100} box123`}>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}