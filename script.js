let tl = gsap.timeline();
let mt = gsap.to(".loader-box", {
	delay: 0.5,
	rotate: 225,
	duration: 1.4,
	repeat: -1,
	repeatDelay: .5,
	ease: "back.inOut",
	onStart: console.log("Start"),
	onComplete: console.log("Finish")
});

window.onload=()=>{
	mt.pause();
	tl.to(".loader-box", { 
		rotate: 225,
		duration: 1,
		ease: "back.inOut"
	});
};


