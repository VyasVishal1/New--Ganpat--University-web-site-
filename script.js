let button = document.getElementById("button");


        
        button.addEventListener("click",()=>{
           let nav = document.getElementById("JSNav")
           nav.style.display = "flex";
           nav.style.height = "80vh"
           nav.style.animation = "show 2s"
           
            
        });
        
        let up = document.getElementById("JSNav");
        up.addEventListener("click",()=>{
            let nav = document.getElementById("JSNav")
           nav.style.animation = "Hidenav 2s"
            
            nav.style.height = "0vh"
            
        })





let AddmissionButton = document.getElementById("Addmission");


        
        AddmissionButton.addEventListener("click",()=>{
           let AddmissionDiv = document.getElementById("AddmissionDiv")
           AddmissionDiv.style.display = "block";
           
           AddmissionDiv.style.animation = "AddmissionShow .5s forwards ease-out"
           
           
            
        });
        
        let close = document.getElementById("close");


        
        close.addEventListener("click",()=>{
           let AddmissionDiv = document.getElementById("AddmissionDiv")
           AddmissionDiv.style.display = "none";
           AddmissionDiv.style.animation = "AddmissionHide .5s ease-out "
           
           
            
        });

  
  
     var swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper2 = new Swiper(".mySwiper2", {
      direction: "vertical",
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });





 var swiper = new Swiper(".mySwiperTwo", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    
    
    
    
    var one = document.getElementById("Wone");
    var two = document.getElementById("Wtwo");
    
    one.addEventListener("click",()=>{
        one.style.animation = "Wone 1s forwards ease-out"
        two.style.animation = "Wtwo 1s forwards ease-out"
    })
    
    two.addEventListener("click",()=>{
        one.style.animation = "rWone 1s forwards ease-out "
        two.style.animation = "rWtwo 1s forwards ease-out "
    })
    
    
    
    
    /* let Zero = document.getElementById("zero");


        
        Zero.addEventListener("click",()=>{
           
        Zero.style.animation = "zero 1s  ease-out forwards"
           
            
        }); */
    
    
    
    
 
 var Ground = document.getElementById("Second");
var crsr = document.getElementById("cursor");

Ground.addEventListener("mousemove", function(Move) {
    crsr.style.left = Move.x + "px";
    crsr.style.top = Move.y + "px";
});