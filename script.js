


gsap.utils.toArray('.proj1, .proj2, .proj3').forEach((img, index) => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%",
                    toggleActions: "play none none reset"
                },
                opacity: 0,
                scale: 0.8,
                duration: 1,
                delay: index * 0.3
            });
        });

        // Scroll Indicator with Progress Bar
        const progressBar = document.createElement('div');
        progressBar.style.position = 'fixed';
        progressBar.style.top = 0;
        progressBar.style.left = 0;
        progressBar.style.height = '4px';
        progressBar.style.background = '#00ffcc';
        progressBar.style.width = '0%';
        progressBar.style.zIndex = 999;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });

        // Parallax Mousemove Effect
        document.querySelector(".page1").addEventListener("mousemove", (e) => {
            gsap.to(".box", {
                x: (e.clientX - window.innerWidth / 2) * 0.02,
                y: (e.clientY - window.innerHeight / 2) * 0.02,
                duration: 0.5
            });
        });

        // Typing Animation Effect
        const typeText = "Creative Coder | UI/UX Designer | Developer";
        const leftPara = document.querySelector(".left p");
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < typeText.length) {
                leftPara.textContent += typeText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        leftPara.textContent = "";
        typeWriter();
        var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page2",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})
tl.to(".box",{
    top: "120%",
    left: "3%",
    width: "160vh",
    height:"70vh", // or "100%", etc.
    duration: 1
}, 'orange')
tl.to(".box-image", {
    opacity: 0,
    duration: 0.5,
    pointerEvents: "none",
    // optional: disables clicks
  }, 'orange');

  tl.from(".para",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'orange')

tl.from(".page2-img",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'orange')
tl.from(".page2-img2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'orange')
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".page3",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})