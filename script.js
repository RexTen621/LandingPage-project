var crsr=document.querySelector("#cursor")
var crsrBlur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){

    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    crsrBlur.style.left=dets.x+-140+"px";
    crsrBlur.style.top=dets.y-140+"px";

    var navAll=document.querySelectorAll("#navbar h4")
    navAll.forEach(function(element){
       element.addEventListener("mouseenter",function(){
        crsr.style.scale = 1.5
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
       })

       element.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95CE11"
        crsr.style.backgroundColor="#95CE11"
       })

    })
    
    


})



gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        
        start:"top -10%",
        end:"end -10%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        strat:"top -40%",
        end:"end -90%",
        scrub:1,
    }

})
gsap.from("#about-us img,#about-us-in",{
    y:60,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    
    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
       
        
        strat:"top 50%",
        end:"top 58%",
        scrub:3,
    }

})
gsap.from(".card",{
    scale:0.7,
    opacity:0.7,
    
    
    
    
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 55%",
        scrub:1,

    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:3,

    }
})
gsap.from("#colon2",{
    y:40,
    x:50,
    duration:2,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 85%",
        scrub:3,

    }
})
gsap.from("#page4 h1",{
    scale:0.5,
    opacity:0.5,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})

