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