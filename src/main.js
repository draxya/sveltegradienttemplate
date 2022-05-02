import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

	gsap.from(".vector-line", {
		duration: 5,
		opacity: 0,
		stagger: 0.2,
		ease: "elastic",
		yoyo: true,
		repeat: -1,
	});

	gsap.from(".vector-line", {
		stagger: 0.2,
		duration: 5,
		rotate: 180,
		transformOrigin: "center",
		yoyo: true,
		repeat: -1,
	});
	
export default app;