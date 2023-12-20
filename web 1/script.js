const video = document.querySelector(".img-col video");

video.addEventListener("mouseenter",() =>{
    video.play();
});
video.addEventListener("mouseleave",() =>{
    video.pause();
});



