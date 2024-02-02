function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

const tl = gsap.timeline();

tl.to(".main", {
  backgroundColor: "#fff",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
    // markers: true,
  },
});

tl.to("nav", {
  color: "#000",
  borderBottom: "1px solid #0000003e",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 100%",
    end: "top 90%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page2-left-text", {
  y: 300,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 60%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page2-left-text h3", {
  opacity: 0,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3",
    start: "top 0",
    end: "top -10%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page2-right-text", {
  y: 600,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2",
    start: "top 0",
    end: "top -100%",
    scrub: 1,
    // markers: true,
    pin: true,
  },
});

tl.from(".page3-elem1-img", {
  height: "50vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-elem1-img",
    start: "top 70%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page3-elem2-img", {
  height: "50vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-elem2-img",
    start: "top 70%",
    end: "top 0%",
    scrub: 1,
    // markers: true,
  },
});

tl.from(".page3-elem3-img", {
  height: "50vh",
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page3-elem3-img",
    start: "top 10%",
    end: "top -50%",
    scrub: 1,
    // markers: true,
  },
});

const page3Elem = document.querySelector(".page3-elem1-img");
const page3ImgCurosr = document.querySelector(".page3-img-cursor1");

page3Elem.addEventListener("mouseenter", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Set the background color
  page3ImgCurosr.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

page3Elem.addEventListener("mousemove", function (dets) {
  gsap.to(".page3-img-cursor1", {
    opacity: 1,
    left: dets.x - 350,
    top: dets.y - 250,
  });
});

page3Elem.addEventListener("mouseleave", function (dets) {
  gsap.to(".page3-img-cursor1", {
    opacity: 0,
  });
});

const page3Elem2 = document.querySelector(".page3-elem2-img");
const page3ImgCurosr2 = document.querySelector(".page3-img-cursor2");

page3Elem2.addEventListener("mouseenter", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Set the background color
  page3ImgCurosr2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

page3Elem2.addEventListener("mousemove", function (dets) {
  gsap.to(".page3-img-cursor2", {
    opacity: 1,
    left: dets.x - 350,
    top: dets.y - 250,
  });
});

page3Elem2.addEventListener("mouseleave", function (dets) {
  gsap.to(".page3-img-cursor2", {
    opacity: 0,
  });
});

const page3Elem3 = document.querySelector(".page3-elem3-img");
const page3ImgCurosr3 = document.querySelector(".page3-img-cursor3");

page3Elem3.addEventListener("mouseenter", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Set the background color
  page3ImgCurosr3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

page3Elem3.addEventListener("mousemove", function (dets) {
  gsap.to(".page3-img-cursor3", {
    opacity: 1,
    left: dets.x - 350,
    top: dets.y - 250,
  });
});

page3Elem3.addEventListener("mouseleave", function (dets) {
  gsap.to(".page3-img-cursor3", {
    opacity: 0,
  });
});
