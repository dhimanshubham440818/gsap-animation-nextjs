import React, { useRef, useLayoutEffect } from 'react'
import gsap from "gsap";
import style from './style.module.css'
export default function GsapContext() {
    const rootRef = useRef();
    const eleRef= useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // access by rootRef
            gsap.to(".box11", {
                rotate:360,
                duration:3,
                yoyo:true,
                repeat:-1,
                ease: "bounce.out",
                borderRadius:100
            });
            // access by direct ref 
            gsap.to(eleRef.current, {
                rotate:-360,
                repeat:-1,
                duration:3,
                yoyo:true,
                borderRadius:100    
            });
            gsap.to(".box233", {
                scale:0,
                duration:3,
                yoyo:true,
                repeat:-1,
            });
        }, rootRef)
        return ()=>{
            ctx.revert()
        }
    }, [])
    return (
        <React.Fragment>
            <div className={style.body} ref={rootRef}>
                <div className="">
                    <h1 className={style.heading}>Easy Way to Handle Multiple Ref With Gsap Context And infinity time Animation</h1>
                    <div className={style.container}>
                        <div className={`${style.box} box11`} >
                        <p>Access By root Ref and ease effect</p>
                        </div>
                        <div className={`${style.box} ${style.box2} box233`}>infinity repeat with yoyo and repeat</div>
                        <div className={style.box} ref={eleRef}>
                            <p>Access By direct Ref</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}