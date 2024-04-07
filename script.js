gsap.from("nav h1,nav li,nav button",{
    y:-100,
    stagger:.1,
    duration:.8,
    opacity: 0,
})

gsap.from(".me div,.me h2,.me button",{
    x:-200,
    opacity:0,
    stagger:.2,
    // ease: "bounce.out"
    // ease:"power1.inOut"
})

gsap.from(".meimg,.contact-float",{
    opacity:0,
    // scale:0,
    // rotation:360,
    y:"-90vh",
    // x:200,
    duration:1,
    // ease:"bounce.out",
    stagger:.2
})

let start=window.performance.now()
console.log("start",start);

window.addEventListener("DOMContentLoaded",(e)=>{
    console.log(e);
    let end = window.performance.now()
    console.log("end", end);
})

window.addEventListener("load",(e)=>{
    console.log(e);
})

// var loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
var loadTime = window.performance.timing.domComplete - window.performance.timing.domLoading;
// loadTime/1000
console.log(loadTime);