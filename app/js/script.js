
console.log("Jquery is running.");
$(document).ready(function () {

    $(".headball").append("<h1>Learning to code what I learn...</h1>");

    const tl = gsap.timeline({ defaults: { duration: 3 } });

    tl.from(".headball", { y: -100, opacity: 0})
      .from("hr", { x: 600, opacity: 0, duration: 2 }, "-=2")
      .to("hr", { x:-50, opacity: 0,}, "-=4")
      .from(".myButtons", { y: 30, opacity: 0, stagger: 0.3, duration: 1 }, "-=2")
      .from(".headball h1", {opacity: 0})
      

});
