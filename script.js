var tl = gsap.timeline();
tl.from('nav img,nav ul li, .right a',{
    y:-300,
    duration:1,
    delay:0.5,
    opacity:0.2,
    stagger:0.2,
})
tl.from('.hero h1',{
    x:-300,
    opacity:0,
    stagger:0.2,
})
tl.from('.image1,.image2,.image3,.image4',{
    opacity:0,
    scale:0,
    stagger:0.3,
})
tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
    y:30,
    repeat:-1,
    yoyo:true,
})

