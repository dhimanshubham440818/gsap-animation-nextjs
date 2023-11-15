'use client'
import DragFlickSpin from "./Drag-Flick-Spin/page";
import GsapContext from "./gsapContext/page";
import HoverGsap from "./hoveranimation/page";
import CmpMountAnimation from "./mountanimation/page";
import ScrollTriggerAnimation from "./scrollTrigger/page";
import Stagger from "./stagger/page";
import TimeLine from "./timeline/page";
export default function Home() {
  return (
    <main>
      <CmpMountAnimation />
      <HoverGsap />
      <GsapContext />
      <Stagger />
      <TimeLine/>
      <DragFlickSpin/>
      <ScrollTriggerAnimation/>
    </main>
  )
}
