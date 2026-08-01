import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const reveal = (selector)=>{

gsap.from(selector,{

opacity:0,

y:100,

duration:1,

scrollTrigger:{

trigger:selector,

start:"top 80%"

}

})

}